function createChallengeLinks() {
  const challenges = [
    "qr-code-component-main",
    // Add other challenge folder names here
  ];

  const challengeWrapper = document.getElementById("challengeWrapper");
  const template = document.getElementById("linkTemplate");

  challenges.forEach((challengeName) => {
    const clone = template.content.cloneNode(true);
    const anchor = clone.querySelector("a");
    anchor.href = `./challenges/${challengeName}/index.html`;
    anchor.textContent = challengeName;
    challengeWrapper.appendChild(clone);
  });
}

createChallengeLinks();
