const ActivityItem = ({ icon: Icon, title, timestamp, bgColor }) => {
  return (
    <div className="flex items-start space-x-4 p-4 border-b border-gray-100 last:border-b-0">
      <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-5 h-5 text-gray-600" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 mb-1">{title}</p>
        <p className="text-xs text-gray-500">{timestamp}</p>
      </div>
    </div>
  );
};

export default ActivityItem;