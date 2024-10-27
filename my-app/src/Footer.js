function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <h2 className="footer-title">ABOUT</h2>
          <ul className="footer-links">
            <li> Link </li>
            <li> Second link </li>
          </ul>
          <h2 className="footer-title">MORE INFORMATION</h2>
          <ul className="footer-links">
            <li> Third link </li>
            <li> Fourth link </li>
          </ul>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer;