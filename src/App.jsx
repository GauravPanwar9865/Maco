import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./cart";
import Login from "./login";
import DASHBOARD from "./dashbord";
import ManageOrder from "./manageorder";
import Tracksply from "./tracksply";
import Contant from "./contant";
import CompletePage from "./carrrt/placeorder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashbord" element={<DASHBOARD />} />
          <Route path="/order" element={<ManageOrder />} />
          <Route path="/track" element={<Tracksply />} />
          <Route path="/contant" element={<Contant />} />
          <Route path="/carrt" element={<CompletePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
