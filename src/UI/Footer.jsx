import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer className="bg-black text-slate-50 px-[5%] py-14 flex flex-col gap-8 md:flex-row justify-between">
      <section className="flex flex-col gap-12">
        <p className="text-4xl">Innovator</p>

        <div className="flex gap-14 text-xl">
          <ul>
            <Link to="/about">
              <li className="underline">About</li>
            </Link>
            <Link to="/speaking">
              <li className="underline">Speaking</li>
            </Link>
            <Link to="/archive">
              <li className="underline">Archive</li>
            </Link>
            <Link to="/contact">
              <li className="underline">Contact</li>
            </Link>
          </ul>
          <ul>
            <Link to="/design">
              <li className="underline">Design</li>
            </Link>
            <Link to="/photo">
              <li className="underline">Photo</li>
            </Link>
            <Link to="/art">
              <li className="underline">Art</li>
            </Link>
            <Link to="/music">
              <li className="underline">Music</li>
            </Link>
          </ul>
        </div>

        <p>©{new Date().getFullYear()}. Privacy Policy | Terms of Use</p>
      </section>
      <div className="flex gap-4">
        <p className="w-10 h-10 rounded-full bg-white"></p>
        <p className="w-10 h-10 rounded-full bg-white"></p>
        <p className="w-10 h-10 rounded-full bg-white"></p>
        <p className="w-10 h-10 rounded-full bg-white"></p>
      </div>
    </footer>
  );
}
