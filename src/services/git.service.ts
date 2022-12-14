import type { GitDetails } from "./models/GitDetails";
import { useUtilStore } from "@/stores/utilityStore";

class GitService {
  getRepos(): Promise<GitDetails[]> {
    const utilStore = useUtilStore()
    return fetch(`https://api.github.com/users/${import.meta.env.VITE_GIT_USER}/repos`).then(e => e.json()).then(
      (r) =>
        r.filter((e : GitDetails) => {
          return !utilStore.repoExclusions.includes(e.clone_url);
        })
    );
  }
  getRepoDetails(repo: string): Promise<GitDetails> {
    return fetch(`https://api.github.com/repos/${import.meta.env.VITE_GIT_USER}/${repo}`)
      .then((resp) => {
        return resp.json();
      })
      .catch((err) => {
        console.log("Could not load repo", err);
      });
  }
  getRepoSource(repoName: string, filename: string): Promise<string> {
    return fetch(
      `https://raw.githubusercontent.com/${repoName}/master/${filename}`
    ).then((resp) => resp.text());
  }
  getMarkupFor(repoName: string, filename: string): Promise<string> {
    console.log(repoName)
    return fetch(
      `/api/markdown/${repoName}/master/${filename}`,
      {
        headers: {
          "Access-Control-Allow-Headers": "Access-Control-Allow-Origin, Access-Control-Allow-Headers",
          "Access-Control-Allow-Origin": "*"
        }
      }
    ).then((resp) =>
      resp.text()).then(html => {

        // Convert the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        // console.log(html, doc)
        return html
      })
  }
}

export default new GitService();
