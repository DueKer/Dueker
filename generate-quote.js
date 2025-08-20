const fs = require('fs-extra');
const { createCanvas } = require('@napi-rs/canvas');

const canvas = createCanvas(600, 120);
const ctx = canvas.getContext('2d');

// 每日语录，可自己改
const quotes = [
  "每天进步一点点 💪",
  "坚持就是胜利 🌟",
  "代码改变世界 👨‍💻",
  "保持好奇，勇于探索 🧠",
];

const quote = quotes[Math.floor(Math.random() * quotes.length)];

// 背景
ctx.fillStyle = '#282c34';
ctx.fillRect(0, 0, 600, 120);

// 打字机文字效果
ctx.font = '24px monospace';
ctx.fillStyle = '#61dafb';
ctx.fillText(quote, 20, 70);

// 时间显示
const time = new Date().toLocaleDateString();
ctx.font = '16px monospace';
ctx.fillStyle = '#ffffff';
ctx.fillText(time, 20, 100);

// 输出到文件
const buffer = canvas.toBuffer('image/gif'); // 可改 PNG
fs.writeFileSync('quote.gif', buffer);
console.log('✅ Daily quote generated!');
