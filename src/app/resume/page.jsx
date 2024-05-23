import { redirect } from "next/navigation";

export default async function Resume() {
    return redirect("https://kxlddvjdxrsutvfwvrzr.supabase.co/storage/v1/object/public/personal-files/SYates-Resume.pdf");
}