import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";import "./index.css";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Service from "./Components/Pages/Service";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />

}

export default App
