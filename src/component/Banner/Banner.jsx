import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

const Banner = ({ title, count, type }) => {
  const bgColor =
    type === "progress"
      ? "from-[#632EE3] to-[#9F62F2]"
      : "from-[#54CF68] to-[#00827A]";

  return (
    <div
      className={`relative rounded-xl p-10 text-white bg-linear-to-r ${bgColor} overflow-hidden`}
    >
      {/* Vector Background */}
      <img
        src={vector1}
        alt=""
        className="absolute left-0 top-0 h-full opacity-40 pointer-events-none"
      />

      <img
        src={vector2}
        alt=""
        className="absolute right-0 top-0 h-full opacity-40 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-5xl font-bold">{count}</p>
      </div>
    </div>
  );
};

export default Banner;
