import React, {Suspense} from 'react';
import Loader from "../components/Loader";
import logo from "../assets/mainImage.png";

{/*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">*/}
{/*  POPUP*/}
{/*</div>*/}

const Home = () => {
  return (
    <section className="w-full h-screen relative background flex flex-col items-center items-center gap-y-10 ">
        <Suspense fallback={<Loader />}>
          <div className="row-span-1 pt-20">
            <img className="h-96 w-96 shadow-xs content-center justify-center" src={logo} alt="Logo" />
          </div>
          <h2 className="text-2xl animate-bounce duration-75 font-mono">Hi, I'm Rebeca!</h2>
          <div className="row-span-1 w-2/4 text-xl font-mono">
            <p className="">
              Software Engineer with six years of software development experience.
              Started getting interested in web development when I was a teen building my own theme for tumblr.
            </p>
            <p>
              I have experience in companies that include Cloud
              Hosting, E-commerce and Design System. I love Front-End development, my main technology are
              React/Typescript and CSS.
            </p>
          </div>

        </Suspense>
    </section>
  );
};

export default Home;