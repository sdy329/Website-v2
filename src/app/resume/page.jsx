import { createClient } from "@/utils/supabase/server";
import Resume from "@/components/Resume";
import ResumeNavBar from "@/components/ResumeNavBar";
import '@/app/main.css';
import '@/app/personal.css';

export default async function ResumePage() {
    const supabase = createClient();
    const { data: resume } = await supabase.storage.from('personal-files').getPublicUrl('SYates-Resume.pdf');

    return (
        <div className="bg-slate-900 text-slate-500 font-medium font-sans selection:text-sky-400">
            <div className="mx-auto min-h-screen font-sans">
                <ResumeNavBar link={resume.publicUrl} />
                <Resume link={resume.publicUrl} />
            </div>
        </div>
    );
}