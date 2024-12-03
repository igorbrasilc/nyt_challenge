import { useParams } from "react-router-dom";

const BestSellersPage = () => {
  const { category } = useParams();

  return (
    <div>
      <h1>Best Sellers: {category}</h1>
      {/* Add your best sellers list content here */}
    </div>
  );
};

export default BestSellersPage;
