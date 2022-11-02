import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navegation from "./components/Navegation";
import SmsList from "./components/SmsList";
import CreatedSms from './components/CreatedSms';


function App() {
  return (
    <div className="App">
      <Navegation />

    <div className="container p-4">
    <SmsList />
      
      <CreatedSms />
    </div>

    </div>
  );
}

export default App;
