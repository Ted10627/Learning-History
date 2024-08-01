const content = document.querySelector("#content");
// 縣市陣列
const allcity = [
  "嘉義縣",
  "新北市",
  "嘉義市",
  "新竹縣",
  "新竹市",
  "臺北市",
  "臺南市",
  "宜蘭縣",
  "苗栗縣",
  "雲林縣",
  "花蓮縣",
  "臺中市",
  "臺東縣",
  "桃園市",
  "南投縣",
  "高雄市",
  "金門縣",
  "屏東縣",
  "基隆市",
  "澎湖縣",
  "彰化縣",
  "連江縣",
];
const north = [
  "臺北市",
  "新北市",
  "基隆市",
  "宜蘭縣",
  "桃園市",
  "新竹縣",
  "新竹市",
];
const central = ["臺中市", "彰化縣", "南投縣", "雲林縣", "苗栗縣"];
const south = ["嘉義縣", "嘉義市", "高雄市", "臺南市", "屏東縣"];
const east = ["花蓮縣", "臺東縣"];
const islands = ["澎湖縣", "金門縣", "連江縣"];

function cityfilter(input) {
  fetch(
    "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-58A6FF8A-3889-45BB-9024-CFAF1C707F64"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("notwork");
      }
      return response.json();
    })
    .then((data) => {
      console.log("JSON Data:", data);
      const locations = data.records.location;
      let cityfilter;
      switch (input) {
        case "allcity":
          cityfilter = locations.filter((location) =>
            allcity.includes(location.locationName)
          );
          break;
        case "north":
          cityfilter = locations.filter((location) =>
            north.includes(location.locationName)
          );
          break;
        case "central":
          cityfilter = locations.filter((location) =>
            central.includes(location.locationName)
          );
          break;
        case "south":
          cityfilter = locations.filter((location) =>
            south.includes(location.locationName)
          );
          break;
        case "east":
          cityfilter = locations.filter((location) =>
            east.includes(location.locationName)
          );
          break;
        case "islands":
          cityfilter = locations.filter((location) =>
            islands.includes(location.locationName)
          );
          break;
        default:
          cityfilter = [];
      }

      content.innerHTML = "";

      cityfilter.forEach(location => {
        const place = location.locationName;
        const weather =
          location.weatherElement[0].time[0].parameter.parameterName;
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
      <div class="w-full flex items-center">
        <div class="p-5 flex justify-center items-center">
          <img src="./image/${weather}.svg" alt="Not work" class="size-28">
        </div>
        <div class="card-body p-5">
          <p class="card-title cityname text-2xl">${place}</p>
          <p class="weather text-xl">${weather}</p>
        </div>
      </div>`;
        content.appendChild(newDiv);
    });
    });
  }
document
  .querySelector("#allcity")
  .addEventListener("click", () => cityfilter("allcity"));
document
  .querySelector("#north")
  .addEventListener("click", () => cityfilter("north"));
document
  .querySelector("#central")
  .addEventListener("click", () => cityfilter("central"));
document
  .querySelector("#south")
  .addEventListener("click", () => cityfilter("south"));
document
  .querySelector("#east")
  .addEventListener("click", () => cityfilter("east"));
document
  .querySelector("#islands")
  .addEventListener("click", () => cityfilter("islands"));

  cityfilter('allcity');
