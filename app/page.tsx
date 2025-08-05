"use client";
import Image from "next/image";
import { HeroParallaxDemo } from "./components/ui/hero-parallax-demo";
import { CarouselDemo } from "./components/ui/carousel-demo";
import { AnimatedTestimonialsDemo } from "./components/ui/animated-testimonials-demo";
import ContactForm from "./components/ui/contact-form";

export default function Home() {
  return (
    <div className="w-[100%]">
      <div className="navbar w-[100%] flex flex-row">
        <div className="navbar-items-container w-full flex flex-row justify-center items-center mt-2">
          <Image
            src="/images/canva-logo/logo-resized.jpg"
            width="300"
            height="300"
            alt="logo_of_company"
            className=""
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section ">
        <HeroParallaxDemo />
      </div>

      <div className="third-section md:py-20 w-full">
        <div className="heading-container flex flex-col justify-center items-center gap-4">
          <p className="text-amber-800 text-sm md:text-lg tracking-widest uppercase">
            Our flagship packages just for you
          </p>
          <h1 className={`text-3xl md:text-5xl text-center leading-normal`}>
            We help you celebrate birthdays, <br /> baby showers and Naming
            ceremonies
          </h1>
          {/* <hr className="w-24 h-[1px] bg-black" /> */}
        </div>
        <div>
          <CarouselDemo />
        </div>
      </div>

      <div className="third-section py-20 w-full bg-[#e7e1db]">
        <div className="items-container flex flex-col justify-center items-center gap-4">
          <p className="text-amber-800 text-sm md:text-lg tracking-widest">
            WHY CHOOSE US
          </p>
          <h1 className={`text-3xl md:text-5xl text-center leading-normal`}>
            Professional, Personal, and Affordable{" "}
            <br className="hidden md:block" /> Event Planner
          </h1>
          <hr className="w-24 h-[1px] bg-black" />
        </div>
      </div>

      <div className="third-section py-20 w-full bg-[#6d582c]">
        <div>
          <AnimatedTestimonialsDemo />
        </div>
      </div>

      <div className="footer flex flex-col justify-center px-10 py-20 w-full bg-[#121d17] md:px-10">
        <div className="footer-container flex-col justify-between flex md:flex-row gap-20">
          <div className="initial-info-container flex-col md:flex-row gap-20 md:gap-0 flex justify-around w-[96%] md:w-[50%]">
            <div className="first-part flex flex-col gap-6 md:gap-10">
              <div className="address-container text-white flex flex-col gap-6">
                <h1 className="text-3xl">Address</h1>
                <span className="font-light">
                  Bibwevadi | Near HDFC Bank <br className="hidden md:block" />
                  Pune | 411037 | Maharashtra
                </span>
                <div className="social-icons flex flex-row gap-10">
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </span>

                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>

                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 488 512"
                    >
                      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                    </svg>
                  </span>
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="second-part flex-col flex">
              <div className="text-white flex flex-col gap-6">
                <h1 className="text-3xl">Contact</h1>
                <span className="font-light">
                  P: +91 9527712710 <br className="hidden md:block" /> | +91
                  7219733341
                </span>
                <span className="font-light">E: shraddhaevents@gmail.com</span>
                <span className="font-light">
                  Open Hour
                  <br />
                  Mon - Sun : 10 AM - 03 PM
                </span>
              </div>
            </div>
          </div>

          <div className="third-part flex flex-col flex-1 w-full md:w-[50%] gap-10">
            <h1 className="text-3xl text-white">Get a quote</h1>
            <div className="form-container">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="last-section items-center flex-col flex md:flex-row justify-between mt-10">
          <div className="logo-container">
            <Image
              src="/images/canva-logo/footer-logo.png"
              width="330"
              height="330"
              alt="logo_of_company"
              className="hidden md:block"
            />
            <a href="#">
              <Image
                src="/images/canva-logo/footer-logo.png"
                width="260"
                height="260"
                alt="logo_of_company"
                className="md:hidden"
              />
            </a>
          </div>
          <p className="text-sm text-[#7d7a71] uppercase text-center">
            Copyright 2025 | Shraddha Events | Pune
          </p>
        </div>
      </div>
    </div>
  );
}
