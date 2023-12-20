
import Typewriter from "react-ts-typewriter";

import { BsFacebook, BsGithub, BsInstagram, BsLinkedin,  } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="space-y-14 ">
      <div className=" md:h-[100vh] w-full boder py-5 bg-orange-100 bg-opacity-60 text-black">
        <div className="max-w-7xl mx-auto h-full flex mt-5 ">
          <div className="flex flex-col-reverse md:flex-row w-full gap-5 ">
            <div className="flex-1  m-3 my-auto space-y-4 ">
              <h4 className="text-2xl md:text-3xl font-semibold">Hi, I am</h4>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">Shapla Rani</h2>
              <div className="text-base flex gap-3   lg:text-xl font-semibold">
                 <p>I am Front-end</p>
                  <p className=" text-orange-600">
                  <Typewriter 
                  speed={100}
                  text={[" Developer ."]}
                  loop={true}
                ></Typewriter>
                  </p>
              </div>

              <div className="flex gap-7 text-2xl ">
                <a
                  href="https://web.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook className="hover:text-green-300 hover:bg-red-500 rounded-full hover:  hover:rounded-full"/>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:rounded"/>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                </a>
                <a
                  href="https://github.com/ShaplaRani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:rounded-full"/>
                </a>
              </div>
              
              <div className="">
              <button className="btn bg-orange-600 text-white mt-5"><a href="https://drive.google.com/file/d/1OJms1U5UYiGPa8c4AGL8X3r9jWgbJSZs/view?usp=sharing"> Download My Resume</a></button>
                
              </div>
            </div>

            <div className="flex-1 text-end m-3 my-auto">
              <img
                className=" border-4 rounded-full mx-auto p-3 w-48 md:w-72 lg:w-80"
                // src={img2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
