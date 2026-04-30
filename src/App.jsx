import StickyButtons from "./components/StickyButtons";
import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <MainLayout>
      <AppRoutes />
      <StickyButtons onInquiryOpen={() => setInquiryOpen(true)} />
    </MainLayout>
  );
}

export default App;