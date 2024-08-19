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

let speakerTab = null;

window.navigateToSpeaker = function (event) {
  const speakerElement = event.currentTarget;
  const speakerName = speakerElement.getAttribute("data-speaker");
  const encodedSpeakerName = encodeURIComponent(speakerName);
  const url = `/speakers/${encodedSpeakerName}`;

  if (speakerTab && !speakerTab.closed) {
    // If the tab is already open, navigate to the new speaker in the existing tab
    speakerTab.location.href = url;
    speakerTab.focus();
  } else {
    // Open a new tab if it's the first time or the previous tab was closed
    speakerTab = window.open(url, "_blank");
  }
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
