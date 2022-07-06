import Sidebar from "../modules/sidebar";
import Footer from "../modules/footer";

function Default(props) {
  return (
    <div className="w-screen h-screen bg-neutral-900 pt-5 pb-[70px] pl-[190px] pr-10 flex flex-col justify-between">
      <Sidebar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Default;
