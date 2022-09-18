// Carousel Starts ___________________________

function prehover() {
  const prev = document.getElementById("prev");
  prev.setAttribute(
    "src",
    "https://img.icons8.com/dotty/80/000000/circled-chevron-left.png"
  );
}

function prenothover() {
  const prev = document.getElementById("prev");
  prev.setAttribute(
    "src",
    "https://img.icons8.com/ios-glyphs/30/000000/circled-chevron-left.png"
  );
}

function nexthover() {
  const next = document.getElementById("next");
  next.setAttribute(
    "src",
    "https://img.icons8.com/dotty/80/000000/circled-chevron-right.png"
  );
}

function nextnothover() {
  const next = document.getElementById("next");
  next.setAttribute(
    "src",
    "https://img.icons8.com/ios-glyphs/30/000000/circled-chevron-right.png"
  );
}

/* set initial index array to 0 */
let startFrame = 1;
showFrames(startFrame);

/*move to next frame by increasing the index */
function nextFrame() {
  showFrames((startFrame += 1));
}

/* move to previous frame by decreasing the index */
function prevFrame() {
  showFrames((startFrame -= 1));
}

function showFrames(changeTo) {
  let slides = document.getElementsByClassName("slide");

  if (changeTo > slides.length) {
    startFrame = 1;
  }
  if (changeTo < 1) {
    startFrame = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[startFrame - 1].style.display = "block";
}

// Carousel Ends ___________________________

let movies = [
  {
    id: 1,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/86/5f/865f826f3730f83eb20c5999c1ef27b9/865f826f3730f83eb20c5999c1ef27b9.jpg",
    rate: "6.5",
    year: "2022",
    name: "Thor:Love and Thunder",
  },
  {
    id: 2,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/37/fb/37fb34f506e29b74b9decdd3c220a75e/37fb34f506e29b74b9decdd3c220a75e.jpg",
    rate: "6.9",
    year: "2022",
    name: "Three Thousand Years of Longing",
  },
  {
    id: 3,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/5c/29/5c299af92d526afc7bf21060fc4b6205/5c299af92d526afc7bf21060fc4b6205.jpg",
    rate: "5.1",
    year: "2022",
    name: "Pinocchio",
  },
  {
    id: 4,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/c4/ff/c4ff8684e7fa9c9987ea65fa586e017a/c4ff8684e7fa9c9987ea65fa586e017a.jpg",
    rate: "6.9",
    year: "2022",
    name: "Emily the Criminal",
  },
  {
    id: 5,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/df/33/df33bd60036fa5c002cd80b4b250c2f9/df33bd60036fa5c002cd80b4b250c2f9.jpg",
    rate: "5.7",
    year: "2022",
    name: "Beast",
  },
  {
    id: 6,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/88/b8/88b8e7ac328f658e836b12b566607d1d/88b8e7ac328f658e836b12b566607d1d.jpg",
    rate: "6.4",
    year: "2022",
    name: "Breaking",
  },
  {
    id: 7,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/bd/53/bd53d59041caccd83b2016d871ad14db/bd53d59041caccd83b2016d871ad14db.jpg",
    rate: "4.1",
    year: "2022",
    name: "Deus",
  },
  {
    id: 8,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/8c/76/8c76f7ba1f8d85c3c260b7347e1e64cc/8c76f7ba1f8d85c3c260b7347e1e64cc.jpg",
    rate: "8.5",
    year: "2022",
    name: "Top Gun: Maverick",
  },
  {
    id: 9,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/6e/2a/6e2a288cd123c0aaaa4b80df079044da/6e2a288cd123c0aaaa4b80df079044da.jpg",
    rate: "5.7",
    year: "2022",
    name: "Broad Peak",
  },
  {
    id: 10,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/81/e9/81e9f7668f022a8718ae89f81491ee18/81e9f7668f022a8718ae89f81491ee18.jpg",
    rate: "4.7",
    year: "2022",
    name: "End of the Road",
  },
  {
    id: 11,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/7b/82/7b829e13c26e137730c0b7cdf1178e24/7b829e13c26e137730c0b7cdf1178e24.jpg",
    rate: "7.1",
    year: "2022",
    name: "Where the Crawdads Sing",
  },
  {
    id: 12,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/e6/3e/e63ed28f989f758106689eaac3d1bed8/e63ed28f989f758106689eaac3d1bed8.jpg",
    rate: "6.4",
    year: "2022",
    name: "Fall",
  },
  {
    id: 13,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/25/18/251888549f5ae476d08db67ad576c63e/251888549f5ae476d08db67ad576c63e.jpg",
    rate: "6.6",
    year: "2022",
    name: "Minions:The Rise of Gru",
  },
  {
    id: 14,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/5f/54/5f54dbb5f54b346e5f9396638c8d7255/5f54dbb5f54b346e5f9396638c8d7255.jpg",
    rate: "5.7",
    year: "2022",
    name: "Jurassic World Dominion",
  },
  {
    id: 15,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/7c/f0/7cf06b5ff4e7bb945830be5348adeff8/7cf06b5ff4e7bb945830be5348adeff8.jpg",
    rate: "5.6",
    year: "2022",
    name: "No Limit",
  },
  {
    id: 16,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/44/54/4454b905c18670de60b09fd624fccd0c/4454b905c18670de60b09fd624fccd0c.jpg",
    rate: "8.3",
    year: "2022",
    name: "Spider-Man: No Way Home",
  },
  {
    id: 17,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/66/0a/660aa6dabfa351a59fdf868ab234ee7f/660aa6dabfa351a59fdf868ab234ee7f.jpg",
    rate: "7.5",
    year: "2022",
    name: "DC League of Super-Pets",
  },
  {
    id: 18,
    image:
      "https://img.123moviesgo.ac/xxrz/250x400/200/e7/5d/e75d183da831b9c2b46d7a0968c87226/e75d183da831b9c2b46d7a0968c87226.jpg",
    rate: "7",
    year: "2022",
    name: "Doctor Strange in the Multiverse of Madness",
  },
];

let Parent = document.querySelector(".trending_movies");

movies.map((movie) => {
  let box = document.createElement("div");
  Parent.appendChild(box);
  box.className = "box";

  let boxImage = document.createElement("div");
  box.appendChild(boxImage);
  boxImage.className = "box_img";

  let image = document.createElement("img");
  boxImage.appendChild(image);
  image.src = movie.image;

  let boxInfo = document.createElement("div");
  box.appendChild(boxInfo);
  boxInfo.className = "box_info";

  let p = document.createElement("p");
  boxInfo.appendChild(p);

  let star = document.createElement("i");
  p.appendChild(star);
  star.className = "fa-solid fa-star";

  let rate = document.createElement("span");
  p.appendChild(rate);
  rate.innerHTML = movie.rate;

  let HD = document.createElement("span");
  p.appendChild(HD);
  HD.innerHTML = "HD";
  HD.className = "HD";

  let year = document.createElement("span");
  p.appendChild(year);
  year.innerHTML = movie.year;

  let name = document.createElement("a");
  p.appendChild(name);
  name.innerHTML = "<br/>" + movie.name;

  let link = document.createElement("a");
  boxInfo.appendChild(link);
  link.setAttribute("href", "./Selected.html");

  let btn = document.createElement("button");
  link.appendChild(btn);

  let play = document.createElement("i");
  btn.appendChild(play);
  play.className = "fa-solid fa-play";

  let watch = document.createElement("span");
  btn.appendChild(watch);
  watch.innerHTML = "Watch now";
});
