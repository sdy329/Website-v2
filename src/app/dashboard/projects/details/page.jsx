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
    var bannerName = '';
    var squareName = '';
    var banner = '';
    var square = '';


    if (params.id === 'new') {
    } else {
        const { data: projects, error } = await supabase
            .from('projects')
            .select()
            .eq('id', params.id)
            .single();


        const { data: bannerImg } = await supabase.storage.from('banners').getPublicUrl(projects.banner);
        const { data: squareImg } = await supabase.storage.from('squares').getPublicUrl(projects.square);

        if (!projects) {
            return redirect(".");
        }

        name = projects.name;
        description = projects.description;
        languages = projects.languages;
        link = projects.link;
        bannerName = projects.banner;
        squareName = projects.square;
        banner = bannerImg['publicUrl'];
        square = squareImg['publicUrl'];
    }

    const editProject = async (formData) => {
        "use server";

        const supabase = createClient();
        const formName = formData.get('name');
        const formDescription = formData.get('description');
        const formLanguages = formData.get('languages');
        const formLink = formData.get('link');
        const bannerFileName = formData.get('banner').name;
        const squareFileName = formData.get('square').name;

        const { error } = await supabase.from('projects').update({
            name: formName,
            description: formDescription,
            languages: formLanguages,
            link: formLink,
            banner: bannerFileName,
            square: squareFileName
        }).eq('id', params.id);

        await supabase.storage.from('banners').upload(bannerFileName, formData.get('banner'), { upsert: true, });
        await supabase.storage.from('squares').upload(squareFileName, formData.get('square'), { upsert: true, });


        if (error) {
            return redirect("./details?message=Could not edit project");
        }

        return redirect(".");
    };

    const createProject = async (formData) => {
        "use server";

        const supabase = createClient();
        const formName = formData.get('name');
        const formDescription = formData.get('description');
        const formLanguages = formData.get('languages');
        const formLink = formData.get('link');
        const bannerFileName = formData.get('banner').name;
        const squareFileName = formData.get('square').name;

        const { error } = await supabase.from('projects').insert({
            name: formName,
            description: formDescription,
            languages: formLanguages,
            link: formLink,
            banner: bannerFileName,
            square: squareFileName
        });

        const { data: bannerData, error: bannerError } = await supabase.storage.from('banners').upload(bannerFileName, formData.get('banner'));
        if (bannerError) {
            console.log(bannerError);
        }

        const { data: squareData, error: squareError } = await supabase.storage.from('squares').upload(squareFileName, formData.get('square'));
        if (squareError) {
            console.log(bannerError);
        }

        if (error) {
            return redirect("./details?message=Could not edit project");
        }

        return redirect(".");
    };

    const deleteProject = async (formData) => {
        "use server";

        const supabase = createClient();

        const { error } = await supabase.from('projects').delete().eq('id', params.id);
        await supabase.storage.from('banners').remove([bannerName]);
        await supabase.storage.from('squares').remove([squareName]);

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
                    <div id="content" className="pt-4 lg:pt-auto lg:w-1/2 lg:py-24 flex flex-col justify-center gap-10">
                        <div>
                            <h1 className="text-slate-200 font-semibold text-5xl sm:text-6xl tracking-tighter sm:tracking-tight mb-3 text-center">Banner Example</h1>
                            <div className="w-full flex justify-center">
                                <a href={link} target="_blank">
                                    <div className="flex relative h-60">
                                        <picture>
                                            <source media="(min-width: 768px)" srcSet={banner} />
                                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center opacity-95 transition-all motion-reduce:transition-none" src={square} />
                                        </picture>
                                        <div className="px-4 py-2 min-[375px]:py-4 sm:px-8 sm:py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-95 lg:opacity-0 hover:opacity-95 transition-all motion-reduce:transition-none">
                                            <h2 className="tracking-wide text-sm title-font font-medium text-cyan-600 mb-1">
                                                {languages}
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-slate-200 mb-3">
                                                {name}
                                            </h1>
                                            <p className="leading-relaxed text-slate-400">{description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-slate-200 font-semibold text-5xl sm:text-6xl tracking-tighter sm:tracking-tight mb-3 text-center">Square Example</h1>
                            <div className="w-full flex justify-center">
                                <a href={link} target="_blank">
                                    <div className="flex relative h-60">
                                        <picture>
                                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center opacity-95 transition-all motion-reduce:transition-none" src={square} />
                                        </picture>
                                        <div className="px-4 py-2 min-[375px]:py-4 sm:px-8 sm:py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-95 hover:opacity-95 transition-all motion-reduce:transition-none">
                                            <h2 className="tracking-wide text-sm title-font font-medium text-cyan-600 mb-1">
                                                {languages}
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-slate-200 mb-3">
                                                {name}
                                            </h1>
                                            <p className="leading-relaxed text-slate-400">{description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
