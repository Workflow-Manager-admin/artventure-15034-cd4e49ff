import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * VideoTutorials - feature container for video-based art tutorials.
 * Displays sample video tutorial cards in a modern grid.
 */
function VideoTutorials() {
  return (
    <div className="video-tutorials-container"
      style={{
        background: "rgba(28,24,42,0.96)",
        borderRadius: 14,
        boxShadow: "0 6px 32px #22225c26",
        padding: "2em 2.5em",
        minHeight: 500
      }}>
      <h2 className="subtitle" style={{ color: "var(--accent, #ffb347)", fontWeight: 700 }}>
        🎬 Video Tutorials
      </h2>
      <p className="description" style={{ marginBottom: 28, fontSize: 16 }}>
        Dive into top-rated lessons from expert artists, covering classic and digital art!
      </p>
      <div className="video-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "2em",
      }}>
        {/* Example featured video tutorials */}
        <VideoCard
          title="Watercolor Landscapes"
          artist="Amelia Rain"
          duration="13m"
          accent="#e87a41"
        />
        <VideoCard
          title="Anime Eyes Drawing"
          artist="Sora Yu"
          duration="24m"
          accent="#ffb347"
        />
        <VideoCard
          title="Blender 3D Sculpting"
          artist="Phil Simmons"
          duration="18m"
          accent="#7ad5ff"
        />
      </div>
    </div>
  );
}

/**
 * VideoCard displays a single sample video tutorial.
 */
function VideoCard({ title, artist, duration, accent }) {
  return (
    <div className="card" style={{
      background: "#171725",
      borderRadius: 10,
      boxShadow: "0 3px 14px #25253548",
      padding: "0.5em 0 1.2em 0",
      overflow: "hidden"
    }}>
      {/* Video preview placeholder */}
      <div style={{
        width: "100%",
        height: 144,
        background: `linear-gradient(135deg, ${accent || "#d4b0ff"}60 0%, #232364 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 40,
        color: "#fff",
        marginBottom: 10
      }}>
        ▶
      </div>
      <div style={{ padding: "0 1.1em" }}>
        <h3 style={{ fontSize: 17, margin: "0 0 7px", color: accent || "var(--accent)" }}>{title}</h3>
        <div style={{
          color: "#fffa",
          fontSize: 14,
          marginBottom: 4
        }}>By {artist}</div>
        <span style={{
          display: "inline-block",
          padding: "3px 11px",
          background: accent || "var(--accent, #ffb347)",
          color: "#222",
          fontWeight: 600,
          borderRadius: 20,
          fontSize: 12
        }}>⏱ {duration}</span>
      </div>
      <button className="btn btn-large" style={{
        width: "84%",
        margin: "1.2em 8% 0 8%",
        background: accent || "var(--accent, #ffb347)",
        color: "#161624",
        fontWeight: 700,
        boxShadow: "0 1px 6px #25253555"
      }}>
        Watch Tutorial
      </button>
    </div>
  );
}

export default VideoTutorials;
