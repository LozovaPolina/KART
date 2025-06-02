export function formatCurrencyRightLocalized(
  amount,
  currency = 'USD',
  symbol = '$'
) {
  const formatted = amount.toLocaleString('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
  });
  return `${formatted} ${symbol}`;
}