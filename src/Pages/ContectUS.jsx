import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLevelDownAlt } from "react-icons/fa";

import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";

const ContectUS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_05ag3lh", "template_252ipyv", form.current, {
        publicKey: "JAU7BgYAXgywKutZR",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            title: "Good job!",
            text: "Your Email Are Send",
            icon: "success",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            title: "Good job!",
            text: "Your Email Are Not Send",
            icon: "error",
          });
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center flex flex-col justify-center items-center lg:text-left">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="sm:w-10 rounded-full md:w-20 lg:w-20">
                  <img src="http://i.picasion.com/resize92/e3b02df1d7ec88d3d614b9f83c284fe3.jpg" />
                </div>
              </div>
              <div className="chat-bubble">Hi Hope to Love My WebSite!</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <h1 className="text-5xl font-bold">Send Us Message Now</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <section className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="from_name"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">username</span>
                </label>
                <input
                  name="to_name"
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">message</span>
                </label>
                <textarea
                  name="message"
                  type="text"
                  placeholder="message"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <Button
                  className="mb-[6em]"
                  // onClick={() => alert()}
                  type="submit"
                  value="Send"
                >
                  Send
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContectUS;
