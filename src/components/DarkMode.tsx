"use client";
import React, { useEffect, useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
let item;
let element: any;
if (typeof window !== "undefined") {
  item = localStorage.getItem("key");
  element = document.documentElement;
}

const [theme, setTheme] = useState(item ? item : "light");

  useEffect(() => {
    localStorage.setItem("theme", theme!);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
      ) : (
        <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
      )}
    </>
  );
};

export default DarkMode;
