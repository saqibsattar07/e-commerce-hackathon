import * as React from "react";
import { AiOutlineHome, AiOutlinePhone, AiOutlineClockCircle } from "react-icons/ai";

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

  const InputField: React.FC<InputFieldProps> = ({ label, type = "text", placeholder, isTextArea }) => {
    const inputId = `${label.toLowerCase().replace(/\s/g, "-")}-input`;

    return (
      <>
        <label htmlFor={inputId} className="mt-9 font-medium">
          {label}
        </label>
        {isTextArea ? (
          <textarea
            id={inputId}
            className="self-stretch px-4 pt-3 pb-16 mt-6 bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:mr-1 max-md:max-w-full"
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            id={inputId}
            className="self-stretch px-4 py-3 mt-6 whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full"
            placeholder={placeholder}
          />
        )}
      </>
    );
  };

  const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, details }) => {
    return (
      <div className="flex gap-8 self-start mt-11 max-md:mt-10 max-md:ml-2">
        <div className="self-start mt-1.5">{icon}</div>
        <div className="flex flex-col">
          <div className="self-start text-2xl font-medium">{title}</div>
          <div className="text-base">
            {details.map((detail, index) => (
              <React.Fragment key={index}>
                {detail}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col rounded-none">
      <div className="flex flex-col items-center px-20 pt-24 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-w-[1058px] max-md:max-w-full">
          <h1 className="text-4xl font-semibold text-black">Get In Touch With Us</h1>
          <p className="mt-2 text-base text-center text-neutral-400 w-[644px] max-md:max-w-full">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
          <div className="self-stretch mt-3.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col px-12 py-16 mx-auto mt-16 w-full text-black bg-white max-md:px-5 max-md:mt-10">
                  {contactData.map((info, index) => (
                    <ContactInfo key={index} {...info} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                <form className="flex flex-col grow items-start pt-28 pr-8 pb-16 pl-20 w-full text-base text-black bg-white max-md:px-5 max-md:pt-24 max-md:mt-8 max-md:max-w-full">
                  <InputField label="Your name" placeholder="Abc" />
                  <InputField label="Email address" type="email" placeholder="Abc@def.com" />
                  <InputField label="Subject" placeholder="This is an optional" />
                  <InputField
                    label="Message"
                    placeholder="Hi! I'd like to ask about"
                    isTextArea
                  />
                  <button
                    type="submit"
                    className="px-16 py-3 mt-12 max-w-full whitespace-nowrap rounded-2xl border bg-gray-900 text-white border-black border-solid w-[237px] max-md:px-5 max-md:mt-10"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
