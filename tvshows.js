let tvShows = [
  {
    id: 1,
    image: "https://mieze-merle.de/Serien/pics/9-1-1%20Notruf%20L%20A/2.jpg",
    rate: "9",
    year: "2018",
    name: "9-1-1",
  },
  {
    id: 2,
    image: "https://protvshows.com/images/tvshows/the-morning-show-poster.jpg",
    rate: "8.5",
    year: "2019",
    name: "The Morning Show",
  },
  {
    id: 3,
    image: "https://flxt.tmsimg.com/assets/p21366431_b_v13_aa.jpg",
    rate: "10",
    year: "2022",
    name: "From",
  },
  {
    id: 4,
    image:
      "https://www.film.ru/sites/default/files/movies/posters/49752211-1644297.jpg",
    rate: "6.9",
    year: "2021",
    name: "Invasion",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/originals/61/b5/ef/61b5ef2ffba1771350027605e1f08710.jpg",
    rate: "9.9",
    year: "2010 - till now",
    name: "The Walking Dead",
  },
  {
    id: 6,
    image:
      "https://posterspy.com/wp-content/uploads/2018/02/Fear-The-Walking-Dead-3.jpg",
    rate: "8.7",
    year: "2015",
    name: "Fear The Walking Dead",
  },
  {
    id: 7,
    image:
      "https://avatars.mds.yandex.net/i?id=b56dcfcbc988466a2aa1de510fc6c81d_l-5850566-images-thumbs&n=13",
    rate: "7.9",
    year: "2019",
    name: "The Boys",
  },
  {
    id: 8,
    image:
      "https://papik.pro/uploads/posts/2021-10/1634600398_30-papik-pro-p-sotnya-poster-30.jpg",
    rate: "9",
    year: "2014",
    name: "The 100",
  },
  {
    id: 9,
    image:
      "https://m.media-amazon.com/images/M/MV5BMWE3MTBhM2QtZjBjNC00YTIzLWJhMTgtYjdhNDEwMmI1NDJmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    rate: "7.2",
    year: "2022",
    name: "She Hulk",
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

tvShows.map((movie) => {
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
