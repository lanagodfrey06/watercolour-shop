import React from "react";

function Contact() {
  const [sent, setSent] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <main className="contact-page">
      <section className="contact-intro">
        <p className="eyebrow">SAY HELLO</p>
        <h1>Let’s keep in touch.</h1>
        <p>
          Have a question about a piece, a special place in mind, or simply
          want to say hello? I’d love to hear from you.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-details">
          <p className="eyebrow">CONTACT DETAILS</p>
          <h2>Bring your idea to life.</h2>
          <p>
            For artwork enquiries, commissions, or questions about your order,
            send a message and I’ll get back to you as soon as I can.
          </p>

          <a href="mailto:hello@tracygodfreyart.com" className="contact-link">
            hello@tracygodfreyart.com
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            Instagram
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your name
            <input type="text" name="name" required />
          </label>

          <label>
            Email address
            <input type="email" name="email" required />
          </label>

          <label>
            Your message
            <textarea name="message" rows="6" required />
          </label>

          <button type="submit" className="button">Send message</button>

          {sent && (
            <p className="form-success" role="status">
              Thank you — your message has been received.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

export default Contact;
