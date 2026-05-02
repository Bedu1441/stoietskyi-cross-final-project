import { useCallback, useEffect, useState } from "react";
import { fetchFamilyTips } from "../api/familyTipsApi";
import { FINAL_API_CONFIG } from "../constants/finalConfig";

export const useFamilyTips = (limit = FINAL_API_CONFIG.FAMILY_TIPS_LIMIT) => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState("");

  const loadTips = useCallback(async () => {
    try {
      setLoading(true);
      setErrorText("");

      const data = await fetchFamilyTips(limit);
      setTips(data);

      if (__DEV__) {
        console.log(`Loaded family tips: ${data.length}`);
      }
    } catch (error) {
      setErrorText(
        error?.message || "Failed to load family tips. Please try again later.",
      );

      if (__DEV__) {
        console.log("Family tips loading error:", error?.message);
      }
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    loadTips();
  }, [loadTips]);

  return {
    tips,
    loading,
    errorText,
    reloadTips: loadTips,
  };
};
