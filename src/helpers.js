// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GDP',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

// Fetch the state from the session storage, or return null
export const isPersistedState = stateName => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
}

export const isEmptyObject = obj => {
  return Object.keys(obj).length === 0;
}
