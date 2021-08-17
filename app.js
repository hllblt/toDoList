// task girerkenki bilgileri çeker.
let titleEvent = document.getElementById("title");
let dateEvent = document.getElementById("date");
let urgencyEvent = document.getElementById("urgency");
let descriptionEvent = document.getElementById("description");

// buttonu seçer.
let addButton = document.getElementById("addButton");

//silinmek üzere ID değişkeni
let toDel;

// task bilgilerinin içine konulacağı bir array.
let arrayTask = [];

// task listesindeki tasklerin ID'leri depolamak için array.
let arrayID = [];

// ekle butonuna her tıklamalada, tekrar arrayID'den bilgi çekerek içerisine eventlistener atanması için array.
let arrayClickRow = [];
let i;

// kopyalanacak olan şablon tablo satırı.
let tableRow = document.getElementById("tbody");

//TEST FUNCTION
const testfunction = () => {
  console.log("merhaba");
};

//aktif tasklere tıklandığında çalışan fonksiyon
const reply_click = (clicked_id) => {
  document.getElementById("descClick").innerHTML = arrayTask[arrayID.indexOf(clicked_id)].description;
  document.getElementById("descriptionTask").style.visibility = "visible";
  toDel = clicked_id;
}

//random 8 haneli ID üretmek için function.
const randomID = () => {
  let rowID = "";
  for (let i = 8; i > 0; i--) {
    rowID += String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  }
  return rowID;
};

// ekle button'unun click eventi için fonksiyon.
const addTask = () => {
    arrayTask.push({
        title: titleEvent.value,
        date: dateEvent.value,
        urgency: urgencyEvent.value,
        description: descriptionEvent.value,
    });
    // console.log(arrayTask);
    let tableCounter = arrayTask.length - 1;
    
    // tabloya eklenecek olan task'in arraydaki object hali.
    let lastTaskObject = arrayTask[tableCounter];
    
    let rowID = randomID();
    // tbody'nin innerHTML kısmına html kodu şeklinde ekleme yapılması. Bu sayede yeni tablo satırı oluşuyor.
    document.getElementById(
        "tbody"
        ).innerHTML += `<tr class="rowTask" id=${rowID} onClick="reply_click(this.id)"><td class="titles">${lastTaskObject.title}</td><td class="dates">${lastTaskObject.date}</td><td class="urgencies" style="background-color: ${lastTaskObject.urgency};"></td></tr>`;
        arrayID.push(rowID);
        console.log(arrayTask);
        
    };
    
    //ekle button'una click event koymak.
    addButton.addEventListener("click", addTask);
    
    /////////////////////////////İdareten silme tuşu///////////////////////////////
    
    let delButton = document.getElementById("delButton");
    
    let delRow = () => {
      let delItem = arrayID.indexOf(toDel);
      arrayID.splice(delItem,1);
      arrayTask.splice(delItem,1);
      document.getElementById(toDel).remove()
      console.log(arrayID);
      console.log(arrayTask);      
    };

    delButton.addEventListener("click", delRow);
    /////////////////////////////////////////////////////////////
    // idareten task silme işlemi.
    