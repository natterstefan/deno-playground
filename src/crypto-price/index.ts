/**
 * API Docs
 * - https://coinmarketcap.com/api/documentation/v1/#section/Quick-Start-Guide
 */
import { parse } from "flags";
import { logCurrentQuote } from './utils.ts'

const args = parse(Deno.args);
const currency = args.currency || "USD";

if (!args.symbol) {
  console.log("symbol needs to be supplied");
  Deno.exit(1);
}

logCurrentQuote(args.symbol, currency)
