function Hero() {
  return (
    <section id="home" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <p className="text-sm font-medium text-blue-600">Hi, I'm Daviez</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Frontend Developer Building Fast, Responsive Websites & Web Apps
      </h1>
      <p className="mt-6 max-w-2xl text-;g text-gray-600">
        I create clean, modern and responsive user interfaces using React and
        Tailwind CSS. I focus on building websites that look great, load fast
        and provide a smooth user experience.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
            View my Work
        </a>

        <a
          href="#contact"
          className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50"
        >
            Contact me
        </a>
      </div>
    </section>
  );
}

export default Hero;
