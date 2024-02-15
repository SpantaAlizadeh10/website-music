// const music = new Audio("vande.mp3");

// const songs = [
//   {
//     id: "1",
//     songName: `  دختر کابل
//     <div class="subtitle">qhais</div>`,
//     poster: "images/ghais.jpg",
//   },

//   {
//     id: "2",
//     songName: ` لیلی لیلی جان
//     <div class="subtitle">Ahmad Zahir</div>`,
//     poster: "images/ahmadzahir.jpg",
//   },
//   {
//     id: "3",
//     songName: `شهر خالی
//     <div class="subtitle">Dawood sarkhosh</div>`,
//     poster: "images/Dawood Sarkhosh.jpg",
//   },
//   {
//     id: "4",
//     songName: `  آستا برو
//     <div class="subtitle">sareban</div>`,
//     poster: "images/sareban.jpg",
//   },
//   {
//     id: "5",
//     songName: ` لیلی لیلی جان
//     <div class="subtitle">Ahmad Zahir</div>`,
//     poster: "images/ahmadzahir.jpg",
//   },
//   {
//     id: "6",
//     songName: `  بمیرم بمیرم
//     <div class="subtitle">GHazal sadat</div>`,
//     poster: "images/Ghazal Sada.jpg",
//   },
//   {
//     id: "7",
//     songName: ` تمام هست و بودم
//     <div class="subtitle">Shafiq mureed</div>`,
//     poster: "images/Shafiq Mureed.jpg",
//   },
// ];

// Array.from(document.getElementsByClassName("songItem")).forEach(
//   (element, i) => {
//     element.getElementsByTagName("img")[0].src = songs[i].poster;
//     element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
//   }
// );

// let masterPlay = document.getElementById("masterPlay");
// let wave = document.getElementsByClassName("wave")[0];

// masterPlay.addEventListener("click", () => {
//   if (music.paused || music.currentTime <= 0) {
//     music.play();
//     masterPlay.classList.remove("bi-play-fill");
//     masterPlay.classList.add("bi-pause-fill");
//     wave.classList.add("active2");
//   } else {
//     music.pause();
//     masterPlay.classList.add("bi-play-fill");
//     masterPlay.classList.remove("bi-pause-fill");
//     wave.classList.remove("active2");
//   }
// });

// // let index =0;

// //fff
// const makeALLplays = () => {
//   Array.from(document.getElementsByClassName("playlistplay")).forEach(
//     (element) => {
//       element.classList.add("bi-play-circle-fill");
//       element.classList.remove("bi-pause-circle-fill");
//     }
//   );
// };

// //fff
// // Array.from(document.getElementsByClassName('playlistplay')).forEach((element)=>{
// //   element.addEventListener('click',(e)=>{
// //     index= e.target.id;
// //     e.target.classList.remove('bi-play-circle-fill');
// //     e.target.classList.add('bi-pause-circle-fill');
// //     music.src = `audio/${index}.mp3`;
// //     music.play();
// //   })
// // })
// //ff

// const makeALLBackgrounds = () => {
//   Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
//     element.style.background = "rgb(105,105,170,0";
//   });
// };

// let index = 0;
// let poster_master_play = document.getElementById("poster_master_play");
// let title = document.getElementById("title");

// Array.from(document.getElementsByClassName("playlistplay")).forEach(
//   (element) => {
//     element.addEventListener("click", (e) => {
//       index = e.target.id;
//       makeALLplays();
//       e.target.classList.remove("bi-pause-circle-fill");
//       e.target.classList.add("bi-play-circle-fill");
//       music.src = `audio/${index}.mp3`;
//       poster_master_play.src = `img/${index}.jpg`;
//       music.play();
//       let song_title = songs.filter((ele) => {
//         return ele.id == index;
//       });

//       song_title.forEach((ele) => {
//         let { songName } = ele;
//         title.innerHTML = songName;
//       });
//       masterPlay.classList.remove("bi-play-fill");
//       masterPlay.classList.add("bi-pause-fill");
//       wave.classList.add("active2");
//       music.addEventListener("ended", () => {
//         masterPlay.classList.add("bi-play-fill");
//         masterPlay.classList.remove("bi-pause-fill");
//         wave.classList.remove("active2");
//       });

//       makeALLBackgrounds();
//       Array.from(document.getElementsByClassName("songItem"))[
//         `${index - 1}`
//       ].stye.background = "rgb(105,105,170, .1";
//     });
//   }
// );

// let currentStart = document.getElementById("currentStart");

// let currentEnd = document.getElementById("currentEnd");

// let seek = document.getElementById("seek");
// let bar2 = document.getElementById("bar2");
// let dot = document.getElementsByClassName("dot")[0];

// music.addEventListener("timeupdate", () => {
//   let music_curr = music.currentTime;
//   let music_dur = music.duration;

//   let min = Math.floor(music_dur / 60);
//   let sec = math.floor(music_dur % 60);
//   if (sec < 10) {
//     sec = `0${sec}`;
//   }

