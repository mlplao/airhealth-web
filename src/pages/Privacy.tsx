export default function Privacy() {
  const appName = "AirHealth";
  const contactEmail = "mlplao.student@ua.edu.ph"; // Replace with your actual email

  return (
    <div style={{ padding: '2rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: February 20, 2026</p>
      
      <p>
        This Privacy Policy describes how <strong>{appName}</strong> ("we", "our", or "the App") 
        handles your information. This app is developed as a student project for academic purposes.
      </p>

      <section>
        <h2>1. Information We Collect</h2>
        <p>
          <strong>Location Data:</strong> To provide accurate local air quality information, the App may request access 
          to your device's precise or approximate location. This data is used solely to fetch data from air quality APIs 
          and is not stored on our servers.
        </p>
        <p>
          <strong>Personal Information:</strong> We do not require users to create an account, and we do not collect 
          personal identifiers such as names, phone numbers, or home addresses.
        </p>
      </section>

      <section>
        <h2>2. Use of Information</h2>
        <p>The information accessed is used only to:</p>
        <ul>
          <li>Provide real-time air quality index (AQI) data based on your location.</li>
          <li>Improve the user experience of the student project.</li>
        </ul>
      </section>

      <section>
        <h2>3. Third-Party Services</h2>
        <p>
          The App may use third-party APIs (such as OpenWeather or IQAir) to retrieve environmental data. 
          These services may receive your location data to fulfill the data request. We encourage you to 
          review their respective privacy policies.
        </p>
      </section>

      <section>
        <h2>4. Data Retention</h2>
        <p>
          We do not store your location history or personal data on any external database. 
          Any data processed is handled locally on your device and cleared when the app is closed.
        </p>
      </section>

      <section>
        <h2>5. Children's Privacy</h2>
        <p>
          This App does not knowingly collect any personally identifiable information from children. 
          If you are a parent or guardian and you are aware that your child has provided us with personal data, 
          please contact us.
        </p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or this student project, 
          you can contact us at: <br />
          <strong>Email:</strong> {contactEmail}
        </p>
      </section>
    </div>
  );
}