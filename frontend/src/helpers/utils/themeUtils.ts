export const getInitialTheme = (): "dark" | "light" => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme
  }

  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export const applyTheme = (theme: "light" | "dark") => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme)
  console.log(localStorage.getItem("theme"))
}

