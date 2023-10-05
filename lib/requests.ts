// The category you want to get headlines for. Possible options: business, entertainment, general, health, science, sports, technology. Note: you can't mix this param with the sources param.

import { Category, Country, KeywordNews } from "@/types";
import { getDateXDaysAgo, getToday } from "./utility";

// https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=API_KEY

// https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=API_KEY
// http://api.mediastack.com/v1/news?access_key=API_KEY&categories=entertainment&limit=100&date=2023-09-15,2023-10-1

// http://api.mediastack.com/v1/news?access_key=API_KEY&keywords=cricket football soccer golf race racing worldcup&limit=100&date=2023-09-15,2023-10-1&sources=-essentially

export async function getNews(category: Category) {
  const params = new URLSearchParams({
    categories: category,
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
