export default function About() {

    return (
        <section id="about" className="lg:mb-20 mb-10">
            <div className="sticky top-0 z-20 -mx-6 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">About Me</h2>
            </div>
            <div className="lg:text-lg">
                <p className="mb-4">In 2013, I decided to join a VEX Robotics team through my school. This decision started an eventful journey that inevitably helped me find my calling. Initially driven by the idea of becoming a mechanical engineer, I quickly realized my passion for programming. This spark has guided me throughout my academic & robotic endeavors over the years.</p>
                <p className="">A few accomplishments I am proud to share:</p>
                <ul className="ml-5 list-disc mb-4 marker:text-slate-400">
                    <li>2019: Founded an <a href="https://www.instagram.com/blizzardalliance/" target="_blank" className="text-slate-200 hover:text-cyan-600 transition-colors">international robotics alliance</a>.</li>
                    <li>2020: Created the first <a href="https://www.nku.edu/academics/informatics/beyond/student-organizations/nukerobotics.html" target="_blank" className="text-slate-200 hover:text-yellow-400 transition-colors">competitive robotics program at Northern Kentucky University</a>.</li>
                    <li>2023: Finished 3<sup>rd</sup> place at the VEX World Championship.</li>
                    <li>2024: Served as Head Referee for the Grand Finals of the High School VEX World Championship</li>
                    <li>Represented the VEX Robotics Competition in discussions with companies to promote STEM education and sponsorship opportunities.</li>
                </ul>
                <p className="mb-4">I graduated from Northern Kentucky University in Spring 2024 with a Bachelor of Science in Applied Software Engineering. I am currently a Front-End Software Engineer at <a href="https://www.53.com" target="_blank" className="text-green-500 hover:text-blue-800 transition-colors">Fifth Third Bank</a>.</p>
                <p>In my free time, I enjoy refereeing for a few VEX Robotics tournaments (Middle School, High School, and Collegiate), hiking, and cheering on my favorite soccer teams.</p>
            </div>
        </section >
    )
}