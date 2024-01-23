"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div>
      {/* <button onClick={() => setTheme("dark" ? "light" : "dark")}>
        {theme === "dark" ? "Light" : "Dark"}
      </button> */}
    </div>
  );
}
