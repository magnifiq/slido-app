import {
  StyledContainer,
  StyledGrid,
  Typography,
  Button,
  Modal,
  Box,
} from "./WelcomePage.styles";

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
    <StyledContainer>
      <StyledGrid>
        <Typography variant="h3">Welcome, sunshine!</Typography>
        <Button variant="contained" color="primary" size="large">
          Getting started
        </Button>
      </StyledGrid>
      <StyledGrid>
        {showUpdateRequired && (
          <Modal
            open={isAppInfoModalOpen}
            onClose={handleCloseAppInfoModal}
            aria-labelledby="app-info-modal-title"
            aria-describedby="app-info-modal-description"
          >
            <Box sx={{ backgroundColor: "lightblue", padding: "20px" }}>
              <Typography variant="h4" textAlign="center">
                Update required
              </Typography>
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
      </StyledGrid>
      <StyledGrid
        style={{
          position: "absolute",
          bottom: 0,
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="body1">
          Application Name: {appName}, OS Platform: {osPlatform}, version:{" "}
          {appVersion}
        </Typography>
      </StyledGrid>
    </StyledContainer>
  );
};

export default WelcomePage;
