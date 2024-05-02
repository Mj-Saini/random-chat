import "./App.css";
import MainPage from "./components/MainPage";
import ChooseGender from "./components/ChooseGender";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="fixed top-0 left-0 h-screen w-screen bg-white z-10">
              <ChooseGender />
            </div>
          }
        />
        <Route path="/chat" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
