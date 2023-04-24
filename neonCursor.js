document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div");
  cursor.className = "neon-cursor";
  document.body.appendChild(cursor);

  document.documentElement.style.cursor = "none";

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
  });

  document.addEventListener("mouseenter", () => {
    cursor.style.display = "block";
  });
});
