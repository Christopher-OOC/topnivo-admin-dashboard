export default function NewDealsCard() {
    const deals = [
      'Fruit2Go', 'Marshall\'s MKT', 'CCNT', 'Joana Mini-market', 
      'Little Brazil Vegan', 'Target', 'Organic Place', 'Morello\'s'
    ];
    
    return (
      <div className="bg-white rounded-xl border border-gray-100 p-3 pb-8">
        <h3 className="font-medium text-gray-800 mb-4">New deals</h3>
        
        <div className="grid grid-cols-5 gap-2 p-2">
          {deals.map((deal, index) => (
            <div key={index} className="flex items-center text-sm">
              <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded flex items-center justify-center mr-2">
                +
              </div>
              <span>{deal}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

