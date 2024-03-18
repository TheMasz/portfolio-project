import "./global.css";
import Homepage from "./_root/pages/Homepage";
import Portfolio from "./_root/pages/Portfolio";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className=" relative h-full primary-bg  md:h-screen md:overflow-y-hidden">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/portfolio-project/" element={<Homepage />} />
          <Route path="/portfolio-project/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
