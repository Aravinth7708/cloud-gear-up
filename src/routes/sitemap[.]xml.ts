import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/data/site";

export const Route=createFileRoute("/sitemap.xml")({server:{handlers:{GET:()=>{const paths=["","/services","/products","/about","/contact",...products.map(p=>`/products/${p.slug}`)];const xml=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path=>`<url><loc>https://artechzo.com${path}</loc></url>`).join("")}</urlset>`;return new Response(xml,{headers:{"Content-Type":"application/xml"}})}}}});