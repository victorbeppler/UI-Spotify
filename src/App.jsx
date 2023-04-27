import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Teste from "./components/Teste";

function App() {
  return (
    <div className="bg-zinc-900 text-zinc-50 h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <Teste />
      </div>
      <Footer />
    </div>
  );
}

export default App;
