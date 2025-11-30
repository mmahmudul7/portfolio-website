import {skills} from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

        {/* Grid Container */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-yellow-500 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-yellow-50 border border-yellow-500 rounded-lg text-gray-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
