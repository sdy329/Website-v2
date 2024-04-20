import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function SkillsAdmin() {
    const supabase = createClient();
    const { data, error } = await supabase.from('skills').select('id, name')

    if (data.length < 10) {
        data.push({ id: 'new', name: 'New Skill' });
    }

    return (
        <div className="animate-in flex flex-col justify-center gap-10 text-foreground">
            <h1 className="text-slate-200 font-semibold text-5xl sm:text-6xl tracking-tighter sm:tracking-tight mb-3 text-center">Skills</h1>
            <div className="grid grid-cols-2 gap-6">
                {data.map((skill) => (
                    <Link key={skill.id} href={{ pathname: 'skills/details', query: { id: skill.id } }}>
                        <button className="bg-slate-200 rounded-md px-6 py-6 text-2xl w-full">
                            {skill.name}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}