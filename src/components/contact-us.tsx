// "use client";

// import React from "react";
// import { ChevronDown, Instagram, Mail, MapPin, Phone } from "lucide-react";

// import Link from "next/link";

// // const DARK_NAVY = "#090A25";

// const ContactUsForm: React.FC = () => {
//   return (
//     <section id="contact-us" className="min-h-screen flex flex-col pt-6">
//       <div className="flex-1 pb-40">
//         {/* <div className="lustria text-4xl font-bold text-black">
//           Hello with Lustria font!
//         </div> */}
//         <div className="text-3xl md:text-[56px] text-center mb-20 leading-snug">
//           <h1>Contact Us</h1>
//         </div>

//         {/* Contact Form  */}

//         <div className="max-w-4xl mx-4 sm:mx-14 md:mx-auto px-2 relative z-20 ">
//           <div className="flex flex-col md:flex-row border-2 border-gray-200 rounded-2xl overflow-hidden bg-[white]">
//             <div className="w-full md:w-1/2 border md:border-r-2 border-gray-300 rounded-xl bg-[#090A25] ">
//               <div className="text-white p-8 max-w-lg w-full">
//                 <div className="mb-24">
//                   <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-100">
//                     Hey There!
//                   </h3>
//                   <p className="text-gray-200 mb-8 leading-relaxed text-md font-sans">
//                     Want to book villa at an affordable rate? Call us now or
//                     fill the form and we will get back to you as soon as
//                     possible!
//                   </p>

//                   <div className="space-y-4 font-sans">
//                     <a
//                       href="tel:+919850342555"
//                       className="flex items-center gap-3 group text-md text-gray-200 hover:text-white "
//                     >
//                       <Phone className="w-5 h-5 " />
//                       +91 98503 42555
//                     </a>

//                     <a
//                       href="mailto:abc@gmail.com"
//                       className="flex items-center gap-3 group text-md text-gray-200 hover:text-white "
//                     >
//                       <Mail className="w-5 h-5 " />
//                       abc@gmail.com
//                     </a>
//                     <a
//                       href="https://maps.app.goo.gl/ToyWfmV3eUvHDM7s6"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-start gap-3 group text-md hover:text-white "
//                     >
//                       <MapPin className="w-5 h-5 text-gray-300 transition-colors shrink-0 mt-1" />
//                       <span className="">
//                         Mosam Farmstay, Ghoti-Sinner Road, Igatpuri-422502
//                       </span>
//                     </a>
//                   </div>
//                 </div>

//                 <a
//                   href="https://www.instagram.com/mosamfarmstay"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 mt-[-40] md:mt-40"
//                 >
//                   <Instagram className="w-6 h-6 text-gray-200 group-hover:text-white transition-colors" />
//                   <span className="text-[16px] font-sans">
//                     Follow on Instagram
//                   </span>
//                 </a>
//               </div>
//             </div>

//             {/* Form */}
//             <div className="w-full md:w-1/2 p-4 sm:p-6 pt-10">
//               <form className="space-y-3 font-sans">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-stone-700 mb-1"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     placeholder="Eg. John Doe"
//                     className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black "
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-stone-700 mb-1"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="Eg. john@email.com"
//                     className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black"
//                   />
//                 </div>

//                 <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
//                   <div className="flex-1">
//                     <label className="block text-sm font-medium text-stone-700 mb-1">
//                       Check In
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="date"
//                         placeholder="DD/MM/YYYY"
//                         className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <label className="block text-sm font-medium text-stone-700 mb-1 ">
//                       Check Out
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="date"
//                         placeholder="DD/MM/YYYY"
//                         className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="guests"
//                     className="block text-sm font-medium text-stone-700 mb-1"
//                   >
//                     Guests
//                   </label>
//                   <div className="relative">
//                     <select
//                       id="guests"
//                       defaultValue="1 Guest"
//                       className="appearance-none w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black"
//                     >
//                       <option>1 Guest</option>
//                       <option>2 Guests</option>
//                       <option>3 Guests</option>
//                       <option>4+ Guests</option>
//                     </select>
//                     <ChevronDown
//                       size={18}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium text-stone-700 mb-1"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     placeholder="Enter message you want to send"
//                     rows={4}
//                     className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 resize-none text-black"
//                   ></textarea>
//                 </div>

//                 <div className="pt-2">
//                   <button
//                     type="submit"
//                     className="w-full bg-stone-800 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-stone-700 transition duration-300 shadow-lg"
//                     style={{ backgroundColor: "#090A25" }}
//                   >
//                     Make an Enquiry
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer
//         className="pb-8 px-8 sm:px-16 text-white text-center relative z-10 w-full mt-[-600px] md:mt-[-450px]"
//         style={{ backgroundColor: "#090A25" }}
//       >
//         <div className="pt-[560px] md:pt-[400px] lg:pt-[420px]">
//           <div className="text-center mb-34">
//             <p className="lustria text-[40px]">
//               Your peaceful sanctuary <br />
//               awaits you.
//             </p>
//           </div>

//           <div className="flex flex-col md:flex-row justify-between items-center text-[16px] sm:text-[20px] md:text-[24px] text-[#FFFEED] mb-[34px] ">
//             <span className="mb-2">mosam farmstays &copy; 2025</span>
//             <Link href="https://thesocialbrain.in" target="_blank">
//               <span className="cursor-pointer">
//                 made by{" "}
//                 <span className="mb-2 hover:text-white font-semibold italic">
//                   thesocialbrain.in
//                 </span>
//               </span>
//             </Link>
//           </div>
//         </div>
//       </footer>
//     </section>
//   );
// };

