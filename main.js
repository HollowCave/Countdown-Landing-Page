const countdown = document.querySelector('.countdown');

// Set the Launch Datev (ms)
const launchDate = new Date('January 1, 2019 13:00:00').getTime();

// Update Every Second
const intvl = setInterval(() => {
  // Get Todays Date and Time (ms)
  const now = new Date().getTime();
}, 1000);