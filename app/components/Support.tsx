import React, { useEffect, useState } from "react";
import Popup from "./Popup"; // Ensure the correct relative path to Popup.tsx

// Support team member data (commented out)
/*
const supportMembers = [
  {
    image: "/woman2-crop.jpg",
    position: { top: "35%", left: "65%" }, // UK
  },
  {
    image: "/woman1-crop.jpg",
    position: { top: "20%", left: "15%" }, // Moved up
  },
  {
    image: "/man-crop.jpg",
    position: { top: "55%", left: "30%" }, // US
  },
  {
    image: "/pf2.jpeg",
    position: { top: "75%", left: "80%" }, // Asia/AU
  },
];
*/

export default function Support() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // Show popup after 10 seconds

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {/* Popup only */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
}
