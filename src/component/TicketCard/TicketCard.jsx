import { toast } from "react-toastify";

const TicketCard = ({ ticket, isAdded, onAddToTask }) => {
  const statusColor =
    ticket.status === "Open" ? "badge-success" : "badge-warning";

  const priorityColor =
    ticket.priority === "high"
      ? "text-red-500"
      : ticket.priority === "medium"
        ? "text-yellow-500"
        : "text-green-500";

  const handleClick = () => {
    if (isAdded) {
      toast.info(`${ticket.title} is already in Task Status!`, { icon: "ℹ️" });
      return;
    }

    const added = onAddToTask(ticket);
    if (added) {
      toast.success(`${ticket.title} added to Task Status!`, { icon: "✅" });
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`card bg-base-100 shadow-sm border transition-all duration-200 cursor-pointer ${isAdded ? "border-purple-400 bg-purple-50" : "border-gray-200 hover:border-purple-300 hover:shadow-md hover:-translate-y-0.5"}`}
    >
      <div className="card-body p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-sm">{ticket.title}</h3>

          <div className={`badge ${statusColor}`}>{ticket.status}</div>
        </div>

        <p className="text-sm text-gray-500">{ticket.description}</p>

        <div className="flex justify-between items-center mt-3 text-xs">
          <div className="flex gap-3 items-center">
            <span className="text-gray-400">#{ticket.id}</span>

            <span className={`font-semibold uppercase ${priorityColor}`}>
              {ticket.priority} priority
            </span>
          </div>

          <div className="flex gap-3 text-gray-400 items-center">
            <span>{ticket.customer}</span>

            <span>📅 {ticket.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
