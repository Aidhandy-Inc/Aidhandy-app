"use client";
import { useState, useEffect, Suspense } from "react";
import { supabase } from "@/libs/supabaseClient";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "@/components/common/Card";
import InputField from "@/components/common/InputField";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";

// Force dynamic rendering - disable static generation
export const dynamic = 'force-dynamic';

function LoginContent() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("traveller");
  const [type, setType] = useState("login");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [travellerFields, setTravellerFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const roleFromParams = searchParams.get("role");
    const typeFromParams = searchParams.get("type");

    if (roleFromParams) setRole(roleFromParams);
    if (typeFromParams) setType(typeFromParams);

    const checkAuthErrors = () => {
      const error = searchParams.get("error");
      const errorCode = searchParams.get("error_code");
      const errorDescription = searchParams.get("error_description");

      const hasQueryError =
        error === "access_denied" ||
        errorCode === "otp_expired" ||
        errorDescription?.includes("expired") ||
        errorDescription?.includes("invalid");

      let hasHashError = false;
      if (typeof window !== "undefined") {
        const hashParams = new URLSearchParams(
          window.location.hash.substring(1)
        );
        hasHashError =
          hashParams.get("error") === "access_denied" ||
          hashParams.get("error_code") === "otp_expired" ||
          hashParams.get("error_description")?.includes("expired");
      }

      if (hasQueryError || hasHashError) {
        setMessage("Your magic link has expired. Please request a new one.");
        const cleanUrl = window.location.pathname;
        window.history.replaceState(null, "", cleanUrl);
      }
    };

    const checkSession = async () => {
      checkAuthErrors();

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        const { data: profile } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (profile) router.push("/dashboard");
      }
      setCheckingSession(false);
    };

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        const { data: profile } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)