import { Route, Routes } from "react-router-dom";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { HomePage } from "./HomePage/HomePage";
import { SecondPage } from "./SecondPage/SecondPage";
import {NotFound} from './components/NotFound'
function App() {
  return (
    <>
      <HamburgerMenu />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/second-page/*" element={<SecondPage/>}/>
          <Route path="*" element={<NotFound />} />
          </Routes>{" "}
      </main>
    </>
  );
}

export default App;
