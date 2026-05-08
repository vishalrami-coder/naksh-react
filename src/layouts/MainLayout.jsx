import Header from "../components/Header";
import Footer from "../components/Footer";
import { StickyButtons } from "../components/StickyButtons";
import { useState } from "react";

function MainLayout({ children }) {
  const [showInquiry, setShowInquiry] = useState(false);

  return (
    <>
      <Header OnShowInquiry={()=>setShowInquiry(true)} />
      <main>{children}</main>
      <StickyButtons
        show={showInquiry}
        setShow={setShowInquiry}
      />
      <Footer OnShowInquiry={()=>setShowInquiry(true)} />
    </>
  );
}

export default MainLayout;