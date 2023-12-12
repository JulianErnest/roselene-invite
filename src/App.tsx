import { useState } from "react";
import "./App.css";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";


function App() {
  const [currentPage, setCurrentPage] = useState(1);

  if (currentPage === 1) {
    return <Page1 handleBack={() => null} handleNext={() => setCurrentPage(2)} currentPage={currentPage} />
  } else if (currentPage === 2) {
    return <Page2 handleBack={() => setCurrentPage(1)} handleNext={() => setCurrentPage(3)} currentPage={currentPage} />
  } else if (currentPage === 3) {
    return <Page3 handleBack={() => setCurrentPage(2)} handleNext={() => setCurrentPage(4)} currentPage={currentPage} />
  } else {
    return <Page4 handleBack={() => setCurrentPage(3)} handleNext={() => null} currentPage={currentPage} />
  }
}

export default App;
