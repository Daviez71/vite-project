import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  // idle | sending | success | error

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_ewa5vem",
        "template_360y3dr",
        formData,
        "yso0lAmV6VK8EsAns",
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  }
  return (
    <section id="contact" className="bg-gray-900 py-24">
      <div className="mx-auto max-w-xl px-6">
        <h2 className="text-3xl font-bold text-white text-center">Let's work together</h2>
        <p className="mt-4 text-lg text-gray-300 text-center">
          I'm currently open to new projects and opportunities. Feel free to
          reach out.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            rows={5}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="text-center text-sm text-green-400">
              Message sent. I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm text-red-400">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
        <div className="mt-8 flex justify-center gap-6 text-sm font-medium text-gray-300">
          <a
            href="https://github.com/Daviez71"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/davie_z24/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
