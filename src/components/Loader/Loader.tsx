import { useUnit } from "effector-react";
import $store from "@/store/model";
import "./loader.css";

export const Loader = () => {
  const { isLoading } = useUnit($store);

  return (
    isLoading && (
      <div className="lds-container">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  );
};
