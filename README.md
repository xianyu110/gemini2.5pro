# Gemini 2.5 Pro 国内使用完全指南

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?style=flat-square&logo=github)](https://chinamanor.github.io/gemini-guide/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Update](https://img.shields.io/badge/Update-Daily-orange?style=flat-square)]()

> 🚀 一个精美的响应式网站，提供 Gemini 2.5 Pro 国内使用的完整指南，包含五大主流方案对比和详细使用教程。

## 📖 项目简介

Gemini 2.5 Pro 是谷歌最新发布的强大AI模型，在编程、推理、创造等方面表现卓越。本项目为国内用户提供完整的使用指南，帮助您选择最适合的体验方式。

### ✨ 主要特性

- 🎨 **精美设计**: 现代化响应式界面，支持多端访问
- 📊 **方案对比**: 详细对比五种主流使用方案
- 🔄 **实时更新**: 每日更新数据和服务状态
- 📱 **移动优先**: 完美支持手机、平板等移动设备
- ⚡ **性能优化**: 快速加载，流畅交互体验
- 🔍 **SEO友好**: 优化搜索引擎收录和排名

## 🎯 支持的使用方案

| 方案 | 特点 | 适用人群 | 推荐指数 |
|------|------|----------|----------|
| 🎓 教育邮箱免费 | 免费15个月 | 学生用户 | ⭐⭐⭐⭐⭐ |
| 🚀 国内镜像直连 | 零门槛使用 | 普通用户 | ⭐⭐⭐⭐⭐ |
| 💰 官网付费订阅 | 官方原生体验 | 商务用户 | ⭐⭐⭐⭐ |
| 🔧 中转API服务 | 按需付费 | 开发者 | ⭐⭐⭐⭐ |
| ❌ Google AI Studio | 暂时停用 | - | ⭐ |

## 🛠️ 技术栈

- **前端**: HTML5, CSS3, Vanilla JavaScript
- **样式**: CSS Grid, Flexbox, CSS Variables
- **字体**: Inter Font Family
- **图标**: Font Awesome 6
- **动画**: CSS Animations, Intersection Observer API
- **部署**: GitHub Pages

## 🚀 快速开始

### 在线访问

直接访问 GitHub Pages 部署的网站：
[https://your-username.github.io/gemini-guide/](https://your-username.github.io/gemini-guide/)

### 本地开发

1. **克隆仓库**
   ```bash
   git clone https://github.com/your-username/gemini-guide.git
   cd gemini-guide
   ```

2. **启动本地服务器**
   ```bash
   # 使用 Python
   python -m http.server 8080
   
   # 或使用 Node.js
   npx serve .
   
   # 或使用 PHP
   php -S localhost:8080
   ```

3. **访问网站**
   打开浏览器访问 `http://localhost:8080`

## 📁 项目结构

```
gemini国内使用指南/
├── index.html          # 主页面
├── style.css          # 样式文件
├── script.js          # 脚本文件
├── README.md          # 项目说明
├── _config.yml        # GitHub Pages配置
└── assets/            # 静态资源（如需要）
    ├── images/
    ├── icons/
    └── fonts/
```

## 🎨 设计特性

### 响应式设计
- 移动端优先的设计理念
- 适配各种屏幕尺寸
- 流畅的触摸交互体验

### 视觉效果
- 现代化的渐变背景
- 流畅的动画过渡
- 悬浮卡片动效
- 平滑滚动体验

### 交互功能
- 智能导航栏
- 数据实时更新
- 访客统计功能
- 服务状态监控

## 📊 功能模块

### 1. 导航系统
- 固定顶部导航
- 移动端汉堡菜单
- 平滑锚点跳转
- 滚动响应式显示

### 2. 数据管理
- 每日自动更新
- 访客计数统计
- 服务状态检测
- 本地数据缓存

### 3. 用户体验
- 快速加载优化
- 错误处理机制
- 离线状态提示
- 键盘快捷键支持

## 🔧 自定义配置

### 更新数据源
编辑 `script.js` 中的数据更新函数：
```javascript
function updateMethodAvailability() {
    // 在这里添加您的数据源
}
```

### 修改样式主题
编辑 `style.css` 中的CSS变量：
```css
:root {
    --primary-color: #4285f4;
    --secondary-color: #34a853;
    /* 更多自定义颜色 */
}
```

### 添加新方案
在 `index.html` 中添加新的方案卡片，并在 `script.js` 中添加对应的状态检测。

## 📈 SEO优化

- 语义化HTML标签
- Meta标签优化
- 结构化数据标记
- 图片Alt属性
- 页面性能优化

## 🌐 浏览器支持

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ 移动端浏览器

## 📱 PWA支持

项目预留了PWA支持的基础结构，可以轻松扩展为：
- 离线访问支持
- 应用程序安装
- 推送通知功能

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request

## 📝 更新日志

### v1.0.0 (2025-08-02)
- ✨ 初始版本发布
- 📱 响应式设计实现
- 🎨 五大方案详细介绍
- 📊 数据实时更新功能
- 🚀 GitHub Pages部署

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Font Awesome](https://fontawesome.com/) - 图标库
- [Google Fonts](https://fonts.google.com/) - Inter字体
- [GitHub Pages](https://pages.github.com/) - 免费托管服务

## 📞 联系方式

- 作者: 您的名字
- 邮箱: your-email@example.com
- GitHub: [@your-username](https://github.com/your-username)

---

⭐ 如果这个项目对您有帮助，请给它一个星标！