import "../assets/css/about.css";
import AboutSection from "../components/AboutSection";
import Breadcrumb from "../components/breadcrumb";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import TeamMemberCard from "../components/TeamMemberCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Images Import

function About() {

  const workData = [
    {
      title: "Fast and Reliable Quotations",
      desc: "We respect your time. Our streamlined process ensures you receive accurate and competitive quotes promptly to keep your projects on schedule.",
      icon: "https://arkdin-nextjs.vercel.app/assets/img/icons/how_to_work_icon_1.svg",
      type: 1,
    },
    {
      title: "Best Price Availability",
      desc: " Leveraging our position as a leading wholesale trader and stockist, we provide premium automation components at the most cost-effective market rates.",
      icon: "https://arkdin-nextjs.vercel.app/assets/img/icons/how_to_work_icon_1.svg",
      type: 2,
    },
    {
      title: "Strong Technical Support",
      desc: "Our team of experienced engineers provides deep technical insights, helping you select and integrate the right systems for your specific industrial needs.",
      icon: "https://arkdin-nextjs.vercel.app/assets/img/icons/how_to_work_icon_1.svg",
      type: 1,
    },
    {
      title: "Dedicated Customer Service",
      desc: "From initial inquiry to final implementation, our responsive support team is available to assist you at every step of your automation journey.",
      icon: "https://arkdin-nextjs.vercel.app/assets/img/icons/how_to_work_icon_1.svg",
      type: 1,
    },
    {
      title: "Excellent After-Sales Service",
      desc: "Our relationship with you doesn't end at delivery. We provide comprehensive post-purchase support to ensure your systems operate at peak performance.",
      icon: "https://arkdin-nextjs.vercel.app/assets/img/icons/how_to_work_icon_1.svg",
      type: 2,
    },
    {
      title: "Warranty and Guarantee",
      desc: "Quality is our priority. All our products and solutions come with industry-standard warranties, giving you complete peace of mind and long-term security.",
      icon: "https://arkdin-nextjs.vercel.app/assets/img/icons/how_to_work_icon_1.svg",
      type: 1,
    },
  ];

  const TeamMemberData = [
    {
      Name: "Mr. Ashvin Patel",
      degination: "Asst. Manager Sales",
      ProfileImg: "https://datalog.nakshtechnology.com/wp-content/uploads/2025/05/001-0991-scaled-e1747919180593.jpg",
    },
    {
      Name: "Mr. Haresh Jambukiya",
      degination: "Sr. Sales Executive",
      ProfileImg: "https://datalog.nakshtechnology.com/wp-content/uploads/2025/05/001-0993-scaled-e1747919209931.jpg",
    },
    {
      Name: "Mr. Ashish Kashyap",
      degination: "Sr. Sales Engineer",
      ProfileImg: "https://datalog.nakshtechnology.com/wp-content/uploads/2025/05/001-1006-scaled-e1747919312795.jpg",
    },
    {
      Name: "Mr. Harshad More",
      degination: "Sr.Sales Engineer",
      ProfileImg: "https://datalog.nakshtechnology.com/wp-content/uploads/2025/05/001-1001-scaled-e1747919158795.jpg",
    },

    {
      Name: "Mr. Bhavin Patel",
      degination: "Sr. Sales Engineer",
      ProfileImg: "https://datalog.nakshtechnology.com/wp-content/uploads/2025/05/001-1003-scaled-e1747919131484.jpg",
    },
  ];



  return (
    <>
      <Breadcrumb
        BreadcrumbTitle="About Us"
        BreadcrumbActiveTitle="About Us"
      />
      <AboutSection>
        <p>
          Naksh Technology Solution LLP is a premier provider of industrial automation solutions, headquartered in the industrial hub of Ahmedabad, Gujarat. With over a decade of industry expertise, we specialize in the distribution and implementation of high-end automation products, including HMI, PLCs, AC Drives (VFDs), systems, and industrial sensors.</p>
        <p>
          As an ISO 9001-certified company, we serve as a vital link in the global supply chain, partnering with world-renowned brands like Siemens, Rexroth, Huceen, Schneider, and Pepperl+Fuchs. Our mission is to empower industries—from pharmaceuticals and textiles to automotive and renewable energy—with scalable, future-ready technologies that drive efficiency and digital transformation
        </p>
      </AboutSection>
      <section
        className="WhyPartner CustomPeding"
        style={{ backgroundImage: "url('https://arkdin-nextjs.vercel.app/assets/img/how_to_work_bg.svg')" }}
      >
        <div className="container">
          <SectionTitle
            smallTitle=""
            mainTitle="Why Partner With Us?"
            Desc="At Naksh Technology, we don't just supply products; we deliver reliability. We understand the critical nature of industrial operations, which is why our business model is built around your success."
          />

          <div className="cs_card_1_wrap">

            {workData.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="teamSec CustomPeding">
        <div className="container">
          <SectionTitle
            smallTitle=""
            mainTitle="Building Smarter Industries with Every Project"
            Desc="Our leadership team includes industry veterans with decades of experience in automation technology, particularly in the deployment and customization of Siemens products."
          />

          {/* <div className="teamCardGrid"> */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            pagination={{
              clickable: true,
            }}
          >
            {TeamMemberData.map((item, index) => (
              <SwiperSlide key={index}>
                <TeamMemberCard
                  key={index}
                  image={item.ProfileImg}
                  name={item.Name}
                  designation={item.degination}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section >

    </>
  );
}

export default About;