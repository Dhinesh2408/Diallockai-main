"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const router = useRouter();

  const handleBookNow = () => {
    onClose();           // Close the popup
    router.push("https://cal.com/dhinesh-valentine-flbxpp/test?overlayCalendar=true"); // Navigate to calendar schedule page
  };

  return (
    <div className="fixed top-25 right-6 z-50">
      <div className="bg-white p-4 rounded-xl shadow-lg w-72 relative border border-blue-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          ×
        </button>

        {/* Content */}
        <h3 className="text-lg font-semibold mb-1 text-blue-600">Book a Demo</h3>
        <p className="text-sm text-gray-700 mb-3">
          Want to see how we can help you? Schedule a personalized demo now.
        </p>
        <button
          onClick={handleBookNow}
          className="bg-blue-600 text-white px-4 py-2 text-sm rounded-full hover:bg-blue-700 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Popup;
