import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

function Main() {
    return (
        <main className="flex-1 p-6">
            <div className='flex items-center gap-4'>
                <button className='rounded-full bg-black/40 p-1'>
                    <ChevronLeft />
                </button>
                <button className='rounded-full bg-black/40 p-1'>
                    <ChevronRight />
                </button>
            </div>
            {/* <h2 className='text-xl font-semibold'>Your top genres of 2021</h2>
            <p className='text-zinc-400 mt-2'>Your top genres of 2021</p> */}
            <h1 className="font-semi-bold text-3xl mt-10">Good Afternoon</h1>
            <div className='grid grid-cols-3 gap-4 mt-4 '>
                <a href="#" className='bg-white/5 rounded group overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors'>
                    <Image src="/album.jpg" alt="" width={104} height={104}></Image>
                    <strong>Playlist</strong>
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Image src="/play-fill.svg" width={20} height={20} alt='Play button in playlist' />
                    </button>
                </a>
                <a href="#" className='bg-white/5 rounded group overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors'>
                    <Image src="/album.jpg" alt="" width={104} height={104}></Image>
                    <strong>Playlist</strong>
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Image src="/play-fill.svg" width={20} height={20} alt='Play button in playlist' />
                    </button>
                </a>
                <a href="#" className='bg-white/5 rounded group overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors'>
                    <Image src="/album.jpg" alt="" width={104} height={104}></Image>
                    <strong>Playlist</strong>
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Image src="/play-fill.svg" width={20} height={20} alt='Play button in playlist' />
                    </button>
                </a>
                <a href="#" className='bg-white/5 rounded group overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors'>
                    <Image src="/album.jpg" alt="" width={104} height={104}></Image>
                    <strong>Playlist</strong>
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Image src="/play-fill.svg" width={20} height={20} alt='Play button in playlist' />
                    </button>
                </a>
                <a href="#" className='bg-white/5 rounded group overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors'>
                    <Image src="/album.jpg" alt="" width={104} height={104}></Image>
                    <strong>Playlist</strong>
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Image src="/play-fill.svg" width={20} height={20} alt='Play button in playlist' />
                    </button>
                </a>
                <a href="#" className='bg-white/5 rounded group overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors'>
                    <Image src="/album.jpg" alt="" width={104} height={104}></Image>
                    <strong>Playlist</strong>
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Image src="/play-fill.svg" width={20} height={20} alt='Play button in playlist' />
                    </button>
                </a>
            </div>

            <h2 className="font-semi-bold text-2xl mt-10">Made for Victor Hugo</h2>
            <div className='grid grid-cols-8 gap-4 mt-4'>
                <a href="" className='bg-white/5 p-2 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
                    <Image src="/album.jpg" className='w-full' alt="" width={104} height={104}></Image>
                    <strong className='font-semibold'>Dailay Mix 1</strong>
                    <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
                </a>
                <a href="" className='bg-white/5 p-2 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
                    <Image src="/album.jpg" className='w-full' alt="" width={104} height={104}></Image>
                    <strong className='font-semibold'>Dailay Mix 1</strong>
                    <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
                </a>
                <a href="" className='bg-white/5 p-2 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
                    <Image src="/album.jpg" className='w-full' alt="" width={104} height={104}></Image>
                    <strong className='font-semibold'>Dailay Mix 1</strong>
                    <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
                </a>
                <a href="" className='bg-white/5 p-2 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
                    <Image src="/album.jpg" className='w-full' alt="" width={104} height={104}></Image>
                    <strong className='font-semibold'>Dailay Mix 1</strong>
                    <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
                </a>
                <a href="" className='bg-white/5 p-2 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
                    <Image src="/album.jpg" className='w-full' alt="" width={104} height={104}></Image>
                    <strong className='font-semibold'>Dailay Mix 1</strong>
                    <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
                </a>

            </div>
        </main>
    )
}

export default Main