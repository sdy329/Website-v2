export default function Contact() {
    return (
        <section id="contact" className="lg:mb-20 mb-10">
            <div className="sticky top-0 z-20 -mx-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:text-xl">Contact Me</h2>
            </div>
            <form action="https://formspree.io/f/xwkjgaby" method="POST" name="contact" className="w-full">
                <div className="relative mb-4">
                    <input type="hidden" name="subject" value="New submission from {{email}}" />
                    <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-400">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white border-2 border-gray-700 bg-gray-800 py-2 px-6 w-full focus:outline-none hover:bg-cyan-600 hover:border-cyan-600 rounded text-lg transition-colors duration-200 ease-in-out">
                    Submit
                </button>
            </form>
        </section>
    )
}