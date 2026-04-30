import { useState } from "react";
import { Send, X, User, Mail, MapPin, Phone, Building2, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "./dialog";
import { Input } from "./input";

const generateCaptcha = () => Math.floor(1000 + Math.random() * 9000).toString();

interface CataloguePopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CataloguePopup = ({ open, onOpenChange }: CataloguePopupProps) => {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [captchaInput, setCaptchaInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", city: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      formData.append("form-type", "catalogue");

      await fetch("https://mottotechcoolingtower.com/lp/inquiry-action.php", { method: "POST", body: formData });

      setForm({ name: "", company: "", email: "", city: "", phone: "" });
      setCaptchaInput(""); setCaptcha(generateCaptcha());
      onOpenChange(false);
      navigate("/thank-you-catalogue");
    } catch { setIsSubmitting(false); }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[520px] w-[95vw] p-0 border-0 overflow-hidden rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] bg-transparent gap-0">
        <DialogTitle className="sr-only">Catalogue Request Form</DialogTitle>
        <div className="relative px-6 py-5 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(210,100%,30%), hsl(210,100%,40%))" }}>
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">Free Download</p>
              <h3 className="font-heading font-bold text-xl text-white tracking-wide flex items-center gap-2">
                <span className="inline-block w-8 h-0.5 rounded-full bg-white/40" />
                Catalogue Request Form
              </h3>
            </div>
            <button onClick={() => onOpenChange(false)} className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200"><X className="w-4 h-4" /></button>
          </div>
        </div>
        <div className="bg-background p-5 md:p-7">
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" /><Input name="name" placeholder="Name" value={form.name} onChange={handleChange} required maxLength={100} className="h-11 pl-10 border-border/40 bg-muted/30 focus:bg-background focus:border-primary/60 transition-all duration-200 rounded-lg" /></div>
            <div className="relative"><Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" /><Input name="company" placeholder="Company Name" value={form.company} onChange={handleChange} maxLength={100} className="h-11 pl-10 border-border/40 bg-muted/30 focus:bg-background focus:border-primary/60 transition-all duration-200 rounded-lg" /></div>
            <div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" /><Input name="email" type="email" placeholder="E-Mail Address" value={form.email} onChange={handleChange} required maxLength={255} className="h-11 pl-10 border-border/40 bg-muted/30 focus:bg-background focus:border-primary/60 transition-all duration-200 rounded-lg" /></div>
            <div className="relative"><MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" /><Input name="city" placeholder="City" value={form.city} onChange={handleChange} maxLength={100} className="h-11 pl-10 border-border/40 bg-muted/30 focus:bg-background focus:border-primary/60 transition-all duration-200 rounded-lg" /></div>
            <div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" /><Input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} maxLength={20} className="h-11 pl-10 border-border/40 bg-muted/30 focus:bg-background focus:border-primary/60 transition-all duration-200 rounded-lg" /></div>
            <div className="flex items-center gap-3">
              <div className="relative flex-1"><ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" /><Input placeholder="Captcha Code" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} required maxLength={4} className="h-11 pl-10 border-border/40 bg-muted/30 focus:bg-background focus:border-primary/60 transition-all duration-200 rounded-lg" /></div>
              <span className="font-mono font-bold text-lg px-5 py-2 rounded-lg select-none tracking-[0.3em] cursor-pointer hover:scale-105 transition-transform duration-200 text-white" style={{ background: "linear-gradient(135deg, hsl(210,100%,30%), hsl(210,100%,40%))" }} title="Click to refresh" onClick={() => setCaptcha(generateCaptcha())}>{captcha}</span>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full h-12 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] text-white relative overflow-hidden group" style={{ background: "linear-gradient(135deg, hsl(210,100%,30%), hsl(210,100%,40%))" }}>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              {isSubmitting ? (<><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Processing...</>) : (<><Send className="w-4 h-4" /> Submit Now!</>)}
            </button>
            <p className="text-center text-[11px] text-muted-foreground/60 pt-1">🔒 Your information is secure and will never be shared</p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CataloguePopup;
