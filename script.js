// kodluyoruz isim yazdırma
let fullName = prompt("İsmininzi giriniz");

let deger = fullName.length > 0 ? `${fullName}` : "Yabancı";

let greeting = document.querySelector("#myName");

greeting.innerHTML = `${greeting.innerHTML} ${deger}`;

/*kodluyoruz vakit gösterme*/
var atmoment = 0;

function tarihSaat() {
  var tarihOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var saatOptions = { hour: "numeric", minute: "numeric", second: "numeric" };

  var now = new Date();
  document.getElementById("tarih").textContent = now.toLocaleString(
    "tr-TR",
    tarihOptions
  );
  document.getElementById("saat").textContent = now.toLocaleString(
    "tr-TR",
    saatOptions
  );
  atmoment = now.toLocaleString("tr-TR", saatOptions);
}

setInterval(tarihSaat, 1000);

//extra
var date = new Date();
date.setHours(date.getHours() + 3);

document.getElementById("tarihInput").value = date.toISOString().slice(0, 16);
function hesapla() {
  var girilenTarihInput = document.getElementById("tarihInput");
  var girilenTarih = new Date(girilenTarihInput.value);
  var suAnkiTarih = new Date();

  var milisaniyeFarki = Math.abs(girilenTarih - suAnkiTarih);
  var zamanCevrimi = milisaniyeCevir(milisaniyeFarki);

  var sonuc = document.getElementById("sonuc");

  var yilElement = document.getElementById("yil");
  var ayElement = document.getElementById("ay");
  var gunElement = document.getElementById("gun");
  var saatElement = document.getElementById("saatt");
  var dakikaElement = document.getElementById("dakika");
  var saniyeElement = document.getElementById("saniye");

  function tekrar() {
    zamanCevrimi.yil !== 0
      ? (yilElement.innerText = "yıl\n" + zamanCevrimi.yil)
      : "";
    zamanCevrimi.ay !== 0
      ? (ayElement.innerText = "ay\n" + zamanCevrimi.ay)
      : "";
    zamanCevrimi.gun !== 0
      ? (gunElement.innerText = "gün\n" + zamanCevrimi.gun)
      : "";
    zamanCevrimi.saat !== 0
      ? (saatElement.innerText = "saat\n" + zamanCevrimi.saat)
      : "";
    zamanCevrimi.dakika !== 0
      ? (dakikaElement.innerText = "dakika\n" + zamanCevrimi.dakika)
      : "";
    zamanCevrimi.saniye !== 0
      ? (saniyeElement.innerText = "saniye\n" + zamanCevrimi.saniye)
      : "";
  }

  //said if else code
  if (girilenTarih > suAnkiTarih) {
    sonuc.textContent =
      "Gelecek bir tarih girdiniz. Girilen tarihe kalan zaman:";
    tekrar();
  } else if (girilenTarih < suAnkiTarih) {
    sonuc.textContent =
      "Geçmiş bir tarih girdiniz. Girilen tarihten geçen zaman:";
    tekrar();
  } else {
    sonuc.textContent = "Bir zaman seçmelisin.";
  }
}

setInterval(hesapla, 1000);

function milisaniyeCevir(milisaniye) {
  var saniye = Math.floor(milisaniye / 1000);
  var dakika = Math.floor(saniye / 60);
  var saat = Math.floor(dakika / 60);
  var gun = Math.floor(saat / 24);

  var yil = Math.floor(gun / 365);
  var ay = Math.floor((gun % 365) / 30);
  var kalanGun = (gun % 365) % 30;

  var saatKalan = saat % 24;
  var dakikaKalan = dakika % 60;
  var saniyeKalan = saniye % 60;

  return {
    yil: yil,
    ay: ay,
    gun: kalanGun,
    saat: saatKalan,
    dakika: dakikaKalan,
    saniye: saniyeKalan,
  };
}
