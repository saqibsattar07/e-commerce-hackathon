import AccountBanner from "../components/my-account/AccountBanner";
import DeliveryFeature from "../components/my-account/DeliveryFeature";

const AuthForm = () => {
  return (
    <>
      <AccountBanner />
      <div className="flex flex-col rounded-none">
        <div className="px-20 py-16 w-full bg-white max-lg:px-10 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-10 max-lg:gap-5 max-md:flex-col">
            {/* Login Section */}
            <div className="flex flex-col w-[41%] max-lg:w-1/2 max-md:w-full">
              <form className="flex flex-col items-start w-full text-black max-md:mt-10">
                <h1 className="text-4xl font-semibold max-lg:text-3xl max-md:text-2xl">
                  Log In
                </h1>

                <div className="flex flex-col w-full mt-6">
                  <label
                    htmlFor="login-email"
                    className="text-base font-medium"
                  >
                    Username or email address
                  </label>
                  <input
                    type="email"
                    id="login-email"
                    className="flex w-full bg-white rounded-xl border border-solid border-neutral-400 h-[60px] mt-4 px-4 max-md:h-[50px]"
                    aria-label="Username or email address"
                  />
                </div>

                <div className="flex flex-col w-full mt-6">
                  <label
                    htmlFor="login-password"
                    className="text-base font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="login-password"
                    className="flex w-full bg-white rounded-xl border border-solid border-neutral-400 h-[60px] mt-4 px-4 max-md:h-[50px]"
                    aria-label="Password"
                  />
                </div>

                <div className="flex gap-5 mt-6 text-base">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="w-5 h-5 bg-white rounded-md border border-solid border-neutral-400 max-md:w-4 max-md:h-4"
                  />
                  <label htmlFor="remember-me" className="text-sm">
                    Remember me
                  </label>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <button
                    type="submit"
                    className="px-16 py-3 text-xl rounded-2xl border border-black border-solid max-lg:px-10 max-md:px-5 max-md:text-base"
                  >
                    Log In
                  </button>
                  <button type="button" className="my-auto text-sm font-light">
                    Lost Your Password?
                  </button>
                </div>
              </form>
            </div>

            {/* Register Section */}
            <div className="flex flex-col w-[59%] max-lg:w-1/2 max-md:w-full">
              <form className="flex flex-col grow items-start px-20 pt-9 pb-14 w-full text-base text-black bg-white rounded-lg shadow-lg max-lg:px-10 max-md:px-5 max-md:mt-10">
                <h1 className="text-4xl font-semibold max-lg:text-3xl max-md:text-2xl">
                  Register
                </h1>

                <div className="flex flex-col w-full mt-6">
                  <label
                    htmlFor="register-email"
                    className="text-base font-medium"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="register-email"
                    className="flex w-full bg-white rounded-xl border border-solid border-neutral-400 h-[60px] mt-4 px-4 max-md:h-[50px]"
                    aria-label="Email address"
                  />
                </div>

                <p className="mt-6 text-sm font-light max-md:mt-4">
                  A link to set a new password will be sent to your email
                  address.
                </p>

                <p className="mt-4 text-sm font-light max-md:mt-2">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-semibold">privacy policy.</span>
                </p>

                <button
                  type="submit"
                  className="px-16 py-3 mt-8 text-xl rounded-2xl border border-black border-solid max-lg:px-10 max-md:px-5 max-md:mt-6 max-md:text-base"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <DeliveryFeature />
    </>
  );
};

export default AuthForm;
