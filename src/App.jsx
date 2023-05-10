import Router from './router';
import NavBar from './components/Pages/NavBar';
import { BrowserRouter } from 'react-router-dom';


function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <div className="bg">
      <BrowserRouter>
        <Router/>
        <NavBar/>
      </BrowserRouter>
    </div>
  );
}

export default App
