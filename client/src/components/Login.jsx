import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"

function Login() {
  return (
    <div className="w-[80%] flex justify-center items-center">
      <div className="px-4 py-6 shadow-2xl rounded-2xl w-[400px]">
        <h2 className="text-center text-3xl font-semibold my-4">
          Welcome back!
        </h2>
        <form action="">
          <div>
            <label htmlFor="username" className="text-lg block ml-2 mb-2">
              Username
            </label>
            <input
              type="email"
              placeholder="e.g. john@gmail.com"
              className="border border-gray-300 rounded-2xl px-3 py-2 w-full"
              id="username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-lg block ml-2 mb-2 mt-4">
              Password
            </label>
            <div className="flex items-center">
              <input
                type="password"
                placeholder="********"
                className="border border-gray-300 rounded-2xl px-3 py-2 w-full"
                id="password"
                required
              />
              <FaEyeSlash
                size="20"
                className="ml-[-30px] cursor-pointer z-10"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#212529] mt-4 w-full px-3 py-2 rounded-2xl text-white font-semibold cursor-pointer hover:shadow-lg hover:bg-[#353535]"
            >
              Login
            </button>
          </div>
          <div className="text-center mt-2">
            Don't have an account?{" "}
            <span className="font-semibold cursor-pointer hover:text-gray-500">
              SignUp
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
