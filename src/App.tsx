import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./provider/AuthProvider";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Olá</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
