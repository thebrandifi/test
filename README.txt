BrandiFi website v2 (multi-page)

WHAT THIS IS
A complete static website: 19 pages, each with its own title, description, address, share tags and structured data.
Homepage, 9 service pages, services hub, work, pricing, about, contact, blog (index plus 3 guides), and a 404 page.

GITHUB PAGES (your site is at kiaaty.github.io/wealthy/)
1. Put the CONTENTS of this folder at the root of the repository (index.html next to the assets folder), commit and push.
2. In the repository: Settings > Pages > deploy from the main branch, root folder. Wait a minute or two, then refresh.
3. All links in this version are relative, so the site works at kiaaty.github.io/wealthy/ and on a custom domain.
4. For thebrandifi.com: Settings > Pages > Custom domain, enter thebrandifi.com, and add the DNS records GitHub shows at your domain
   registrar. Then robots.txt and the sitemaps work (search engines only read them at the root of a domain).
5. The page addresses inside the search data (canonical links, sitemaps) point to https://thebrandifi.com . If you will use the
   github.io address instead, tell Claude and it will be rebuilt for that address.

HOW TO UPLOAD (any other host)
1. Delete the old site files on your host (keep a backup copy first).
2. Upload EVERYTHING in this folder to the root of thebrandifi.com, keeping the folders.
   Every page is a folder with an index.html inside (for example /pricing/index.html), so addresses look like
   https://thebrandifi.com/pricing/ . This works on any hosting that serves static files.
3. .htaccess is for Apache hosts only (cPanel, most shared hosting). On Netlify, Vercel, Cloudflare Pages or Nginx,
   it is ignored: set one-year caching for /assets/ and a custom 404 page in that host's settings.

CHECK AFTER UPLOADING (open each in a browser)
   https://thebrandifi.com/            https://thebrandifi.com/pricing/
   https://thebrandifi.com/robots.txt  https://thebrandifi.com/sitemap.xml
   https://thebrandifi.com/sitemap-video.xml   https://thebrandifi.com/og-image.jpg

SEARCH ENGINES
- Google Search Console: add the property for thebrandifi.com, then submit sitemap.xml and sitemap-video.xml,
  then use URL Inspection on the homepage and click Request indexing.
- Bing Webmaster Tools: import from Google Search Console or add the site and submit sitemap.xml.
- Google Business Profile: create it only if you qualify (see section 8 of the SEO report), using the same name and phone.
- Test the share image: https://developers.facebook.com/tools/debug/
- Test structured data: https://search.google.com/test/rich-results (paste any page address).

EDITING PRICES
Prices appear on /pricing/ only. Send the new numbers to Claude to update every page at once.

FILES
assets/css, assets/js   styles and scripts (cached by browsers)
assets/videos, posters  the work previews, 10 seconds with sound
assets/img              tool and social logos
logo.png, og-image.jpg, favicon.png/svg, apple-touch-icon.png
robots.txt, sitemap.xml, sitemap-video.xml, llms.txt, 404.html
