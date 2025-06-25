const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const prettifyXml = require('prettify-xml');

const BASE_URL = 'https://www.cecile91-hypnose.fr';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/quest-ce-que-l-hypnose', changefreq: 'monthly', priority: 0.9 },
  { url: '/hypnose-pourquoi', changefreq: 'monthly', priority: 0.9 },
  { url: '/comportements', changefreq: 'monthly', priority: 0.8 },
  { url: '/emotions', changefreq: 'monthly', priority: 0.8 },
  { url: '/douleurs', changefreq: 'monthly', priority: 0.8 },
  { url: '/developpement-personnel', changefreq: 'monthly', priority: 0.8 },
  { url: '/sommeil', changefreq: 'monthly', priority: 0.8 },
  { url: '/infos', changefreq: 'monthly', priority: 0.7 },
  { url: '/tarifs', changefreq: 'monthly', priority: 0.7 },
  { url: '/faq', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/comment-se-deroule-une-seance', changefreq: 'monthly', priority: 0.7 },
  { url: '/politique-confidentialite', changefreq: 'monthly', priority: 0.6 },
  // Ajoute ici toutes les routes importantes de ton site
];

const sitemap = new SitemapStream({ hostname: BASE_URL });
const writeStream = createWriteStream('./public/sitemap.xml');

(async () => {
  try {
    for (const link of links) {
      sitemap.write(link);
    }
    sitemap.end();
    const data = await streamToPromise(sitemap);
    const pretty = prettifyXml(data.toString(), { indent: 2 });
    writeStream.write(pretty);
    writeStream.end();
    console.log('✅ sitemap.xml généré et formaté dans public/');
  } catch (err) {
    console.error('❌ Erreur lors de la génération du sitemap :', err);
  }
})();
