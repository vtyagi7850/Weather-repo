document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('locationInput').value;
    const apiKey = 'c9a6d14554454376b72160543252004';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Location not found');
        }
        return response.json();
      })
      .then(data => {
        const weatherHtml = `
          <p><span>${data.location.name}, ${data.location.country}</span></p>
          <p>Temperature: <span>${data.current.temp_c} °C</span></p>
          <p>Condition: <span>${data.current.condition.text}</span></p>
          <img src="${data.current.condition.icon}" alt="Weather icon" />
        `;
        document.getElementById('weatherResult').innerHTML = weatherHtml;
      })
      .catch(error => {
        document.getElementById('weatherResult').innerHTML = `<p style="color: #f8d7da">${error.message}</p>`;
      });
  });
  
