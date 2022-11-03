import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navegation from "./components/Navegation";
import SmsList from "./components/SmsList";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navegation />

      <div className="container p-4">
        <SmsList />
      </div>

      <Footer />


    </div>
  );
}

export default App;
