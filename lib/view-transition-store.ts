"use client";

// Store for managing which project is currently undergoing a View Transition
let transitionSlug: string | null = null;

export function setActiveTransitionSlug(slug: string | null) {
  transitionSlug = slug;
  if (typeof window !== "undefined") {
    try {
      if (slug) {
        sessionStorage.setItem("active_project_vt", slug);
      } else {
        sessionStorage.removeItem("active_project_vt");
      }
    } catch {
      // Ignore sessionStorage errors
    }
  }
}

export function getActiveTransitionSlug(): string | null {
  if (transitionSlug) return transitionSlug;
  if (typeof window !== "undefined") {
    try {
      return sessionStorage.getItem("active_project_vt");
    } catch {
      return null;
    }
  }
  return null;
}
