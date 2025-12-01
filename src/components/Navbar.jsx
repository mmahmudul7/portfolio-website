import React, {useState} from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {name: "Home", href: "#home"},
    {name: "About Me", href: "#about"},
    {name: "Experiences", href: "#experiences"},
    {name: "Projects", href: "#projects"},
    {name: "Skills", href: "#skills"},
    {name: "Contact", href: "#contact"},
  ];

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-yellow-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Name */}
          <a
            href="#home"
            className="text-lg sm:text-xl font-semibold text-yellow-600 hover:text-yellow-700 transition"
          >
            Md. Mahmudul Hasan
          </a>

          {/* Right: Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-xl font-medium text-gray-900 hover:text-yellow-700 transition"
              >
                {l.name}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-2 px-4 py-1.5 text-l font-semibold rounded-md bg-yellow-400 text-gray-900 shadow hover:bg-yellow-500 hover:shadow-md transition"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile: Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-gray-900 hover:text-yellow-600"
              >
                {l.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 mt-1 rounded-md bg-yellow-400 font-semibold text-gray-900 hover:bg-yellow-500"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
