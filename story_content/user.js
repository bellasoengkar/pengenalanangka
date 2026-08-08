function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Btgze6hVNW":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');

// 1. Tentukan sumber dan muat audio
audio.src = "1.mp3";
audio.load();

// 2. Terapkan logika kondisional
if (audio.paused) {
    // Jika audio saat ini PAUSED atau STOPPED/SELESAI, maka putar
    audio.play();
    console.log("Audio sedang PAUSED/STOPPED, kini diputar.");
} else {
    // Jika audio saat ini sedang PLAYING, maka tidak melakukan apa-apa
    console.log("Audio sudah PLAYING, tidak ada tindakan play ganda.");
}

// 3. Atur volume (ini bisa diletakkan di luar kondisi karena selalu diterapkan)
audio.volume = 0.4;

}

