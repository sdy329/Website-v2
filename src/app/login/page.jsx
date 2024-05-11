import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "@/components/submit-button";
import HomeButton from "@/components/HomeButton";
import '@/app/main.css';
import '@/app/personal.css';

export default async function Login({ searchParams }) {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        return redirect("/dashboard");
    }

    const signIn = async (formData) => {
        "use server";

        const email = formData.get("email");
        const password = formData.get("password");
        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return redirect("/login?message=Could not authenticate user");
        }

        return redirect("/dashboard");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-slate-900 text-slate-500 font-medium font-sans selection:text-sky-400">
            <div className="w-full max-w-md">
                <HomeButton />

                <form className="animate-in flex flex-col justify-center gap-2 text-foreground">
                    <label className="text-md" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        name="email"
                        placeholder="you@example.com"
                        required
                    />
                    <label className="text-md" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        required
                    />
                    <SubmitButton
                        formAction={signIn}
                        className="bg-slate-200 rounded-md px-4 py-2 text-slate-600 mb-2"
                        pendingText="Signing In..."
                    >
                        Sign In
                    </SubmitButton>
                    {searchParams?.message && (
                        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                            {searchParams.message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
