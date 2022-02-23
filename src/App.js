import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MainSection from "./components/MainSection";
import MyFooter from "./components/MyFooter";
import NewsMain from "./components/NewsMain";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <NewsMain/>
      {/* <MainSection />
      <MyFooter /> */}
    </div>
  );
}

export default App;
