import { ArrowRight } from "lucide-react";

export default function StatCard({ title, value, subtext, progress, link }) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 p-4">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <div className="mt-2 flex items-center">
              <div className="text-2xl font-bold ">{value}</div>
              {progress && (
                <div className="ml-auto">
                  <div className="h-8 w-8 relative">
                    <div className="absolute inset-0 rounded-full border-4 border-yellow-100"></div>
                    <div 
                      className="absolute inset-0 rounded-full border-4 border-yellow-400" 
                      style={{ 
                        clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`, 
                        opacity: progress / 100 
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            {subtext && <p className="text-xs text-gray-500 mt-1">{subtext}</p>}
          </div>
          <div className="mt-6 flex items-center text-sm text-red-900">
            <span>{link}</span>
            <ArrowRight size={16} className="ml-1" />
          </div>
        </div>
      </div>
    );
}