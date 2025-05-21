function Contact() {
  return (
    <section id="contact" className="pt-24 px-4 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Me</h2>

      <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        I’m always open to exciting opportunities where I can contribute my skills and grow as a developer. 
        If you believe I could be a good fit for your team or project, feel free to reach out — I’d love to connect!
      </p>

      <div className="text-center text-gray-700 space-y-2">
        <p>
          <span className="font-semibold">Email:</span>{' '}
          <a
            href="mailto:kukkadapulohith@gmail.com"
            className="text-blue-600 hover:underline"
          >
            kukkadapulohith@gmail.com
          </a>
        </p>
        <p>
          <span className="font-semibold">Phone:</span> +1 331-294-9099
        </p>
        <p>
          <span className="font-semibold">LinkedIn:</span>{' '}
          <a
            href="https://www.linkedin.com/in/lohith-kukkadapu-454b571a6/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            Lohith Kukkadapu
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
