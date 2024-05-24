export default function Resume({ link }) {

    return (
        <div id="Resume" className="flex flex-col justify-center items-center h-full text-center">
            <object
                data={link + "#toolbar=0&navpanes=0"}
                type="application/pdf"
                className="w-full lg:w-7/12 max-w-screen-xl max-h-[90vh] md:h-[90vh] h-[75vh] border-none"
            >
                <p className="text-slate-300 ">It appears you don't have a PDF plugin for this browser. Please <a href={link} className="hover:text-cyan-600 transition-colors">click here to download the PDF file.</a></p>
            </object>
        </div>
    );
}
