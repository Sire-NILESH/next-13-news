// The category you want to get headlines for. Possible options: business, entertainment, general, health, science, sports, technology.

import { Category, KeywordNews } from "@/types";
import { getDateXDaysAgo, getToday } from "./utility";

export async function getNews(category: Category) {
  const params = new URLSearchParams({
    categories: category,
    languages: "en",
    countries: "in, us, gb, au",
    date: `${getDateXDaysAgo(10)},${getToday()}`,
    limit: "100",
    access_key: process.env.API_KEY as string,
  }).toString();

  const res = await fetch(`${process.env.BASE_URL as string}/news?${params}`, {
    next: { revalidate: 86400 },
  }); //this will revalidate the data for every 24 hrs.

  if (!res.ok) throw new Error("failed to fetch data 💥💥💥");

  return res.json();
}

export async function getKeywordNews(keyword: KeywordNews) {
  const params = new URLSearchParams({
    keywords: keyword,
    languages: "en",
    date: `${getDateXDaysAgo(10)},${getToday()}`,
    limit: "100",
    access_key: process.env.API_KEY as string,
  }).toString();

  const res = await fetch(`${process.env.BASE_URL as string}/news?${params}`, {
    next: { revalidate: 86400 },
  }); //this will revalidate the data for every 24 hrs.

  if (!res.ok) throw new Error("failed to fetch data 💥💥💥");

  return res.json();
}
