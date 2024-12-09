document.getElementById('search-btn').addEventListener('click', function() {
    let city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const apiKey = 'a5a503e79565b1e97c215051159d6889';  // يجب استبدال 'YOUR_API_KEY' بمفتاح API الخاص بك من OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ar`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert('المدينة غير موجودة!');
        }
    } catch (error) {
        alert('حدث خطأ أثناء جلب البيانات');
    }
}

function displayWeather(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('weather-description').textContent = data.weather[0].description;
    document.getElementById('temperature').textContent = `درجة الحرارة: ${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `الرطوبة: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `سرعة الرياح: ${data.wind.speed} m/s`;
}