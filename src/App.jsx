import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";import "./index.css";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<Home/>}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />

}

export default App
