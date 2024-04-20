import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import BackButton from "@/components/BackButton";
import ProjectsAdmin from "@/components/ProjectsAdmin";
import '@/app/main.css';
import '@/app/personal.css';

export default async function Dashboard() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    return (
        <div className="flex items-center justify-center h-screen bg-slate-900 text-slate-500 font-medium font-sans selection:text-sky-400">
            <div className="w-full max-w-md">
                <BackButton />
                <ProjectsAdmin />
            </div>
        </div>
    );
}
