import { ArrowRight } from 'lucide-react';

function ChatsCard({ avatars = [] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <h3 className="font-medium text-gray-800 mb-2">Chats</h3>
      <div className="text-sm text-gray-500 mb-4">2 unread messages</div>

      <div className="flex space-x-2 mb-4">
        {avatars.map((avatar) => (
          <div key={avatar.index } className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden px-2">
            <img
              src={avatar.avatarUrl}
              alt={`Chat avatar ${avatar.index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center text-sm text-gray-500 cursor-pointer hover:text-gray-700">
        <span>All messages</span>
        <ArrowRight size={16} className="ml-1" />
      </div>
    </div>
  );
}

export default ChatsCard;





// JAVASCRIPT
//-> DOM, SELECTORS
//-> VARIABLES, FUNCTIONS
//-> DATA TYPES, EVENT HANDLER & LISTENER
//-> LOOPS, IF, SWITCH
//-> CLASSES



