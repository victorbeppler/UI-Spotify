import { ChevronLeft, ChevronRight, ChevronDown, Search } from "lucide-react";
import React from "react";
import { data } from "../../Services/Playlists.js";

export default function Main() {
  return (
    <main className="flex-1 h-full bg-zinc-900">
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
            <img src="./victor.jpeg" className="w-8 h-7 rounded-full" />
            victorhb
            <div className="flex align-bottom pt-1">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-row h-64">
          <div className="border w-44 h-44 bg-gradient-to-br  from-darkPurple to-purple-900 shadow-sm shadow-black mr-4 ml-6 flex items-center justify-center">
            <img src="/heart-fill-96px-white.png" alt="Heart icon" />
          </div>
          <div className="flex flex-col pt-6">
            <div className="font-normal text-sm">Playlist</div>
            <div className="font-semibold text-7xl">Liked Songs</div>
            <div className="font-normal text-sm flex flex-row gap-1 pt-5 items-center">
              <img src="./victor.jpeg" className="w-6 h-6 rounded-full" />
              victorhb . 257 musics
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t  from-purple-950 to-zinc-900 h-32 flex flex-row gap-6">
        <div className="flex w-14 h-14 bg-greenNeon rounded-full justify-center items-center ml-8">
          <img
            src="/play-fill.svg"
            width={24}
            height={24}
            alt="Play button in playlist"
          />
        </div>
        <div className="pt-3">
          <img src="./pause-circle.png" />
        </div>
        <div className="flex absolute right-0">
          <div className="mr-12 mt-5 flex items-center">
            <Search />
          </div>
          <div className="flex mr-12 mt-5 gap-1 items-center">
            <a href="#" className="text-zinc-50 font-extralight text-sm">
              Date added
            </a>
            <ChevronDown />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t  from-zinc-900 to-purple-950 h-full">
        <table className="w-full text-left border-collapse shadow-md">
          <thead className="text-white border-b-white">
            <tr className="border-b-1 border-zinc-400">
              <th className="py-4 px-6">#</th>
              <th className="py-4 px-6">Title</th>
              <th className="py-4 px-6">Album</th>
              <th className="py-4 px-6 flex items-center gap-1">
                Date added{" "}
                <img
                  src="./caret-down-fill.png"
                  alt="Arrow Down Green"
                  className="w-5 h-5"
                />
              </th>
              <th className="py-4 px-6">Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr className="hover:border-1">
                  <td className="py-4 px-6">{item.id}</td>
                  <td className="py-4 px-6 flex gap-2">
                    <img
                      src={`data:image/png;base64,${item.image}`}
                      alt="Capa Album"
                      className="w-12 h-12"
                    />
                    <div>
                      <div>{item.title}</div>
                      <div>{item.author}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">{item.album}</td>
                  <td className="py-4 px-6">{item.addedIn}</td>
                  <td className="py-4 px-6 gap-3">
                    <div className="flex">
                      <img
                        src="./heart-fill-green.png"
                        alt="Liked Icon"
                        className="w-6 h-6"
                      />
                      {item.duration}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
