export default function AboutMe() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold  text-gray-900 mb-6">About Me</h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          Hi, I’m <span className="font-semibold">Mahmudul Hasan</span>, a
          passionate{" "}
          <span className="font-semibold">Full‑Stack Web Developer</span> with
          hands‑on experience in building modern, scalable applications using
          <span className="font-semibold">
            {" "}
            Django, DRF, React, and TailwindCSS
          </span>
          . I enjoy turning ideas into real, functional products — from clean
          REST APIs to responsive and user‑friendly frontends.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          With over a decade of experience in graphics, data processing, and IT
          operations, I bring strong problem‑solving skills, client
          communication, and project execution abilities to every project I work
          on. I love learning new technologies, improving systems, and creating
          meaningful digital experiences.
        </p>
      </div>
    </section>
  );
}
