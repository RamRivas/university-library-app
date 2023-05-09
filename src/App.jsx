import Page from './components/Pages/Page';
import Router from './router';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="bg">
      <Router><Page/></Router>
    </div>
  );
}

export default App
