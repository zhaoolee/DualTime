# GitHub Pages 部署指南

## 问题解决

GitHub Pages 默认使用 Jekyll 处理静态文件，会忽略以 `_` 开头的文件夹（如 `_next`），导致 Next.js 应用无法正常工作。

## 解决方案

### 1. 配置文件已经完善

✅ **next.config.mjs** - 已配置静态导出和路径
```javascript
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/toma-clock' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/toma-clock' : '',
};
```

✅ **.nojekyll 文件** - 已在 `docs/` 和 `public/` 目录中添加

✅ **GitHub Actions** - 已创建自动化部署工作流

### 2. 部署步骤

#### 方法一：使用 GitHub Actions（推荐）
1. 将代码推送到 GitHub
2. 在仓库设置中：
   - 进入 `Settings` → `Pages`
   - Source 选择 `GitHub Actions`
3. 推送到 main/master 分支会自动触发部署

#### 方法二：手动部署
1. 构建项目：
   ```bash
   npm run build:github
   ```
2. 在 GitHub 仓库设置中：
   - 进入 `Settings` → `Pages`
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `main` 或 `master`
   - Folder 选择 `/docs`

### 3. 验证部署

访问：`https://你的用户名.github.io/toma-clock`

如果出现 404 错误，检查：
1. 仓库名是否为 `toma-clock`
2. `docs` 目录是否包含 `.nojekyll` 文件
3. GitHub Pages 设置是否正确

### 4. 本地开发

开发模式（不带路径前缀）：
```bash
npm run dev
```

生产模式构建：
```bash
npm run build:github
```

### 5. 故障排除

如果 `_next` 文件夹资源仍然无法访问：
1. 确认 `.nojekyll` 文件存在于 `docs` 目录
2. 确认 GitHub Pages Source 设置正确
3. 清除浏览器缓存并重新访问
4. 检查浏览器开发者工具的网络面板，查看具体的错误信息

### 6. 重要提示

- `basePath` 和 `assetPrefix` 必须与您的仓库名一致
- 如果仓库名不是 `toma-clock`，请修改 `next.config.mjs` 中的路径
- 部署后可能需要几分钟才能生效 