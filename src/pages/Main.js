import { Routes, Route } from "react-router-dom";
import Counter from "../components/Counter";

const Main = () => {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    </div>
  );
};

export default Main;
