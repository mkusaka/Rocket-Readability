import { Readability } from '@mozilla/readability';

function makeReadable() {
  const documentClone = document.cloneNode(true) as Document;
  const reader = new Readability(documentClone);
  const article = reader.parse();

  if (!article) {
    console.error('Could not parse article');
    return;
  }

  // 元のコンテンツを保存
  const originalContent = document.body.innerHTML;

  // 新しいスタイルとコンテンツを適用
  document.body.innerHTML = `
    <div id="rocket-readable-content" style="
      max-width: 680px;
      margin: 0 auto;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      font-size: 18px;
      line-height: 1.6;
      color: #333;
    ">
      <h1 style="font-size: 32px; margin-bottom: 20px;">${article.title}</h1>
      ${article.content}
      <button id="rocket-restore" style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
        background: #007AFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      ">元に戻す</button>
    </div>
  `;

  // 元に戻すボタンのイベントリスナー
  document.getElementById('rocket-restore')?.addEventListener('click', () => {
    document.body.innerHTML = originalContent;
  });
}

makeReadable(); 
