import React from "react";
import { DamageSelector } from "@/components/DamageSelector/DamageSelector";
import { DamageSelectorProps } from "@/utils/interfaces";
import "./App.css";

interface AppProps {
  options: DamageSelectorProps["options"];
}

export const App: React.FC<AppProps> = ({ options }) => {
  return (
    <div className="app">
      <DamageSelector options={options} />
    </div>
  );
};
