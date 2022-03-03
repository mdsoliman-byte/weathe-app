const kye = `dc413123c877cdd29a7db77d0c9aa64c`;
const openwetherapi = () => {
  const userFild = document.getElementById("userFild").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${userFild}&appid=${kye}&units=metric`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaydata(data));
};
const detData = (id, text) => {
  document.getElementById(id).innerText = text;
};
const clearData = (dataId) => {
  document.getElementById(dataId).value = "";
};
const displaydata = (datas) => {
  detData("city", datas.name);
  detData("tempratuerdegri", datas.main.temp);
  detData("coud", datas.weather[0].main);
  const iconUrl = ` http://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`;
  const icone = document.getElementById("weatherIcone");
  icone.setAttribute("src", iconUrl);
  clearData("userFild");
};
