import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillSendFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Contact = () => {
  const [state, handleSubmit] = useForm("mlekavob");
  if (state.succeeded) {
    return <div className="flex justify-center items-center h-[54vh] ">
      <p className="text-4xl text-slate-800 font-semibold">Thanks for contacting with me!</p>
    </div>;
  }
  return (
    <div className="container mx-auto px-4 sm:px-5 md:px-10 mt-16" data-aos="flip-down" id="contact">
      <div className="flex flex-col justify-center py-12 items-center gap-8 h-[60vh] mt-12" >
        <form action="https://formspree.io/f/xknaagdn" method="POST" onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-24 text-xl">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold text-teal-600 mb-8 mt-16">Contact Me </h1>
              <div className="flex justify-center lg:justify-start">
                <AiOutlineMail className="text-3xl text-white" />
              </div>
              <div className="flex justify-center lg:justify-start">
                <h3 className="text-2xl uppercase font-medium text-white">Email</h3>
              </div>
              <p className="font-medium text-white">tasnimanzum1234@gmail.com</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <BsFillSendFill className="text-3xl text-teal-600 " />
                <h1 className="text-teal-600 text-4xl font-semibold">Drop me a line</h1>
                <BsFillSendFill className="text-3xl text-teal-600 " />
              </div>
              <div className="flex flex-col gap-4 font-medium text-white">
                <label htmlFor="username">
                  Username
                </label>
                <div>
                  <input className="border-2 w-56 lg:w-96 rounded-lg"
                    id="username"
                    type="text"
                    name="username"
                  />
                </div>
                <ValidationError
                  prefix="Username"
                  field="username"
                  errors={state.errors}
                />
              </div>
              <div className="flex flex-col gap-4 font-medium text-white">
                <label htmlFor="email">
                  Email Address
                </label>
                <div>
                  <input className="border-2 w-56 lg:w-96 rounded-lg"
                    id="email"
                    type="email"
                    name="email"
                  />
                </div>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="flex flex-col gap-4 font-medium text-white">
                <label htmlFor="message">
                  Message
                </label>
                <div>
                  <textarea className="border-2 w-56 lg:w-96 rounded-lg"
                    id="message"
                    name="message"
                  />
                </div>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div>
                <button className="btn border-slate-800 text-white hover:bg-teal-600 hover:text-black hover:border-0" type="submit" disabled={state.submitting}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;