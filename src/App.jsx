import Banner from "./component/Banner/Banner";
import Navbar from "./component/Navbar/Navbar";

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
      </div>
    </>
  );
}

export default App;
