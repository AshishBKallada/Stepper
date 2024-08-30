import React from "react";

const Overlay = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="w-full max-w-md mx-auto bg-white border rounded-md shadow-md">
        <div className="bg-primary text-primary-foreground p-6 rounded-t-md">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Plan Added</h2>
            <img
              src="https://cdn.worldvectorlogo.com/logos/global-payments.svg"
              alt="Plan"
              width={64}
              height={40}
              className="rounded-md"
              style={{ aspectRatio: "64/40", objectFit: "cover" }}
            />
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="space-y-2 text-center">
            <CircleCheckIcon className="w-12 h-12 mx-auto text-green-500" />
            <p className="text-lg font-medium">Your plan has been saved.</p>
            <p className="text-gray-500">The plan has been added to your account.</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

const CircleCheckIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default Overlay;
