import AmbientBlobBackground from "./components/AmbientBlobBackground";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import SideNavRight from "./components/SideNavRight";
import Content from "./components/Content";

const App = () => {
  return (
    <main className="h-screen w-full overflow-hidden">
      <AmbientBlobBackground
        className="flex"
        contentClassName="relative z-10 flex h-full w-full min-h-0"
      >
        <SideNav />
        <div className="flex flex-col grow min-w-0 h-full min-h-0">
          <Header />
          <Content />
        </div>
        <SideNavRight />
      </AmbientBlobBackground>
    </main>
  );
};

export default App;
