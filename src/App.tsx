import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./provider/AuthProvider";
import { GlobalStyles } from "./styles/GlobalStyles";
import WelcomePage from "./pages/WelcomePage";
import BestSellersPage from "./pages/BestSellersPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route
              path="/best-sellers/:category"
              element={<BestSellersPage />}
            />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
