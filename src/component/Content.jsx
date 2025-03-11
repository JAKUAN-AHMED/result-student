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
  const [resultData, setResultData] = useState([]);

  // Dummy Result Data (Replace with actual API call)
  const student1 = [
    {
      id: 1,
      semester: "2nd Semester",
      publishDate: "11 March, 2025",
      status: "Unknown",
      Time: "Today",
      gpas: { gpa1: "3.00" },
    },
    {
      id: 2,
      semester: "1st Semester",
      publishDate: "01 September, 2024",
      status: "Unknown",
      Time: "6 months ago",
      gpas: { gpa1: "Mathmatics-1" },
    },
  ];

  const student2 = [
    {
      id: 1,
      semester: "6th Semester",
      publishDate: "11 March, 2025",
      status: "Passed",
      Time: "Today",
      gpas: { gpa1: "3.26" },
    },
    {
      id: 2,
      semester: "5th Semester",
      publishDate: "01 September, 2024",
      status: "Passed",
      Time: "6 months ago",
      gpas: { gpa1: "3.61" },
    },
    {
      id: 3,
      semester: "4th Semester",
      publishDate: "01 March, 2024",
      status: "Passed",
      Time: "1 Year ago",
      gpas: { gpa1: "3.58" },
    },
    {
      id: 4,
      semester: "3rd Semester",
      publishDate: "01 September, 2023",
      status: "Passed",
      Time: "1 Year 6 months ago",
      gpas: { gpa1: "3.62" },
    },
    {
      id: 5,
      semester: "2nd Semester",
      publishDate: "01 March, 2023",
      status: "Passed",
      Time: "2 Years ago",
      gpas: { gpa1: "3.61" },
    },
    {
      id: 6,
      semester: "1st Semester",
      publishDate: "01 September, 2022",
      status: "Passed",
      Time: "2 Years 6 months ago",
      gpas: { gpa1: "3.73" },
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Ensure roll is a valid number
    const rollNumber = parseInt(roll, 10);
  
    // Check if roll is between 676800 and 676999
    const isStudent2 = rollNumber >= 676800 && rollNumber <= 676999;
    let studentData = isStudent2 ? student2 : student1;
  
    // Extract last two digits of the roll number
    const lastTwoDigits = parseInt(roll.slice(-2), 10) / 100;
  
    // Modify GPAs dynamically without exceeding 4.00
    const updatedResults = studentData.map((data) => {
      let baseGPA = parseFloat(data.gpas.gpa1);
      if (!isNaN(baseGPA)) {
        let finalGPA = baseGPA + lastTwoDigits + 0.05;
        finalGPA = Math.min(finalGPA, 4.00); // Ensure max GPA is 4.00
        return { ...data, gpas: { gpa1: finalGPA.toFixed(2) } };
      }
      return data;
    });
  
    setResultData(updatedResults);
    setIsOpen(true);
  };
  
  
  

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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
  <div className="fixed inset-0 bg-slate-100 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white px-4 py-6 rounded-lg shadow-lg w-[90%] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl overflow-y-auto max-h-[80vh]">
      
      {/* Modal Header */}
      <div className="flex flex-col items-center">
        <h2 className="font-bold">{roll}</h2>
        <h2 className="text-gray-500 text-sm">Diploma in Engineering (2022)</h2>
        <h2 className="text-gray-500 text-sm text-center">
          Moulvibazar Polytechnic Institute, Moulvibazar
        </h2>
      </div>

      {/* Close Button */}
      <button 
        className="right-0 text-black" 
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>

      {/* Icons Row */}
      <div className="flex justify-center space-x-4 my-4">
        <button className="flex items-center text-gray-700"><IoCalculatorOutline /> CGPA</button>
        <button className="flex items-center text-gray-700"><MdFavoriteBorder /> Save</button>
        <button className="flex items-center text-gray-700"><IoCopyOutline /> Copy</button>
        <button className="flex items-center text-gray-700"><IoShareSocialOutline /> Share</button>
        <button className="flex items-center text-gray-700"><MdDownload /> Download</button>
      </div>

      {/* Modal Content */}
      <div className="space-y-4">
        {resultData.map((data, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow">
            <div className="flex justify-between">
              <h2>{data.semester}</h2>
              <h2 className="text-sm">Status: {data.status}</h2>
            </div>
            <p className="text-sm">Publish Date: <span className="text-blue-500">{data.publishDate}</span></p>
            <h2 className="text-center bg-gray-200 py-2 rounded-md font-bold text-red-500 text-xl">
              GPA: {data.gpas.gpa1}
            </h2>
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