export default function ProjectCard({project}) {
  return (
    <div className="p-6 bg-white border border-yellow-600 rounded-xl shadow-sm hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech?.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-yellow-50 px-2 py-1 rounded border border-yellow-500 text-gray-700"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Summary */}
      <ul className="mt-4 list-disc list-inside text-gray-700 text-sm space-y-1">
        {project.summary?.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      {/* LINKS */}
      <div className="mt-5 flex flex-wrap gap-3">
        {/* Client Live */}
        {project.clientLive && (
          <a
            href={project.clientLive}
            target="_blank"
            className="px-4 py-2 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700 transition"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Site
          </a>
        )}

        {/* Client Repo */}
        {project.clientRepo && (
          <a
            href={project.clientRepo}
            target="_blank"
            className="px-4 py-2 border border-yellow-600 text-yellow-900 text-sm rounded-lg hover:bg-yellow-50 transition"
          >
            <i className="fa-brands fa-github"></i> Client Repo
          </a>
        )}

        {/* Backend Swagger */}
        {project.backendSwagger && (
          <a
            href={project.backendSwagger}
            target="_blank"
            className="px-4 py-2 bg-yellow-600 border border-yellow-700 text-white text-sm rounded-lg hover:bg-yellow-700 transition"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i> API Docs
          </a>
        )}

        {/* Backend Repo */}
        {project.backendRepo && (
          <a
            href={project.backendRepo}
            target="_blank"
            className="px-4 py-2 border border-yellow-600 text-yellow-900 text-sm rounded-lg hover:bg-yellow-50 transition"
          >
            <i className="fa-brands fa-github"></i> Backend Repo
          </a>
        )}
      </div>
    </div>
  );
}
