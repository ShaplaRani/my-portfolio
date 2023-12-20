

const Skills = () => {
    return (
        <div className="my-20">
            <h2 className="text-3xl  font-semibold text-center">My Skills</h2>

            <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                    <div className="flex justify-between text-xl">
                        <h1>HTML</h1>
                        <p>90%</p>
                    </div>
                    <progress
                        className="progress progress-primary "
                        value="85"
                        max="100"
                    ></progress>
                </div>
                <div>
                    <div className="flex justify-between text-xl">
                        <h1>Tailwind CSS</h1>
                        <p>85%</p>
                    </div>
                    <progress
                        className="progress progress-accent "
                        value="85"
                        max="100"
                    ></progress>
                </div>
                <div>
                    <div className="flex justify-between text-xl">
                        <h1>CSS</h1>
                        <p>75%</p>
                    </div>
                    <progress
                        className="progress progress-info "
                        value="85"
                        max="100"
                    ></progress>
                </div>
                <div>
                    <div className="flex justify-between text-xl">
                        <h1>React</h1>
                        <p>70%</p>
                    </div>
                    <progress
                        className="progress progress-warning "
                        value="85"
                        max="100"
                    ></progress>
                </div>
                <div>
                    <div className="flex justify-between text-xl">
                        <h1>Node</h1>
                        <p>55%</p>
                    </div>
                    <progress
                        className="progress progress-primary "
                        value="85"
                        max="100"
                    ></progress>
                </div>
                <div>
                    <div className="flex justify-between text-xl">
                        <h1>Express</h1>
                        <p>60%</p>
                    </div>
                    <progress
                        className="progress progress-accent "
                        value="85"
                        max="100"
                    ></progress>
                </div>
                <div>
                    <div className="flex justify-between text-xl">
                        <h1>JavaScript</h1>
                        <p>90%</p>
                    </div>
                    <progress
                        className="progress progress-info "
                        value="85"
                        max="100"
                    ></progress>
                </div>
                <div>
                    <div className="flex justify-between text-xl">
                        <h1>MongoDB</h1>
                        <p>63%</p>
                    </div>
                    <progress
                        className="progress progress-accent "
                        value="85"
                        max="100"
                    ></progress>
                </div>
                <div>
                    <div className="flex justify-between text-xl">
                        <h1>React Router</h1>
                        <p>55%</p>
                    </div>
                    <progress
                        className="progress progress-warning "
                        value="85"
                        max="100"
                    ></progress>
                </div>
            </div>
                
            {/* <div className="my-14 md:flex m-2 gap-16">
        <div className="flex-1">
          <h3 className="text-3xl font-semibold">My Skills</h3>
          <div className=" mt-8">
            <div className="flex justify-between text-xl">
              <h1>HTML/CSS</h1>
              <p>85%</p>
            </div>
            <progress
              className="progress progress-warning "
              value="85"
              max="100"
            ></progress>
            <div className="flex justify-between text-xl">
              <h1>React JS</h1>
              <p>85%</p>
            </div>
            <progress
              className="progress progress-warning "
              value="85"
              max="100"
            ></progress>
            <div className="flex justify-between text-xl">
              <h1>Javascript</h1>
              <p>75%</p>
            </div>
            <progress
              className="progress progress-warning "
              value="75"
              max="100"
            ></progress>
            <div className="flex justify-between text-xl">
              <h1>Tailwind CSS</h1>
              <p>80%</p>
            </div>
            <progress
              className="progress progress-warning "
              value="80"
              max="100"
            ></progress>
          </div>
        </div>

        <div className="flex-1">
          <div className=" mt-16">
            <div className="flex justify-between text-xl">
              <h1>Visual Studio Code</h1>
              <p>80%</p>
            </div>
            <progress
              className="progress progress-warning "
              value="80"
              max="100"
            ></progress>
            <div className="flex justify-between text-xl">
              <h1>Figma</h1>
              <p>80%</p>
            </div>
            <progress
              className="progress progress-warning "
              value="80"
              max="100"
            ></progress>
          </div>
        </div>
           </div> */}
        </div>
    );
};

export default Skills;