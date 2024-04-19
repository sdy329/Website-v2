

export default function Title() {
    return (
        <div className="grid justify-center lg:justify-start text-center lg:text-start">
            <span className="lg:frame mx-auto lg:ml-28">
                <img src="./profile.png" className="block h-36" />
            </span>
            <h1 className="text-slate-200 font-semibold text-5xl sm:text-6xl tracking-tighter sm:tracking-tight mb-3">Spencer Yates</h1>
            <h2 className="text-slate-200 font-semibold text-xl sm:text-2xl mb-3">Software Engineering Student</h2>
            <p className="max-w-xs leading-normal mx-auto lg:mx-0">Building the foundation for future engineers to excel</p>
        </div>
    )
}