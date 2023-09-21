"use client";
import Aggregator from "@/components/aggregator/Aggregator";
import OrderRegion from "@/components/order-region/OrderRegion";
import PickUp from "@/components/pick-up/PickUp";
import { useEffect, useState } from "react";

const countaries = ["United Arab Emirates", "Bahrain", "Qatar", "Oman"];

const Order = () => {
  const [countary, setCountary] = useState("");
  const [isValidCountary, setIsValidCountary] = useState(false);
  const [activeOption, setActiveOption] = useState("delivery");

  useEffect(() => {
    if (!isValidCountary && countaries.includes(countary)) {
      setIsValidCountary(true);
    }
  }, [countary]);

  return (
    <>
      <OrderRegion
        countary={countary}
        setCountary={setCountary}
        countaries={countaries}
        setIsValidCountary={setIsValidCountary}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
      {activeOption === "delivery" ? (
        <Aggregator isValidCountary={isValidCountary} countary={countary} />
      ) : (
        <PickUp />
      )}
    </>
  );
};

export default Order;
