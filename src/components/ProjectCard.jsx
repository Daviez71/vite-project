function ProjectCard({ image, title, description, stack, liveUrl, codeUrl }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <img
        src={image}
        alt={`Screenshot of ${title}`}
        className="h56 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-4 text-sm font-semibold">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Live site ↗
          </a>

          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            Code ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
