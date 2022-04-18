import "./App.css";
import { Header } from "./containers/Header/Header";
import { Main } from "./containers/Main/Main";
import { Footer } from "./containers/Footer/Footer";
import { useState } from "react";

function App() {
  const [likeProductsState, setLikeProductsState] = useState({
    1: false,
    2: false,
  });

  const changeLikeState = (id) => {
    setLikeProductsState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <>
      <Header />
      <Main
        changeLikeState={changeLikeState}
        likeProductsState={likeProductsState}
      />
      <Footer />
    </>
  );
}

export default App;