//   currentEnd.innerText = `${min}:${sec}`;

//   let min1 = Math.floor(music_curr / 60);
//   let sec1 = math.floor(music_curr % 60);
//   if (sec1 < 10) {
//     sec1 = `0${sec1}`;
//   }

//   currentStart.innerText = `${min1}:${sec1}`;

//   let progressbar = parseInt((music.currentTime / music.duration) * 100);
//   seek.value = progressbar;
//   let seekbar = seek.value;
//   bar2.style.width = `${seekbar}%`;
//   dot.stye.left = `${seekbar}%`;
// });

// seek.addEventListener("change", () => {
//   music.currentTime = (seek.value * music.duration) / 100;
// });

// music.addEventListener("ended", () => {
//   masterPlay.classList.add("bi-play-fill");
//   masterPlay.classList.remove("bi-pause-fill");
//   wave.classList.remove("active2");
// });

// let vol_icon = document.getElementById("vol_icon");
// let vol = document.getElementById("vol");
// let vol_dot = document.getElementById("vol_dot");

// let vol_bar = document.getElementsByClassName("vol_bar")[0];

// vol.addEventListener("change", () => {
//   if ((vol.value = 0)) {
//     vol_icon.classList.remove("bi-volume-down-fill");
//     vol_icon.classList.add("bi-volume-mute-fill");
//     vol_icon.classList.remove("bi-volume-up-fill");
//   }

//   if (vol.value > 0) {
//     vol_icon.classList.add("bi-volume-down-fill");
//     vol_icon.classList.remove("bi-volume-mute-fill");
//     vol_icon.classList.remove("bi-volume-up-fill");
//   }
//   if (vol.value > 50) {
//     vol_icon.classList.remove("bi-volume-down-fill");
//     vol_icon.classList.remove("bi-volume-mute-fill");
//     vol_icon.classList.add("bi-volume-up-fill");
//   }

//   let vol_a = vol.value;
//   var_bar.stye.width = `${vol_a}%`;
//   var_dot.stye.left = `${vol_a}%`;
//   music.volume = vol_a / 100;
// });

// let back = document.getElementById("back");
// let next = document.getElementById("next");

// back.addEventListener("click", () => {
//   index -= 1;
//   if (index < 1) {
//     index = Array.from(document.getElementsByClassName("songItem")).length;
//   }

//   music.src = `audio/${index}.mp3`;
//   poster_master_play.src = `img/${index}.jpg`;
//   music.play();
//   let song_title = songs.filter((ele) => {
//     return ele.id == index;
//   });

//   song_title.forEach((ele) => {
//     let { songName } = ele;
//     title.innerHTML = songName;
//   });

//   makeALLplays();
//   document.getElementById(`${index}`).classList.remove("bi-play-fill");
//   document.getElementById(`${index}`).classList.add("bi-pause-fill");
//   makeALLBackgrounds();
//   Array.from(document.getElementsByClassName("songItem"))[
//     `${index - 1}`
//   ].stye.background = "rgb(105,105,170,1";
// });

// next.addEventListener("click", () => {
//   index -= 0;
//   index += 1;
//   if (index > Array.from(document.getElementsByClassName("songItem")).length) {
//     index = 1;
//   }

//   music.src = `audio/${index}.mp3`;
//   poster_master_play.src = `img/${index}.jpg`;
//   music.play();
//   let song_title = songs.filter((ele) => {
//     return ele.id == index;
//   });

//   song_title.forEach((ele) => {
//     let { songName } = ele;
//     title.innerHTML = songName;
//   });
//   makeALLplays();
//   document.getElementById(`${index}`).classList.remove("bi-play-fill");
//   document.getElementById(`${index}`).classList.add("bi-pause-fill");
//   makeALLBackgrounds();
//   Array.from(document.getElementsByClassName("songItem"))[
//     `${index - 1}`
//   ].stye.background = "rgb(105,105,170,1";
// });

// let left_scroll = document.getElementById("left_scroll");
// let right_scroll = document.getElementById("right_scroll");
// let pop_song = document.getElementsByClassName("pop_song")[0];

// left_scroll.addEventListener("click", () => {
//   pop_song.scrollLeft -= 330;
// });
// right_scroll.addEventListener("click", () => {
//   pop_song.scrollLeft += 330;
// });

// let left_scrolls = document.getElementById("left_scrolls");
// let right_scrolls = document.getElementById("right_scrolls");
// let item = document.getElementsByClassName("item")[0];

// left_scroll.addEventListener("click", () => {
//   item.scrollLeft -= 330;
// });
// item.scroll.addEventListener("click", () => {
//   item.scrollLeft += 330;
// });

const music = new Audio("audio/Ahmad Zaher - Singels.mp3");

