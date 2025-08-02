// import homeImage from "/images/home-page-1.jpg";
import Image from "next/image";
import { Miniver } from "next/font/google";

const miniver = Miniver({
  // subsets: ['latin'],
  style: "normal",
  weight: "400",
});

export default function Home() {
  return (
    <>
      <div className="navbar w-full h-40 flex flex-row justify-between items-center">
        {/* logo */}
        <Image
          src="/images/logo.png"
          width="200"
          height="100"
          alt="logo_of_company"
        />
        {/* nav-links */}
        <div className="nav-links flex flex-row justify-between">
          <p className="m-2">Home</p>
          <p className="m-2">About</p>
          <p className="m-2">Testimony</p>
          <p className="m-2">Services</p>
          <p className="m-2">Contacts</p>
        </div>
        {/* Home About Testimony Services Contacts */}
      </div>

      <div className={`relative ${miniver.className}`}>
        <Image
          className="w-full brightness-50"
          width="2000"
          height="2000"
          src="/images/home-page-1.jpg"
          alt="Home page background"
        />

        <h1 className="text-center absolute text-6xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Turning your dream event into reality!
        </h1>
        {/* <h2 className="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">
          Bottom Center
        </h2>
        <h3 className="absolute text-2xl text-blue-300 top-5 left-5">
          Top Left
        </h3>
        <h3 className="absolute text-2xl text-green-300 bottom-5 right-5">
          Bottom Right
        </h3> */}
      </div>
    </>
  );
}
