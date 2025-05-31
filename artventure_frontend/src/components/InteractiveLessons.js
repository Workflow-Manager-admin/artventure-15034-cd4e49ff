import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * InteractiveLessons - main container for interactive, step-by-step art lessons.
 * Features sidebar navigation (placeholder) and lesson cards.
 */
function InteractiveLessons() {
  return (
    <div className="lessons-container" style={{
      display: "flex",
      minHeight: 500,
      background: "rgba(26,26,36,0.96)",
      borderRadius: 16,
      boxShadow: "0 6px 32px #01010a30",
      overflow: "hidden"
    }}>
      {/* Sidebar */}
      <aside
        className="lessons-sidebar"
        style={{
          minWidth: 220,
          maxWidth: 260,
          background: "rgba(20,20,32,0.24)",
          borderRight: "1px solid var(--border-color)",
          padding: "2em 1.2em",
          color: "var(--text-secondary)",
          display: "block"
        }}>
        <span style={{
          fontWeight: 700,
          fontSize: 19,
          color: "var(--accent, #ffb347)"
        }}>Lesson Topics</span>
        <ul style={{ marginTop: 16, listStyle: "none", padding: 0, fontSize: 15 }}>
          <li style={{ margin: "12px 0" }}>🎨 Introduction to Color Theory</li>
          <li style={{ margin: "12px 0" }}>✎ Basic Drawing Skills</li>
          <li style={{ margin: "12px 0", color: "var(--accent, #ffb347)", fontWeight: 600 }}>
            🖌️ Painting Techniques
          </li>
          <li style={{ margin: "12px 0" }}>📏 Perspective & Composition</li>
          <li style={{ margin: "12px 0" }}>✨ Digital Art Basics</li>
        </ul>
      </aside>
      {/* Lessons content */}
      <section style={{ flex: 1, padding: "2.2em 2em" }}>
        <h2 className="subtitle" style={{ color: "var(--accent, #ffb347)" }}>Step-by-Step Art Lessons</h2>
        <div className="description" style={{ marginBottom: 30 }}>
          Grow your skills with guided activities, interactive demos, and progress tracking!
        </div>
        <div style={{
          display: "flex",
          gap: "2em",
          flexWrap: "wrap",
        }}>
          {/* Example Lesson Cards */}
          <LessonCard
            title="Layering Colors"
            level="Beginner"
            progress={0.4}
            accent="#51e87a"
            desc="Learn how to layer and blend colors for vibrant effects."
          />
          <LessonCard
            title="Sketching Portraits"
            level="Intermediate"
            progress={0.7}
            accent="#e87a41"
            desc="Master the fundamentals of face proportions and sketching."
          />
          <LessonCard
            title="Digital Highlights"
            level="Advanced"
            progress={0.15}
            accent="#6d7bfc"
            desc="Explore digital highlighting and shading in Procreate or PS."
          />
        </div>
      </section>
    </div>
  );
}

/**
 * Inner lesson card used by InteractiveLessons
 */
function LessonCard({ title, level, progress, accent, desc }) {
  return (
    <div className="card" style={{
      minWidth: 240,
      maxWidth: 320,
      background: "#18183a",
      borderRadius: 12,
      boxShadow: "0 3px 16px #15152960",
      padding: "1.5em 1.2em",
      color: "#fff"
    }}>
      <h3 style={{
        fontSize: 20,
        margin: 0,
        color: accent || "var(--accent, #ffb347)"
      }}>{title}</h3>
      <div style={{ fontSize: 14, opacity: 0.7, margin: "8px 0 10px 0" }}>{level} Lesson</div>
      <p style={{ fontSize: 15, minHeight: 40, margin: 0 }}>{desc}</p>
      <div style={{ marginTop: 20, marginBottom: 12 }}>
        <div style={{ fontSize: 13, color: "#ccc" }}>Progress</div>
        <div style={{
          height: 10,
          background: "#222233",
          borderRadius: 8,
          marginTop: 3,
          width: "100%",
          position: "relative"
        }}>
          <div style={{
            width: `${Math.round(progress * 100)}%`,
            height: 10,
            background: accent || "var(--accent, #ffb347)",
            borderRadius: 8,
            transition: "width 280ms"
          }} />
        </div>
      </div>
      <button className="btn" style={{
        background: accent || "var(--accent, #ffb347)",
        color: "#18183a",
        marginTop: 10,
        boxShadow: "0 2px 8px #18183a70"
      }}>
        Resume Lesson
      </button>
    </div>
  );
}

export default InteractiveLessons;
