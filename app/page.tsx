// import homeImage from "/images/home-page-1.jpg";
import Image from "next/image";
import { Miniver } from "next/font/google";
import Carousel from "./components/Carousel";

const miniver = Miniver({
  // subsets: ['latin'],
  style: "normal",
  weight: "400",
});

export default function Home() {
  return (
    <div>
      <div className="navbar w-screen flex flex-row">
        <div className="navbar-items-container w-1/2 flex flex-row justify-between items-center mx-auto my-10">
          <p className="uppercase text-stone-400 hover:text-stone-700 cursor-pointer transition-all">Home</p>
          <p className="uppercase text-stone-400 hover:text-stone-700 cursor-pointer transition-all">Services</p>
          <Image
            // src="/images/canva-logo/logo.jpg"
            src="/images/canva-logo/logo-resized.jpg"
            // src="https://www.canva.com/design/DAGu_eeMMWE/1HWHuCXQI9ni7LzsmoCWYA/view"
            width="300"
            height="300"
            alt="logo_of_company"
            className=""
          />
          <p className="uppercase text-stone-400 hover:text-stone-700 cursor-pointer transition-all">About Us</p>
          <p className="uppercase text-stone-400 hover:text-stone-700 cursor-pointer transition-all">Contact</p>
        </div>
      </div>


      <div className="home-page-carousel">        
        <Carousel />
      </div>


    </div>
  );
}
