const GITHUB_USERNAME = "etor01"; // username
const repoContainer = document.getElementById("github-repos");

async function fetchGitHubRepos() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repos = await await response.json();

    // Clear any loading text
    repoContainer.innerHTML = "";

    repos.forEach((repo) => {
      // Create a simple card structure for each repository
      const repoCard = document.createElement("div");
      repoCard.className = "repo-card";

      repoCard.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank " rel="noopener noreferrer">${repo.name}</a></h3>
        <p>${repo.description || "No description provided."}</p>
        <div class="repo-stats">
          <span>⭐ ${"Stars: " + repo.stargazers_count}</span>
          <span>🍴 ${"Forks: " + repo.forks_count}</span>
          <span>🔧 ${"Language: " + repo.language || "Misc"}</span>
        </div>
      `;

      repoContainer.appendChild(repoCard);
    });
  } catch (error) {
    console.error(error);
    repoContainer.innerHTML =
      "<p>Could not load projects at this time. Get a coffee and come back later.</p>";
  }
}

// Initialize the fetch only when the page loads
fetchGitHubRepos();
