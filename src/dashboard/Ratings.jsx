const Rating = ({ rating, reviews }) => (
  <div className="flex items-center space-x-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))}
    <span className="text-sm text-gray-600 ml-1">({reviews})</span>
  </div>
);

export default Rating;