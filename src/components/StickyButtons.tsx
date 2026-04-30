import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Send, X, User, Mail, MapPin, Phone, FileText, ShieldCheck, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "./dialog";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Modal } from "react-bootstrap";

const generateCaptcha = () => Math.floor(1000 + Math.random() * 9000).toString();

function StickyButtons() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [captchaInput, setCaptchaInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", city: "", phone: "", requirement: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput !== captcha) { setCaptcha(generateCaptcha()); setCaptchaInput(""); return; }
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("company", form.company);
      formData.append("email", form.email);
      formData.append("city", form.city);
      formData.append("phone", form.phone);
      formData.append("requirement", form.requirement);
      formData.append("form-type", "inquiry");

      await fetch("https://mottotechcoolingtower.com/lp/inquiry-action.php", { method: "POST", body: formData });

      setForm({ name: "", company: "", email: "", city: "", phone: "", requirement: "" });
      setCaptchaInput(""); setCaptcha(generateCaptcha());
      // onOpenChange(false);
      navigate("/thank-you");
    } catch { setIsSubmitting(false); }
  };

  // const handleWhatsAppClick = () => {
  //   if (window.gtag) {
  //     window.gtag('event', 'send', {
  //       event_category: 'click on whatsapp',
  //       event_action: 'Mobile',
  //       event_label: '+917041510802'
  //     });
  //   }
  // };

  // const handleEnquiryClick = () => {
  //   // open modal or trigger function here
  //   console.log("Enquiry clicked");
  // };



  return (
    <>

      <div className="sticklist">
        <ul>
          <li
            className="none-li inquiery-icon imgnone"
            onClick={handleShow}
          >
            <a
              href="#"
              className="click1"
              onClick={(e) => e.preventDefault()}
            >
              <span className="icon1">
                <Mail className="w-5 h-5" />
              </span>
              <span className="btn-text">Send Inquiry</span>
            </a>
          </li>

          <li className="download-pdf none-li inquiery-icon imgnone">
            <a href="tel:+917041510802">
              <span className="icon">
                <Phone />
              </span>
              <span className="btn-text">Call</span>
            </a>
          </li>
          <li className="download-pdf WhatsAppBtn none-li inquiery-icon imgnone">
            <a href="tel:+917041510802">
              <span className="icon">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                />
              </span>
              <span className="btn-text"> WhatsApp</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-box">

        <div className="book-app bgInquery" id="req-apnmt2">
          <a
            className="nav_up click1"
            href="#"
          >
            <i className="fa fa-envelope"></i> Enquire Now
          </a>
        </div>

        <div className="book-app bgWhatsapp">
          <a
            href="https://api.whatsapp.com/send?phone=917041510802&text=Hello Team Naksh Technology Solutions LLP, I was going through your Website, Please connect me for product discussion."
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
            />{" "}
            WhatsApp
          </a>
        </div>

      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='my-custom-modal'
        centered
      >

        <div className="modal-title">
          <h2>Get Your Free Quote</h2>

          <span onClick={handleClose}><X /></span>
        </div>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="InputField">
              <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required maxLength={100} />
            </div>
            <div className="InputField">
              <Input name="company" placeholder="Company Name" value={form.company} onChange={handleChange} maxLength={100} />
            </div>
            <div className="InputField">
              <Input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required maxLength={255} />
            </div>
            <div className="InputField">
              <Input name="city" placeholder="City" value={form.city} onChange={handleChange} maxLength={100} />
            </div>
            <div className="InputField">
              <Input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} maxLength={20} />
            </div>
            <div className="InputField">
              <Textarea name="requirement" placeholder="Tell us about your requirement..." value={form.requirement} onChange={handleChange} required maxLength={1000} />
            </div>
            <div className="InputFieldWrapper">
              <div className="InputField"><Input placeholder="Enter Captcha" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} required maxLength={4} />
              </div>
              <span title="Click to refresh" onClick={() => setCaptcha(generateCaptcha())}>{captcha}</span>
            </div>
            <button type="submit" disabled={isSubmitting} className='submitBtn'  >
              {isSubmitting ? (<><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Processing...</>) : (<><Send className="w-4 h-4" /> Submit Your Inquiry</>)}
            </button>
            <p >🔒 Your information is secure and will never be shared</p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default StickyButtons;