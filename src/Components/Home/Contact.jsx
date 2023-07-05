import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  console.log(form);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("cyborg3301", "cyborg3301", form.current, "ZQRQfczCzHy6fTAPp")
      .then(
        (result) => {
          console.log(result);
          if (result.text) {
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="flex gap-52 max-md:mx-7">
    <div>
      <form ref={form} onSubmit={sendEmail} className=" md:my-2   w-full">
        <div className="form-control">
          <label>Name</label>
          <input
            className="input input-bordered shadow-lg bg-transparent  w-full max-w-xs pl-2 py-4 hover:border-none"
            placeholder="Your Name*"
            type="text"
            name="user_name"
          />
        </div>
        <div className="form-control my-8">
          <label>Email</label>
          <input
            className="input input-bordered shadow-lg bg-transparent  w-full max-w-xs pl-2 py-4 hover:border-none"
            placeholder="Your Email"
            type="email"
            name="user_email"
          />
        </div>
        <div className="form-control">
          <label>Message</label>
          <textarea
            className="input input-bordered shadow-lg bg-transparent  w-full max-w-xs pl-2 py-4 hover:border-none h-32"
            name="message"
          />
        </div>
        <input
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700  my-8"
          placeholder="message me"
          type="submit"
          value="Send"
        />
      </form></div>

      {/* <div className="bg-white dark:bg-gray-900 sm:flex-col">
        <div className="py-8 px-4  max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              Enlarge your business model today
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Try Cyborg for step up your business online. No credits required.
            </p>
            <Link to="" className="btn btn-neutral btn-glass shadow-2xl">Contact Us</Link>
          </div>
        </div>
        </div> */}

    </div>
  );
};

export default Contact;
