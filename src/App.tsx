import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./provider/AuthProvider";
import { GlobalStyles } from "./styles/GlobalStyles";
import WelcomePage from "./pages/WelcomePage";
import BestSellersPage from "./pages/BestSellersPage";

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/best-sellers/:category" element={<BestSellersPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
