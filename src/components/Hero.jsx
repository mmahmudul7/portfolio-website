import profilePic from "../assets/Mahmud.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-10 px-6 md:px-20 bg-gray-50"
    >
      {/* Left Side Text */}
      <div className="text-center md:text-left">
        <p className="font-bold text-gray-800">Hi, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-yellow-600">Md. Mahmudul Hasan</span>
        </h1>

        <p className="text-xl text-gray-700 font-bold mt-2">
          Full-Stack Web Developer (Django + React)
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <a
            href="/Mahmud_Full_Stack_Django_React_Developer_CV.pdf"
            download
            className="px-6 py-3 bg-yellow-600 text-gray-50 font-medium rounded-lg shadow hover:bg-yellow-700 transition"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border font-medium border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-50 transition"
          >
            Let’s Talk
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6 justify-center md:justify-start text-3xl">
          <a
            href="https://www.linkedin.com/in/mmahmudul7"
            target="_blank"
            className="text-gray-900 hover:text-yellow-600"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/mmahmudul7"
            target="_blank"
            className=" text-gray-900 hover:text-yellow-600"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>

      {/* Right Side Photo */}
      <div>
        <img
          src={profilePic}
          alt="profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-yellow-600"
        />
      </div>
    </section>
  );
}
