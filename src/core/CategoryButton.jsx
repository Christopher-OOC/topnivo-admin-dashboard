const CategoryButton = ({ category, isActive, onClick }) => {
    return (
      <button
        onClick={() => onClick(category)}
        className={`px-6 py-2 rounded transition-colors ${
          isActive 
            ? 'bg-white border border-gray-300 text-gray-800' 
            : 'bg-yellow-400 text-gray-800'
        }`}
      >
        {category}
      </button>
    );
  };
  
  export default CategoryButton;