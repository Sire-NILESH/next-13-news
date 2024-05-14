import HtmlReactParser from "html-react-parser";

export function getToday() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

export function getDateXDaysAgo(xDays: number) {
  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() - xDays);
  return tenDaysAgo.toISOString().split("T")[0];
}

export const getHTMLParsedString = (str: string, numOfLines: number) => {
  const stringLines = str.split(". ", numOfLines).join(". ");

  const parsedString = HtmlReactParser(stringLines).toString();

  return parsedString.length > 0 ? parsedString : "--";
};
