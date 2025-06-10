// const ImageCard = ({ image, alt, animationState }) => {
//     // Animation states: 'entering', 'active', 'exiting', 'inactive'
//     const getAnimationClasses = () => {
//       switch (animationState) {
//         case 'entering':
//           return 'opacity-100 translate-x-0 scale-100 z-10';
//         case 'active':
//           return 'opacity-100 translate-x-0 scale-100 z-20';
//         case 'exiting':
//           return 'opacity-0 -translate-x-12 scale-95 z-10';
//         default:
//           return 'opacity-0 translate-x-12 scale-95 z-0';
//       }
//     };

//     return (
//       <div 
//         className={`absolute top-0 left-0 w-full h-full transform transition-all duration-700 ease-in-out ${getAnimationClasses()}`}
//       >
//         <div className="border-4 border-amber-400 rounded-sm overflow-hidden h-full">
//           <img 
//             src={image} 
//             alt={alt}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     );
//   };

//   export default ImageCard;

export default function ImageCard({ image, alt }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
    <div className="border-4 border-amber-400 rounded-sm overflow-hidden h-full">

      <img
        src={image}
        alt={alt}
        className="object-contain w-full h-full"
      />
    </div>
    </div>
  );
}
