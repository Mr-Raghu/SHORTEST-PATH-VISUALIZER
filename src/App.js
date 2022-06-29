import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import "./index.css";

function App() {
    return (<div >
        <Header />
        <div className="App">
          <PathfindingVisualizer></PathfindingVisualizer>
        </div>
        <Footer />
    </div>

    );
}

export default App;