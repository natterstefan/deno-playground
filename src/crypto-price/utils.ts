import { config } from "dotenv";

const env = config();

export function createUrl(symbol: string, currency: string): URL {
  const url = new URL(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
  );
  url.search = new URLSearchParams({
    symbol: symbol,
    convert: currency,
  }).toString();

  return url
}

export async function getQuoteData(symbol: string, currency: string) {
  const url = createUrl(symbol, currency)

  const fetchResult = await fetch(url, {
    headers: {
      "X-CMC_PRO_API_KEY": env.COINMARKETCAP_API_KEY,
    },
  });

  return fetchResult.json();
}

export function createOutput(data: Record<string, any>, config: {symbol: string, currency: string}) {
  return `The latest ${config.symbol}'s quote is ${
    data.data[config.symbol].quote[config.currency].price.toFixed(2)
  } ${config.currency}`
}


export async function logCurrentQuote(symbol: string, currency: string) {
  const data = await getQuoteData(symbol, currency);
  console.log(createOutput(data, { symbol, currency }))
}
