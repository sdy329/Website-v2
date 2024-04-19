import projectArray from "@/components/ProjectArray"

export default function Projects() {
    const projectsArray = projectArray();

    return (
        <section id="projects" className="lg:mb-20 mb-10">
            <div className="sticky top-0 z-20 -mx-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:text-xl">Projects</h2>
            </div>
            <div>
                <ul>
                    {projectsArray.map((project) => (
                        <li className="mb-10" key={project.id}>
                            <a href={project.link} target="_blank">
                                <div className="flex relative h-60">
                                    <picture>
                                        <source media="(min-width: 768px)" srcSet={project.banner} />
                                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center opacity-95 transition-all motion-reduce:transition-none" src={project.square} />
                                    </picture>
                                    <div className="px-4 py-2 min-[375px]:py-4 sm:px-8 sm:py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-95 lg:opacity-0 hover:opacity-95 transition-all motion-reduce:transition-none">
                                        <h2 className="tracking-wide text-sm title-font font-medium text-cyan-600 mb-1">
                                            {project.languages}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-slate-200 mb-3">
                                            {project.title}
                                        </h1>
                                        <p className="leading-relaxed text-slate-400">{project.description}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <a href="https://github.com/sdy329?tab=repositories" target="_blank">
                    <h2 className="text-sm uppercase tracking-widest text-slate-200 transition-all hover:font-bold">View All Projects ➔</h2>
                </a>
            </div>
        </section>
    )
}