import { Route, Routes } from "react-router";
import ImpressumScreen from "./screens/ImpressumScreen";
import MainScreen from "./screens/MainScreen";

export default function SwitchRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/impressum" element={<ImpressumScreen />} />
    </Routes>
  );
}
