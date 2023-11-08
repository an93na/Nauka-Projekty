import { Route, Routes } from "react-router-dom";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { HomePage } from "./HomePage/HomePage";
import { Com } from "./components/com";

function App() {
  return (
    <>
      <HamburgerMenu />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="com" element={<Com/>}/>
          </Routes>{" "}
      </main>
    </>
  );
}

export default App;
