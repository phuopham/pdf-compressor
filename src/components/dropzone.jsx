import { useState } from 'react'
import { _GSPS2PDF } from "../lib/background.js";
import { loadPDFData } from '../lib/loadPDFData.js';
import { IoClose } from "react-icons/io5";

export const Dropzone = () => {
    const [state, setState] = useState("init")
    const [is_hover, setIsHover] = useState(false)
    const [file, setFile] = useState(undefined)
    const [downloadLink, setDownloadLink] = useState(undefined)

    function compressPDF(pdf, filename) {
        const dataObject = { psDataURL: pdf }
        _GSPS2PDF(dataObject,
            (element) => {
                console.log(element);
                setState("toBeDownloaded")
                loadPDFData(element, filename).then(({ pdfURL }) => {
                    setDownloadLink(pdfURL)
                });
            },
            (...args) => console.log("Progress:", JSON.stringify(args)),
            (element) => console.log("Status Update:", JSON.stringify(element)))
    }

    const changeHandler = (event) => {
        const file = event.target.files[0]
        const url = window.URL.createObjectURL(file);
        setFile({ filename: file.name, url })
        setState('selected')
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const { filename, url } = file;
        compressPDF(url, filename)
        setState("loading")
        return false;
    }

    let minFileName = file && file.filename && file.filename.replace('.pdf', '-min.pdf');
    return (
        <section>
            {state !== "loading" && state !== "toBeDownloaded" &&
                <form onSubmit={onSubmit} className='flex'>
                    <input className='block flex-1 text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0 file:font-semibold
      file:bg-emerald-50 file:text-emerald-700
      hover:file:bg-emerald-100' type="file" accept={"application/pdf"} name="file"
                        onChange={changeHandler} id={"file"} />

                    <div className='flex gap-3 items-center'>
                        <input className={state == 'selected' ? `px-4 py-2 border-0 rounded-full font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100` : 'px-4 py-2 border-0 rounded-full font-semibold bg-slate-100 text-slate-400'} type="submit"
                            disabled={state != 'selected'} value={state == "selected" ? "Compress the PDF" : "Import PDF to convert"} />
                        {state == "selected" && <a className='text-red-700 rounded-full bg-red-200 px-1 py-1' href="./"><IoClose className='h-7 w-7' /></a>}
                    </div>


                </form>}
            {state === "loading" && <div className='text-center'>Please wait... It could take up to 30s to complete</div>}
            {state === "toBeDownloaded" &&
                <div className='flex flex-col gap-4 items-center w-full'>
                    <div className={"px-4 py-2 border-0 rounded-full font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100"}>
                        <a href={downloadLink} download={minFileName}>
                            {` Download ${minFileName}`}
                        </a>
                    </div>
                    <div className={"px-4 py-2 border-0 rounded-full font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100"}>
                        <a href={'./'}>
                            {`Compress another file`}
                        </a>
                    </div>
                </div>
            }
        </section>
    )
}

