import {experiences} from "../data/experiences";

function getIcon(title) {
  if (title.includes("Graphics"))
    return "fa-solid fa-wand-magic-sparkles text-gray-900";
  if (title.includes("Instructor"))
    return "fa-solid fa-chalkboard-user text-orange-600";
  if (title.includes("Marketing"))
    return "fa-solid fa-chart-line text-blue-600";
  if (title.includes("B.Sc") || title.includes("University"))
    return "fa-solid fa-graduation-cap text-yellow-600";

  return "fa-solid fa-briefcase text-gray-600";
}

export default function Experiences() {
  return (
    <section id="experiences" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Experiences & Education
        </h2>

        {/* 2×2 Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="
                p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg 
                transition text-center text-yellow-600 relative overflow-hidden
              "
            >
              {/* Top Border Color */}
              <div
                className={
                  "absolute top-0 left-0 w-full h-1 " +
                  (exp.title.includes("B.Sc") ||
                  exp.title.includes("University")
                    ? "bg-yellow-500"
                    : exp.title.includes("Instructor")
                    ? "bg-orange-500"
                    : exp.title.includes("Marketing")
                    ? "bg-blue-500"
                    : "bg-gray-900")
                }
              ></div>

              {/* Icon */}
              <div className="mt-3 mb-4 flex justify-center">
                <i className={`${getIcon(exp.title)} text-3xl`}></i>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                {exp.title}
              </h3>

              <p className="text-gray-600 text-sm mt-1">{exp.company}</p>
              <p className="text-gray-400 text-xs mt-1">{exp.period}</p>

              <p className="mt-3 text-gray-700 text-sm">{exp.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
