import { Header } from "./components/Header"
import { Navbar } from "./components/navbar"
import { Dropzone } from "./components/dropzone"

const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="mx-4 border-4 max-w-5xl lg:m-auto rounded-xl border-dashed p-8">
                <Dropzone />
            </div>
        </>
    )
}

export default App