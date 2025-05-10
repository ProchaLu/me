export default function TechStack() {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {[
          'JavaScript',
          'TypeScript',
          'React',
          'Next.js',
          'Node.js',
          'Express',
        ].map((tech) => (
          <span
            key={`tech-${tech}`}
            className="px-3 py-1 bg-gray-200 rounded-full text-sm font-semibold text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-600">
        I have experience with a variety of technologies, including JavaScript,
        TypeScript, React, Next.js, Node.js, and Express. I am always eager to
        learn new technologies and improve my skills.
      </p>
      <p className="text-sm text-gray-600">
        I am currently exploring the world of AI and machine learning, and I am
        excited about the possibilities it offers for the future of web
        development.
      </p>
      <p className="text-sm text-gray-600">
        I am also interested in cloud computing and DevOps practices, and I am
        working on improving my skills in these areas.
      </p>
      <p className="text-sm text-gray-600">
        I am always looking for opportunities to collaborate on interesting
        projects and learn from others in the tech community.
      </p>
      <p className="text-sm text-gray-600">
        If you have any questions or would like to connect, feel free to reach
        out!
      </p>
    </div>
  );
}
