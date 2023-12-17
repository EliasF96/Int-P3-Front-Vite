
import './App.css'
import Contact from './components/Contact';
import './styles/App.css';
import {useRoutes, Link} from "react-router-dom"
import { Home } from './components/Home';
import { Alta } from './components/Alta';


function App() {
  // console.log(process.env.REACT_APP_BACKED_URL)
  // console.log(process.env.REACT_APP_BACKED_URL)
  let element = useRoutes([
    { path: "/", element: <Home/> },
    { path: "/Alta", element: <Alta/> },
    { path: "/Contact", element: <Contact /> },
  ]);
  return element
}
export default App;
