import { format } from "date-fns";

// We have a set of sample rates
const SAMPLE_RATES = {
  fetch(`http://api.currencylayer.com/live?access_key=12f97a268a7876468e680699ae6ac18b&format=1
        ? access_key = 12f97a268a7876468e680699ae6ac18b`)
  
};

export const api = (fullPath = "") => {
  const [path] = fullPath.split("?");

  if (path.length === 0) {
    return Promise.reject(new Error("Path is required."));
  }

  if (path !== "/latest") {
    return Promise.reject(new Error("Invalid path."));
  }

  const baseCurrency = fullPath.split("base=")[1] || "EUR";

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        base: baseCurrency,
        date: format(new Date(), "yyyy-MM-dd"),
        rates: {
          ...SAMPLE_RATES,
          [baseCurrency]: 1
        }
      });
    }, 500);
  });
};
