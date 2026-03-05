import { toast } from "react-toastify";

const TaskStatus = ({ taskStatusItems, resolvedItems, onComplete }) => {
  const handleComplete = (ticket) => {
    onComplete(ticket);
    toast.success(`${ticket.title} has been resolved! 🎉`);
  };

  return (
    <div>
      <h2 className="font-semibold text-base mb-1">Task Status</h2>

      {taskStatusItems.length === 0 ? (
        <p className="text-sm text-gray-400 mb-6">
          Select a ticket to add to Task Status
        </p>
      ) : (
        <p className="text-sm text-gray-400 mb-6">
          {taskStatusItems.length} ticket{taskStatusItems.length > 1 ? "s" : ""}{" "}
          in progress
        </p>
      )}

      {/* In-Progress Tasks */}
      <div className="space-y-4 mb-8">
        {taskStatusItems.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <p className="font-semibold text-sm mb-3">{ticket.title}</p>
            <button
              onClick={() => handleComplete(ticket)}
              className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold text-sm py-2 px-4 rounded-lg transition-colors duration-150"
            >
              Complete
            </button>
          </div>
        ))}
      </div>

      {/* Resolved Tasks */}
      <h3 className="font-semibold text-base mb-2">Resolved Task</h3>

      {resolvedItems.length === 0 ? (
        <p className="text-gray-400 text-sm">No resolved tasks yet.</p>
      ) : (
        <div className="space-y-3">
          {resolvedItems.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm flex items-center gap-3"
            >
              <span className="text-green-500 text-lg">✔</span>
              <p className="text-sm font-medium text-green-800">
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
