import { Link } from "react-router-dom";

const Approach = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              Enlarge your business model today
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Try Cyborg for step up your business online. No credits required.
            </p>
            <Link to="" className="btn btn-neutral btn-glass shadow-2xl">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
