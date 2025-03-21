import { FaEyeSlash } from "react-icons/fa"
import { FaEye } from "react-icons/fa"

import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/userContext"

const defaultUserCredential = {
  username: "",
  password: "",
}

function Login() {
  const [userCredential, setUserCredential] = useState(defaultUserCredential)
  const [showPassword, setShowPassword] = useState(false)
  const { user, dispatchUser } = useContext(UserContext)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(userCredential)
    dispatchUser({ type: "LOGIN_USER", payload: userCredential })
    if (user) {
      navigate("/dashboard")
    }
  }

  return (
    <div className="w-[80%] flex justify-center items-center">
      <div className="px-4 py-6 shadow-2xl rounded-2xl w-[400px]">
        <h2 className="text-center text-3xl font-semibold my-4">
          Welcome back!
        </h2>
        <form onSubmit={(e) => handleLogin(e)}>
          <div>
            <label htmlFor="username" className="text-lg block ml-2 mb-2">
              Username
            </label>
            <input
              type="email"
              onChange={(e) =>
                setUserCredential({
                  ...userCredential,
                  username: e.target.value,
                })
              }
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
                type={showPassword ? "text" : "password"}
                onChange={(e) =>
                  setUserCredential({
                    ...userCredential,
                    password: e.target.value,
                  })
                }
                placeholder="********"
                className="border border-gray-300 rounded-2xl px-3 py-2 w-full"
                id="password"
                required
              />
              {!showPassword ? (
                <FaEyeSlash
                  size="20"
                  className="ml-[-30px] cursor-pointer z-10"
                  onClick={() => setShowPassword(true)}
                />
              ) : (
                <FaEye
                  size="20"
                  className="ml-[-30px] cursor-pointer z-10"
                  onClick={() => setShowPassword(false)}
                />
              )}
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
            Don't have an account?
            <span
              onClick={() => navigate("/signup")}
              className="font-semibold cursor-pointer hover:text-gray-500"
            >
              SignUp
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
