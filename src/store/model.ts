import { fetchPositions, postUpdatedPositions } from "@/services/api";
import { createEffect, createEvent, createStore } from "effector";
import { TStore } from "@/utils/types";

export const startLoading = createEvent();

export const updatePositions = createEffect(
  async (activePositions: TStore["activePositions"]) => {
    const response = await postUpdatedPositions(activePositions);
    return response;
  },
);

export const loadPositions = createEffect(async () => {
  const activePositions = await fetchPositions();
  return activePositions;
});

const handleError = (state: TStore, message: string) => ({
  ...state,
  error: message,
  isLoading: false,
});

const handleActivePositionsChange = (
  state: TStore,
  activePositions: TStore["activePositions"],
) => ({
  ...state,
  activePositions,
  error: null,
  isLoading: false,
});

export default createStore<TStore>({
  activePositions: [],
  error: null,
  isLoading: false,
})
  .on(startLoading, (state) => ({
    ...state,
    isLoading: true,
  }))
  .on(loadPositions.doneData, handleActivePositionsChange)
  .on(loadPositions.failData, (state: TStore) =>
    handleError(state, "Failed, try again"),
  )
  .on(updatePositions.doneData, handleActivePositionsChange)
  .on(updatePositions.failData, (state: TStore) =>
    handleError(state, "Failed, try again"),
  );
