function Contact() {
  return (
    <section className="page contact-page">
      <p className="eyebrow">Let's connect</p>
      <h1>Contact Me</h1>
      <p className="intro">
        Send me a message using this form and I will get back to you.
      </p>

      <form className="contact-form" action="https://formsubmit.co/Silasjames216@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message" required></textarea>
        <button type="submit">Send</button>
      </form>

      <p className="location">Based in Yola, Adamawa State, Nigeria.</p>
    </section>
  )
}

export default Contact
