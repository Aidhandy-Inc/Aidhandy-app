import MagicLinkHandler from "@/components/MagicLinkHandler";
import DashboardClient from "./components/DashboardClient";
import { getUserAndProfile } from "@/libs/getUserData";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function Page(props) {
  const searchParams = await props.searchParams;
  const role = searchParams?.role || null;
  const firstName = searchParams?.firstName || null;
  const lastName = searchParams?.lastName || null;
  const email = searchParams?.email || null;

  const cookieStore = await cookies();

  // Detect magic link params
  const hasMagicLinkParams =
    searchParams?.code ||
    searchParams?.access_token ||
    searchParams?.token_hash;

  if (hasMagicLinkParams) {
    return <MagicLinkHandler />;
  }

  // Create Supabase client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  // Fetch user & profile
  const { user, profile: existingProfile } = await getUserAndProfile();

  // Public visitor (no role, no magic link, no user)
  if (!role && !searchParams?.value && !user) {
    return <DashboardClient user={null} profile={null} role={null} />;
  }

  // Handle onboarding flows
  if (role) {
    let profile = existingProfile;

    // Create profile if it doesn't exist
    if (!profile && role) {
      const { data: newProfile, error: insertError } = await supabase
        .from("users")
        .insert([
          {
            id: user?.id,
            email: user?.email,
            role,
            status:
              role === "companion"
                ? "pending"
                : role === "traveller"
                ? "pending"
                : "active",
          },
        ])
        .select()
        .single();

      if (insertError) {
        console.error("Error inserting user:", insertError);
      } else {
        profile = newProfile;
      }
    }

    // Traveller onboarding: create traveller row
    if (profile?.role === "traveller" && firstName && lastName && email) {
      const { data: existingTraveller } = await supabase
        .from("travellers")
        .select("id")
        .eq("user_id", user.id)
        .single();

      if (!existingTraveller) {
        const { error: travellerInsertError } = await supabase
          .from("travellers")
          .insert([
            {
              user_id: user.id,
              first_name: firstName,
              last_name: lastName,
            },
          ]);

        if (travellerInsertError) {
          console.error("Error inserting traveller:", travellerInsertError);
        } else {
          const {
            data: { session },
          } = await supabase.auth.getSession();

          await supabase.functions.invoke("send-traveller-verification-email", {
            body: { user_id: user.id, email: user.email },
            headers: {
              Authorization: `Bearer ${session.access_token}`,
            },
          });
        }
      }
    }

    // FIXED VERSION (broken before)
    if (profile?.status === "pending" && role === "traveller") {
      return (
        <div className="h-screen flex flex-col items-center justify-center">
          <p>Please verify your email first and then refresh the page.</p>
        </div>
      );
    }

    // Default: authenticated dashboard
    return <DashboardClient user={user} profile={profile} role={role} />;
  }

  // Fallback (public or logged-in returning users)
  return <DashboardClient user={user} profile={existingProfile} role={role} />;
}
