const CURRENCY_FORMAT = new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  });
  
  export const formatCurrency = (number: number) => {
    return CURRENCY_FORMAT.format(number);
  };
  