const fs = require('fs-extra');
const { createCanvas } = require('@napi-rs/canvas');

// 创建更大的画布以适应更丰富的内容
const canvas = createCanvas(800, 200);
const ctx = canvas.getContext('2d');

// 从JSON文件读取语录
const quotes = require('./quotes.json');
const quote = quotes[Math.floor(Math.random() * quotes.length)];

// 创建渐变背景
const gradient = ctx.createLinearGradient(0, 0, 800, 200);
gradient.addColorStop(0, '#667eea');
gradient.addColorStop(0.5, '#764ba2');
gradient.addColorStop(1, '#f093fb');

// 绘制渐变背景
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 800, 200);

// 添加半透明叠加层，增加深度感
ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
ctx.fillRect(0, 0, 800, 200);

// 绘制装饰性圆圈
ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
ctx.beginPath();
ctx.arc(700, 50, 30, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(750, 150, 20, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(50, 180, 15, 0, 2 * Math.PI);
ctx.fill();

// 添加边框装饰
ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
ctx.lineWidth = 2;
ctx.strokeRect(10, 10, 780, 180);

// 绘制引号装饰
ctx.font = 'bold 40px serif';
ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
ctx.fillText('"', 30, 60);
ctx.fillText('"', 750, 160);

// 主要文字 - 语录内容
ctx.font = 'bold 24px "SF Pro Display", -apple-system, sans-serif';
ctx.fillStyle = '#ffffff';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// 文字换行处理
const maxWidth = 700;
const lineHeight = 35;
const words = quote.text.split(' ');
let line = '';
let y = 80;

for (let n = 0; n < words.length; n++) {
  const testLine = line + words[n] + ' ';
  const metrics = ctx.measureText(testLine);
  const testWidth = metrics.width;
  
  if (testWidth > maxWidth && n > 0) {
    ctx.fillText(line, 400, y);
    line = words[n] + ' ';
    y += lineHeight;
  } else {
    line = testLine;
  }
}
ctx.fillText(line, 400, y);

// 作者信息（如果有）
if (quote.author) {
  ctx.font = '18px "SF Pro Display", -apple-system, sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.textAlign = 'right';
  ctx.fillText(`— ${quote.author}`, 750, y + 40);
}

// 时间戳和装饰
const now = new Date();
const date = now.toLocaleDateString('zh-CN', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  weekday: 'long'
});

ctx.font = '14px monospace';
ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
ctx.textAlign = 'left';
ctx.fillText(`📅 ${date}`, 30, 170);

// 添加一个小的闪烁效果标识
ctx.font = '16px monospace';
ctx.fillStyle = '#ffd700';
ctx.textAlign = 'right';
ctx.fillText('✨ 每日一句', 750, 30);

// 输出为PNG格式，更好的质量
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('quote.png', buffer);

// 同时保留GIF格式的兼容性
fs.writeFileSync('quote.gif', buffer);

console.log('✅ 每日语录已生成！Quote generated successfully!');
console.log(`📝 今日语录: ${quote.text}`);
if (quote.author) {
  console.log(`👤 作者: ${quote.author}`);
}
