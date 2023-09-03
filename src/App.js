import './App.css';
import CreateClient from './pages/createClient/createClient';
import AddSell from './pages/addSells/AddSell';
import Home from './pages/home/Home';
import ListClients from './pages/listClients/ListClients';
import ListSells from './pages/listSells/ListSells';
import GenerateReports from './pages/generateReport/Reports';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/create/client",
    element:<CreateClient/>,
  },
  {
    path: "/add/sells",
    element:<AddSell/>,
  },
  {
    path: "/clients",
    element:<ListClients/>,
  },
  {
    path: "/sells",
    element:<ListSells/>,
  },
  {
    path: "/reports",
    element:<GenerateReports/>,
  }
]);


function App() {
  console.log('callled react app')
  return (  
    <RouterProvider router={router} />
  )
}

export default App;
