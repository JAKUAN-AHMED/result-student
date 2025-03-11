import { useState } from "react";
import image from "./../assets/login.avif";
import {
  IoCalculatorOutline,
  IoCopyOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { MdDownload, MdFavoriteBorder } from "react-icons/md";

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [roll, setRoll] = useState("");

  // Dummy Result Data (Replace with actual API call)
  const resultData = [
    {
      id: 1,
      semester: "2nd Semester",
      publishDate: "11 March, 2025",
      status: "Unknown",
      Time: "Today",
      gpas: { gpa2: "3.00,", gpa1: "ref" },
    },
    {
      id: 2,
      semester: "1st Semester",
      publishDate: "01 September, 2024",
      status: "ref",
      Time: "6 months ago",
      gpas: { gpa1: "Mathmatics-1" },
    },
  ];

  return (
    <div>
      {/* Notice Box */}
      <div className="flex items-center justify-center flex-col p-4 mt-4 shadow-md bg-slate-200 w-[60%] text-center mx-auto">
        <h2>
          রেজাল্টের নতুন ফরমেটের কারণে ডাটাবেজে আপলোড করতে একটু সময় লাগবে। তাই আপাতত
          রেজাল্ট দেখতে
        </h2>
        <h2 className="border-b border-red-800">PDF ডাউনলোড করুন</h2>
      </div>

      {/* Content Section */}
      <div className="flex justify-around items-center mt-8 gap-6">
        {/* Image */}
        <div className="w-[400px]">
          <img src={image} alt="Login" className="w-full rounded-md shadow-md" />
        </div>

        {/* Form */}
        <div className="bg-white shadow-md p-6 rounded-md w-[400px]">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
          >
            {/* Exam Select */}
            <div>
              <label className="block text-gray-700 font-medium">Exam</label>
              <select className="w-full p-2 border rounded-md">
                <option>Diploma Engineering</option>
              </select>
            </div>

            {/* Regulation Input */}
            <div>
              <label className="block text-gray-700 font-medium">Regulation</label>
              <input
                type="text"
                defaultValue="2022"
                className="w-full p-2 border rounded-md"
              />
            </div>

            {/* Roll Number Input */}
            <div>
              <label className="block text-gray-700 font-medium">Roll Number</label>
              <input
                type="text"
                placeholder="Enter Roll Number"
                className="w-full p-2 border rounded-md"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              View Result
            </button>
          </form>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-[600px] shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center flex-col  justify-items-end z-20">
              <div className="flex bg-center items-center justify-center mx-auto w-full h-full">
                <div className="flex justify-center flex-col items-center mb-4">
                  <h2 className="font-bold">{roll}</h2>
                  <h2 className="text-gray-400">Diploma in Engineering (2022)</h2>
                  <h2 className="text-gray-400">
                    Moulvibazar Polytechnic Institute, Moulvibazar
                  </h2>
                </div>
                <button className="flex ml-10" onClick={() => setIsOpen(false)}>
                  X
                </button>
              </div>

              <div>
                <ul className="flex items-center justify-center space-x-4">
                  <li className="flex items-center gap-1">
                    <span>
                      <IoCalculatorOutline />
                    </span>
                    CGPA
                  </li>
                  <li className="flex items-center gap-1">
                    <span>
                      <MdFavoriteBorder />
                    </span>
                    Save
                  </li>
                  <li className="flex items-center gap-1">
                    <span>
                      <IoCopyOutline />
                    </span>
                    Copy
                  </li>
                  <li className="flex items-center gap-1">
                    <span>
                      <IoShareSocialOutline />
                    </span>
                    Share
                  </li>
                  <li className="flex items-center gap-1">
                    <span>
                      <MdDownload />
                    </span>
                    Download
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-2">
              {resultData.map((data, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between">
                    <h2>{data.semester}</h2>
                    <h2>Status: {data.status}</h2>
                  </div>
                  <div className="p-2 rounded bg-slate-100 shadow-lg">
                    <div className="flex items-center justify-between">
                      <h2>Publish Date: <span className="text-blue-300">{data.publishDate}</span></h2>
                      <h2>{data.Time}</h2>
                    </div>
                    <div className="p-4 rounded">
                      <h2 className="text-center bg-slate-200 p-4 rounded-md font-bold text-red-400 text-2xl">
                        {data.gpas.gpa2 ? `gpas :${data.gpas.gpa2} ` : ""}
                        {data.gpas.gpa1}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
