import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginCard from "./components/LoginCard";
import SignupCard from "./components/SignupCard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Container>
          <LoginCard />
        </Container>
      ),
    },
    {
      path: "/signup",
      element: (
        <Container>
          <SignupCard />
        </Container>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
