import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';

export default function GrowthCard() {
  const data = [
    { name: 'Jan', value: 40 },
    { name: 'Feb', value: 35 },
    { name: 'Mar', value: 60 },
    { name: 'Apr', value: 45 },
    { name: 'May', value: 55 },
    { name: 'Jun', value: 50 },
    { name: 'Jul', value: 70 },
    { name: 'Aug', value: 65 }
  ];

  return (
    <section>
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800">Growth</h3>
        <div className="flex items-center text-sm text-gray-500">
          <span className="font-medium">Yearly</span>
          <ChevronDown size={16} className="ml-1" />
        </div>
      </div>

      <div className="h-32 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="rgba(74, 222, 128, 0.8)"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
    </div>
    <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="flex flex-col bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-sm text-gray-500">Top month</div>
          <div className="text-lg font-semibold text-amber-700">April</div>
          <div className="text-xs text-gray-400">2025</div>
        </div>
        <div className="flex flex-col  bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-sm text-gray-500">Top year</div>
          <div className="text-lg font-semibold text-amber-700">2025</div>
          <div className="text-xs text-gray-400">96K sold so far</div>
        </div>
        <div className="flex flex-col bg-white py-1 rounded-lg border border-gray-200">
          <div className="text-sm text-gray-500 ">Top buyer</div>
          <div className="flex items-center justify-center mt-1">
            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
              <img
                src="/api/placeholder/32/32"
                alt="Top buyer"
                className="w-full h-full object-cover text-left"
              />
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-1 text-left p-1 pb-0">Maggie Johnson</div>
          <div className="text-xs text-gray-400 p-1">Oasis Organic Inc.</div>
        </div>
      </div>

    </section>
  );
}
