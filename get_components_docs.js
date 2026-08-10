const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// [组件列表省略以保持内容简洁，完整列表请见原文档内容]
const components = [
"api/accordion",
"api/accordion-group",
"api/action-sheet",
"api/alert",
"api/badge",
"api/breadcrumb",
"api/breadcrumbs",
"api/button",
"api/ripple-effect",
"api/card",
"api/card-content",
"api/card-header",
"api/card-subtitle",
"api/card-title",
"api/checkbox",
"api/chip",
"api/app",
"api/content",
"api/datetime",
"api/datetime-button",
"api/picker",
"api/picker-column",
"api/picker-column-option",
"api/picker-legacy",
"api/fab",
"api/fab-button",
"api/fab-list",
"api/grid",
"api/col",
"api/row",
"api/icon",
"api/infinite-scroll",
"api/infinite-scroll-content",
"api/input",
"api/input-password-toggle",
"api/input-otp",
"api/textarea",
"api/item",
"api/item-divider",
"api/item-group",
"api/item-sliding",
"api/item-options",
"api/item-option",
"api/label",
"api/note",
"api/list",
"api/list-header",
"api/avatar",
"api/icon",
"api/img",
"api/thumbnail",
"api/menu",
"api/menu-button",
"api/menu-toggle",
"api/split-pane",
"api/modal",
"api/backdrop",
"api/nav",
"api/nav-link",
"api/popover",
"api/loading",
"api/progress-bar",
"api/skeleton-text",
"api/spinner",
"api/radio",
"api/radio-group",
"api/range",
"api/refresher",
"api/refresher-content",
"api/reorder",
"api/reorder-group",
"api/router",
"api/router-link",
"api/router-outlet",
"api/route",
"api/route-redirect",
"api/searchbar",
"api/segment",
"api/segment-button",
"api/segment-content",
"api/segment-view",
"api/select",
"api/select-option",
"api/tabs",
"api/tab",
"api/tab-bar",
"api/tab-button",
"api/toast",
"api/toggle",
"api/toolbar",
"api/header",
"api/footer",
"api/title",
"api/buttons",
"api/back-button",
"api/text",
]; 

const baseUrl = "https://ionicframework.com/docs/";
const outputDir = path.join(__dirname, "ionic_docs");

(async () => {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  // 1. 生成索引文件
  let indexContent = "# Ionic Framework API Index\n\n";
  components.forEach(comp => indexContent += `- [${comp}](./${path.basename(comp)}.md)\n`);
  fs.writeFileSync(path.join(outputDir, "index.md"), indexContent, 'utf-8');

  // 2. 爬取数据
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: new URL(baseUrl).origin });
  const page = await context.newPage();

  for (const comp of components) {
    const url = `${baseUrl}${comp}`;
    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      // 打开 Copy page 菜单，再点击真正的复制动作。
      await page.click('button[data-copy-page-button-trigger]');
      await page.click('button[data-copy-page-action="copy"]');
      await page.waitForFunction(async () => (await navigator.clipboard.readText()).length > 0);
      const content = await page.evaluate(() => navigator.clipboard.readText());
      if (!content.trim()) throw new Error('Copy page returned empty content');
      const filePath = path.join(outputDir, `${path.basename(comp)}.md`);
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✅ ${path.basename(comp)}.md`);
    } catch (e) { console.error(`❌ ${comp}: ${e.message}`); }
  }
  await browser.close();
})();
