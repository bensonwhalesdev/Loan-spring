// NotificationPanel.tsx
import React from 'react';
import { Bell, Info } from 'lucide-react';

const notifications = [
  // { icon: <Info className="w-4 h-4 text-blue-500" />, message: 'Loan payment due Aug 10', time: '2h ago' },
  { icon: <Bell className="w-4 h-4 text-orange-500" />, message: 'New loan offer available', time: '5h ago' },
];

const NotificationPanel = () => {
  return (
    <div className="w-full md:w-[300px] bg-white rounded-2xl shadow p-4">
      <h3 className="font-semibold mb-4 text-lg">Notifications</h3>
      <ul className="space-y-3">
        {notifications.map((note, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
            {note.icon}
            <div>
              <p>{note.message}</p>
              <span className="text-xs text-gray-400">{note.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPanel;