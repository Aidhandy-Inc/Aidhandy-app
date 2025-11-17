export const metadata = {
  title: "Privacy Policy | AidHandy",
  description: "AidHandy Privacy Policy detailing how data is collected, used, and protected."
};

export default function PrivacyPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "750px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Privacy Policy</h1>
      <p>Last Updated: {new Date().getFullYear()}</p>

      <p>
        AidHandy Inc. (“AidHandy”, “we”, “our”, or “us”) is committed to protecting your privacy. 
        This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform, 
        services, and website.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect information to operate our service effectively and provide you with the best experience.</p>

      <h3>a. Information You Provide</h3>
      <ul>
        <li>Email address (required for account login and communication)</li>
        <li>Name and profile information (optional)</li>
        <li>Service-related preferences (traveler or companion role)</li>
      </ul>

      <h3>b. Automatically Collected Information</h3>
      <ul>
        <li>Device information (browser type, OS)</li>
        <li>IP address</li>
        <li>Usage data for analytics and security</li>
      </ul>

      <h3>c. Cookies & Tracking</h3>
      <p>
        We use functional cookies to maintain session state. We do not use marketing or third-party advertising cookies.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Authenticate user accounts (via Supabase OTP login)</li>
        <li>Communicate with you regarding bookings or support</li>
        <li>Improve platform functionality and user experience</li>
        <li>Ensure platform safety and prevent misuse</li>
      </ul>

      <h2>3. How We Share Information</h2>
      <p>We do <strong>not</strong> sell or rent your personal information.</p>
      <p>We may share limited information with:</p>
      <ul>
        <li>Supabase (for user authentication & secure storage)</li>
        <li>Stripe (for payments, if applicable)</li>
        <li>Service providers acting on our behalf (email, hosting)</li>
        <li>Authorities if required by law or safety concerns</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We use industry-standard security practices including encryption, role-based access, and secure authentication 
        to protect your information.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain your information only as long as necessary to provide the service or comply with legal requirements.
      </p>

      <h2>6. Your Rights</h2>
      <ul>
        <li>Access your data</li>
        <li>Update or correct information</li>
        <li>Request deletion of your account</li>
        <li>Opt out of optional communications</li>
      </ul>

      <h2>7. Children's Privacy</h2>
      <p>
        AidHandy is not intended for children under 13. We do not knowingly collect data from minors.
      </p>

      <h2>8. International Users</h2>
      <p>
        Our service is operated from the United States. If you access AidHandy from outside the U.S., 
        you consent to the transfer of your information to the U.S.
      </p>

      <h2>9. Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Continued use of the platform indicates acceptance.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have questions or requests related to your privacy, contact us at:<br />
        <strong>support@aidhandy.com</strong>
      </p>
    </div>
  );
}
