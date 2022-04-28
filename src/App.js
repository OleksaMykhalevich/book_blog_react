import "./App.css";
import { Header } from "./containers/Header/Header";
import { Main } from "./containers/Main/Main";
import { Footer } from "./containers/Footer/Footer";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
