export default function Terms() {
  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '60px 20px',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      lineHeight: '1.7',
      color: '#333',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ 
          fontSize: '42px', 
          fontWeight: '700', 
          color: '#1a1a1a',
          marginBottom: '10px'
        }}>
          Terms and Conditions
        </h1>
        <p style={{ fontSize: '20px', color: '#555' }}>
          Airhealth Application
        </p>
      </div>

      <div style={{ fontSize: '18px', maxWidth: '860px', margin: '0 auto' }}>
        <p>
          These Terms and Conditions apply to the Airhealth app (hereby referred to as 
          <strong>"the Application"</strong>) for mobile devices that was created by FCoders 
          (hereby referred to as the <strong>"Service Provider"</strong>) as a free service.
        </p>

        <h2 style={{ fontSize: '28px', margin: '50px 0 20px 0', color: '#1a1a1a' }}>
          Acceptance of Terms
        </h2>
        <p>
          Upon downloading or utilizing the Application, you are automatically agreeing to 
          the following terms. It is strongly advised that you thoroughly read and understand 
          these terms prior to using the Application.
        </p>

        <h2 style={{ fontSize: '28px', margin: '50px 0 20px 0', color: '#1a1a1a' }}>
          Intellectual Property
        </h2>
        <p>
          Unauthorized copying, modification of the Application, any part of the Application, 
          or our trademarks is strictly prohibited. Any attempts to extract the source code of 
          the Application, translate the Application into other languages, or create derivative 
          versions are not permitted. All trademarks, copyrights, database rights, and other 
          intellectual property rights related to the Application remain the property of the 
          Service Provider.
        </p>

        <h2 style={{ fontSize: '28px', margin: '50px 0 20px 0', color: '#1a1a1a' }}>
          Modifications and Charges
        </h2>
        <p>
          The Service Provider is dedicated to ensuring that the Application is as beneficial 
          and efficient as possible. As such, they reserve the right to modify the Application 
          or charge for their services at any time and for any reason. The Service Provider 
          assures you that any charges for the Application or its services will be clearly 
          communicated to you.
        </p>

        <h2 style={{ fontSize: '28px', margin: '50px 0 20px 0', color: '#1a1a1a' }}>
          Data Storage and Security
        </h2>
        <p>
          The Application stores and processes personal data that you have provided to the 
          Service Provider in order to provide the Service. It is your responsibility to 
          maintain the security of your phone and access to the Application.
        </p>
        <p>
          The Service Provider strongly advises against jailbreaking or rooting your phone, 
          which involves removing software restrictions and limitations imposed by the official 
          operating system of your device. Such actions could expose your phone to malware, 
          viruses, malicious programs, compromise your phone's security features, and may result 
          in the Application not functioning correctly or at all.
        </p>

        <h2 style={{ fontSize: '28px', margin: '50px 0 20px 0', color: '#1a1a1a' }}>
          Third-Party Services
        </h2>
        <p>
          Please note that the Application utilizes third-party services that have their own 
          Terms and Conditions. Below are the links to the Terms and Conditions of the 
          third-party service providers used by the Application:
        </p>
        <ul style={{ paddingLeft: '30px', margin: '20px 0' }}>
          <li>Google Play Services</li>
          {/* Add more links here later */}
        </ul>

        <h2 style={{ fontSize: '28px', margin: '50px 0 20px 0', color: '#1a1a1a' }}>
          Connectivity and Usage Responsibility
        </h2>
        <p>
          Some functions of the Application require an active internet connection, which can 
          be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be 
          held responsible if the Application does not function at full capacity due to lack 
          of access to Wi-Fi or if you have exhausted your data allowance.
        </p>
        <p>
          If you are using the Application outside of a Wi-Fi area, please be aware that your 
          mobile network provider's agreement terms will still apply. Consequently, you may 
          incur charges from your mobile provider for data usage during the connection to the 
          Application or other third-party charges. By using the Application, you accept 
          responsibility for any such charges, including roaming data charges if you use the 
          Application outside of your home territory (i.e., region or country) without disabling 
          data roaming.
        </p>
        <p>
          If you are not the bill payer for the device on which you are using the Application, 
          please assume that you have obtained permission from the bill payer.
        </p>

        <h2 style={{ fontSize: '28px', margin: '50px 0 20px 0', color: '#1a1a1a' }}>
          Accuracy and Liability
        </h2>
        <p>
          While the Service Provider strives to ensure that the Application is updated and 
          accurate at all times, they rely on third parties to provide information. The Service 
          Provider accepts no liability for any loss, direct or indirect, that you experience 
          as a result of relying entirely on this functionality of the Application.
        </p>
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '80px', 
        paddingTop: '30px', 
        borderTop: '1px solid #ddd',
        color: '#777',
        fontSize: '15px'
      }}>
        Last updated: May 2026
      </div>
    </div>
  );
}