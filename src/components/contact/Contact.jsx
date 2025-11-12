import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import toast from "react-hot-toast";
import photo from "/images/contact.jpg";
// import dotenv from "dotenv";

// dotenv.config()

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_21b6rq1", "template_o0o0lyn", form.current,  "174a4mocVJI5Coyqv"
      )
      .then(
        () => {
          // console.log(result.text);
          // e.target.reset();
          toast.success("Email Sent !");
          alert("Email Sent !");
        },
        (error) => {
          console.log('Failed', error.text);
          
        }
      );
  };

  return (
    <section
      id="contact"
      className="contact_con bg-[#211f1f] text-white dark:bg-white dark:text-black w-full"
    >
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 font-semibold w-[75%] max-sm:py-0">
        <div className="flex flex-col justify-evenly ite">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leadi lg:text-5xl max-sm:text-center">
              Let us talk!
            </h2>
            {/* <div className="">sagarkryadav31@gmail.com</div> */}
          </div>
          <div className=" w-64 photo_cont max-sm:w-44">
            <img src={photo} alt="img-here" className="w-[100%] h-[100%] p-4" />
          </div>
        </div>
        <form ref={form} className="space-y-6" onSubmit={sendEmail}>
          <div>
            <label htmlFor="name" className="text-sm font-bold">
              Full name
            </label>
            <input
              id="name"
              name="user_name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded font-semibold border-[2px] border-solid border-black  text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-bold">
              Email
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              className="w-full p-3 rounded font-semibold border-[2px] border-solid border-black  text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-bold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="3"
              className="w-full p-3 rounded font-semibold border-[2px] border-solid border-black  text-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-red-600 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


