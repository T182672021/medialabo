let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

console.log(data.weather[0].description); 
console.log(data.main.temp_min);
console.log(data.main.temp_max);
console.log(data.name);

let d = document.querySelector('div#result');

let table = document.createElement('table');
d.insertAdjacentElement('beforeend', table);

let thead = document.createElement('thead');
table.insertAdjacentElement('beforeend', thead);
let tr = document.createElement('tr');
thead.insertAdjacentElement('beforeend', tr);
let th = document.createElement('th');
th.setAttribute('colspan', '2');
th.textContent = '世界の天気（検索結果 1件）';
tr.insertAdjacentElement('beforeend', th);

let tbody = document.createElement('tbody');
table.insertAdjacentElement('beforeend', tbody);
tr = document.createElement('tr');
tbody.insertAdjacentElement('beforeend', tr);
let td = document.createElement('td');
td.textContent = '天気';
tr.insertAdjacentElement('beforeend', td);
td = document.createElement('td');
td.textContent = data.weather[0].description;
tr.insertAdjacentElement('beforeend', td);

tr = document.createElement('tr');
tbody.insertAdjacentElement('beforeend', tr);
td = document.createElement('td');
td.textContent = '最低気温';
tr.insertAdjacentElement('beforeend', td);
td = document.createElement('td');
td.textContent = data.main.temp_min;
tr.insertAdjacentElement('beforeend', td);

tr = document.createElement('tr');
tbody.insertAdjacentElement('beforeend', tr);
td = document.createElement('td');
td.textContent = '最高気温';
tr.insertAdjacentElement('beforeend', td);
td = document.createElement('td');
td.textContent = data.main.temp_max;
tr.insertAdjacentElement('beforeend', td);

tr = document.createElement('tr');
tbody.insertAdjacentElement('beforeend', tr);
td = document.createElement('td');
td.textContent = '都市名';
tr.insertAdjacentElement('beforeend', td);
td = document.createElement('td');
td.textContent = data.name;
tr.insertAdjacentElement('beforeend', td);