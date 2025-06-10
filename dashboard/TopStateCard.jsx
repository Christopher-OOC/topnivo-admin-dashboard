function TopStatesCard() {
    const states = [
      { name: 'LAGOS', value: 120000 },
      { name: 'ABUJA', value: 80000 },
      { name: 'KANO', value: 70000 },
      { name: 'OYO', value: 50000 }
    ];
  
    // const maxValue = Math.max(...states.map(s => s.value));
  
    // return (
    //   <div className="bg-white rounded-lg border border-gray-200 p-4">
    //     <h3 className="font-medium text-gray-800 mb-4">Top states</h3>
  
    //     <div className="space-y-2">
    //       {states.map((state, index) => {
    //         const barHeight = (state.value / maxValue) * 100; // Percentage height
  
    //         return (
    //           <div key={index} className="flex items-end h-20 space-x-2">
    //             <div className="w-12 py-1 px-3 bg-amber-100 text-amber-800 rounded text-center text-xs">
    //               {state.name}
    //             </div>
    //             <div className="flex-1 flex items-end">
    //               <div
    //                 className="bg-amber-400 rounded w-full"
    //                 style={{ height: `${barHeight}%` }}
    //               ></div>
    //             </div>
    //             <div className="ml-2 text-gray-500 text-sm">{(state.value / 1000) + 'K'}</div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // );
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <h3 className="font-medium text-gray-800 mb-4">Top states</h3>
          
          <div className="space-y-2">
            {states.map((state, index) => (
              <div key={index} className="flex items-center">
                <div className="py-1 px-7 bg-amber-100 text-amber-800 rounded">
                  {state.name}
                </div>
                <div className="ml-auto text-gray-500 text-sm">{state.value}</div>
              </div>
            ))}
          </div>
        </div>
      );
  }
  
  export default TopStatesCard;