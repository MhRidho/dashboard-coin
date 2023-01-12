import Topbar from "./Topbar";
import Content from "./Content";
import Footer from "./Footer";

export default function ContentFluid() {
  return (
    <div className="w-4/5">
      <Topbar />
      <Content />
      <Footer />
    </div>
  );
}
