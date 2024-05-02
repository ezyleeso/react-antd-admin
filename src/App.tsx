import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import ExampleForm from "./pages/Examples/form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="examples">
            <Route path="form" element={<ExampleForm />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
