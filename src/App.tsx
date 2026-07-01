import AmbientBlobBackground from "./components/AmbientBlobBackground";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import SideNavRight from "./components/SideNavRight";
import Content from "./components/Content";

const App = () => {
  return (
    <main className="h-screen w-full overflow-hidden max-md:h-auto max-md:min-h-screen max-md:overflow-x-hidden max-md:overflow-y-auto">
      <AmbientBlobBackground
        className="flex max-md:min-h-screen"
        contentClassName="relative z-10 flex h-full w-full min-h-0 max-md:flex-col max-md:h-auto"
      >
        <SideNav />
        <div className="flex flex-col grow min-w-0 h-full min-h-0 max-md:h-auto">
          <Header />
          <Content />
        </div>
        <SideNavRight />
      </AmbientBlobBackground>
    </main>
  );
};

export default App;
