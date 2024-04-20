import Link from "next/link";

export default function DashboardModule() {
    return (
        <div className="animate-in flex flex-col justify-center gap-10 text-foreground">
            <h1 className="text-slate-200 font-semibold text-5xl sm:text-6xl tracking-tighter sm:tracking-tight mb-3 text-center">Admin Dashboard</h1>
            <Link href="/dashboard/projects">
                <button className="bg-slate-200 rounded-md px-6 py-6 text-2xl w-full">
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