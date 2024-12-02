import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./provider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Olá</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
