import Link from "next/link";

export default function Module() {
    return (
        <div className="animate-in flex flex-col justify-center gap-10 text-foreground">
            <Link href="/dashboard/projects">
                <button className="bg-slate-200 rounded-md px-6 py-6 text-slate-600 text-2xl w-full">
                    Projects
                </button>
            </Link>
            <Link href="/dashboard/skills">
                <button className="bg-slate-200 rounded-md px-6 py-6 text-slate-600 text-2xl w-full">
                    Skills
                </button>
            </Link>
            <Link href="/dashboard/socials">
                <button className="bg-slate-200 rounded-md px-6 py-6 text-slate-600 text-2xl w-full">
                    Socials
                </button>
            </Link>
        </div>
    )
}