import React, { useState } from "react";
import MenuButton from "./component/MenuButton";
import Home from "./page/Home";
import Menu from "./component/Menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Portfolio from "./page/Portfolio";

function App() {
  const [ClickSidebar, setClickSidebar] = useState(true);
  const MoveSidebar = () => {
    setClickSidebar(!ClickSidebar);
  };
  console.log(ClickSidebar);

  return (
    <>
      <div className="">
        <MenuButton onClick={MoveSidebar} />

        <div className="absolute ">
          <Menu ClickSidebar={ClickSidebar} />
        </div>
      </div>
      <div className="min-h-screen">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Portfolio",
    element: <Portfolio />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

export default App;
