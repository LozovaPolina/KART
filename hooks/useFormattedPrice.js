import { selectExchangeRates, selectCurrency } from '../redux/reducer/currencySlice';
import { useSelector } from 'react-redux';


export function useFormattedPrice(amountEUR) {
  const selectedCurrency = useSelector(selectCurrency);
  const exchangeRates = useSelector(selectExchangeRates);



  const rateTo = exchangeRates[selectedCurrency];



  const convertedAmount = amountEUR * (rateTo || 1);

  const localeMap = {
    EUR: 'de-DE',
    USD: 'en-US',
    UAH: 'uk-UA',
  };

  const locale = localeMap[selectedCurrency] || 'en-US';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: selectedCurrency,
    minimumFractionDigits: 2,
  }).format(convertedAmount);
}
