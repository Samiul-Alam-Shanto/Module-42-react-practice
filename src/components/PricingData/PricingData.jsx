import React, { use } from "react";
import PricingCard from "./PricingCard";

const PricingData = ({ pricingPromise }) => {
  const pricingDataRes = use(pricingPromise);
  //axios er jonno ei line likhte hobe
  const pricingData = pricingDataRes.data;
  console.log(pricingData);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">
        Get Our Membership
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-2">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingData;
