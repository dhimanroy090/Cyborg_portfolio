import logo from "../../assets/images/cyborg2.png";

const Banner = () => {
  return (
    <div>
      {/* <div className="w-60 h-60 bg-red-600 rounded-full mt-86"></div> */}
      <div className="flex flex-row-reverse max-sm:flex-col-reverse">
        <div className="lg:pt-10 max-sm:mx-3 ">
          <img src={logo} className="lg:max-w-sm rounded-lg shadow-2xl h-96" />
          
        </div>
        <div className="pt-20">
          <h1 className="lg:text-5xl font-bold mx-5">
            Innovative, Responsive, Web Solutions
          </h1>
          <p className="lg:py-6 lg:text-2xl mx-5">
            Creating cutting-edge, user-friendly websites that seamlessly blend
            design and functionality
          </p>
          <div className="flex max-sm:flex-col gap-5 mx-5">
            <a
              href="#contact"
              className="btn btn-outline btn-glass shadow-2xl mt-6"
            >
              Get in touch
            </a>
            <a
              href="https://dhimanroy090.github.io/portfolio/"
              className="btn btn-outline btn-glass shadow-2xl my-6"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <div className="lg:flex-row-reverse justify-between  "> */
}
