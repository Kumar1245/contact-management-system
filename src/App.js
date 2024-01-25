import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import routes from "./Routes";
import Layout from "./Layout";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={<Layout component={route.element} />}
              />
            );
          })}
          {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addcontact" element={<AddContact />} />
          <Route path="/contactlist" element={<ContactList />} />
          <Route path="/detailcontact" element={<ContactDetail />} />
          <Route path="/editcontact" element={<EditContact />} />
        </Routes> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
