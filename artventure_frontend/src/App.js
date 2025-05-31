import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { LessonProgressProvider, useLessonProgress } from './components/LessonProgressContext';

// Placeholder components for routes
function Home() {
  return (
    <section className="main-content">
      <h1 className="title" style={{ marginBottom: "0.5em" }}>Welcome to ArtVenture</h1>
      <div className="description">
        Discover interactive art lessons, tutorials, gallery, forums, and creative challenges!
      </div>
    </section>
  );
}

// Lessons component using lesson progress context
function Lessons() {
  const { currentLesson, goToLesson, resetLesson } = useLessonProgress();

  // For demo, some example lessons
  const lessons = [
    { id: 'intro', label: "Introduction to Drawing" },
    { id: 'color', label: "Color Basics" },
    { id: 'shading', label: "Shading Techniques" }
  ];

  return (
    <section className="main-content">
      <h2 className="subtitle">Interactive Lessons</h2>
      <div className="description">
        Step-by-step guides and progress tracking for every skill level.
      </div>
      <div style={{marginTop: '1em'}}>
        <div style={{ fontWeight: 500}}>Demo: Lesson Navigation</div>
        <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", gap: 14 }}>
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <button
                className="btn"
                style={{
                  background: currentLesson === lesson.id ? "var(--accent, #ffb347)" : "var(--kavia-dark)",
                  color: "white",
                  border: "1px solid var(--border-color)",
                  borderRadius: 18,
                  padding: "0.4em 1.1em",
                  fontWeight: currentLesson === lesson.id ? 700 : 400,
                  cursor: "pointer"
                }}
                onClick={() => goToLesson(lesson.id)}
              >
                {lesson.label}
              </button>
            </li>
          ))}
        </ul>
        {currentLesson && (
          <div style={{marginTop: "1em"}}>
            <span style={{fontWeight: 600}}>Current Lesson: </span>
            <span>{lessons.find(l => l.id === currentLesson)?.label || currentLesson}</span>
            <button className="btn" style={{
              marginLeft: 10,
              background: "#e87a41",
              color: "#fff",
              padding: "0.2em 0.7em",
              borderRadius: 12,
              fontSize: 12,
              border: "none",
            }} onClick={resetLesson}>
              Reset
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
function Tutorials() {
  return (
    <section className="main-content">
      <h2 className="subtitle">Video Tutorials</h2>
      <div className="description">
        Watch and learn various techniques from expert artists.
      </div>
    </section>
  );
}
function Gallery() {
  return (
    <section className="main-content">
      <h2 className="subtitle">Gallery</h2>
      <div className="description">
        Explore and share amazing artwork.
      </div>
    </section>
  );
}
function Forum() {
  return (
    <section className="main-content">
      <h2 className="subtitle">Community Forum</h2>
      <div className="description">
        Join the conversation, ask questions, and share tips.
      </div>
    </section>
  );
}
function Challenges() {
  return (
    <section className="main-content">
      <h2 className="subtitle">Art Challenges</h2>
      <div className="description">
        Participate in regular challenges and grow your skills.
      </div>
    </section>
  );
}

/**
 * PUBLIC_INTERFACE
 * Main App component wrapped with lesson progress state provider.
 */
function App() {
  return (
    <LessonProgressProvider>
      <Router>
        <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg,#000 0%, #3a1c71 100%)' }}>
          <nav className="navbar" style={{ boxShadow: '0 2px 8px #0002', borderBottom: '1px solid var(--border-color)' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <div className="logo">
                <span className="logo-symbol" style={{ color: 'var(--accent, #ffb347)' }}>*</span> <span style={{ fontWeight: 700 }}>ArtVenture</span>
              </div>
              <ul className="nav-links" style={{ display: 'flex', gap: '1.5em', listStyle: 'none', margin: 0 }}>
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " nav-link-active" : "")
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/lessons"
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " nav-link-active" : "")
                    }
                  >
                    Lessons
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/tutorials"
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " nav-link-active" : "")
                    }
                  >
                    Tutorials
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " nav-link-active" : "")
                    }
                  >
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/forum"
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " nav-link-active" : "")
                    }
                  >
                    Forum
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/challenges"
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " nav-link-active" : "")
                    }
                  >
                    Challenges
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <main style={{ flex: 1, display: 'flex', minHeight: 0, overflow: 'hidden' }}>
            {/* Sidebar placeholder for Lessons (collapsible in future) */}
            <aside
              className="sidebar"
              style={{
                width: 250,
                background: "rgba(20,20,32,.32)",
                borderRight: "1px solid var(--border-color)",
                color: "var(--text-secondary)",
                padding: "2em 1em 2em 1.5em",
                display: 'none', // Show only on lessons route in future
              }}
            >
              <span style={{ fontWeight: 600, letterSpacing: 0.5, fontSize: 18, color: "var(--accent, #ffb347)" }}>Lessons</span>
              <div style={{ marginTop: 12, fontSize: 14 }}>Lesson navigation coming soon.</div>
            </aside>

            <section style={{ flex: 1, padding: "2.5em 0" }}>
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/lessons" element={<Lessons />} />
                  <Route path="/tutorials" element={<Tutorials />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/forum" element={<Forum />} />
                  <Route path="/challenges" element={<Challenges />} />
                </Routes>
              </div>
            </section>
          </main>
        </div>
      </Router>
    </LessonProgressProvider>
  );
}

export default App;