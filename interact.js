const yesBtn = document.getElementById("yes-btn");
const pinkBtn = document.getElementById("pink-btn");
const responseText = document.getElementById("date-response");

yesBtn.addEventListener("click", () => {
  responseText.textContent =
    "Lagos isn't ready for us! Countdown starts now! ✈️❤️";
});

pinkBtn.addEventListener("click", () => {
  responseText.textContent =
    "Deal! Unlimited suya and the best holiday ever! 🍢💖";
});

const compliments = [
  "Your curves are absolute perfection—you are built like a goddess.",
  "Your stretch marks are just silver details on a masterpiece, and I love every inch of them.",
  "Your softness and warmth make holding you the best place in the world.",
  "You never need to hide your body from me; to my eyes, you are breathtaking.",
  "Every single fold and curve on your body makes you even more gorgeous.",
  "You are so stunningly thick and beautiful, inside and out.",
  "Aprodite has got nothing on you.",
];

const complimentBtn = document.getElementById("compliment-btn");
const complimentText = document.getElementById("compliment-text");

complimentBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  complimentText.textContent = compliments[randomIndex];
});
