import { BsGithub } from 'react-icons/bs';

export const Navbar = () => {
    return (
        <nav className="w-full backdrop-blur-md bg-white bg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <h1 className='text-lg font-bold uppercase text-emerald-600 tracking-widest'>PDF <span className='text-gray-950'>compressor</span></h1>
            <div className='flex gap-2'>
                <a className='rounded-full font-semibold w-fit bg-emerald-300 px-3 py-2 uppercase' href="https://converter.phuopham.com/"><span className='text-emerald-900'>Media</span> converter</a>
                <a className='rounded-full w-fit bg-emerald-300 gap-2 items-center flex p-2 text-sm' href="https://github.com/phuopham/pdf-compressor">
                    <span className='hidden sm:inline'>Github Repo</span>
                    <span className="text-xl">
                        <BsGithub />
                    </span>
                </a>
            </div>
        </nav>
    );
}
