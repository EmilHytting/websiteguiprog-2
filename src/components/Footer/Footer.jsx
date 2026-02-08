export default function Footer({ mail, phoneNumber, address }) {
  return (
    <footer className="footer">
      <h3>Kontakt Information</h3>
      <ul>
        <li><strong>Email:</strong> {mail}</li>
        <li><strong>Telefon:</strong> {phoneNumber}</li>
        <li><strong>Adresse:</strong> {address}</li>
      </ul>
    </footer>
  );
}