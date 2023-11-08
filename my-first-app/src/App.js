import { Route, Routes } from "react-router-dom";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { HomePage } from "./HomePage/HomePage";
import { SecondPage } from "./SecondPage/SecondPage";

function App() {
  return (
    <>
      <HamburgerMenu />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/second-page" element={<SecondPage/>}/>
          </Routes>{" "}
      </main>
    </>
  );
}

export default App;
