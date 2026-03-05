import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

const Banner = ({ title, count, type }) => {
  const bgColor =
    type === "progress"
      ? "from-[#632EE3] to-[#9F62F2]"
      : "from-[#54CF68] to-[#00827A]";

  return (
    <div
      className={`relative rounded-2xl px-8 py-10 text-white text-center bg-linear-to-r ${bgColor} overflow-hidden`}
    >
      {/* Vector Background */}
      <img
        src={vector1}
        alt=""
        className="absolute left-0 top-0 h-full pointer-events-none select-none"
      />

      <img
        src={vector2}
        alt=""
        className="absolute right-0 top-0 h-full pointer-events-none select-none"
      />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-base font-medium mb-2 opacity-95">{title}</h3>
        <p className="text-5xl font-bold leading-none">{count}</p>
      </div>
    </div>
  );
};

export default Banner;
