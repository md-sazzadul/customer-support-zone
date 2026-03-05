import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
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
  const [taskStatusItems, setTaskStatusItems] = useState([]);
  const [resolvedItems, setResolvedItems] = useState([]);

  const handleAddToTask = (ticket) => {
    const alreadyAdded = taskStatusItems.find((item) => item.id === ticket.id);
    if (alreadyAdded) return false;

    setTaskStatusItems((prev) => [...prev, ticket]);
    return true;
  };

  const handleComplete = (ticket) => {
    setTaskStatusItems((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolvedItems((prev) => [...prev, ticket]);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <div className="max-w-7xl mx-auto px-6 pt-8 pb-0">
          <div className="grid grid-cols-2 gap-5 mb-8">
            <Banner
              title="In-Progress"
              count={taskStatusItems.length}
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
                  <span className="loading loading-dots loading-xl"></span>
                }
              >
                <TicketList
                  ticketsPromise={ticketsPromise}
                  onAddToTask={handleAddToTask}
                  taskStatusItems={taskStatusItems}
                />
              </Suspense>
            </div>

            <div>
              <TaskStatus
                taskStatusItems={taskStatusItems}
                resolvedItems={resolvedItems}
                onComplete={handleComplete}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default App;
