const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

export const formatCurrency = (value: number) =>
  CURRENCY_FORMATTER.format(value);
