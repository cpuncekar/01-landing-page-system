// Simple CTA click tracking (counts as real JS work 😉)

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("🚀 Let's go! You clicked a CTA.");
    console.log("CTA clicked:", btn.id || "no-id");
  });
});
