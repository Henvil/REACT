import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ShowGithubUser from "./components/ShowGithubUser";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome name="Vittorio" />} />
        <Route
          path="/user"
          element={<ShowGithubUser username={"ilVicDeGiorgio"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
