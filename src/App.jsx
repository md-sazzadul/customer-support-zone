import { Suspense, useState } from "react";
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

function App() {
  const [ticketStatuses, setTicketStatuses] = useState({});
  const [inProgressItems, setInProgressItems] = useState([]);
  const [resolvedItems, setResolvedItems] = useState([]);

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
    toast.success(`${ticket.title} has been resolved! 🎉`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-0">
        <div className="grid grid-cols-2 gap-5 mb-8">
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

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <Suspense
              fallback={
                <div className="text-center py-10 text-gray-400 text-sm">
                  Loading tickets...
                </div>
              }
            >
              <TicketList
                ticketsPromise={ticketsPromise}
                onCardClick={handleCardClick}
                ticketStatuses={ticketStatuses}
              />
            </Suspense>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
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

export default App;
