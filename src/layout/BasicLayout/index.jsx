import Footer from "../../Footer";
import Header from "../../Header";

const BasicLayout = ({ children, nav, setNav }) => {
  return (
    <>
      <div>
        <Header nav={nav} setNav={setNav} />
        <div className="">{children}</div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BasicLayout;
