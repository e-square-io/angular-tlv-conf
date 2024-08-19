import "/speakers-styles.scss";

window.addEventListener("load", () => {
  const url = new URL(window.location.href);
  const pathSegments = url.pathname.split("/");
  if (pathSegments.length > 2 && pathSegments[1] === "speakers") {
    const speakerName = decodeURIComponent(pathSegments[2]);
    scrollToSpeaker(speakerName);
  }
});

function scrollToSpeaker(speakerName) {
  const speakerElement = document.querySelector(`#${speakerName}`);
  if (speakerElement) {
    speakerElement.scrollIntoView({ behavior: "smooth" });
    history.replaceState(
      null,
      "",
      `/speakers/${encodeURIComponent(speakerName)}`
    );
  }
}
