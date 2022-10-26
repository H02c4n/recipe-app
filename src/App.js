import AppRouter from "./router/AppRouter";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useState } from "react";
function App() {
  const [isUser, setIsUser] = useState(true);

  return (
    <div style={{ backgroundColor: "#00F5FF" }}>
      <Navbar isUser={isUser} />
      <AppRouter user={isUser} setUser={setIsUser} />
      <Footer />
    </div>
  );
}

export default App;
