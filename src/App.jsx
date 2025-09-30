import { Suspense } from "react";
import "./App.css";
import CodeNav from "./components/CodeNav/CodeNav";
import Navbar from "./components/Navbar/Navbar";
import PricingData from "./components/PricingData/PricingData";
import ResultChart from "./components/ResultChart/ResultChart";
import axios from "axios";

// const pricingPromise = fetch("/pricing.json").then((res) => res.json());

//axios diye load korle
const pricingPromise = axios("/pricing.json");

function App() {
  return (
    <>
      <CodeNav />
      {/* <Navbar /> */}
      <Suspense fallback={"loading.."}>
        <PricingData pricingPromise={pricingPromise}></PricingData>
      </Suspense>

      <ResultChart></ResultChart>
    </>
  );
}

export default App;
