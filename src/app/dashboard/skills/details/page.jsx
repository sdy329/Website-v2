import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import BackButton from "@/components/BackButton";
import { SubmitButton } from "./submit-button";
import '@/app/main.css';
import '@/app/personal.css';

export default async function SkillsDetails({ searchParams: params }) {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    var name = '';
    var svg = '';


    if (params.id === 'new') {
    } else {
        const { data, error } = await supabase
            .from('skills')
            .select()
            .eq('id', params.id)
            .single();

        if (!data) {
            return redirect(".");
        }

        name = data.name;
        svg = data.svg;
    }

    const editSkill = async (formData) => {
        "use server";

        const supabase = createClient();

        const { error } = await supabase.from('skills').update({ name: formData.get('name'), svg: formData.get('svg') }).eq('id', params.id);

        if (error) {
            return redirect("./details?message=Could not edit skill");
        }

        return redirect(".");
    };

    const createSkill = async (formData) => {
        "use server";

        const supabase = createClient();

        const { error } = await supabase.from('skills').insert([{ name: formData.get('name'), svg: formData.get('svg') }]);

        if (error) {
            return redirect("./details?message=Could not create skill");
        }

        return redirect(".");
    };

    const deleteSkill = async (formData) => {
        "use server";

        const supabase = createClient();

        const { error } = await supabase.from('skills').delete().eq('id', params.id);

        if (error) {
            return redirect("./details?message=Could not create skill");
        }

        return redirect(".");
    };

    var formSubmit = editSkill;
    var buttonText = 'Edit Skill';
    var buttonPendingText = 'Updating...';


    if (params.id === 'new') {
        formSubmit = createSkill;
        buttonText = 'Create Skill';
        buttonPendingText = 'Creating...';
    }

    return (
        <div className="bg-slate-900 text-slate-500 font-medium font-sans selection:text-sky-400">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <BackButton />
                <div className="lg:flex lg:justify-between lg:gap-5">
                    <div id="content" className="pt-4 lg:pt-auto lg:w-1/2 lg:py-24">
                        <form className="animate-in flex flex-col justify-center gap-2 text-foreground">
                            <label className="text-md" htmlFor="name">
                                Skill Name
                            </label>
                            <input
                                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                                name="name"
                                placeholder="Name"
                                defaultValue={name}
                                required
                            />
                            <label className="text-md" htmlFor="svg">
                                SVG Path
                            </label>
                            <textarea
                                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                                name="svg"
                                placeholder="SVG"
                                defaultValue={svg}
                                rows="4"
                                required
                            />
                            <SubmitButton
                                formAction={formSubmit}
                                className="bg-slate-200 rounded-md px-4 py-4 text-slate-600 text-lg mb-6"
                                pendingText={buttonPendingText}
                            >
                                {buttonText}
                            </SubmitButton>
                            {params.id !== 'new' && (
                                <SubmitButton
                                    formAction={deleteSkill}
                                    className="bg-slate-200 rounded-md px-4 py-4 text-slate-600 text-lg mb-2"
                                    pendingText="Deleting..."
                                >
                                    Delete Skill
                                </SubmitButton>
                            )}
                            {params?.message && (
                                <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                                    {params.message}
                                </p>
                            )}
                        </form>
                    </div>
                    <div id="content" className="pt-4 lg:pt-auto lg:w-1/2 lg:py-24 flex flex-col justify-center">
                        <h1 className="text-slate-200 font-semibold text-5xl sm:text-6xl tracking-tighter sm:tracking-tight mb-3 text-center">Example</h1>
                        <div className="w-full flex justify-center">
                            <div className="p-2 w-1/2">
                                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-cyan-600 h-10 w-10 mr-4" viewBox="0 0 500 500">
                                        <path d={svg} />
                                    </svg>
                                    <span className="title-font font-medium text-white">
                                        {name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
