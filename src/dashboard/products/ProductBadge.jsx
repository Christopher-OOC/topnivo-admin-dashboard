const ProductBadge = ({ type, discount }) => {
  const badges = {
    hot: { bg: 'bg-red-500', text: 'HOT' },
    bestSale: { bg: 'bg-blue-500', text: 'BEST SALE' },
    sale: { bg: 'bg-green-500', text: 'SALE' }
  };

  return (
    <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
      {type && (
        <span className={`${badges[type]?.bg} text-white px-2 py-1 text-xs rounded`}>
          {badges[type]?.text}
        </span>
      )}
      {discount && (
        <span className="bg-yellow-500 text-white px-2 py-1 text-xs rounded">
          {discount}
        </span>
      )}
    </div>
  );
};

export default ProductBadge;