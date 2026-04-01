import aboutImg from "../assets/images/about-us.webp";
import '../assets/css/AboutSection.css'

import SectionTitle from "./SectionTitle";

function AboutSection({ children }) {
    return (
        <section className="aboutUsSec  CustomPeding" >
            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-md-6">
                        <div className="aboutImg">
                            <img src={aboutImg} alt="About Naksh Technology" />
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="aboutContent">
                            <SectionTitle
                                smallTitle="About us"
                                mainTitle="Naksh Technology Solution LLP"
                                className="mb-0"
                            />

                            <div className="desc">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;