import React, { createContext, useContext, useState } from "react";

/**
 * A React Context to manage current lesson navigation/progress for ArtVenture.
 * This minimal example is suitable for a demo and can be expanded for real persistence later.
 */

const LessonProgressContext = createContext();

// PUBLIC_INTERFACE
export function LessonProgressProvider({ children }) {
  // Demo: Track the current lesson page as a string.
  // In real app, this might be an ID or a full object.
  const [currentLesson, setCurrentLesson] = useState(null);

  // PUBLIC_INTERFACE
  const goToLesson = (lessonId) => {
    setCurrentLesson(lessonId);
  };

  // PUBLIC_INTERFACE
  const resetLesson = () => {
    setCurrentLesson(null);
  };

  const value = {
    currentLesson,
    goToLesson,
    resetLesson,
  };

  return (
    <LessonProgressContext.Provider value={value}>
      {children}
    </LessonProgressContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useLessonProgress() {
  /** Returns current lesson state and navigation helpers. */
  return useContext(LessonProgressContext);
}
