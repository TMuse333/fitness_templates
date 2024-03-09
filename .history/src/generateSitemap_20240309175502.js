const fs = require('fs');

const generateXmlSitemap = (urls) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map((url) => `<url><loc>${url}</loc></url>`).join('')}
    </urlset>`;

  return xml;
};

const urls = ['https://muh.com/', 'https://yourwebsite.com/page1', 'https://yourwebsite.com/page2'];

const xmlContent = generateXmlSitemap(urls);

fs.writeFileSync('sitemap.xml', xmlContent);