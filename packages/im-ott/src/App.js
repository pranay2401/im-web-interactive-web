import { BrowserRouter as Router } from "react-router-dom";

// Components
import AppLoader from "./molecules/appLoader";

// Routes
import Routes from "./routes";

// Antd Styles
import "antd/dist/antd.css";

// Styles
import "./App.css";

function App() {
  return (
    <Router>
      <AppLoader />
      <Routes />
    </Router>
  );
}

export default App;
