import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { FaLinkedin } from "react-icons/fa";
import "./contact.css";
import { SlSocialLinkedin } from "react-icons/sl";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.msg) newErrors.msg = "Message is required";
    else if (formData.msg.length < 20) newErrors.msg = "Message must be at least 20 characters";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Email is invalid";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      toast.loading("Sending your message...", { duration: 2000 });

      try {
        await emailjs.send(
          "service_2nyjtqx",
          "template_3vyedct",
          {
            to_name: "Ahmed Gawish",
            from_name: formData.name,
            from_email: formData.email,
            message: formData.msg,
          },
          "BCHWeb1hlnZu1FDFl"
        );

        toast.success("Message sent successfully! We'll contact you soon.", { duration: 5000 });
        setFormData({ name: "", email: "", msg: "" });
      } catch (error) {
        toast.error("Error sending email. Please try again.");
      }
    } else {
      setErrors(newErrors);
      if (newErrors.msg === "Message must be at least 20 characters" && !newErrors.name) {
        toast.error("Please provide more details about your project.");
        return;
      }
      toast.error("Please fill in all required fields.");
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        {/* Contact Info Section */}
        <div className="contact__content-talk">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            {/* Email Card */}
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <p className="contact__card-data">ahmedgawish22@gmail.com</p>
              <a href="mailto:ahmdgawish22@gmail.com" className="contact__card-button" target="_blank">
                Write me <i className="uil uil-arrow-right icon"></i>
              </a>
            </div>
            {/* WhatsApp Card */}
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <p className="contact__card-data">010-648-805-94</p>
              <a href="https://wa.me/+0201064880594" className="contact__card-button" target="_blank">
                Write me <i className="uil uil-arrow-right icon"></i>
              </a>
            </div>
            {/* LinkedIn Card */}
            <div className="contact__card flex flex-col items-center">
              <SlSocialLinkedin className="text-[36px] pb-2  contact__card-icon" />
              <h3 className="contact__card-title">LinkedIn</h3>
              <p className="contact__card-data">Ahmed Gawish</p>
              <a
                href="https://www.linkedin.com/in/ahmed-gawish-718b27213"
                target="_blank"
                className="contact__card-button"
              >
                Contact me <i className="uil uil-arrow-right icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact__content-form">
          <h3 className="contact__title">Write me your project</h3>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-layout">
              <label className="contact__form-label">Name</label>
              <input
                type="text"
                name="name"
                className="contact__input-name"
                placeholder="Type your name!"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-layout">
              <label className="contact__form-label">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__input-name"
                placeholder="Type your email!"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-layout contact__textarea">
              <label className="contact__form-label">Project</label>
              <textarea
                name="msg"
                cols="10"
                rows="1"
                className="contact__textarea"
                placeholder="Type the idea of your project!"
                value={formData.msg}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="send__msg button button--flex">
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
