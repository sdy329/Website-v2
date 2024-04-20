import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function SocialsAdmin() {
    const supabase = createClient();
    const { data, error } = await supabase.from('socials').select('id, name')

    if (data.length < 8) {
        data.push({ id: 'new', name: 'New Social' });
    }

    return (
        <div className="animate-in flex flex-col justify-center gap-10 text-foreground">
            <h1 className="text-slate-200 font-semibold text-5xl sm:text-6xl tracking-tighter sm:tracking-tight mb-3 text-center">Socials</h1>
            {data.map((social) => (
                <Link key={social.id} href={{ pathname: 'socials/details', query: { id: social.id } }}>
                    <button className="bg-slate-200 rounded-md px-6 py-6 text-2xl w-full">
                        {social.name}
                    </button>
                </Link>
            ))}
        </div>
    )
}