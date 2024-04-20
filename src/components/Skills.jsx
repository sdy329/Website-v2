import { createClient } from "@/utils/supabase/server";

export default async function Skills() {
    const supabase = createClient();
    const { data: skills, error } = await supabase
        .from('skills')
        .select()
        .order('id', { ascending: true });

    if (error) {
        return { error };
    }

    return (
        <section id="skills" className="lg:mb-20 mb-10">
            <div className="sticky top-0 z-20 -mx-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:text-xl">Skills</h2>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-wrap sm:mx-auto sm:mb-2">
                    {skills.map((skill) => (
                        <div key={skill.id} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-cyan-600 h-10 w-10 mr-4" viewBox="0 0 500 500">
                                    <path d={skill.svg} />
                                </svg>
                                <span className="title-font font-medium text-white">
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <a href="./SYates-Resume-2024.pdf">
                    <h2 className="text-sm uppercase tracking-widest text-slate-200 transition-all hover:font-bold">View Resume ➔</h2>
                </a>
            </div>
        </section>
    )
}