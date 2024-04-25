import { useState, useEffect } from "react";

import URLSearchParams from "../types/URLSearchParams.type";

const useWelcomePageLogic = (queryParams: URLSearchParams | null) => {
  const [appName, setAppName] = useState("");
  const [appVersion, setAppVersion] = useState("");
  const [osPlatform, setOSPlatform] = useState("");
  const [showUpdateRequired, setShowUpdateRequired] = useState(false);
  const [isAppInfoModalOpen, setIsAppInfoModalOpen] = useState(false);

  useEffect(() => {
    if (queryParams) {
      setAppName(queryParams.get("apphost") || "");
      setAppVersion(queryParams.get("appversion") || "");
      setOSPlatform(queryParams.get("os") || "");
    }
  }, [queryParams]);

  useEffect(() => {
    if (osPlatform === "win") {
      if (isVersionUpdated(appVersion, "1.5.0") === -1) {
        setShowUpdateRequired(true);
        handleOpenAppInfoModal();
      }
    } else if (osPlatform === "mac") {
      if (
        isVersionUpdated(appVersion, "0.28.0") === -1 ||
        appVersion === "1.5.100" ||
        appVersion === "1.5.120" ||
        appVersion === "1.5.123"
      ) {
        setShowUpdateRequired(true);
        handleOpenAppInfoModal();
      }
    }
  }, [osPlatform, appVersion]);

  const isVersionUpdated = (version1: string, version2: string) => {
    const v1 = version1.split(".").map(Number);
    const v2 = version2.split(".").map(Number);
    return v1.reduce((result, component, index) => {
      if (result !== 0) return result;
      const diff = component - (v2[index] || 0);
      return diff === 0 ? 0 : diff > 0 ? 1 : -1;
    }, 0);
  };

  const handleOpenAppInfoModal = () => {
    setIsAppInfoModalOpen(true);
  };

  const handleCloseAppInfoModal = () => {
    setIsAppInfoModalOpen(false);
  };

  return {
    appName,
    appVersion,
    osPlatform,
    showUpdateRequired,
    isAppInfoModalOpen,
    handleCloseAppInfoModal,
  };
};

export default useWelcomePageLogic;
