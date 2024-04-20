import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import BackButton from "@/components/BackButton";
import { SubmitButton } from "./submit-button";
import '@/app/main.css';
import '@/app/personal.css';

export default async function ProjectDetails({ searchParams: params }) {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    var name = '';
    var description = '';
    var languages = '';
    var link = '';


    if (params.id === 'new') {
    } else {
        const { data, error } = await supabase
            .from('projects')
            .select()
            .eq('id', params.id)
            .single();

        const { bannerImg, error2 } = await supabase.storage.from('banners').download(data.banner);
        const { squareImg, error3 } = await supabase.storage.from('squares').download(data.square);

        if (!data) {
            return redirect(".");
        }

        name = data.name;
        description = data.description;
        languages = data.languages;
        link = data.link;
    }

    const editProject = async (formData) => {
        "use server";

        const email = formData.get("email");
        const password = formData.get("password");
        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return redirect("./details?message=Could not edit project");
        }
    };

    const createProject = async (formData) => {
        "use server";

        const email = formData.get("email");
        const password = formData.get("password");
        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return redirect("./details?message=Could not create project");
        }
    };

    const deleteProject = async (formData) => {
        "use server";

        const supabase = createClient();

        const { error } = await supabase.from('projects').delete().eq('id', params.id);

        if (error) {
            return redirect("./details?message=Could not create project");
        }

        return redirect(".");
    };

    var formSubmit = editProject;
    var buttonText = 'Edit Project';
    var buttonPendingText = 'Updating...';


    if (params.id === 'new') {
        formSubmit = createProject;
        buttonText = 'Create Project';
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
                                Project Name
                            </label>
                            <input
                                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                                name="name"
                                placeholder="Name"
                                defaultValue={name}
                                required
                            />
                            <label className="text-md" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                                name="description"
                                placeholder="Description"
                                defaultValue={description}
                                rows="4"
                                required
                            />
                            <label className="text-md" htmlFor="languages">
                                Languages
                            </label>
                            <input
                                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                                name="languages"
                                placeholder="Languages"
                                defaultValue={languages}
                                required
                            />
                            <label className="text-md" htmlFor="link">
                                Link
                            </label>
                            <input
                                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                                name="link"
                                placeholder="Link"
                                defaultValue={link}
                                required
                            />
                            <label className="text-md" htmlFor="banner">
                                Banner Image
                            </label>
                            <input
                                type="file"
                                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                                name="banner"
                                accept="image/*"
                                required
                            />

                            <label className="text-md" htmlFor="square">
                                Square Image
                            </label>
                            <input
                                type="file"
                                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                                name="square"
                                accept="image/*"
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
                                    formAction={deleteProject}
                                    className="bg-slate-200 rounded-md px-4 py-4 text-slate-600 text-lg mb-2"
                                    pendingText="Deleting..."
                                >
                                    Delete Project
                                </SubmitButton>
                            )}
                            {params?.message && (
                                <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                                    {params.message}
                                </p>
                            )}
                        </form>
                    </div>
                    <div id="content" className="pt-4 lg:pt-auto lg:w-1/2 lg:py-24">

                        Div 2
                    </div>
                </div>
            </div>
        </div>
    );
}
