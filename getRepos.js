async function getGithubRepo() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/Beadle85/frontend-mentor-challenges/contents",
    );

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const repoContent = await response.json();
    repoContent.forEach((repo) => {
      console.log(repo);
    });
  } catch (error) {
    console.error(error);
  }
}
getGithubRepo();
