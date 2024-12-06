import React from "react";

const ContactUs = () => {
  const handleSubmit = (event)=>{
    event.preventDefault();

  }
  return (
    <div className="md:flex justify-between p-8 space-y-2 md:mx-auto">
      <div className="bg-[#263585]  p-4 border-2 border-[#e89350] rounded-md text-white">
        <div className="p-5">
        <h1 className="text-center text-3xl">Contact Us</h1>
        <p className="text-center">Call or use this form to request a free initial consultation.</p>
        </div>
        <form className="flex flex-col gap-5 my-3" onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Name" className="w-full px-4 py-1 text-black rounded" required />
          </div>
          <div>
            <input type="text" placeholder="Phone" className="w-full px-4 py-1 text-black rounded" required />
          </div>
          <div>
            <input type="email" placeholder="Email" className="w-full px-4 py-1 text-black rounded" required/>
          </div>
          <div>
            <textarea name="" id="" placeholder="Message" className="w-full px-4 py-1 text-black min-h-40 rounded" required></textarea>
          </div>
          <div>
            <button type="submit" className="px-3 py-1 bg-[#e89350] text-white rounded font-normal cursor-pointer hover:text-gray-300">Submit</button>
          </div>
        </form>
      </div>
      <div>
        <h1 className="text-xl">Business Hours</h1>
        <ul className="text-sm p-4">
          <li>MON. 9:30 a.m. – 4:30 p.m.</li>
          <li>TUE . 9:30 a.m. – 4:30 p.m</li>
          <li>WED. 9:30 a.m. – 4:30 p.m</li>
          <li>THU. 9:30 a.m. – 4:30 p.m.</li>
          <li>FRI. 9:00 a.m. – 12:00 p.m.</li>
          <li>SAT. &nbsp;&nbsp;&nbsp; CLOSED</li>
          <li>SUN. &nbsp;&nbsp;&nbsp; CLOSED</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
