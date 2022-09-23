import { Route, Routes } from "react-router-dom";
import MainNavigation from "./Components/Layout/MainNavigation";
import AddressPage from "./Pages/AddressPage";
import HomePage from "./Pages/HomePage";
import MeasurePage from "./Pages/MeasurePage";
import RoutePage from "./Pages/RoutePage";

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/address" element={ <AddressPage /> } />
        <Route path="/measure" element={ <MeasurePage /> } />
        <Route path="/route" element={ <RoutePage /> } />
      </Routes>
    </>
  );
}

export default App;
