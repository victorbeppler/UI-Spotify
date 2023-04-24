import { Laptop2, LayoutList, Maximize2, Mic2, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

function Footer() {
    return (
        <footer className="bg-zinc-800 border-t  border-zinc-700 px-6 py-4 flex items-center justify-between">
            <div className='flex items-center gap-3'>
                <Image src="/album.jpg" alt="" width={56} height={56}></Image>
                <div className='flex flex-col'>
                    <strong className='font-normal'>Rope</strong>
                    <span className=' text-xs text-zinc-400'>Foo Fighters</span>
                </div>
            </div>
            <div>
                <div className=' flex flex-col items-center gap-2'>
                    <div className='flex items-center  gap-6'>
                        <Shuffle className='text-zinc-200' size={20} />
                        <SkipBack className='text-zinc-200' size={20} />
                        <div className='bg-white rounded-full w-6 h-6 flex items-center justify-center'>
                            <Image src="/play-fill.svg" width={16} height={16} alt='Play button in playlist' />
                        </div>
                        <SkipForward className='text-zinc-200' size={20} />
                        <Repeat className='text-zinc-200' size={20} />
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-xs text-zinc-400'>0:31</span>
                        <div className='h-1 rounded-full w-96 bg-zinc-600'>
                            <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
                        </div>
                        <span className='text-xs text-zinc-400'>2:14</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-4'>
                    <Mic2 size={20} />
                    <LayoutList size={20} />
                    <Laptop2 size={20} />
                    <div className='flex items-center gap-2'>
                        <Volume size={20} />
                        <div className='h-1 rounded-full w-24 bg-zinc-600'>
                            <div className='bg-zinc-200 w-12 h-1 rounded-full'></div>
                        </div>
                    </div>
                    <Maximize2 size={20} />
                </div>
            </div>
        </footer>
    )
}

export default Footer