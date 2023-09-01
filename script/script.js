$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  //kecapatan yang berbeda pada jumbotron(efek parallax yang kedua)
  $(".content h1").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".content a").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });
});

// slider otomatis
let start = 0;
otomatis();

function otomatis() {
  const sliders = document.querySelectorAll(".slider");

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  if (start >= sliders.length) {
    start = 0;
  }

  sliders[start].style.display = "block";
  console.log("gambar ke" + start);
  start++;

  setTimeout(otomatis, 2000);
}

// text kelap kelip
let ubahTeks = document.getElementsByClassName("text");
// setTimeout jalankan kode setelah waktu tertentu. setInterval jalankan kode beberapa kali / berulang.
setInterval(function () {
  ubahTeks[0].style.color = "#f48a29";
  ubahTeks[1].style.color = "#f48a29";
  ubahTeks[2].style.color = "#f48a29";
  setTimeout(function () {
    ubahTeks[0].style.color = "black";
    ubahTeks[1].style.color = "black";
    ubahTeks[2].style.color = "black";
  }, 500);
}, 1000);
