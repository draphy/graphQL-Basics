import "./App.css";
import React from "react";
import Users from "./components/Users";
import { useState } from "react";
function App() {
  const [trigger, setTrigger] = useState(false);
  return (
    <div className="content">
      <h1>Users:</h1>
      {trigger && (
        <button className="btn" onClick={() => setTrigger(false)}>
          Back
        </button>
      )}

      {trigger ? (
        <Users />
      ) : (
        <button className="btn" onClick={() => setTrigger(true)}>
          Get Users
        </button>
      )}

      <footer className="footer">
        &copy; David Raphi {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
