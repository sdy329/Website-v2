import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import '@/app/main.css';
import '@/app/personal.css';

export default function Home() {

    return (
        <div className="bg-slate-900 text-slate-500 font-medium font-sans selection:text-sky-400">
            <div id="root">
                <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                    <div className="lg:flex lg:justify-between lg:gap-5">
                        <Header />
                        <main id="content" className="pt-4 lg:pt-auto lg:w-1/2 lg:py-24">
                            <About />
                            <Projects />
                            <Skills />
                            <Contact />
                            <Footer />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}
