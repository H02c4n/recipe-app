import AppRouter from "./router/AppRouter";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useState } from "react";
function App() {
  const [isUser, setIsUser] = useState(false);

  const changeUSer = () => {
    setIsUser(true);
  };

  const logout = () => {
    setIsUser(false);
  };

  return (
    <div style={{ backgroundColor: "#00F5FF" }}>
      <Navbar isUser={isUser} logout={logout} />
      <AppRouter isUser={isUser} changeUSer={changeUSer} />
      <Footer />
    </div>
  );
}

export default App;
