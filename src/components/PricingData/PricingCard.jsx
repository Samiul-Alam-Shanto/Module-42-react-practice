import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingCard = ({ pricing }) => {
  console.log(pricing);
  const { title, price, description, features, buttonText } = pricing;
  return (
    <div className="border bg-green-200 rounded-2xl p-4 flex flex-col ">
      <div>
        <h2 className="text-7xl font-semibold">{title}</h2>
        <h4 className="text-3xl">{price}</h4>
        <h5 className="text-2xl font-medium mt-2">{description}</h5>
      </div>
      <div className="flex-1">
        {features.map((feature) => (
          <ul className="text-xl mt-2">
            <li className="flex items-center gap-2">
              {" "}
              <CircleCheckBig />
              {feature}
            </li>
          </ul>
        ))}
      </div>
      <button className="btn btn-primary w-full mt-5">{buttonText}</button>
    </div>
  );
};

export default PricingCard;
