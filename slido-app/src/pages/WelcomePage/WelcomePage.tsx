import { useState, useEffect } from "react";
import { Typography, Button, Container, Grid, Modal, Box } from "@mui/material";
import URLSearchParams from "./types/URLSearchParams.type";

function WelcomePage({ queryParams }: { queryParams: URLSearchParams | null }) {
  const [appName, setAppName] = useState("");
  const [appVersion, setAppVersion] = useState("");
  const [osPlatform, setOSPlatform] = useState("");
  const [showUpdateRequired, setShowUpdateRequired] = useState(false);
  const [isAppInfoModalOpen, setIsAppInfoModalOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

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
    setIsButtonClicked(false);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

 return (
   <Container maxWidth="sm">
     <Grid container direction="column" spacing={2} alignItems="center">
       <Grid item>
         <Typography variant="h3">Welcome, sunshine!</Typography>
         <Button
           variant="contained"
           color="primary"
           size="large"
           onClick={handleButtonClick}
         >
           Getting started
         </Button>
       </Grid>
       {isButtonClicked && (
         <Grid item>
           {showUpdateRequired ? (
             <Modal
               open={isAppInfoModalOpen}
               onClose={handleCloseAppInfoModal}
               aria-labelledby="app-info-modal-title"
               aria-describedby="app-info-modal-description"
             >
               <Box sx={{ backgroundColor: "lightblue", padding: "20px" }}>
                 <Typography variant="h3">Update required</Typography>
                 <Typography>
                   Your version is outdated. Please update your application.
                 </Typography>
                 <Button
                   onClick={handleCloseAppInfoModal}
                   style={{ position: "absolute", top: "10px", right: "10px" }}
                 >
                   X
                 </Button>
               </Box>
             </Modal>
           ) : (
             <Typography variant="body1">
               Application Name: {appName}
               <br />
               OS Platform: {osPlatform}
               <br />
               Version: {appVersion}
             </Typography>
           )}
         </Grid>
       )}
     </Grid>
   </Container>
 );

}

export default WelcomePage;
