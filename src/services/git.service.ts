import type { GitDetails } from "./models/GitDetails";

class GitService {
  getRepoDetails(path: string): Promise<GitDetails> {
    return fetch(path)
      .then((resp) => {
        return resp.json();
      })
      .catch((err) => {
        console.log("Could not load repo", err);
      });
  }
  getRepoSource(repoPath: string, filename: string): Promise<string> {
    return fetch(`${repoPath}/contents/${filename}`).then(resp => resp.text())
  }
}

export default new GitService();
