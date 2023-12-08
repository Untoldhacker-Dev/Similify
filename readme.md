<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Similify</title>
</head>
<body>

<h1 align="center">Similify</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/Similify">
    <img src="https://img.shields.io/npm/v/Similify.svg" alt="npm version">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  </a>
  <a href="https://github.com/yourusername/yourrepository/issues">
    <img src="https://img.shields.io/github/issues/yourusername/yourrepository.svg" alt="GitHub issues">
  </a>
  <a href="https://github.com/yourusername/yourrepository/stargazers">
    <img src="https://img.shields.io/github/stars/yourusername/yourrepository.svg" alt="GitHub stars">
  </a>
  <a href="https://t.me/AutomationCore">
    <img src="https://img.shields.io/badge/chat-on%20telegram-0088cc.svg" alt="Telegram">
  </a>
</p>

<p align="center">
  Similify is a versatile JavaScript package designed to simplify and enhance similarity comparisons in various contexts. Whether you're comparing words, objects, arrays, or exploring string lengths and numerical ranges, Similify provides an easy-to-use interface with customizable thresholds. Effortlessly find the most similar instances and match percentages, making complex comparisons a breeze. Streamline your similarity analysis and unlock new possibilities with Similify.
</p>

<h2>Installation</h2>

<p>
  Run the following command to install Similify:
</p>

<pre>
npm install Similify
</pre>

<h2>Usage</h2>

<p>
  Require Similify in your JavaScript file and start using its functions:
</p>

<pre>
const { compareWords, compareObjects, compareArrayToArrays } = require('Similify');

// Example usage with default threshold (70)
console.log(compareWords("apple", "orange"));
console.log(compareObjects({ a: 1, b: 2 }, { a: 1, b: 3 }));
console.log(compareArrayToArrays(["apple", "banana"], ["orange", "banana", "grape"]));

// Example usage with custom threshold
const customThreshold = 80;
console.log(compareWords("apple", "orange", customThreshold));
</pre>

<h2>Support</h2>

<p>
  For support and discussions, join our Telegram channel: <a href="https://t.me/AutomationCore">AutomationCore</a>
</p>

<h2>Contributing</h2>

<p>
  Contributions are welcome! Please open an issue or submit a pull request.
</p>

<h2>License</h2>

<p>
  This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.
</p>

</body>
</html>
