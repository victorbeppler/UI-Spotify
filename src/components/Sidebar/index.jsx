import { Library, Search } from "lucide-react";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <img src="./house-fill.png" width={24} height={24} alt="Home icon" />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="space-y-2 mt-8 flex flex-col">
        <a
          href=""
          className="m-0 flex  group items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-200"
        >
          <div className="rounded bg-zinc-200/60 flex items-center justify-center w-7 h-7 group-hover:bg-zinc-100">
            <img src="/plus.png" width={16} height={16} alt="Plus icon" />
          </div>
          Create Playlist
        </a>
        <a
          href=""
          className="m-0 flex group items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-200"
        >
          <div className=" rounded bg-gradient-to-br  from-purple-700 to-pink-700 w-7 h-7 flex items-center bg-opacaity-10 justify-center group-hover:bg-opacity-100">
            <img
              src="/heart-fill.png"
              width={16}
              height={16}
              alt="Heart icon"
            />
          </div>
          Liked Musics
        </a>
        <a
          href=""
          className="m-0 flex group items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-200"
        >
          <div className="rounded bg-gradient-to-br  from-green-400 to-blue-500 w-7 h-7 flex items-center justify-center">
            <img src="/tag.png" width={16} height={16} alt="Album cover" />
          </div>
          Your episodes
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          As mais tocadas no seu 2022
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          Mega
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          A verdade é essa
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          Sertanejo
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          Rock
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          Pop
        </a>
      </nav>
    </aside>
  );
}
