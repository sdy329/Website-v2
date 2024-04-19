import socialArray from "@/components/SocialArray"

export default function Socials() {

    const socialsArray = socialArray();

    return (
        <ul className="mt-4 flex justify-center lg:justify-start items-center">
            {socialsArray.map((social, i, { length }) => {
                var classes = ""
                if (length - 1 === i) {
                    classes = "block hover:text-slate-200"
                } else {
                    classes = "block lg:mr-6 mr-8 hover:text-slate-200"
                }
                return (
                    <li key={social.id}>
                        <a href={social.link} target="_blank" className={classes}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-8 w-8" viewBox="0 0 24 24">
                                <path d={social.path} />
                            </svg>
                        </a>
                    </li>
                );
            })}
        </ul>
    )
}