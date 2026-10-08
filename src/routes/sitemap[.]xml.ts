import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { products } from "@/data/site";
import { sitemapPathForLocation, sitemapStaticPaths, sitemapXML, type SitemapEntry } from "@/lib/sitemap";

export const Route=createFileRoute("/sitemap.xml")({staticData:{sitemap:false},server:{handlers:{GET:async()=>{const router=await getRouterInstance();const entries:SitemapEntry[]=sitemapStaticPaths(router).map(path=>({path}));const route=router.routesById["/products/$slug"];if(route){for(const product of products){const location=router.buildLocation({to:"/products/$slug",params:{slug:product.slug}});const path=sitemapPathForLocation(router,location,route.id);if(path)entries.push({path})}}return new Response(sitemapXML("https://artechzo.com",entries),{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=3600"}})}}}});