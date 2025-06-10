import type { SkipInterface } from "../interfaces/skipsInterface";
import SkipImgUrl from "../assets/imgs/skip.jpg";
import { memo } from "react";
interface SkipCardProps {
  skip: SkipInterface;
  selected: boolean;
  onClick: (skip: SkipInterface) => void;
}

function SkipCard({ skip, selected = false, onClick }: SkipCardProps) {
  const {
    size,
    hire_period_days,
    price_before_vat,
    vat,
    allowed_on_road,
    allows_heavy_waste,
  } = skip;
  const totalPrice = price_before_vat * (1 + vat / 100);

  return (
    <div
      className={`border rounded-2xl p-4 shadow-sm cursor-pointer transition hover:shadow-md bg-white relative ${
        selected ? "ring-2 ring-blue-500" : ""
      }`}
      onClick={() => onClick(skip)}
    >
      <img src={SkipImgUrl} alt="skip" className="rounded-2xl object-cover" />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">
            {size} Yard Skip
          </h2>
          <p className="text-sm text-gray-500">
            (Hire Period: {hire_period_days} days)
          </p>
        </div>

        <span className="bg-indigo-100 w-fit text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
          Road Placement: {allowed_on_road ? "Allowed" : "Not Allowed"}
        </span>
        <span className="bg-gray-100 w-fit text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
          Heavy Waste: {allows_heavy_waste ? "Yes" : "No"}
        </span>

        <p className="text-lg font-medium text-gray-800">
          £{totalPrice.toFixed(2)} inc VAT
        </p>

        <button
          type="button"
          className={`w-full py-2 rounded-lg text-white font-semibold transition ${
            selected ? "bg-blue-600 " : "bg-gray-300 hover:bg-blue-700"
          }`}
        >
          {selected ? "Selected" : "Select This Skip"}
        </button>
      </div>
    </div>
  );
}

export default memo(SkipCard);