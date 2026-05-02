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
    } catch (error) {
      setErrorText(
        error?.message || "Failed to load family tips. Please try again later.",
      );
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
