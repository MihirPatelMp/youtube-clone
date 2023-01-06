import { HashRouter as Router , Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  SearchBar,
} from "./components";

const App = () => (
  <HashRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/gh-pages-url" exact element={<Feed />} />
        <Route path="/gh-pages-url/video/:id" element={<VideoDetail />} />
        <Route path="/gh-pages-url/channel/:id" element={<ChannelDetail />} />
        <Route path="/gh-pages-url/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </HashRouter>
);

export default App;
