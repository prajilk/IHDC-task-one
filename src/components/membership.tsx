import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <div>
      <h3 className="text-xs">
        <span className="border-b-2 border-black">JOIN</span> TODAY
      </h3>
      <div className="flex flex-col items-center">
        <img src="/membership.png" alt="Membership" className="w-[80%]" />
        <Link
          to={"/register"}
          className="w-[50%] rounded-full border-2 border-gray-300 bg-gradient-to-b from-white to-gray-200 py-1 text-center text-sm font-semibold text-blue-500/80 duration-300 active:scale-95"
        >
          JOIN NOW
        </Link>
      </div>
    </div>
  );
};

export default Membership;
