import { Routes, Route } from "react-router-dom";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import AboutMe from "./routes/about-me/about-me.component";
import WorksPage from "./routes/works/works.component";
import Blog from "./routes/blog/blog.component";

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={darkTheme}>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="works" element={<WorksPage />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
    // </ThemeProvider>
  );
}

export default App;
