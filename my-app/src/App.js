import { useState } from "react";
import { StronaStartowa } from "./components/StronaStartowa";
import { StronaGlowna } from "./components/StronaGlowna";

function App() {
  const [dalej, setDalej] = useState(false)
  return (
    <div>
      {dalej ? <StronaGlowna /> : <StronaStartowa setDalej={setDalej}/>}
    </div>
  );
}

export default App;
