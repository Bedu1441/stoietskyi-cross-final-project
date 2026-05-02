import axios from "axios";
import { FINAL_API_CONFIG } from "../constants/finalConfig";

class FamilyTipsApiError extends Error {
  constructor(message) {
    super(message);
    this.name = "FamilyTipsApiError";
  }
}

const limitTips = (items, limit = FINAL_API_CONFIG.FAMILY_TIPS_LIMIT) => {
  return items.slice(0, limit);
};

export const fetchFamilyTips = async (
  limit = FINAL_API_CONFIG.FAMILY_TIPS_LIMIT,
) => {
  try {
    const response = await axios.get(
      `${FINAL_API_CONFIG.BASE_URL}${FINAL_API_CONFIG.TIPS_ENDPOINT}`,
    );

    if (!Array.isArray(response.data)) {
      throw new FamilyTipsApiError("Unexpected family tips API response.");
    }

    return limitTips(response.data, limit);
  } catch (error) {
    console.error("Family tips API error:", error);

    if (error instanceof FamilyTipsApiError) {
      throw error;
    }

    throw new FamilyTipsApiError(
      "Unable to load family tips. Please check your connection and try again.",
    );
  }
};
