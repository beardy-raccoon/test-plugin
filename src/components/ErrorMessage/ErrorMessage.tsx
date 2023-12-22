import { useUnit } from "effector-react";
import $store from "@/store/model";
import "./errorMessage.css";

export const ErrorMessage = () => {
  const { error } = useUnit($store);
  return error && <div className="error-container">{error ? error : ""}</div>;
};
