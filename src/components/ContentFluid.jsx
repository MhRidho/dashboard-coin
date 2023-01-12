import Topbar from "./Topbar";
import Content from "./Content";
import Footer from "./Footer";

const ContentFluid = () => {
  return (
    <div className="ml-16 w-full">
      <Topbar />
      <Content />
      <Footer />
    </div>
  );
}

export default ContentFluid;