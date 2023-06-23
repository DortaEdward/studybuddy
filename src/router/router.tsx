import { createHashRouter } from "react-router-dom";
import App from "../App";


const Home = () => { return(<div>Home</div>)}

const router = createHashRouter([
  { path:'/',
    element: <App />,
    children:undefined,
  }
],) 

export default router;