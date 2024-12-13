import * as React from "react";
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineClockCircle,
} from "react-icons/ai";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  isTextArea?: boolean;
}

const ContactPage: React.FC = () => {
  const contactData: ContactInfoProps[] = [
    {
      icon: <AiOutlineHome className="w-6 h-6 text-black" />,
      title: "Address",
      details: ["236 5th SE Avenue, New York NY10000, United States"],
    },
    {
      icon: <AiOutlinePhone className="w-6 h-6 text-black" />,
      title: "Phone",
      details: ["Mobile: +(84) 546-6789", "Hotline: +(84) 456-6789"],
    },
    {
      icon: <AiOutlineClockCircle className="w-6 h-6 text-black" />,
      title: "Working Time",
      details: ["Monday-Friday: 9:00 - 22:00", "Saturday-Sunday: 9:00 - 21:00"],
    },
  ];

  const InputField: React.FC<InputFieldProps> = ({
    label,
    type = "text",
    placeholder,
    isTextArea,
  }) => {
    const inputId = `${label.toLowerCase().replace(/\s/g, "-")}-input`;

    return (
      <div className="w-full">
        <label htmlFor={inputId} className="block mt-6 font-medium">
          {label}
        </label>
        {isTextArea ? (
          <textarea
            id={inputId}
            className="w-full px-4 py-3 mt-2 bg-white border border-neutral-400 rounded-xl text-neutral-600 focus:outline-none focus:ring focus:ring-gray-300"
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            id={inputId}
            className="w-full px-4 py-3 mt-2 bg-white border border-neutral-400 rounded-xl text-neutral-600 focus:outline-none focus:ring focus:ring-gray-300"
            placeholder={placeholder}
          />
        )}
      </div>
    );
  };

  const ContactInfo: React.FC<ContactInfoProps> = ({
    icon,
    title,
    details,
  }) => {
    return (
      <div className="flex gap-4 mt-8">
        <div>{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-base text-neutral-600">
            {details.map((detail, index) => (
              <React.Fragment key={index}>
                {detail}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-12 md:py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Get In Touch With Us
          </h1>
          <p className="mt-4 text-base text-neutral-600">
            For more information about our product & services, please feel free
            to drop us an email. Our staff will always be there to help you out.
            Do not hesitate!
          </p>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row lg:gap-12">
          {/* Contact Info Section */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
            {contactData.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6 mt-8 lg:mt-0">
            <form className="space-y-6">
              <InputField label="Your Name" placeholder="John Doe" />
              <InputField
                label="Email Address"
                type="email"
                placeholder="example@domain.com"
              />
              <InputField label="Subject" placeholder="Optional subject" />
              <InputField
                label="Message"
                isTextArea
                placeholder="Hi! I'd like to ask about..."
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
