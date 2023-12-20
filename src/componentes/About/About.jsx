import img1 from "../../assets/html5.png";
import img2 from "../../assets/css-logo.png";
import img3 from "../../assets/es6.jpg";
import img4 from "../../assets/tailwindcss.png";
import img5 from "../../assets/js.jpg";
import img6 from "../../assets/react.svg";

import img8 from "../../assets/mongodb0.png";

const About = () => {
    return (
        <div className="my-20">
            <h2 className="text-3xl  font-semibold text-center mb-10">About Me</h2>
            <div className=" ">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="flex-1">
                        <img className="rounded-lg" src="https://i.ibb.co/gVD3WYf/github-banner.jpg" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl  font-semibold">Hello, My name is <span className="text-orange-600 font-bold">Shapla Rani</span></h2>
                        <p className="py-6">
                            I am a passionate and ambitious junior web developer, eager to contribute to the ever-evolving landscape of digital experiences. Let me take you on a journey through my current endeavors:</p>
                        <div className="md:flex justify-between space-y-2">
                            <div className="">
                                <p className="text-base font-normal"><span className="font-medium">Name:</span> Shapla Rani</p>
                                <p className="text-base font-normal"><span className="font-medium">Email:</span> shaplarani621@gmail.com</p>
                            </div>
                            <div >
                                <p className="text-base font-normal"><span className="font-medium">Call:</span> +01589634755</p>
                                <p className="text-base font-normal"><span className="font-medium">Form:</span> Rangpur, Bangladesh </p>
                            </div>
                        </div>
                        
                        <button className="btn bg-orange-600 text-white mt-5"><a href="https://drive.google.com/file/d/1OJms1U5UYiGPa8c4AGL8X3r9jWgbJSZs/view?usp=sharing"> Download My Resume</a></button>
                    </div>
                </div>
            </div>

            <div>
                            <div >
                                <h2 className="text-4xl font-semibold mt-3">Experience</h2>
                                <div className="flex flex-wrap gap-12 mt-6">
                                    <img className="w-16" src={img1} alt="" />
                                    <img className="w-16" src={img2} alt="" />
                                    <img className="w-16" src={img3} alt="" />
                                    <img className="w-16" src={img4} alt="" />
                                    <img className="w-16" src={img5} alt="" />
                                    <img className="w-16" src={img6} alt="" />
                                   
                                    <img className="w-16" src={img8} alt="" />
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default About;