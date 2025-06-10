import { Star } from "lucide-react";

const StarRating = ({ rating, reviews }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="flex items-center">
      {renderStars(rating)}
      <span className="text-sm text-gray-500 ml-1">({reviews})</span>
    </div>
  );
};


export default StarRating;