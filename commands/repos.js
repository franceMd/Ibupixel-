"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "✨", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://github.com/bmbtz/Mr-B.M.B-MD
  const img = ''https://files.catbox.moe/0jqumw.mp4';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*hellow Friend
this is* *Mr b² smile 😁-Md.*\n *Follow and support our channel* https://whatsapp.com/channel/0029VawO6hgF6sn7k3SuVU3z

🗼 *REPOSITORY:* ${data.html_url}
💫 *STARS:* ${repoInfo.stars}
🧧 *FORKS:* ${repoInfo.forks}
📅 *RELEASE DATE:* ${releaseDate}
🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
🙊 *OWNER:* *BMr b²*
🍃 *THEME:* *Mr b² smile 😁*
🍷 *believe in yourself don't depend on anyone*
__________________________________
            *Made With mr-b²- Team*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
