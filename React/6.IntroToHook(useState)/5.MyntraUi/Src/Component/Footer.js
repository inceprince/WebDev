function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <h4>ONLINE SHOPPING</h4>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Home & Living</p>
        <p>Beauty</p>
        <p>Gift Cards</p>
      </div>

      <div className="footer-section">
        <h4>USEFUL LINKS</h4>
        <p>Contact Us</p>
        <p>FAQ</p>
        <p>T&C</p>
        <p>Terms Of Use</p>
        <p>Track Orders</p>
        <p>Shipping</p>
      </div>

      <div className="footer-section">
        <h4>EXPERIENCE MYNTRA APP</h4>
        <img
          className="store-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
          alt="Google Play"
        />
        <img
          className="store-logo"
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
        />
      </div>

      <div className="footer-section">
        <h4>KEEP IN TOUCH</h4>
        <div className="social-icons">
          <span>📘</span>
          <span>🐦</span>
          <span>📷</span>
          <span>▶️</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;