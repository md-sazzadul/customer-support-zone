import { toast } from "react-toastify";

const TicketCard = ({ ticket, isAdded, onAddToTask }) => {
  const statusClasses =
    ticket.status === "Open"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";

  const statusDot = ticket.status === "Open" ? "bg-green-500" : "bg-yellow-500";

  const priorityClass =
    ticket.priority === "high"
      ? "text-red-500"
      : ticket.priority === "medium"
        ? "text-yellow-500"
        : "text-green-500";

  const shortDesc =
    ticket.description.length > 110
      ? ticket.description.slice(0, 110) + "..."
      : ticket.description;

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
      className={`rounded-xl p-4 cursor-pointer transition-all duration-150 border shadow-sm
        ${
          isAdded
            ? "border-violet-300 bg-violet-50"
            : "border-gray-200 bg-white hover:border-violet-300 hover:shadow-md hover:-translate-y-0.5"
        }`}
    >
      <div className="flex justify-between items-start gap-2 mb-2">
        <h3 className="text-sm font-semibold text-gray-900 leading-snug flex-1">
          {ticket.title}
        </h3>

        <span
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 ${statusClasses}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${statusDot}`} />
          {ticket.status}
        </span>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed mb-4">{shortDesc}</p>

      <div className="flex justify-between items-center text-xs">
        <div className="flex gap-2 items-center">
          <span className="text-gray-400">#{ticket.id}</span>

          <span
            className={`font-bold uppercase tracking-wide ${priorityClass}`}
          >
            {ticket.priority} priority
          </span>
        </div>

        <div className="flex gap-3 text-gray-400 items-center">
          <span>{ticket.customer}</span>
          <span className="flex items-center gap-1">
            <span>📅</span>
            <span>{ticket.createdAt}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
