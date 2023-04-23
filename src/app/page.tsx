import { Home as Homeicon, Search, Library, ChevronLeft, ChevronRight, Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Homeicon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a className='text-sm text-zinc-400 hover:text-zinc-100' href=''>As mais tocadas no seu 2022</a>
            <a className='text-sm text-zinc-400 hover:text-zinc-100' href=''>Mega</a>
            <a className='text-sm text-zinc-400 hover:text-zinc-100' href=''>A verdade é essa</a>
            <a className='text-sm text-zinc-400 hover:text-zinc-100' href=''>Sertanejo</a>
            <a className='text-sm text-zinc-400 hover:text-zinc-100' href=''>Rock</a>
            <a className='text-sm text-zinc-400 hover:text-zinc-100' href=''>Pop</a>
          </nav>
        </aside>
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
      </div>
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
    </div>
  )
}
