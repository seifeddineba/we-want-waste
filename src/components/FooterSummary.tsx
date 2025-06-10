import { memo, useEffect, useState } from "react";

interface FooterSummaryProps {
  selectedSize: number | null;
  totalPrice: number | null;
}

function FooterSummary({ selectedSize, totalPrice }: FooterSummaryProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (selectedSize !== null) {
      requestAnimationFrame(() => setShow(true));
    } else {
      setShow(false);
    }
  }, [selectedSize]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t shadow-md p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform
        ${show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
      `}
    >
      <div className="max-w-5xl flex items-center justify-between w-full">
        {selectedSize && totalPrice ? (
          <div className="text-gray-800">
            Selected: <strong>{selectedSize} Yard Skip</strong> (£{totalPrice.toFixed(2)})
          </div>
        ) : (
          <div className="text-gray-500">No skip selected</div>
        )}
        <button
          disabled={!selectedSize}
          className={`px-6 py-2 rounded-lg text-white font-semibold transition ${
            selectedSize
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
export default memo(FooterSummary);
