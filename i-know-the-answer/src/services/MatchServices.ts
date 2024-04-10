import { Match } from "../types/match";
import { fetchWithCredentials } from "../utilities/fetch-utilites";

export async function getMatches() {
  try {
    const response = await fetchWithCredentials("/matches");
    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error(error);
  }
};

export async function getMatchById(matchId: string) {
  try {
    const response = await fetchWithCredentials(`/matches/${matchId}`);
    const data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
  }
}

export const createNewMatch = async (match: Omit<Match, "_id">) => {
  const response = await fetchWithCredentials("matches", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(match),
  });

  if (response.ok) {
    return await response.json();
  }
};