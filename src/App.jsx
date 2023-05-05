import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-zinc-900 text-zinc-50  flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <Main className=""/>
      </div>
      <Footer className="" />
    </div>
  );
}

export default App;
