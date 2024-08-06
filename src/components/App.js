import { Form, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import UserDetails from "./UserDetails";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/users/add" element={<Form />} />
      </Routes>
    </div>
  );
}
export default App;
