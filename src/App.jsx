import { Suspense } from "react";
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
  return (
    <>
      <div>
        <Navbar />

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Banner title="In-Progress" count={0} type="progress" />
            <Banner title="Resolved" count={0} type="resolved" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Suspense
                fallback={
                  <span className="loading loading-dots loading-xl"></span>
                }
              >
                <TicketList ticketsPromise={ticketsPromise} />
              </Suspense>
            </div>

            <div>
              <TaskStatus />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
