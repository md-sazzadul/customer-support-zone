import { toast } from "react-toastify";

const TaskStatus = ({ taskStatusItems, resolvedItems, onComplete }) => {
  const handleComplete = (ticket) => {
    onComplete(ticket);
    toast.success(`${ticket.title} has been resolved! 🎉`);
  };

  return (
    <div>
      <h2 className="text-base font-bold text-gray-900 mb-4">Task Status</h2>

      {taskStatusItems.length === 0 && (
        <p className="text-xs text-gray-400 mb-5">
          Select a ticket to add to Task Status
        </p>
      )}

      {/* In-Progress Tasks */}
      <div className="flex flex-col gap-3 mb-8">
        {taskStatusItems.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <p className="text-sm font-semibold text-gray-900 mb-3">
              {ticket.title}
            </p>
            <button
              onClick={() => handleComplete(ticket)}
              className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold text-sm py-2 px-4 rounded-lg transition-colors cursor-pointer"
            >
              Complete
            </button>
          </div>
        ))}
      </div>

      {/* Resolved Tasks */}
      <h3 className="text-base font-bold text-gray-900 mb-3">Resolved Task</h3>

      {resolvedItems.length === 0 ? (
        <p className="text-xs text-gray-400">No resolved tasks yet.</p>
      ) : (
        <div className="flex flex-col gap-2">
          {resolvedItems.map((ticket) => (
            <div key={ticket.id} className="bg-indigo-50 rounded-lg px-4 py-3">
              <p className="text-sm font-medium text-gray-700">
                {ticket.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskStatus;
