import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import ShowGithubUser from "./components/ShowGithubUser";
import Counter from "./components/Counter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<Welcome name="Vittorio" />} />
        <Route
          path="/user"
          element={<ShowGithubUser username={"ilVicDeGiorgio"} />}
        />
        <Route path="/Counter" element={<Counter />} />
      </Routes>

      <Link to="/counter">
        <p>Counter</p>
      </Link>
      <Link to="/user">
        <p>ShowGithubUser</p>
      </Link>
      <Link to="/welcome">
        <p>Welcome!</p>
      </Link>
    </Router>
  );
}

export default App;
