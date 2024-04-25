import { Typography, Button, Container, Grid, Modal, Box } from "@mui/material";

import useWelcomePageLogic from "./hooks/useWelcomePageLogic";

import URLSearchParams from "./types/URLSearchParams.type";

const WelcomePage = ({
  queryParams,
}: {
  queryParams: URLSearchParams | null;
}) => {
  const {
    appName,
    appVersion,
    osPlatform,
    showUpdateRequired,
    isAppInfoModalOpen,
    handleCloseAppInfoModal,
  } = useWelcomePageLogic(queryParams);

  return (
    <Container
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={5}
        style={{ textAlign: "center" }}
      >
        <Grid item>
          <Typography variant="h3">Welcome, sunshine!</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" size="large">
            Getting started
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{
          position: "absolute",
          bottom: 0,
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <Grid item>
          {showUpdateRequired && (
            <Modal
              open={isAppInfoModalOpen}
              onClose={handleCloseAppInfoModal}
              aria-labelledby="app-info-modal-title"
              aria-describedby="app-info-modal-description"
            >
              <Box sx={{ backgroundColor: "lightblue", padding: "20px" }}>
                <Typography variant="h4" textAlign="center">Update required</Typography>
                <Typography textAlign="center">
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
          )}
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Application Name: {appName}, OS Platform: {osPlatform}, version: {appVersion}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WelcomePage;
