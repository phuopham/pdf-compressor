export const Header = () => {
    return (
        <section className="flex flex-col items-center pt-40 pb-16">
            <h1 className="text-2xl font-bold">Free browser-side <span className="text-emerald-400 uppercase tracking-widest">PDF</span><span className="uppercase tracking-widest"> Compressor</span></h1>
            <p className="text-center max-w-2xl font-semibold pt-16"> This website is fork from: <a className="text-emerald-400 hover:italic hover:underline"
                href={"https://github.com/laurentmmeyer/ghostscript-pdf-compress.wasm"} target={"_blank"}>Laurentmmeyer</a>.
                I revamp it using Vite, React, and Tailwind. It imports the WASM on the fly when you want compress a PDF.
            </p>
            <p className="pt-8">
                Be aware that the Webassembly binary is weighting <b>18MB</b>.
            </p>
        </section>

    )
}