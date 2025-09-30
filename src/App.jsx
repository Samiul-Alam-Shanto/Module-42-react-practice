import { Suspense } from "react";
import "./App.css";
import CodeNav from "./components/CodeNav/CodeNav";
import Navbar from "./components/Navbar/Navbar";
import PricingData from "./components/PricingData/PricingData";

const pricingPromise = fetch("/pricing.json").then((res) => res.json());

function App() {
  return (
    <>
      <CodeNav />
      {/* <Navbar /> */}
      <Suspense fallback={"loading.."}>
        <PricingData pricingPromise={pricingPromise}></PricingData>
      </Suspense>
    </>
  );
}

export default App;
