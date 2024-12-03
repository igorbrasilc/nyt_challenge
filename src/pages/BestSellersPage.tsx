import { useNavigate, useParams } from "react-router-dom";
import BestSellers from "../components/BestSellers";
import Loading from "../components/shared/Loading";
import { useAuth } from "../hooks/useAuth";
import { useBestSellers } from "../hooks/useBestSellers";

const BestSellersPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { category } = useParams();
  const { books, copyright, loading, error } = useBestSellers(category ?? "");

  if (loading) return <Loading />;

  if (!user?.name || !category) {
    alert("You must be logged in to view this page");
    navigate("/");
    return null;
  }

  return <BestSellers books={books} error={error} copyright={copyright} />;
};

export default BestSellersPage;
