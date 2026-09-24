
function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white">Let's work together</h2>
        <p className="mt-4 text-lg text-gray-300">
          I'm currently open to new projects and opportunities. Feel free to
          reach out.
        </p>
        <a
          href="mailto:agbebidavid538@gmail.com"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Email me
        </a>

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