const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git"];

function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
        <p className="mt-3 max-w-2xl text-gray-600">
          Tools and technologies I work with regularly.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-center font-medium text-gray-800"
            >
                {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
