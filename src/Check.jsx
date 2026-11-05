function Check() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #080b16;
          color: white;
          font-family: Arial, sans-serif;
        }

        .main {
          min-height: 100vh;
          background: radial-gradient(circle at top right, #30205b, #080b16 55%);
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 8%;
          border-bottom: 1px solid #29263c;
        }

        .logo {
          font-size: 28px;
          font-weight: 900;
          color: white;
        }

        .logo span {
          color: #a78bfa;
        }

        .links {
          display: flex;
          gap: 30px;
        }

        .links a {
          color: #ddd;
          text-decoration: none;
          transition: .3s;
        }

        .links a:hover {
          color: #a78bfa;
        }

        .hero {
          min-height: 570px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 70px 10%;
          gap: 30px;
        }

        .hero-content {
          max-width: 600px;
        }

        .small {
          color: #a78bfa;
          letter-spacing: 4px;
          font-size: 13px;
        }

        .hero h1 {
          font-size: 65px;
          line-height: 1.1;
          margin: 25px 0;
        }

        .hero h1 span {
          color: #a78bfa;
        }

        .hero p {
          color: #bbb;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .btn {
          display: inline-block;
          background: #a78bfa;
          color: #080b16;
          padding: 15px 25px;
          border-radius: 7px;
          text-decoration: none;
          font-weight: bold;
        }

        .circle {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a78bfa, #39215d);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 90px;
          font-weight: 900;
          box-shadow: 0 0 70px #a78bfa55;
          animation: float 3s infinite ease-in-out;
        }

        @keyframes float {
          50% { transform: translateY(-15px); }
        }

        .services {
          padding: 90px 8%;
          text-align: center;
          background: #0d1120;
        }

        .services h2 {
          font-size: 40px;
          margin: 15px 0 40px;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .card {
          background: #171c2e;
          border: 1px solid #30354b;
          border-radius: 12px;
          padding: 35px 20px;
          transition: .3s;
        }

        .card:hover {
          transform: translateY(-10px);
          border-color: #a78bfa;
        }

        .card h3 {
          margin: 18px 0;
        }

        .card p {
          color: #aaa;
          line-height: 1.7;
          font-size: 14px;
        }

        .icon {
          font-size: 40px;
        }

        .about {
          padding: 100px 10%;
          text-align: center;
        }

        .about h2 {
          font-size: 40px;
          margin-bottom: 20px;
        }

        .about p {
          color: #bbb;
          line-height: 1.9;
          max-width: 700px;
          margin: auto;
        }

        .contact {
          padding: 80px 20px;
          text-align: center;
          background: #17152b;
        }

        .contact h2 {
          font-size: 40px;
          margin-bottom: 20px;
        }

        .contact p {
          color: #bbb;
          margin-bottom: 30px;
        }

        footer {
          padding: 30px;
          text-align: center;
          color: #aaa;
          border-top: 1px solid #29263c;
        }

        @media (max-width: 850px) {
          .hero {
            flex-direction: column;
            text-align: center;
          }

          .cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero h1 {
            font-size: 45px;
          }

          .links {
            display: none;
          }
        }

        @media (max-width: 500px) {
          .cards {
            grid-template-columns: 1fr;
          }

          .circle {
            width: 210px;
            height: 210px;
            font-size: 65px;
          }

          .services h2, .about h2, .contact h2 {
            font-size: 30px;
          }
        }
      `}</style>

      <div className="main">

        <nav className="navbar">
          <div className="logo">AB <span>EDITZ.</span></div>

          <div className="links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="btn">Let's Talk</a>
        </nav>

        <section className="hero" id="home">
          <div className="hero-content">
            <span className="small">WELCOME TO AB EDITZ</span>

            <h1>
              CREATIVE
              <br />
              <span>DIGITAL</span>
              <br />
              STUDIO.
            </h1>

            <p>
              We create professional videos, stunning graphics
              and amazing digital experiences. Turn your ideas
              into reality with AB Editz.
            </p>

            <a href="#services" className="btn">
              Explore Services →
            </a>
          </div>

          <div className="circle">AB</div>
        </section>

        <section className="services" id="services">
          <span className="small">WHAT WE OFFER</span>
          <h2>Our Services</h2>

          <div className="cards">
            <div className="card">
              <div className="icon">🎬</div>
              <h3>Video Editing</h3>
              <p>Professional video editing for social media and YouTube.</p>
            </div>

            <div className="card">
              <div className="icon">🕌</div>
              <h3>Islamic Videos</h3>
              <p>Beautiful Islamic videos, naats and Quran content.</p>
            </div>

            <div className="card">
              <div className="icon">🎨</div>
              <h3>Graphic Design</h3>
              <p>Creative thumbnails, posters and graphic designs.</p>
            </div>

            <div className="card">
              <div className="icon">✨</div>
              <h3>Motion Graphics</h3>
              <p>Modern animations and professional logo reveals.</p>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <span className="small">WHO WE ARE</span>
          <h2>About AB Editz</h2>
          <p>
            AB Editz is a creative digital studio dedicated to
            video editing, graphic designing and visual storytelling.
            Our mission is to transform creative ideas into
            professional digital content.
          </p>
        </section>

        <section className="contact" id="contact">
          <span className="small">GET IN TOUCH</span>
          <h2>Let's Create Something Amazing!</h2>
          <p>Have a project? Let's work together.</p>

          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abeditx32@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
>
  Contact Us →
</a>
        </section>

        <footer>
          © 2026 AB Editz. All Rights Reserved.
        </footer>

      </div>
    </>
  );
}

export default Check;