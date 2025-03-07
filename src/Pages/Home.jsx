import { Link } from "react-router-dom";
import dummy from "../assets/image/soundstripe-before.jpg";
import DesignProjectBox from "../Components/DesignProjectBox";
import Footer from "../UI/Footer";
export default function Home() {
  return (
    <>
      <section className="px-[5%] py-12">
        <h1 className="text-4xl md:text-7xl my-14">
          A creative director helping visionary companies bring ideas to life.
        </h1>
        <section className="grid md:grid-cols-2 gap-12">
          <DesignProjectBox imgSrc={dummy} title="Camera Bay" />
          <DesignProjectBox imgSrc={dummy} title="Soundstripe" />
          <DesignProjectBox imgSrc={dummy} title="Adobe" />
          <DesignProjectBox imgSrc={dummy} title="Alvine Ailey" />
        </section>
        <Link to={"design"}>
          <button className="py-4 border-2 block w-4/5 md:w-1/5 my-10 mx-auto rounded-3xl">
            View All Projects
          </button>{" "}
        </Link>
      </section>

      <section className="bg-slate-700 px-[5%] py-14 text-slate-100 flex flex-col gap-16">
        <h2 className="text-3xl md:text-5xl text-center">See More</h2>
        <section className="grid md:grid-cols-3 gap-6">
          <DesignProjectBox imgSrc={dummy} title="Camera Bay" />
          <DesignProjectBox imgSrc={dummy} title="Soundstripe" />
          <DesignProjectBox imgSrc={dummy} title="Adobe" />
        </section>
      </section>

      <section className="bg-neutral-200 px-[5%] py-14">
        <h3 className="text-4xl">Services</h3>
        <div className="text-xl flex gap-12 md:gap-40 mt-12">
          <ul>
            <li>Brand strategy</li>
            <li>Brand design</li>
            <li>Art direction</li>
            <li>Naming</li>
            <li>Messaging</li>
            <li>Brand guides</li>
          </ul>
          <ul>
            <li>Web design</li>
            <li>Animation</li>
            <li>Music production</li>
            <li>Photography</li>
            <li>Film direction</li>
            <li>and more</li>
          </ul>
        </div>
      </section>

      <section className="px-[5%] py-14">
        <h2 className="text-4xl text-center">
          <Link to="contact" className="text-blue-700">
            Say hi
          </Link>
          👋 and tell me about your project.{" "}
        </h2>
      </section>

      <Footer />
    </>
  );
}
