import "./styles.scss";

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-image");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", function () {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    } else {
      menu.classList.add("show");
    }
  });
});

window.navigateToSpeaker = function (event) {
  debugger
  const speakerElement = event.currentTarget;
  const speakerName = speakerElement.getAttribute("data-speaker");
  const encodedSpeakerName = encodeURIComponent(speakerName);
  const url = `/speakers.html?speaker=${encodedSpeakerName}`;

  // Redirect to the speaker's page in the same tab
  window.location.href = url;
};

window.addEventListener("message", (event) => {
  if (event.origin === "http://localhost:9000") {
    const { speakerName } = event.data;
    if (speakerName) {
      scrollToSpeaker(speakerName);
    }
  }
});

function scrollToSpeaker(speakerName) {
  const speakerElement = document.querySelector(
    `.speaker-page h1:contains('${speakerName}')`
  );
  if (speakerElement) {
    speakerElement.scrollIntoView({ behavior: "smooth" });
  }
}