const songs = [
  {
    id: "1",
    songName: `  دختر کابل
    <div class="subtitle">qhais</div>`,
    poster: "images/ghais.jpg",
  },

  {
    id: "2",
    songName: ` لیلی لیلی جان
    <div class="subtitle">Ahmad Zahir</div>`,
    poster: "images/ahmadzahir.jpg",
  },
  {
    id: "3",
    songName: `شهر خالی 
    <div class="subtitle">Dawood sarkhosh</div>`,
    poster: "images/Dawood Sarkhosh.jpg",
  },
  {
    id: "4",
    songName: `  آستا برو
    <div class="subtitle">sareban</div>`,
    poster: "images/sareban.jpg",
  },
  {
    id: "5",
    songName: ` لیلی لیلی جان
    <div class="subtitle">Ahmad Zahir</div>`,
    poster: "images/ahmadzahir.jpg",
  },
  {
    id: "6",
    songName: `  بمیرم بمیرم
    <div class="subtitle">GHazal sadat</div>`,
    poster: "images/Ghazal Sada.jpg",
  },
  {
    id: "7",
    songName: ` تمام هست و بودم
    <div class="subtitle">Shafiq mureed</div>`,
    poster: "images/Shafiq Mureed.jpg",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach(
  (element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
  }
);

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
  } else {
    music.pause();
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
    wave.classList.remove("active2");
  }
});

const makeALLplays = () => {
  Array.from(document.getElementsByClassName("playlistplay")).forEach(
    (element) => {
      element.classList.add("bi-play-circle-fill");
      element.classList.remove("bi-pause-circle-fill");
    }
  );
};

const makeALLBackgrounds = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
    element.style.background = "rgb(105,105,170,0)";
  });
};

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playlistplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      index = e.target.id;
      makeALLplays();
      e.target.classList.remove("bi-pause-circle-fill");
      e.target.classList.add("bi-play-circle-fill");
      music.src = `audio/${index}.mp3`;
      poster_master_play.src = `img/${index}.jpg`;
      music.play();
      let song_title = songs.filter((ele) => {
        return ele.id == index;
      });

      song_title.forEach((ele) => {
        let { songName } = ele;
        title.innerHTML = songName;
      });
      masterPlay.classList.remove("bi-play-fill");
      masterPlay.classList.add("bi-pause-fill");
      wave.classList.add("active2");
      music.addEventListener("ended", () => {
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");
        wave.classList.remove("active2");
      });

      makeALLBackgrounds();
      Array.from(document.getElementsByClassName("songItem"))[
        `${index - 1}`
      ].style.background = "rgb(105,105,170,0.1)";
    });
  }
);

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min = Math.floor(music_dur / 60);
  let sec = Math.floor(music_dur % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }

  currentEnd.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr / 60);
  let sec1 = Math.floor(music_curr % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }

  currentStart.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music.currentTime / music.duration) * 100);
  seek.value = progressbar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

music.addEventListener("ended", () => {
  masterPlay.classList.add("bi-play-fill");
  masterPlay.classList.remove("bi-pause-fill");
  wave.classList.remove("active2");
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_dot = document.getElementById("vol_dot");
let vol_bar = document.getElementsByClassName("vol_bar")[0];

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-up-fill");
  }

  if (vol.value > 0) {
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-up-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.add("bi-volume-up-fill");
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }

  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  let song_title = songs.filter((ele) => {
    return ele.id == index;
  });

  song_title.forEach((ele) => {
    let { songName } = ele;
    title.innerHTML = songName;
  });

  makeALLplays();
  document.getElementById(`${index}`).classList.remove("bi-play-fill");
  document.getElementById(`${index}`).classList.add("bi-pause-fill");
  makeALLBackgrounds();
  Array.from(document.getElementsByClassName("songItem"))[
    `${index - 1}`
  ].style.background = "rgb(105,105,170,1)";
});

next.addEventListener("click", () => {
  index += 1;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }

  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  let song_title = songs.filter((ele) => {
    return ele.id == index;
  });

  song_title.forEach((ele) => {
    let { songName } = ele;
    title.innerHTML = songName;
  });
  makeALLplays();
  document.getElementById(`${index}`).classList.remove("bi-play-fill");
  document.getElementById(`${index}`).classList.add("bi-pause-fill");
  makeALLBackgrounds();
  Array.from(document.getElementsByClassName("songItem"))[
    `${index - 1}`
  ].style.background = "rgb(105,105,170,1)";
});

let left_scroll = document.getElementById("left_scroll");
let right_scroll = document.getElementById("right_scroll");
let pop_song = document.getElementsByClassName("pop_song")[0];

left_scroll.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});
right_scroll.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});

let left_scrolls = document.getElementById("left_scrolls");
let right_scrolls = document.getElementById("right_scrolls");
let item = document.getElementsByClassName("item")[0];

left_scrolls.addEventListener("click", () => {
  item.scrollLeft -= 330;
});
right_scrolls.addEventListener("click", () => {
  item.scrollLeft += 330;
});
