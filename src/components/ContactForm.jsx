import React from "react";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import '../assets/css/contactForm.css'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaCity } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { BsFillGrid3X3GapFill } from "react-icons/bs";



import { Button } from "./Button";

const ContactForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-horizontal form2" onSubmit={handleSubmit}>

      <input type="hidden" name="recaptcha" id="recaptcha2" className="recaptcha2" />

      <div className="inputWrapper">
        <InputField
          name="name"
          id="name"
          placeholder="Enter Your Name"
          icon={<FaRegUser />}
        />

        <InputField
          name="company_name"
          id="company_name"
          placeholder="Enter Company Name"
          icon={<FaRegUser />}
        />
      </div>

      <div className="inputWrapper">
        <InputField
          name="email"
          id="email"
          placeholder="Enter Your E-mail"
          icon={<MdOutlineAlternateEmail />}
        />

        <InputField
          type="tel"
          name="number"
          id="number"
          placeholder="Enter Phone Number"
          icon={<IoCallOutline />}

        />
      </div>

      <InputField
        name="city"
        id="city"
        placeholder="Enter Your City"
        icon={<FaCity />}
      />

      <TextareaField
        name="message"
        id="message"
        placeholder="Enter Your Requirement"
        icon={<LuMessageSquareMore />}
      />

      {/* Captcha */}
      <div className="form-group">
        <div className="captchaGrid">
          <div className="captchaInput">
            <InputField
              name="captcha"
              id="captcha"
              placeholder="Captcha Code"
              icon={<BsFillGrid3X3GapFill />}
            />
          </div>

          <div className="captchaImg">
            <img src="/captcha.php" alt="captcha" className="capside" />
          </div>
        </div>
      </div>

      <div className="form-group">
        <Button className="readmore">
          Submit Now!
        </Button>
      </div>

    </form>
  );
};

export default ContactForm;