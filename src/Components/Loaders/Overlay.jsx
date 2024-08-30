import React from "react";

const Overlay = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <img
        src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif"
        alt="Processing..."
        className="w-24 h-24"
      />
    </div>
  );
};

export default Overlay;
