import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <Navbar showLinks={false} />
      </div>
      <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Create Your RealBay Account
        </h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full mt-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-[#1f13ce] text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-100"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold cursor-pointer">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
