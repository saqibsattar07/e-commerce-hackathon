"use client";

export const Footer = () => {
  const links = {
    main: [
      { text: "Home", href: "/" },
      { text: "Shop", href: "/shop" },
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
    ],
    help: [
      { text: "Payment Options", href: "/payment" },
      { text: "Returns", href: "/returns" },
      { text: "Privacy Policies", href: "/privacy" },
    ],
  };

  return (
    <footer className="flex flex-col bg-white py-12">
      <div className="flex flex-col md:flex-row items-start px-6 md:px-20 w-full">
        {/* Address Section */}
        <address className="text-base text-neutral-400 mb-6 md:mb-0 md:w-1/4">
          400 University Drive Suite 200 Coral Gables,
          <br />
          FL 33134 USA
        </address>

        {/* Links Section */}
        <div className="flex flex-col md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-neutral-400 text-base font-medium">Links</h3>
          {links.main.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-base text-neutral-600 mt-4 ${index === 0 && "md:mt-0"}`}
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Help Section and Newsletter Form */}
        <div className="flex flex-col md:flex-row md:w-1/2 gap-6">
          <div className="flex flex-col md:w-1/4">
            <h3 className="text-neutral-400 text-base font-medium">Help</h3>
            {links.help.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-base text-neutral-600 mt-4 ${index === 0 && "md:mt-0"}`}
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="flex flex-col md:w-3/4">
            <form
              className="flex flex-col"
              onSubmit={(e) => e.preventDefault()}
            >
              <label
                htmlFor="email"
                className="self-start text-base font-medium text-neutral-400"
              >
                Newsletter
              </label>
              <div className="flex gap-3 mt-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                  className="p-2 border border-gray-300 rounded-md w-full"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-black rounded-md"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-6 w-full h-px border-t border-neutral-300" />

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-base text-neutral-600">
        2024 Saqib House. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
