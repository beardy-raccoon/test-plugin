import React from "react";
import { Loader } from "@/components/Loader/Loader";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import { useDamageSelector } from "@/hooks/useDamageSelector";
import { BUTTONS_SCHEMA } from "@/utils/consts";
import { DamageSelectorProps } from "@/utils/interfaces";
import "./damageSelector.css";

const buttonsRows = Object.keys(BUTTONS_SCHEMA).map((key) =>
  Array.from(
    { length: BUTTONS_SCHEMA[key] },
    (_, index) => `${key}${index + 1}`,
  ),
);

export const DamageSelector: React.FC<DamageSelectorProps> = () => {
  const { activePositions, handleClick } = useDamageSelector();

  return (
    <div className="damage-selector">
      <Loader />
      <div className="container">
        {buttonsRows?.map((row, index) => (
          <div className="row" key={index}>
            {row.map((position) => (
              <button
                className={`button ${
                  activePositions?.includes(position) ? "button-active" : ""
                }`}
                key={position}
                onClick={() => handleClick(position)}
              ></button>
            ))}
          </div>
        ))}
      </div>
      <button className="submit-button">Rapporto dani</button>
      <ErrorMessage />
    </div>
  );
};
