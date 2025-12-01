export default function NPLPage() {
  return (
    <div
      style={{ fontFamily: "Arial", backgroundColor: "yellow", padding: "20px" }}
    >
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          maxWidth: "700px",
          margin: "auto",
          boxShadow: "0 0 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#d32f2f",
            marginBottom: "10px",
          }}
        >
          Nepal Premier League (NPL)
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#555",
            marginTop: "0",
          }}
        >
          Official Players List 2025
        </p>

        <div style={{ marginTop: "30px" }}>
          <h2 style={{ marginBottom: "10px", color: "#2e7d32" }}>Players</h2>

          <div
            style={{
              background: "#fafafa",
              padding: "12px 15px",
              borderLeft: "5px solid #2e7d32",
              marginBottom: "15px",
              borderRadius: "6px",
            }}
          >
            <strong>Paras Khadka</strong> — All Rounder
          </div>

          <div
            style={{
              background: "#fafafa",
              padding: "12px 15px",
              borderLeft: "5px solid #0277bd",
              marginBottom: "15px",
              borderRadius: "6px",
            }}
          >
            <strong>Sandeep Lamichhane</strong> — Bowler (Leg Spin)
          </div>

          <div
            style={{
              background: "#fafafa",
              padding: "12px 15px",
              borderLeft: "5px solid #f9a825",
              marginBottom: "15px",
              borderRadius: "6px",
            }}
          >
            <strong>Rohit Paudel</strong> — Batsman
          </div>

          <div
            style={{
              background: "#fafafa",
              padding: "12px 15px",
              borderLeft: "5px solid #6a1b9a",
              marginBottom: "15px",
              borderRadius: "6px",
            }}
          >
            <strong>Karan KC</strong> — Fast Bowler
          </div>
        </div>
      </div>
    </div>
  );
}
