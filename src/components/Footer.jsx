export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Md. Mahmudul Hasan</h3>
          <p className="text-sm text-gray-500">© {year} All rights reserved.</p>
        </div>

        {/* Center: Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#about" className="hover:text-yellow-500 transition">
            About Me
          </a>
          <a href="#experience" className="hover:text-yellow-500 transition">
            Experiences
          </a>
          <a href="#skills" className="hover:text-yellow-500 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-yellow-500 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-yellow-500 transition">
            Contact
          </a>
        </nav>

        {/* Right: Social + Email */}
        <div className="text-center md:text-right">
          <div className="flex justify-center md:justify-end gap-4 text-xl mt-2">
            <a
              href="mailto:mmahmudul7@gmail.com"
              aria-label="Email"
              className="hover:text-yellow-600"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>

            <a
              href="https://github.com/mmahmudul7"
              target="_blank"
              className="hover:text-yellow-600"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://linkedin.com/in/mmahmudul7"
              target="_blank"
              className="hover:text-yellow-600"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://www.facebook.com/mmahmudulh"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-600"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <div className="mt-8 text-center">
        <a
          href="#top"
          className="px-4 py-2 bg-gray-800 text-sm rounded-md hover:bg-gray-700 hover:text-yellow-500 transition"
        >
          <i className="fa-solid fa-arrow-up"></i> Back to top
        </a>
      </div>
    </footer>
  );
}
