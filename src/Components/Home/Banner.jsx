import logo from "../../assets/images/ss.png";

const Banner = () => {
  return (
    <div>
      {/* <div className="w-60 h-60 bg-red-600 rounded-full mt-86"></div> */}
      <div className="flex flex-row-reverse max-sm:flex-col">
        <div className="lg:pt-10">
          <img src={logo} className="lg:max-w-sm rounded-lg shadow-2xl" />
          <div>
            
          </div>
        </div>
        <div className="pt-20">
          <h1 className="lg:text-5xl font-bold">
            Innovative, Responsive, Web Solutions
          </h1>
          <p className="lg:py-6 lg:text-2xl">
            Creating cutting-edge, user-friendly websites that seamlessly blend
            design and functionality
          </p>
          <button className="btn btn-outline btn-glass shadow-2xl ">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <div className="lg:flex-row-reverse justify-between  "> */
}
