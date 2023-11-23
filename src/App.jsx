import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Visualizer from "./Components/Visualizer";

export default function App() {
  return (
    <div className={`h-screen w-screen`}>
      <Header />
      <Visualizer/>
      <Footer />
    </div>
  );
}
