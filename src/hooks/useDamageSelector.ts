import { useEffect } from "react";
import { useUnit } from "effector-react";
import $store, {
  startLoading,
  loadPositions,
  updatePositions,
} from "@/store/model";

export const useDamageSelector = () => {
  const { activePositions } = useUnit($store);

  const handleClick = (positionValue: string) => {
    console.log("useDamageSelector:", positionValue);
    startLoading();
    updatePositions(
      activePositions?.includes(positionValue)
        ? activePositions?.filter(
            (position: string) => position !== positionValue,
          )
        : activePositions?.concat(positionValue),
    );
  };

  useEffect(() => {
    startLoading();
    loadPositions();
  }, []);

  return { activePositions, handleClick };
};
