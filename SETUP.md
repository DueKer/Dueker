# 🚀 GitHub 个人主页设置指南

## 📋 项目概述

这是一个超炫酷的GitHub个人主页项目，包含：
- 🎯 动态每日语录生成
- 📊 实时GitHub统计
- 🐍 贡献蛇形图动画
- 📈 3D贡献图表
- ⚡ 自动化工作流

## 🛠️ 快速开始

### 1. 创建个人主页仓库
```bash
# 创建一个与你的用户名同名的仓库
# 例如：用户名是 DueKer，则创建 DueKer/DueKer 仓库
```

### 2. 克隆并设置项目
```bash
git clone https://github.com/DueKer/DueKer.git
cd DueKer
npm install
```

### 3. 自定义配置

#### 更新 README.md
- 替换所有 `DueKer` 为你的GitHub用户名
- 更新个人信息、技能栈、联系方式
- 修改邮箱地址和社交媒体链接

#### 自定义语录内容
编辑 `quotes.json` 添加你喜欢的语录：
```json
{
  "text": "你的励志语录",
  "author": "作者名称"
}
```

#### 调整语录样式
修改 `generate-quote.js` 中的颜色、字体、布局等：
```javascript
// 渐变色配置
gradient.addColorStop(0, '#你的颜色1');
gradient.addColorStop(0.5, '#你的颜色2');
gradient.addColorStop(1, '#你的颜色3');
```

### 4. 设置GitHub Actions

#### 移动工作流文件
```bash
mkdir -p .github/workflows
mv update-quote.yml .github/workflows/
mv generate-contribution-snake.yml .github/workflows/
mv profile-3d.yml .github/workflows/
```

#### 配置权限
1. 进入仓库设置 → Actions → General
2. 设置 Workflow permissions 为 "Read and write permissions"
3. 勾选 "Allow GitHub Actions to create and approve pull requests"

## 🎨 高级自定义

### 主题配置
支持多种主题风格：
- `tokyonight` - 东京夜晚主题
- `radical` - 激进主题  
- `dark` - 暗黑主题
- `github_dark` - GitHub暗色主题

### 统计图表定制
在README.md中可以添加更多统计组件：
```markdown
![Wakatime Stats](https://github-readme-stats.vercel.app/api/wakatime?username=你的wakatime用户名)
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=你的用户名&layout=compact)
```

### 技能徽章定制
访问 [shields.io](https://shields.io) 创建自定义技能徽章：
```markdown
![你的技能](https://img.shields.io/badge/-技能名称-颜色代码?style=for-the-badge&logo=logo名称&logoColor=white)
```

## 🔧 故障排除

### 常见问题

**Q: 语录图片不显示？**
A: 检查GitHub Actions是否成功运行，确保有读写权限

**Q: 统计图表显示错误？**  
A: 确认用户名拼写正确，检查仓库是否为public

**Q: 自动化失败？**
A: 查看Actions日志，通常是权限或依赖问题

### 调试技巧
```bash
# 本地测试语录生成
npm run generate

# 检查生成的文件
ls -la quote.*
```

## 🌟 最佳实践

1. **定期更新语录** - 保持内容新鲜有趣
2. **优化图片大小** - 确保加载速度
3. **测试响应式** - 在不同设备上查看效果
4. **备份配置** - 定期备份自定义设置
5. **社区分享** - 与其他开发者交流经验

## 📝 更新日志

- v1.0.0 - 初始版本，基础功能完成
- v1.1.0 - 添加高级语录生成器
- v1.2.0 - 集成GitHub Actions自动化
- v1.3.0 - 添加3D贡献图和蛇形图

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

## 📄 许可证

MIT License - 详见 LICENSE 文件

---

如果觉得这个项目对你有帮助，请给个 ⭐ Star！ 