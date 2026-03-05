const TicketCard = ({ ticket, onCardClick, ticketStatuses }) => {
  const effectiveStatus = ticketStatuses[ticket.id] || ticket.status;

  const isResolved = effectiveStatus === "Resolved";
  const isInProgress = effectiveStatus === "In-Progress";

  const statusClasses =
    effectiveStatus === "Open"
      ? "bg-green-100 text-green-700"
      : effectiveStatus === "In-Progress"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-gray-100 text-gray-500";

  const statusDot =
    effectiveStatus === "Open"
      ? "bg-green-500"
      : effectiveStatus === "In-Progress"
        ? "bg-yellow-500"
        : "bg-gray-400";

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

  const cardBorder = isResolved
    ? "border-gray-200 bg-gray-50 opacity-60 cursor-default"
    : isInProgress
      ? "border-violet-300 bg-violet-50 cursor-pointer"
      : "border-gray-200 bg-white hover:border-violet-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer";

  return (
    <div
      onClick={() => !isResolved && onCardClick(ticket)}
      className={`rounded-xl p-4 transition-all duration-150 border shadow-sm
        ${cardBorder}`}
    >
      <div className="flex justify-between items-start gap-2 mb-2">
        <h3 className="text-sm font-semibold text-gray-900 leading-snug flex-1">
          {ticket.title}
        </h3>

        <span
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 ${statusClasses}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${statusDot}`} />
          {effectiveStatus}
        </span>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed mb-4">{shortDesc}</p>

      <div className="flex justify-between items-center text-xs">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">#{ticket.id}</span>
          <span
            className={`font-bold uppercase tracking-wide ${priorityClass}`}
          >
            {ticket.priority} priority
          </span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
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
