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
let s = 0;
let b = document.querySelector('button#kensaku');
b.addEventListener('click', kensaku);

function kensaku() {
  let rs = document.querySelectorAll('input[name="tenki"]');
	for (let r of rs) {
		if (r.checked) {		// r が選択されていたら
			console.log(r.value);
      let id = r.value;
      sendRequest(id);
	  }
    if(s > 0){
      let t = document.querySelector('table');
      t.remove();
      s--;
    }
  }
}

function sendRequest(id) {
  // URL を設定
  let tid = id;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + tid + '.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // data をコンソールに出力
  console.log(data);
  hyouji(data);
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

function hyouji(data) {
  data = data;

  console.log(data.weather[0].description); 
  console.log(data.main.temp_min);
  console.log(data.main.temp_max);
  console.log(data.name);

  let d = document.querySelector('div#result');

  let table = document.createElement('table');
  d.insertAdjacentElement('beforeend', table);

  let thead = document.createElement('thead');
  table.insertAdjacentElement('beforeend', thead);
  //let tr = document.createElement('tr');
  //thead.insertAdjacentElement('beforeend', tr);
  let th = document.createElement('th');
  th.setAttribute('colspan', '2');
  th.textContent = '都市名　　' + data.name + '　　';
  thead.insertAdjacentElement('beforeend', th);

  let tbody = document.createElement('tbody');
  table.insertAdjacentElement('beforeend', tbody);

  let tr = document.createElement('tr');
  tbody.insertAdjacentElement('beforeend', tr);
  let td = document.createElement('td');
  td.textContent = '天気';
  tr.insertAdjacentElement('beforeend', td);
  td = document.createElement('td');
  td.textContent = data.weather[0].description;
  tr.insertAdjacentElement('beforeend', td);

  tr = document.createElement('tr');
  tbody.insertAdjacentElement('beforeend', tr);
  let ti = document.createElement('ti');
  ti.textContent = '最低気温';
  tr.insertAdjacentElement('beforeend', ti);
  ti = document.createElement('ti');
  ti.textContent = data.main.temp_min;
  tr.insertAdjacentElement('beforeend', ti);

  tr = document.createElement('tr');
  tbody.insertAdjacentElement('beforeend', tr);
  let tk = document.createElement('tk');
  tk.textContent = '最高気温';
  tr.insertAdjacentElement('beforeend', tk);
  tk = document.createElement('tk');
  tk.textContent = data.main.temp_max;
  tr.insertAdjacentElement('beforeend', tk);

  s++;
}