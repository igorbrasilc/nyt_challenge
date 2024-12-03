import { useParams } from "react-router-dom";
import { useBestSellers } from "../hooks/useBestSellers";
import Loading from "../components/shared/Loading";
import BestSellers from "../components/BestSellers";

const BestSellersPage = () => {
  const { category } = useParams();
  const { books, copyright, loading, error } = useBestSellers(category ?? "");

  if (loading) return <Loading />;

  return <BestSellers books={books} error={error} copyright={copyright} />;
};

export default BestSellersPage;
