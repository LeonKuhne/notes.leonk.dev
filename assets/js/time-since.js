const MAX_TIMES_SINCE = 2;
const timeSince = (date) => {
  const now = new Date().getTime();
  const then = date.getTime();

  const times = { 
    year: Math.floor((now - then) / (1000 * 60 * 60 * 24 * 365)),
    month: Math.floor((now - then) / (1000 * 60 * 60 * 24 * 30) % 12),
    day: Math.floor((now - then) / (1000 * 60 * 60 * 24) % 30),
    hr: Math.floor((now - then) / (1000 * 60 * 60) % 24),
    min: Math.floor((now - then) / (1000 * 60) % 60),
    sec: Math.floor((now - then) / 1000 % 60)
  };

  let timeStrings = [];
  let count = 0
  Object.entries(times).forEach(([key, value]) => {
    if (value > 0 && count < MAX_TIMES_SINCE) {
      timeStrings.push(`${value} ${key}${value > 1 ? 's' : ''}`);
      count++;
    }
  })
  return timeStrings.length ? timeStrings.join(', ') + ' ago' : 'just now';
};