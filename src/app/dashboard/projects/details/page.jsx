import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import BackButton from "@/components/BackButton";
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
        <div className="bg-slate-900 text-slate-500 font-medium font-sans selection:text-sky-400">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <BackButton />
                <div className="lg:flex lg:justify-between lg:gap-5">
                    <div id="content" className="pt-4 lg:pt-auto lg:w-1/2 lg:py-24">

                    </div>
                    <div id="content" className="pt-4 lg:pt-auto lg:w-1/2 lg:py-24">

                        Div 2
                    </div>
                </div>
            </div>
        </div>
    );
}
