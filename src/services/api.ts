import { API_URL } from "@/utils/consts";

export const fetchPositions = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const postUpdatedPositions = async (positions: string[]) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(positions),
  });
  return response.json();
};
