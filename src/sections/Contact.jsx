import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_099bcoo",
        "template_fh6rclj",
        form.current,
        "BKGbiF-HEKV3iXFTN",
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        form.current.reset();
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <p className="contact-subtitle">
          Have a project in mind or want to work together? Send me a message!
        </p>
        {sent ? (
          <div className="success-message">
            ✅ Message sent! I'll get back to you soon.
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="your Name"
              placeholder="your email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;
