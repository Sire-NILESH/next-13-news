// The category you want to get headlines for. Possible options: business, entertainment, general, health, science, sports, technology. Note: you can't mix this param with the sources param.

import { Category, Country, KeywordNews } from "@/types";

// https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=API_KEY

// https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=API_KEY

export async function getNews(category: Category, country: Country = "us") {
  const res = await fetch(
    `${process.env.BASE_URL}/top-headlines?country=${country}&category=${category}&pageSize=100&apiKey=${process.env.API_KEY}`,
    { next: { revalidate: 86400 } }
  ); //this will revalidate the data for every 24 hrs.

  if (!res.ok) throw new Error("failed to fetch data 💥💥💥");

  return res.json();
}

export async function getKeywordNews(keyword: KeywordNews) {
  const res = await fetch(
    `${process.env.BASE_URL}/everything?q=${keyword}&pageSize=100&apiKey=${process.env.API_KEY}`,
    { next: { revalidate: 86400 } }
  ); //this will revalidate the data for every 24 hrs.

  if (!res.ok) throw new Error("failed to fetch data 💥💥💥");

  return res.json();
}
