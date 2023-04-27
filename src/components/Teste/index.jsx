import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Teste() {
  return (
    <main className="flex-1 p-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-4 start-0">
          <button className="rounded-full bg-black/40 p-1">
            <ChevronLeft />
          </button>
          <button className="rounded-full bg-black/40 p-1">
            <ChevronRight />
          </button>
        </div>
        <div className="flex left border rounded-full">
          <img
            className="rounded-full"
            src="/CapaAlanWalker.jpeg"
            alt=""
            width={16}
            height={56}
          ></img>
          <a href="" className="p-2 font-normal text-xs">
            Victorhugob
          </a>
        </div>
      </div>
    </main>
  );
}
