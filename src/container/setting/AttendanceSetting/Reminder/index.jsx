import { Breadcrumbs } from "@mui/material";
import { Container } from "lucide-react";
import { Fragment, useState } from "react";
const Reminder = () => {
  const [showTimeSetter, setShowTimeSetter] = useState(false);
  const [selectedTime, setSelectedTime] = useState("04:31 PM");
  const [isToggled, setIsToggled] = useState(true); // State for toggle

  const handleClockClick = () => {
    setShowTimeSetter(true);
  };

  const updateTime = (hours, minutes, period) => {
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    setSelectedTime(`${formattedHours}:${formattedMinutes} ${period}`);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="gap-2 pb-2 mb-3">
        <Breadcrumbs items={[{ title: "Register Face" }]} />
      </div>

      <div className="p-6 max-w-lg mx-auto bg-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Reminders</h2>
        </div>
        <div className="mb-4 flex justify-between items-center">
          <span className="text-lg text-gray-700 font-bold">
            Daily Attendance Report
          </span>
          <button
            onClick={handleToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isToggled ? "bg-primary" : "bg-gray-400  00"}`}
          >
            <span className="sr-only">Toggle Daily Attendance Report</span>
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-light transition-transform ${isToggled ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
        </div>
        {isToggled ? (
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">
              Daily Attendance Report Time
            </label>
            <input
              type="time"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue="15:54"
            />
          </div>
        ) : (
          <span className="font-bold text-red-700">* Active to set time</span>
        )}
        <div className="my-4">
          <label className="block text-gray-700 font-bold">Timezone</label>
          <input
            type="text"
            placeholder="Asia/India"
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <button className="w-full bg-primary text-white  p-2 rounded hover:bg-primary/90">
          Save
        </button>
      </div>
    </div>
  );
};
export { Reminder };
