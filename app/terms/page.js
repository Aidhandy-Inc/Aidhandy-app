export const metadata = {
  title: "Terms of Service | AidHandy",
  description: "AidHandy Terms of Service outlining user responsibilities and platform rules."
};

export default function TermsPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "750px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Terms of Service</h1>
      <p>Last Updated: {new Date().getFullYear()}</p>

      <p>
        Welcome to AidHandy Inc. (“AidHandy”, “we”, “our”, or “us”). These Terms of Service 
        (“Terms”) govern your use of our website, platform, and services. By accessing or 
        using AidHandy, you agree to be bound by these Terms.
      </p>

      <h2>1. Use of the Service</h2>
      <ul>
        <li>You must be at least 18 years old to use AidHandy.</li>
        <li>You agree to provide accurate information during registration.</li>
        <li>You may not use the platform for illegal, unsafe, or fraudulent activities.</li>
      </ul>

      <h2>2. User Accounts</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account. 
        AidHandy may suspend or terminate accounts that violate our policies.
      </p>

      <h2>3. Role Definitions</h2>
      <h3>a. Travelers</h3>
      <p>Users requesting navigation or inflight assistance.</p>

      <h3>b. Companions</h3>
      <p>
        Users offering support services. Companions are not employees of AidHandy; 
        they participate as independent providers.
      </p>

      <h3>c. Admins</h3>
      <p>Internal personnel managing platform operations.</p>

      <h2>4. Payments & Fees</h2>
      <p>
        Payments, when applicable, are processed by accredited third-party payment 
        providers. AidHandy does not store payment card details.
      </p>

      <h2>5. User Responsibilities</h2>
      <ul>
        <li>Provide truthful, lawful information.</li>
        <li>Respect the safety of companions and travelers.</li>
        <li>Follow airport and airline regulations.</li>
      </ul>

      <h2>6. Prohibited Activities</h2>
      <ul>
        <li>Harassment, discrimination, or abusive behavior</li>
        <li>Providing medical services (AidHandy is non-medical)</li>
        <li>Sharing login credentials</li>
        <li>Attempting to bypass system security</li>
      </ul>

      <h2>7. Disclaimer of Liability</h2>
      <p>
        AidHandy provides a matching platform between travelers and companions. 
        We do not guarantee the actions or performance of individual users.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        AidHandy is not liable for indirect, incidental, or consequential damages, 
        including delays, cancellations, or provider issues.
      </p>

      <h2>9. Termination</h2>
      <p>
        We may suspend or terminate your access for violations of these Terms.
      </p>

      <h2>10. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continuing to use the platform 
        means you accept the updated Terms.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Delaware, United States.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        For any questions related to these Terms, contact:<br />
        <strong>support@aidhandy.com</strong>
      </p>
    </div>
  );
}
