import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function ProjectsAdmin() {
    const supabase = createClient();
    const { data, error } = await supabase.from('projects').select('id, name')

    if (data.length < 5) {
        data.push({ id: 'new', name: 'New Project' });
    }

    return (
        <div className="animate-in flex flex-col justify-center gap-10 text-foreground">
            <h1 className="text-slate-200 font-semibold text-5xl sm:text-6xl tracking-tighter sm:tracking-tight mb-3 text-center">Projects</h1>
            {data.map((project) => (
                <Link key={project.id} href={{ pathname: 'projects/details', query: { id: project.id } }}>
                    <button className="bg-slate-200 rounded-md px-6 py-6 text-2xl w-full">
                        {project.name}
                    </button>
                </Link>
            ))}
        </div>
    )
}