import Head from "next/head";
import BestSeller from "../components/Home/BestSeller";
import Brands from "../components/Home/Brands";
import Loading from "../components/Loading";
import Slider from "../components/Home/Slider";
import Collection from "../components/Home/Collection";
import { bestSellers, womenProducts, brands } from "../data"; 

export default function Home() {
  const DemoBestSellers = bestSellers;
  const DemoWomenProducts = womenProducts;
  const isLoading = false;
  const womenLoading = false;

  return (
    <div className="font-noto">
      <div class="flex items-center mb-4 text-red-500 justify-center ">
  <h1 class="text-5xl font-bold text-center">VE-SHOP</h1>
</div>


      
      <Brands loading={isLoading} brands={brands} />
      <Slider loading={isLoading} />

      {isLoading || womenLoading ? (
        <Loading />
      ) : (
        <>
          <BestSeller loading={isLoading} bestSellers={DemoBestSellers} />
          <Collection loading={womenLoading} womenProducts={DemoWomenProducts} />
        </>
      )}
    </div>
  );
}
