import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import React from "react";

export default function Main() {
  return (
    <main className="flex-1">
      <div className="bg-gradient-to-b  from-purple-700 to-purple-900-600 max-h-96">
        <div className="flex justify-between p-6">
          <div className="flex items-center gap-4 start-0">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <div className="flex gap-2 border h-8 border-gray-50 rounded-full pr-1 pl-1 hover:translate-y-0.5">
            <img src="./CapaAlanWalker.jpeg" className="w-6 rounded-full" />
            victorhb
            <div className="flex align-bottom pt-1">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-row h-64">
          <div className="w-44 h-44 bg-zinc-200 mr-4 ml-6"></div>
          <div className="flex flex-col pt-6">
            <div className="font-normal text-sm">Playlist</div>
            <div className="font-semibold text-7xl">Liked Musics</div>
            <div className="font-normal text-sm flex flex-row gap-1 pt-5">
              <img src="./CapaAlanWalker.jpeg" className="w-6 rounded-full" />
              victorhb . 257 musics
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t  from-purple-950 to-zinc-900 h-32">
        <div className="flex w-12 h-12 bg-greenNeon rounded-full justify-center items-center ml-8">
          <img
            src="/play-fill.svg"
            width={18}
            height={18}
            alt="Play button in playlist"
          />
        </div>
      </div>
      {/* <h2 className='text-xl font-semibold'>Your top genres of 2021</h2>
      <p className='text-zinc-400 mt-2'>Your top genres of 2021</p> */}
      {/* <h1 className="font-semi-bold text-3xl mt-10">Good Afternoon</h1>
            <div className="grid grid-cols-3 gap-4 mt-4 ">
                <a
                    href="#"
                    className="bg-white/5 rounded group overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors"
                >
                    <img src="/album.jpg" alt="" width={104} height={104}></img>
                    <strong>Playlist</strong>
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <img
                            src="/play-fill.svg"
                            width={20}
                            height={20}
                            alt="Play button in playlist"
                        />
                    </button>
                </a>
                <a
                    href="#"
                    className="bg-white/5 rounded group overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors"
                >
                    <img src="/album.jpg" alt="" width={104} height={104}></img>
                    <strong>Playlist</strong>
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <img
                            src="/play-fill.svg"
                            width={20}
                            height={20}
                            alt="Play button in playlist"
                        />
                    </button>
                </a>
                <a
                    href="#"
                    className="bg-white/5 rounded group overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors"
                >
                    <img src="/album.jpg" alt="" width={104} height={104}></img>
                    <strong>Playlist</strong>
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <img
                            src="/play-fill.svg"
                            width={20}
                            height={20}
                            alt="Play button in playlist"
                        />
                    </button>
                </a>
                <a
                    href="#"
                    className="bg-white/5 rounded group overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors"
                >
                    <img src="/album.jpg" alt="" width={104} height={104}></img>
                    <strong>Playlist</strong>
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <img
                            src="/play-fill.svg"
                            width={20}
                            height={20}
                            alt="Play button in playlist"
                        />
                    </button>
                </a>
                <a
                    href="#"
                    className="bg-white/5 rounded group overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors"
                >
                    <img src="/album.jpg" alt="" width={104} height={104}></img>
                    <strong>Playlist</strong>
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <img
                            src="/play-fill.svg"
                            width={20}
                            height={20}
                            alt="Play button in playlist"
                        />
                    </button>
                </a>
                <a
                    href="#"
                    className="bg-white/5 rounded group overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors"
                >
                    <img src="/album.jpg" alt="" width={104} height={104}></img>
                    <strong>Playlist</strong>
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <img
                            src="/play-fill.svg"
                            width={20}
                            height={20}
                            alt="Play button in playlist"
                        />
                    </button>
                </a>
            </div>

            <h2 className="font-semi-bold text-2xl mt-10">
                Made for Victor Hugo
            </h2>
            <div className="grid grid-cols-8 gap-4 mt-4">
                <a
                    href=""
                    className="bg-white/5 p-2 rounded-lg flex flex-col gap-2 hover:bg-white/10"
                >
                    <img
                        src="/album.jpg"
                        className="w-full"
                        alt=""
                        width={104}
                        height={104}
                    ></img>
                    <strong className="font-semibold">Dailay Mix 1</strong>
                    <span className="text-sm text-zinc-500">
                        Wallows, COIN, girl in red and more
                    </span>
                </a>
                <a
                    href=""
                    className="bg-white/5 p-2 rounded-lg flex flex-col gap-2 hover:bg-white/10"
                >
                    <img
                        src="/album.jpg"
                        className="w-full"
                        alt=""
                        width={104}
                        height={104}
                    ></img>
                    <strong className="font-semibold">Dailay Mix 1</strong>
                    <span className="text-sm text-zinc-500">
                        Wallows, COIN, girl in red and more
                    </span>
                </a>
                <a
                    href=""
                    className="bg-white/5 p-2 rounded-lg flex flex-col gap-2 hover:bg-white/10"
                >
                    <img
                        src="/album.jpg"
                        className="w-full"
                        alt=""
                        width={104}
                        height={104}
                    ></img>
                    <strong className="font-semibold">Dailay Mix 1</strong>
                    <span className="text-sm text-zinc-500">
                        Wallows, COIN, girl in red and more
                    </span>
                </a>
                <a
                    href=""
                    className="bg-white/5 p-2 rounded-lg flex flex-col gap-2 hover:bg-white/10"
                >
                    <img
                        src="/album.jpg"
                        className="w-full"
                        alt=""
                        width={104}
                        height={104}
                    ></img>
                    <strong className="font-semibold">Dailay Mix 1</strong>
                    <span className="text-sm text-zinc-500">
                        Wallows, COIN, girl in red and more
                    </span>
                </a>
                <a
                    href=""
                    className="bg-white/5 p-2 rounded-lg flex flex-col gap-2 hover:bg-white/10"
                >
                    <img
                        src="/album.jpg"
                        className="w-full"
                        alt=""
                        width={104}
                        height={104}
                    ></img>
                    <strong className="font-semibold">Dailay Mix 1</strong>
                    <span className="text-sm text-zinc-500">
                        Wallows, COIN, girl in red and more
                    </span>
                </a>
            </div> */}
    </main>
  );
}
