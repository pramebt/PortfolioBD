import React, { useState } from "react";
import MenuButton from "./component/MenuButton";
import Home from "./page/Home";
import Menu from "./component/Menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Portfolio from "./page/Portfolio";

function App() {
  const [ClickSidebar, setClickSidebar] = useState(false);
  const MoveSidebar = () => {
    setClickSidebar(!ClickSidebar);
  };
  console.log(ClickSidebar);

  return (
    <>
      <div className="">
        <MenuButton onClick={MoveSidebar} />

        <div className="absolute ">
          <Menu 
          ClickSidebar={ClickSidebar} 
          setClickSidebar={setClickSidebar}/>
        </div>
      </div>
      
        <RouterProvider router={router} />
      
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
 
]);

export default App;
