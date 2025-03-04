export default function Footer() {
  return (
    <footer className="bg-black text-slate-50 px-[5%] py-14 flex flex-col gap-8 md:flex-row justify-between">
      <section className="flex flex-col gap-12">
        <p className="text-6xl">Innovator</p>

        <div className="flex gap-14 text-xl">
          <ul>
            <li className="underline">About</li>
            <li className="underline">Speaking</li>
            <li className="underline">Archive</li>
            <li className="underline">Contact</li>
          </ul>
          <ul>
            <li className="underline">Design</li>
            <li className="underline">Photo</li>
            <li className="underline">Art</li>
            <li className="underline">Music</li>
          </ul>
        </div>

        <p>©2024. Privacy Policy | Terms of Use</p>
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
