let apikey = "AIzaSyB4X6Wt3VoDyk5j3nQwYFm4vjrVqtYcqkM";
let searchquery = "";
let searchcontent = "";
let youtube_search = "";
let searchbutton = document.getElementById("searchbtn");
var logo_url = [];
let youtube_search_frame = document.getElementById("searchpage_load");
console.log(youtube_search_frame);


const val_Search = () => {
  let search = document.getElementById("Search1").value;
  if (search === null) {
    alert("Please enter a word to search...");
  } else if (search != null) {
    localStorage.setItem("search_query", search);
    console.log(search);
    setTimeout(function () {
      location.href = "search.html";
    }, 2000);
  }
};

window.addEventListener("load", () => {
  console.log("page is fully loaded");
  ytsearch();
  setTimeout(function () {
    ytsearchapi();
  }, 2000);
});

let ytsearch = () => {
  searchquery = localStorage.getItem("search_query");
  console.log(searchquery);
  return searchquery;
};

let ytsearchapi = () => {
  youtube_search = `https://www.googleapis.com/youtube/v3/search?key=${apikey}&q=${ytsearch()}&type=video&part=snippet&maxResults=5`;
  console.log(youtube_search);
  if (
    youtube_search.includes("https://www.googleapis.com/youtube/v3/search?key=")
  ) {
    console.log("1");
    getSearch();
  }
};



const getSearch = async () => {
  const result = await fetch(youtube_search, {
    method: "GET",
  });

  const ytdata = await result.json();
  items = ytdata.items; //json data related to searched query]

  items.forEach((ele) => {
    let channelURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${ele.snippet.channelId}&key=${apikey}`;
    let logodata = "";

    var logo_data_items;
    const getchannelLogo = async () => {
      const res = await fetch(channelURL, {
        method: "GET", //Method of https request
        headers: {},
      });
      //the resultant json is stored into the data
      logodata = await res.json();
      logo_data_items = logodata.items;

      logo_data_items.forEach((el) => {
        console.log(el);

        searchcontent += `
        <div class="ytd-video-renderer-div">
        <img
          class="athumbnail-icon"
          alt=""
          src="${ele.snippet.thumbnails.high.url}"
        />
        <div class="div4">
          <div class="divmeta">
            <div class="figma-design-to-live-website-w">
              ${ele.snippet.title}
            </div>
          </div>
          <div class="divchannel-info">
            <div class="yt-img-shadow-div">
                  <img
                class="gqvpuag9wayv3emkh5utoqkdvhimgl-icon"
                alt=""
                src="${el.snippet.thumbnails.default.url}"
              />
      
            </div>
            <div class="k-views-div">${el.snippet.title}</div>
          </div>
          <div class="in-this-video-youll-be-learni">
            <span> ${ele.snippet.description}</span>
          </div>
        </div>
      </div>`;

      });

    };

    getchannelLogo();
  });
  youtube_search_frame.innerHTML = searchcontent;
};




//

var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
var observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        const targetElement = entry.target;
        targetElement.classList.add("animate");
        observer.unobserve(targetElement);
      }
    }
  },
  {
    threshold: 0.15,
  }
);

for (let i = 0; i < scrollAnimElements.length; i++) {
  observer.observe(scrollAnimElements[i]);
}

var ytIconButton = document.getElementById("ytIconButton");
if (ytIconButton) {
  ytIconButton.addEventListener("click", function () {
    var popup = document.getElementById("menuPopup");
    if (!popup) return;
    var popupStyle = popup.style;
    if (popupStyle) {
      popupStyle.display = "flex";
      popupStyle.zIndex = 100;
      popupStyle.backgroundColor = "";
      popupStyle.alignItems = "flex-start";
      popupStyle.justifyContent = "";
    }
    popup.setAttribute("closable", "");

    var onClick =
      popup.onClick ||
      function (e) {
        if (e.target === popup && popup.hasAttribute("closable")) {
          popupStyle.display = "none";
        }
      };
    popup.addEventListener("click", onClick);
  });
}
