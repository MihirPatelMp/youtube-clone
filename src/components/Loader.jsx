import { CircularProgress, Stack, Box } from "@mui/material";
import React from "react";

const Loader = () => (
  <Box minHeight="95vh">
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
