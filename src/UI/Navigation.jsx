import List from "../Components/List";

export default function Navigation() {
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
      <button className="md:hidden">menu</button>
      <section className="absolute top-[5.375rem] left-0 right-0 h-[calc(100vh-5.375rem)] bg-black flex px-[5%] md:hidden">
        <ul className="flex flex-col w-full justify-center gap-8 text-xl ">
          <List content="Design" />
          <List content="Photo" />
          <List content="Art" />
          <List content="Music" />
          <List content="About" />
          <List content="Contact" />
        </ul>
      </section>
    </nav>
  );
}
