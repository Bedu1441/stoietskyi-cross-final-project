import { useCallback, useEffect, useState } from "react";
import { fetchSessions } from "../api/api";
import { API_CONFIG } from "../constants/apiConfig";

export const useSessions = (limit = API_CONFIG.DEFAULT_SESSIONS_LIMIT) => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState("");

  const loadSessions = useCallback(async () => {
    try {
      setLoading(true);
      setErrorText("");

      const data = await fetchSessions(limit);
      setSessions(data);

      if (__DEV__) {
        console.log(`Loaded sessions: ${data.length}`);
      }
    } catch (error) {
      setErrorText(
        error?.message || "Failed to load sessions. Please try again later.",
      );

      if (__DEV__) {
        console.log("Sessions loading error:", error?.message);
      }
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    loadSessions();
  }, [loadSessions]);

  return {
    sessions,
    loading,
    errorText,
    reloadSessions: loadSessions,
  };
};
