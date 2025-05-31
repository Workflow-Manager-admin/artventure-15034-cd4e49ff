import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * ArtChallenges - displays current & sample creative art challenges.
 * Calls attention with accent styling and prompts for participation.
 */
function ArtChallenges() {
  // Example art challenges list
  const challenges = [
    {
      title: "Draw Your Dream City!",
      desc: "Imagine and sketch the city of your dreams—realistic, futuristic, or fantastical.",
      endsIn: "3 days",
      entries: 28,
      accent: "#ffb347"
    },
    {
      title: "Monochrome Portrait",
      desc: "Capture a striking portrait using only shades of one color.",
      endsIn: "6 days",
      entries: 15,
      accent: "#e87a41"
    },
    {
      title: "Digital Nature",
      desc: "Create a digital scene celebrating the beauty of nature.",
      endsIn: "9 days",
      entries: 19,
      accent: "#51e87a"
    }
  ];

  return (
    <div style={{
      background: "rgba(32,16,19,0.93)",
      borderRadius: 14,
      boxShadow: "0 4px 28px #392c1b24",
      padding: "2.4em 2.3em 2em",
      minHeight: 420
    }}>
      <h2 className="subtitle" style={{
        color: "var(--accent, #ffb347)",
        fontWeight: 700
      }}>🏆 Art Challenges</h2>
      <div className="description" style={{ marginBottom: 26, fontSize: 16 }}>
        Participate in monthly creative challenges and earn recognition!
      </div>
      <div className="challenge-list" style={{
        display: "flex",
        gap: "2em",
        flexWrap: "wrap",
        marginTop: 10
      }}>
        {challenges.map((c, i) => <ChallengeCard {...c} key={i} />)}
      </div>
      <div style={{ marginTop: 36, textAlign: "center" }}>
        <button className="btn btn-large" style={{
          background: "var(--accent, #ffb347)",
          color: "#18183a",
          fontWeight: 700,
          boxShadow: "0 2px 8px #16162435"
        }}>Submit Your Entry</button>
      </div>
    </div>
  );
}

/**
 * ChallengeCard renders a sample open challenge with styling.
 */
function ChallengeCard({ title, desc, endsIn, entries, accent }) {
  return (
    <div className="card"
      style={{
        background: "#22212f",
        borderRadius: 13,
        boxShadow: "0 2px 10px #18166032",
        minWidth: 240,
        maxWidth: 320,
        padding: "1.3em 1.2em",
        color: "#fff",
        borderTop: `5px solid ${accent || "#ffb347"}`
      }}>
      <h3 style={{
        color: accent || "#ffb347",
        fontWeight: 600,
        marginTop: 0,
        fontSize: 17
      }}>{title}</h3>
      <p style={{ fontSize: 15, color: "#fefefe", opacity: 0.93 }}>{desc}</p>
      <div style={{
        fontSize: 13,
        fontWeight: 400,
        color: "#bcb7a9",
        margin: "9px 0"
      }}>
        Ends in <span style={{ color: accent || "#ffb347", fontWeight: 600 }}>{endsIn}</span>
      </div>
      <div style={{
        fontSize: 14,
        marginTop: 10,
        color: accent || "#ffb347",
        fontWeight: 500
      }}>
        {entries} artists joined
      </div>
    </div>
  );
}

export default ArtChallenges;
