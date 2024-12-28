async function getGithubRepo() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/Beadle85/frontend-mentor-challenges/contents/challenges",
    );

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const repoContent = await response.json();
    const repoWrapper = document.getElementById("challengeWrapper");
    const template = document.getElementById("link-template");

    repoContent.forEach((folder) => {
      const clone = template.content.cloneNode(true);
      const anchor = clone.querySelector("a");

      // Convert the GitHub tree URL to raw content URL for index.html
      // From: https://github.com/Beadle85/frontend-mentor-challenges/tree/main/challenges/folder-name
      // To: https://beadle85.github.io/frontend-mentor-challenges/challenges/folder-name/index.html
      const baseUrl = "https://beadle85.github.io/frontend-mentor-challenges";
      const indexUrl = `${baseUrl}/${folder.path}/index.html`;

      anchor.href = indexUrl;
      anchor.textContent = folder.name;
      repoWrapper.appendChild(clone);
    });
  } catch (error) {
    console.error(error);
  }
}
getGithubRepo();
