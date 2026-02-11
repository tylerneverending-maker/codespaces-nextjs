import Link from 'next/link'

export default function Home() {
  return (
    <main className="main-wrapper">
      <header className="header">
        <div className="container nav-container">
          <h1 className="logo">blueTrestle <span className="highlight">Creative</span></h1>
          <nav className="nav">
            <Link href="#services">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#contact" className="nav-cta">Get in Touch</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <h2>Building Digital Bridges for Your Business</h2>
          <p>We craft stunning websites and robust applications that connect you with your audience.</p>
          <Link href="#contact" className="btn btn-primary">Start Your Project</Link>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h3>Our Expertise</h3>
            <p>Comprehensive solutions for the modern web.</p>
          </div>
          <div className="grid">
            <div className="card">
              <h4>Web Design</h4>
              <p>User-centric designs that look great on every device and convert visitors into customers.</p>
            </div>
            <div className="card">
              <h4>Development</h4>
              <p>Scalable, secure, and high-performance code using the latest technologies like Next.js.</p>
            </div>
            <div className="card">
              <h4>Digital Strategy</h4>
              <p>Data-driven insights to help your brand grow and thrive in the digital landscape.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h3>Get In Touch</h3>
            <p>Ready to start your project? Contact us today.</p>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} blueTrestle Creative. All rights reserved.</p>
      </footer>
    </main>
  )
}