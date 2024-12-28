async function getGithubRepo() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/Beadle85/frontend-mentor-challenges/contents",
    );

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const repoContent = await response.json();
    const repoDiv = document.getElementById("challengeWrapper");
    repoContent.forEach((repo) => {
      const repoElement = document.createElement("li");
      repoElement.textContent = repo.name;
      repoDiv.appendChild(repoElement);
      console.log(repo);
    });
  } catch (error) {
    console.error(error);
  }
}
getGithubRepo();