// export default ContactUsForm;

"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import { ChevronDown, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const ContactUsForm: React.FC = () => {
  // 1. State to hold form data (Updated email -> contactNumber)
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    checkIn: "",
    checkOut: "",
    guests: "1 Guest",
    message: "",
  });

  // 2. Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // 3. Handle Form Submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // The destination phone number
    const phoneNumber = "919850342555";

    // Format the message (Updated to show Contact Number)
    const whatsappMessage =
      `*New Enquiry from Website*` +
      `\n\n*Name:* ${formData.name}` +
      `\n*Contact Number:* ${formData.contactNumber}` +
      `\n*Check In:* ${formData.checkIn}` +
      `\n*Check Out:* ${formData.checkOut}` +
      `\n*Guests:* ${formData.guests}` +
      `\n*Message:* ${formData.message}`;

    // Encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    // 4. Clear the form fields (Updated to clear contactNumber)
    setFormData({
      name: "",
      contactNumber: "",
      checkIn: "",
      checkOut: "",
      guests: "1 Guest",
      message: "",
    });
  };

  return (
    <section id="contact-us" className="min-h-screen flex flex-col pt-6">
      <div className="flex-1 pb-40">
        <div className="text-3xl md:text-[56px] text-center mb-20 leading-snug">
          <h1>Contact Us</h1>
        </div>

        {/* Contact Form Container */}
        <div className="max-w-4xl mx-4 sm:mx-14 md:mx-auto px-2 relative z-20 ">
          <div className="flex flex-col md:flex-row border-2 border-gray-200 rounded-2xl overflow-hidden bg-[white]">
            {/* Left Side: Contact Info */}
            <div className="w-full md:w-1/2 border md:border-r-2 border-gray-300 rounded-xl bg-[#090A25] ">
              <div className="text-white p-8 max-w-lg w-full">
                <div className="mb-24">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-100">
                    Hey There!
                  </h3>
                  <p className="text-gray-200 mb-8 leading-relaxed text-md font-sans">
                    Want to book villa at an affordable rate? Call us now or
                    fill the form and we will get back to you as soon as
                    possible!
                  </p>

                  <div className="space-y-4 font-sans">
                    <a
                      href="tel:+919850342555"
                      className="flex items-center gap-3 group text-md text-gray-200 hover:text-white "
                    >
                      <Phone className="w-5 h-5 " />
                      +91 98503 42555
                    </a>

                    <a
                      href="mailto:mosamfarmstay@gmail.com"
                      className="flex items-center gap-3 group text-md text-gray-200 hover:text-white "
                    >
                      <Mail className="w-5 h-5 " />
                      mosamfarmstay@gmail.com
                    </a>
                    <a
                      href="https://maps.app.goo.gl/ToyWfmV3eUvHDM7s6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group text-md hover:text-white "
                    >
                      <MapPin className="w-5 h-5 text-gray-300 transition-colors shrink-0 mt-1" />
                      <span className="">
                        Mosam Farmstay, Ghoti-Sinner Road, Igatpuri-422502
                      </span>
                    </a>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/mosamfarmstay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-[-40] md:mt-40"
                >
                  <Instagram className="w-6 h-6 text-gray-200 group-hover:text-white transition-colors" />
                  <span className="text-[16px] font-sans">
                    Follow on Instagram
                  </span>
                </a>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="w-full md:w-1/2 p-4 sm:p-6 pt-10">
              <form className="space-y-3 font-sans" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-stone-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Eg. John Doe"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black "
                  />
                </div>

                {/* CHANGED THIS SECTION FROM EMAIL TO CONTACT NUMBER */}
                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm font-medium text-stone-700 mb-1"
                  >
                    Contact Number
                  </label>
                  <input
                    required
                    type="tel"
                    id="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Eg. +91 98765 XXXXX"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black"
                  />
                </div>

                <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Check In
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        placeholder="DD/MM/YYYY"
                        className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-stone-700 mb-1 ">
                      Check Out
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        placeholder="DD/MM/YYYY"
                        className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-stone-700 mb-1"
                  >
                    Guests
                  </label>
                  <div className="relative">
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="appearance-none w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black"
                    >
                      <option value="1 Guest">1-4 Guests</option>
                      <option value="2 Guests">5-8 Guests</option>
                      <option value="3 Guests">8-12 Guests</option>
                      <option value="4+ Guests">12+ Guests</option>
                    </select>
                    <ChevronDown
                      size={18}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-stone-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter message you want to send"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 resize-none text-black"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-stone-800 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-stone-700 transition duration-300 shadow-lg"
                    style={{ backgroundColor: "#090A25" }}
                  >
                    Make an Enquiry via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="pb-8 px-8 sm:px-16 text-white text-center relative z-10 w-full mt-[-600px] md:mt-[-450px]"
        style={{ backgroundColor: "#090A25" }}
      >
        <div className="pt-[560px] md:pt-[400px] lg:pt-[420px]">
          <div className="text-center mb-34">
            <p className="lustria text-[40px]">
              Your peaceful sanctuary <br />
              awaits you.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-[16px] sm:text-[20px] md:text-[24px] text-[#FFFEED] mb-[34px] ">
            <span className="mb-2">mosam farmstays © 2025</span>
            <Link href="https://thesocialbrain.in" target="_blank">
              <span className="cursor-pointer">
                made by{" "}
                <span className="mb-2 hover:text-white font-semibold italic">
                  thesocialbrain.in
                </span>
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactUsForm;
