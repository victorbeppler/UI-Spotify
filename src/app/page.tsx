import { Home as Homeicon, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react'
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
            <div className='bg-white/10 rounded overflow-hidden gap-4 flex items-center'>
              <Image src="/album.jpg" alt="" width={104} height={104}></Image>
              <strong>Playlist</strong>
            </div>
            <div className='bg-white/10 rounded overflow-hidden gap-4 flex items-center'>
              <Image src="/album.jpg" alt="" width={104} height={104}></Image>
              <strong>Playlist</strong>
            </div>
            <div className='bg-white/10 rounded overflow-hidden gap-4 flex items-center'>
              <Image src="/album.jpg" alt="" width={104} height={104}></Image>
              <strong>Playlist</strong>
            </div>
            <div className='bg-white/10 rounded overflow-hidden gap-4 flex items-center'>
              <Image src="/album.jpg" alt="" width={104} height={104}></Image>
              <strong>Playlist</strong>
            </div>
            <div className='bg-white/10 rounded overflow-hidden gap-4 flex items-center'>
              <Image src="/album.jpg" alt="" width={104} height={104}></Image>
              <strong>Playlist</strong>
            </div>
            <div className='bg-white/10 rounded overflow-hidden gap-4 flex items-center'>
              <Image src="/album.jpg" alt="" width={104} height={104}></Image>
              <strong>Playlist</strong>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t  border-zinc-700 p-6">
        Footer
      </footer>
    </div>
  )
}
