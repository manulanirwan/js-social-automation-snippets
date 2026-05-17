# Browser Automation: Auto-Follow & Auto-Unfollow Scripts

A collection of lightweight, vanilla JavaScript automation snippets designed to be executed directly within a browser's developer console. These scripts automate the process of clicking "Follow" and "Unfollow" buttons on social media or networking web platforms by interacting directly with the DOM.

> ⚠️ **Disclaimer & Warning:** These scripts are provided strictly for educational and research purposes. Automating user actions (like mass following or unfollowing) violates the Terms of Service (ToS) of most major platforms (Instagram, X/Twitter, LinkedIn, TikTok, etc.). Utilizing these snippets can result in account rate-limits, temporary action blocks, or permanent bans. Use at your own risk.

---

## 🚀 Features

- **No Dependencies:** Written in pure, vanilla JavaScript. No external libraries or browser extensions required.
- [cite_start]**Automated Scrolling:** Periodically scrolls the webpage down to trigger lazy-loading and fetch more profiles dynamically[cite: 1, 7, 8].
- [cite_start]**Safety Limits & Timeouts:** Includes hard caps on the maximum number of actions performed and a global timeout to prevent infinite loops[cite: 1, 3, 7, 10].
- [cite_start]**Live Logging:** Outputs real-time progress and tracking information directly to the browser console[cite: 3, 4, 6, 9, 10].

---

## 🛠️ How It Works

[cite_start]Both scripts use the standard DOM API to query all `button` elements currently rendered on the page, filtering them based on their text content (e.g., "follow" or "following")[cite: 1, 7]. [cite_start]They operate on a controlled loop using `setInterval` to mimic delayed user actions[cite: 1, 7].

### 1. Auto-Unfollow Script (`auto-unfollow.js`)
- [cite_start]**Interval Delay:** 800ms between unfollow clicks[cite: 1].
- [cite_start]**Action Cap:** Automatically stops after reaching 50 unfollows[cite: 1, 3].
- [cite_start]**Pagination:** Scrolls down by 1000px every 5 actions to load more accounts[cite: 1, 4].

### 2. Auto-Follow Script (`auto-follow.js`)
- [cite_start]**Interval Delay:** 500ms between follow clicks[cite: 7].
- [cite_start]**Action Cap:** Automatically stops after reaching 100 follows[cite: 7, 9].
- [cite_start]**Pagination:** Scrolls down by 1000px every 5 actions to load more buttons[cite: 9, 10].

---

## 💻 Usage Instructions

1. Navigate to the target social media page containing the follow/unfollow list.
2. Open your browser's **Developer Tools** (Press `F12` or `Ctrl+Shift+I` / `Cmd+Option+I` on Mac).
3. Click on the **Console** tab.
4. Copy the entire source code of the desired script and paste it into the console.
5. Press `Enter` to execute.

[cite_start]*Note: For the unfollow script, you may need to adjust the `languageText` variable at the top of the file to match the exact wording of the button on your target platform (e.g., 'following', 'unfollow', etc.)[cite: 1].*

---

## ⚙️ Technical Considerations & Limitations

- [cite_start]**Button State Changes:** These scripts target the first available matching button in the DOM array (`buttons[0]`)[cite: 1, 7]. [cite_start]If a platform requires a confirmation popup to complete the unfollow action, or if the button's inner text does not instantly update upon being clicked, the script may repeatedly click the same element until the limit or timeout is reached[cite: 1, 7].
- **Anti-Bot Detection:** Modern websites use advanced behavioral analysis. [cite_start]Executing clicks at precise millisecond intervals (e.g., exactly every 500ms) makes the automated nature of these scripts highly transparent to bot-detection algorithms[cite: 1, 7].
