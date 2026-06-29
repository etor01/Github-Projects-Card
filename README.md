# Dynamic GitHub Portfolio Widget

A lightweight, vanilla JavaScript and CSS grid component designed to fetch and display your public GitHub repositories directly on your personal portfolio website using the GitHub REST API.

## 🚀 Features

- **Live Dynamic Loading**: Automatically displays your repositories without manual site updates.
- **Smart Sorting**: Configured to show your most recently updated projects first.
- **Responsive Design**: Clean CSS Grid layout that looks great on mobile, tablet, and desktop screens.
- **Zero Dependencies**: Built entirely with plain HTML, CSS, and native JavaScript `fetch()`.

## 🛠️ How to Use

Follow these simple steps to integrate this component into your website:

1. **Copy the HTML**: Place the structure from `index.html` inside your desired portfolio section.
2. **Add the CSS**: Link the `style.css` stylesheet in your `<head>` tag.
3. **Include the Script**: Link the `script.js` file at the bottom of your `<body>` tag.
4. **Change the Username**: Open `scriptp.js` and update the `GITHUB_USERNAME` variable to your own:
   ```javascript
   const GITHUB_USERNAME = "your-github-username";
   `ex: etor01`;
   ```

## 🎨 Customization

You can tweak the Javascript parameters in `script.js` to change what data shows up:

- **Change the amount of repos displayed**: Adjust the `per_page=6` parameter in the API URL fetch string to your preferred number.
- **Change the theme**: Update the hex color codes in `style.css` under `.repo-card` to match your personal brand styling.

## 🍴 How to Fork and Contribute

Want to make your own version or suggest improvements?

1. **Fork the Repository**: Click the **Fork** button at the top right of this repository page to create a copy in your account.
2. **Clone the Fork**: Clone your new repository to your local machine:
   ```bash
   git clone https://github.com
   ```
3. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
4. **Commit Changes**: Commit your customized modifications:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
5. **Push to GitHub**: Push the branch up to your profile:
   ```bash
   git push origin feature/AmazingFeature
   ```
6. **Open a Pull Request**: Go to the original repository page and click "New Pull Request" to merge your enhancements.

## ⚠️ API Limits Note

Please note that the GitHub REST API enforces a limit of 60 unauthenticated requests per hour per IP address. If you hit this rate limit while building, your page will gracefully show a "Could not load projects" message.
Thank you and have fun with it.
