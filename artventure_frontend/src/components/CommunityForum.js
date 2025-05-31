import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * CommunityForum - Feature container for user discussion and Q&A.
 * Displays a sample list of trending forum threads.
 */
function CommunityForum() {
  // Sample forum data
  const threads = [
    {
      title: "How to get smooth blending with colored pencils?",
      replies: 12,
      user: "artevo",
      time: "2h ago"
    },
    {
      title: "Share your digital painting setups!",
      replies: 8,
      user: "lucysmith",
      time: "1h ago"
    },
    {
      title: "Need critique: first oil landscape",
      replies: 20,
      user: "noviceartist",
      time: "4h ago"
    },
    {
      title: "Weekly challenge: Space theme 🚀",
      replies: 31,
      user: "moderator",
      time: "50m ago"
    }
  ];

  return (
    <div style={{
      background: "rgba(26,16,36,0.97)",
      borderRadius: 14,
      boxShadow: "0 4px 28px #3d223f36",
      padding: "2em 2.2em 1.8em",
      minHeight: 420
    }}>
      <h2 className="subtitle" style={{
        color: "var(--accent, #ffb347)",
        fontWeight: 700
      }}>💬 Community Forum</h2>
      <div className="description" style={{
        fontSize: 15,
        marginBottom: 24
      }}>
        Join trending discussions, ask questions, and help other learners grow!
      </div>
      <div style={{ maxWidth: 570, margin: "0 auto" }}>
        {threads.map((t, i) => <ForumThreadCard thread={t} key={i} />)}
        <div style={{ textAlign: "center", marginTop: 38 }}>
          <button className="btn" style={{
            background: "var(--accent, #ffb347)",
            color: "#18183a",
            fontWeight: 700,
            boxShadow: "0 2px 8px #16162435"
          }}>Start A New Thread</button>
        </div>
      </div>
    </div>
  );
}

/**
 * ForumThreadCard renders a sample thread summary.
 */
function ForumThreadCard({ thread }) {
  return (
    <div className="card"
      style={{
        background: "#181832",
        borderRadius: 10,
        boxShadow: "0 2px 10px #15152940",
        marginBottom: 16,
        padding: "1em 1.3em",
        display: "flex",
        alignItems: "center"
      }}>
      <div style={{ flex: 1 }}>
        <div style={{
          fontWeight: 600,
          color: "var(--accent, #ffb347)",
          fontSize: 16
        }}>{thread.title}</div>
        <div style={{
          fontSize: 13,
          color: "#b8b4c3",
          marginTop: 3
        }}>Started by <span style={{ fontWeight: 500, color: "#c3713d" }}>{thread.user}</span> • {thread.time}</div>
      </div>
      <div style={{
        minWidth: 46,
        textAlign: "center",
        background: "#2d1e26",
        color: "#ffb347",
        borderRadius: 16,
        padding: "7px 0",
        fontSize: 15,
        fontWeight: 700,
        marginLeft: 16
      }}>
        {thread.replies}<br />
        <span style={{ fontWeight: 400, fontSize: 12, color: "#b8b4c3" }}>replies</span>
      </div>
    </div>
  );
}

export default CommunityForum;
