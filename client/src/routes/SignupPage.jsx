import Signup from "../components/Signup"

function SignupPage() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[20%] h-full bg-[#212529] text-white min-w-[200px]">
        <h1 className="font-advent text-4xl pt-6 text-center">
          Intern<span className="underline underline-offset-6">Quest</span>
        </h1>
      </div>
      <Signup />
    </div>
  )
}

export default SignupPage
