import { Suspense, use, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import TaskStatus from "./component/TaskStatus/TaskStatus";
import TicketList from "./component/TicketList/TicketList";

const fetchTickets = async () => {
  const response = await fetch("/tickets.json");
  return response.json();
};

const ticketsPromise = fetchTickets();

function AppContent() {
  const allTickets = use(ticketsPromise);

  const initialInProgress = allTickets.filter(
    (t) => t.status === "In-Progress",
  );
  const initialStatuses = Object.fromEntries(
    initialInProgress.map((t) => [t.id, "In-Progress"]),
  );

  const [ticketStatuses, setTicketStatuses] = useState(initialStatuses);
  const [inProgressItems, setInProgressItems] = useState(initialInProgress);
  const [resolvedItems, setResolvedItems] = useState([]);
  const [removedIds, setRemovedIds] = useState(new Set());

  const visibleTickets = allTickets.filter((t) => !removedIds.has(t.id));

  const handleCardClick = (ticket) => {
    const overridden = ticketStatuses[ticket.id];

    if (overridden === "Resolved") {
      toast.info(`${ticket.title} is already resolved!`, { icon: "ℹ️" });
      return;
    }

    const effectiveStatus = overridden || ticket.status;
    if (effectiveStatus === "In-Progress") {
      toast.info(`${ticket.title} is already In-Progress!`, { icon: "ℹ️" });
      return;
    }

    setTicketStatuses((prev) => ({ ...prev, [ticket.id]: "In-Progress" }));
    setInProgressItems((prev) => [
      ...prev,
      { ...ticket, status: "In-Progress" },
    ]);
    toast.success(`${ticket.title} moved to In-Progress!`, { icon: "🔄" });
  };

  const handleComplete = (ticket) => {
    setTicketStatuses((prev) => ({ ...prev, [ticket.id]: "Resolved" }));
    setInProgressItems((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolvedItems((prev) => [...prev, { ...ticket, status: "Resolved" }]);
    setRemovedIds((prev) => new Set([...prev, ticket.id]));
    toast.success(`${ticket.title} has been resolved! 🎉`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
          <Banner
            title="In-Progress"
            count={inProgressItems.length}
            type="progress"
          />
          <Banner
            title="Resolved"
            count={resolvedItems.length}
            type="resolved"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-2">
            <TicketList
              tickets={visibleTickets}
              onCardClick={handleCardClick}
              ticketStatuses={ticketStatuses}
            />
          </div>

          <div>
            <TaskStatus
              taskStatusItems={inProgressItems}
              resolvedItems={resolvedItems}
              onComplete={handleComplete}
            />
          </div>
        </div>
      </div>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
          Loading tickets...
        </div>
      }
    >
      <AppContent />
    </Suspense>
  );
}

export default App;
