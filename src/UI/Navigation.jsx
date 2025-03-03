import List from "../Components/List";

export default function Navigation() {
  return (
    <nav className="bg-black text-white flex items-center justify-between px-[5%] py-6">
      <p className="text-3xl">Innovator</p>
      <ul className="flex items-center gap-8 text-xl">
        <List content="Design" />
        <List content="Photo" />
        <List content="Art" />
        <List content="Music" />
        <List content="About" />
        <List content="Contact" />
      </ul>
    </nav>
  );
}
