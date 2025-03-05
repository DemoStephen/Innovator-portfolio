import { useState } from "react";
import List from "../Components/List";

export default function Navigation() {
  const [nav, setNav] = useState(null);
  function handleNav() {
    {
      nav ? setNav(false) : setNav(true);
    }
  }
  return (
    <nav className="bg-black text-white flex items-center justify-between px-[5%] py-7 sticky top-0">
      <p className="text-3xl">Innovator</p>
      <ul className="hidden md:flex items-center gap-8 text-xl">
        <List content="Design" />
        <List content="Photo" />
        <List content="Art" />
        <List content="Music" />
        <List content="About" />
        <List content="Contact" />
      </ul>
      <button
        onClick={handleNav}
        className="md:hidden cursor-pointer bg-red-500 p-2"
      >
        menu
      </button>
      <section
        className={`absolute transition-all top-[5.375rem] left-0 right-0 h-[calc(100vh-5.375rem)] bg-black flex px-[5%] ${
          nav ? "" : "opacity-0"
        } md:hidden`}
      >
        <ul className="flex flex-col w-full justify-center gap-8 text-xl ">
          <List content="Design" handleNav={handleNav} />
          <List content="Photo" handleNav={handleNav} />
          <List content="Art" handleNav={handleNav} />
          <List content="Music" handleNav={handleNav} />
          <List content="About" handleNav={handleNav} />
          <List content="Contact" handleNav={handleNav} />
        </ul>
      </section>
    </nav>
  );
}
