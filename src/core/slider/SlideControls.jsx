import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

const SlideControls = ({ total, activeIndex, onPrev, onNext, onSelect }) => {
    return (
      <div className="flex justify-between mt-6">
        <div className="flex space-x-2">
          <button 
            onClick={onPrev}
            className="p-2 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={onNext}
            className="p-2  transition"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          {Array.from({ length: total }).map((_, index) => (
            <button 
              key={index}
              onClick={() => onSelect(index)}
              className={`w-8 h-8  flex items-center justify-center transition ${
                index === activeIndex ? 'border-amber-400 text-amber-400' : 'border-gray-300 text-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <Circle size={16} />
            </button>
          ))}
        </div>
      </div>
    );
  };
  export default SlideControls;