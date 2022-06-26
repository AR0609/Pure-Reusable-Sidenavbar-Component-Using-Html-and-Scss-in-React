import "./App.css";
import Sidenavbarfunctional from "./components/sidenavbar/sidenavbarfunctional";

function App() {
  return (
    <>
      <div
        style={{
          marginTop: "60px",
          marginBottom: "60px",
          display: "flex",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Pure Reusable Sidenavbar Component Using Html and Scss in React
      </div>

      <div
        className="App"
        style={{
          marginTop: "60px",
          marginBottom: "60px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Sidenavbarfunctional />
      </div>
    </>
  );
}

export default App;
