import Breadcrumb from "../components/breadcrumb";
import "../assets/css/contactus.css";
import ContactInfoCard from "../components/ContactInfoCard";

import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faWhatsapp,
  faCanadianMapleLeaf,
} from "@fortawesome/free-brands-svg-icons";

import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import SectionTitle from "../components/SectionTitle";


function ContactUs() {

  const ContactInfoData = [
    {
      icon: <MdOutlineLocationOn />,
      title: "Office Location",
      content: (
        <>
          133-134, 1st Floor, Kalp Business Park, Near Kia Showroom, Opp. H.P. Petrol Pump, S. P. Ring Road, Nikol-Kathwada, <br /> Ahmedabad, Gujarat 382415
        </>
      ),
    },
    {
      icon: <FaRegClock />,
      title: "Office Hours",
      content: (
        <>
          Mon - Sat: 09:00am to 06.00pm   <br /> Sun: Off Day
        </>
      ),
    },
    {
      icon: <FaHeadset />,
      title: "Quick Contact",
      content: (
        <>
          <Link to="tel:+917041510802">+91 70415 10802</Link>
          <br />
          <Link to="mailto:sales@nakshtechnology.com">sales@nakshtechnology.com</Link>
        </>
      ),
    },
  ];

  return (
    <>
      <Breadcrumb
        BreadcrumbTitle="Contact Us"
        BreadcrumbActiveTitle="Contact Us"
      />
      <section className="commonSection CustomPeding">
        <div className="container">
          <div className="row">

            <div className="col-xl-4 col-md-6 col-lg-5">
              <div className="contactInfoWrapper">
                {ContactInfoData.map((item, index) => (
                  <ContactInfoCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    content={item.content}
                    link={item.link}
                    linkText={item.linkText}
                  />
                ))}

              </div>

            </div>

            <div className="col-xl-8 col-md-6 col-lg-7 pdl45">

              <div className="cotactForm light_form">
                <SectionTitle
                  smallTitle="Get In Touch"
                  mainTitle="Contact Form"
                />

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mapIframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.695521606634!2d72.67496585606689!3d23.034949186310552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87000d5c8017%3A0x5a275f2fe59791cb!2sKalp%20Business%20Park!5e0!3m2!1sen!2sin!4v1773665323714!5m2!1sen!2sin"
          width="600"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default ContactUs;