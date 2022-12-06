var api_key = "AIzaSyB4X6Wt3VoDyk5j3nQwYFm4vjrVqtYcqkM";
let videocontent = "";
const formatter = Intl.NumberFormat("en", { notation: "compact" });

//uncomment these below 2 lines afterward
const valSearch = () => {
  let search = document.getElementById("Search").value;
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

const redirectSearch =(v_id) => {
  console.log("redirectSearch");
  let vid=v_id;
localStorage.setItem("video_id", vid);
if(vid!=null){
  setTimeout(function () {
    location.href = "video-page.html";
  }, 1000);
}

}






//setting the input value to the localstorage so that the next page can receive it.
////Function to fetch data from theAPI URL

const getRecommended = async () => {
  let Recommended = `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=12&regionCode=IN&key=${api_key}`;
  const result = await fetch(Recommended, {
    method: "GET", //Method of https request
  });
  //the resultant json is stored into the data
  const data = await result.json();
  items = data.items;

  const getlogo = async (channel_id) => {
    var URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channel_id}&key=${api_key}`;
    const res = await fetch(URL, {
      method: "GET", //Method of https request
      headers: {},
    });
    //the resultant json is stored into the data
    const logodata = await res.json();
    let logo = logodata.items[0].snippet.thumbnails.default.url;
    return logo;
  };

  //Start of the html
  videocontent = `  

<div class="divcontents">
    <div class="frame-div">

      <div class="ytd-card-div">
<a onclick="${redirectSearch(items[0].id.videoId)}">
        <img
          class="ytd-thumbnail-icon"
          alt=""
          src="${items[0].snippet.thumbnails.maxres.url}"
        />
   </a>
        <div class="ytd-description-div">
          <img
            class="z-mnvfkkjr08efltsqqm5-3qn7x3gy-icon"
            alt=""
            src="${await getlogo(items[0].snippet.channelId)}"
          />
          <div class="divmeta">
            <div class="coolest-new-gadgets-and-invent">
            ${items[0].snippet.title}
            </div>
            <div class="divmetadata">
              <div class="techow-div">${items[0].snippet.channelTitle}</div>
              <div class="divmetadata-line">
                <div class="techow-div">${formatter.format(
                  items[0].statistics.viewCount
                )!=null?formatter.format(
                  items[0].statistics.viewCount
                ):"3k"} views</div> 
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ytd-card-div">
        <img
          class="ytd-thumbnail-icon"
          alt=""
          src="${items[1].snippet.thumbnails.maxres.url}"
        />
        <div class="ytd-description-div">
          <img
            class="z-mnvfkkjr08efltsqqm5-3qn7x3gy-icon"
            alt=""
            src="${await getlogo(items[1].snippet.channelId)}"
          />
          <div class="divmeta">
            <div class="coolest-new-gadgets-and-invent">
            ${items[1].snippet.title}
            </div>
            <div class="divmetadata">
              <div class="techow-div">${items[1].snippet.channelTitle}</div>
              <div class="divmetadata-line">
                <div class="techow-div">${formatter.format(
                  items[1].statistics.viewCount
                )} views</div>
   
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="frame-div">
              <div class="ytd-card-div">
                <img
                  class="ytd-thumbnail-icon"
                  alt=""
                  src="${items[2].snippet.thumbnails.maxres.url}"
                />
                <div class="ytd-description-div">
                  <img
                    class="z-mnvfkkjr08efltsqqm5-3qn7x3gy-icon"
                    alt=""
                    src="${await getlogo(items[2].snippet.channelId)}"
                  />
                  <div class="divmeta">
                    <div class="coolest-new-gadgets-and-invent">
                    ${items[2].snippet.title}
                    </div>
                    <div class="divmetadata">
                      <div class="techow-div">${
                        items[2].snippet.channelTitle
                      }</div>
                      <div class="divmetadata-line">
                        <div class="techow-div">${formatter.format(
                          items[2].statistics.viewCount
                        )} views</div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ytd-card-div">
                <img
                  class="ytd-thumbnail-icon"
                  alt=""
                  src="${items[3].snippet.thumbnails.maxres.url}"
                />
                <div class="ytd-description-div">
                  <img
                    class="z-mnvfkkjr08efltsqqm5-3qn7x3gy-icon"
                    alt=""
                    src="${await getlogo(items[3].snippet.channelId)}"
                  />
                  <div class="divmeta">
                    <div class="coolest-new-gadgets-and-invent">
                    ${items[3].snippet.title}
                    </div>
                    <div class="divmetadata">
                      <div class="techow-div">${
                        items[3].snippet.channelTitle
                      }</div>
                      <div class="divmetadata-line">
                        <div class="techow-div">${formatter.format(
                          items[3].statistics.viewCount
                        )} views</div>
               
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="divcontents">
            <div class="frame-div">
              <div class="ytd-card-div">
                <img
                  class="ytd-thumbnail-icon"
                  alt=""
                  src="${items[4].snippet.thumbnails.maxres.url}"
                />
                <div class="ytd-description-div">
                  <img
                    class="z-mnvfkkjr08efltsqqm5-3qn7x3gy-icon"
                    alt=""
                    src="${await getlogo(items[4].snippet.channelId)}"
                  />
                  <div class="divmeta">
                    <div class="coolest-new-gadgets-and-invent">
                    ${items[4].snippet.title}
                    </div>
                    <div class="divmetadata">
                      <div class="techow-div">${
                        items[4].snippet.channelTitle
                      }</div>
                      <div class="divmetadata-line">
                        <div class="techow-div">${formatter.format(
                          items[4].statistics.viewCount
                        )} views</div>
                
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ytd-card-div">
                <img
                  class="ytd-thumbnail-icon"
                  alt=""
                  src="${items[5].snippet.thumbnails.maxres.url}"
                />
                <div class="ytd-description-div">
                  <img
                    class="z-mnvfkkjr08efltsqqm5-3qn7x3gy-icon"
                    alt=""
                    src="${await getlogo(items[5].snippet.channelId)}"
                  />
                  <div class="divmeta">
                    <div class="coolest-new-gadgets-and-invent">
                    ${items[5].snippet.title}
                    </div>
                    <div class="divmetadata">
                      <div class="techow-div">${
                        items[5].snippet.channelTitle
                      }</div>
                      <div class="divmetadata-line">
                        <div class="techow-div">${formatter.format(
                          items[5].statistics.viewCount
                        )} views</div>
            
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-div">
              <div class="ytd-card-div">
                <img
                  class="ytd-thumbnail-icon"
                  alt=""
                  src="${items[6].snippet.thumbnails.maxres.url}"
                />
                <div class="ytd-description-div">
                  <img
                    class="z-mnvfkkjr08efltsqqm5-3qn7x3gy-icon"
                    alt=""
                    src="${await getlogo(items[6].snippet.channelId)}"
                  />
                  <div class="divmeta">
                    <div class="coolest-new-gadgets-and-invent">
                    ${items[6].snippet.title}
                    </div>
                    <div class="divmetadata">
                      <div class="techow-div">${
                        items[6].snippet.channelTitle
                      }</div>
                      <div class="divmetadata-line">
                        <div class="techow-div">${formatter.format(
                          items[6].statistics.viewCount
                        )} views</div>
                 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ytd-card-div">
              <img
              class="ytd-thumbnail-icon"
              alt=""
              src="${items[7].snippet.thumbnails.maxres.url}"
            />
                <div class="ytd-description-div">
                  <img
                    class="z-mnvfkkjr08efltsqqm5-3qn7x3gy-icon"
                    alt=""
                    src="${await getlogo(items[7].snippet.channelId)}"
                  />
                  <div class="divmeta">
                    <div class="coolest-new-gadgets-and-invent">
                    ${items[7].snippet.title}
                    </div>
                    <div class="divmetadata">
                      <div class="techow-div">${
                        items[7].snippet.channelTitle
                      }o</div>
                      <div class="divmetadata-line">
                        <div class="techow-div">${formatter.format(
                          items[7].statistics.viewCount
                        )} views</div>
                 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="divcontents">
            <div class="frame-div">
              <div class="ytd-card-div">
                <img
                  class="ytd-thumbnail-icon"
                  alt=""
                  src="${items[8].snippet.thumbnails.maxres.url}"
                />
                <div class="ytd-description-div">
                  <img
                    class="z-mnvfkkjr08efltsqqm5-3qn7x3gy-icon"
                    alt=""
                    src="${await getlogo(items[8].snippet.channelId)}"
                  />
                  <div class="divmeta">
                    <div class="coolest-new-gadgets-and-invent">
                    ${items[8].snippet.title}
                    </div>
                    <div class="divmetadata">
                      <div class="techow-div">${
                        items[8].snippet.channelTitle
                      }</div>
                      <div class="divmetadata-line">
                        <div class="techow-div">${formatter.format(
                          items[8].statistics.viewCount
                        )} views</div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ytd-card-div">
                <img
                  class="ytd-thumbnail-icon"
                  alt=""
                  src="${items[9].snippet.thumbnails.maxres.url}"
                />
                <div class="ytd-description-div">
                  <img
                    class="z-mnvfkkjr08efltsqqm5-3qn7x3gy-icon"
                    alt=""
                    src="${await getlogo(items[9].snippet.channelId)}"
                  />
                  <div class="divmeta">
                    <div class="coolest-new-gadgets-and-invent">
                    ${items[9].snippet.title}
                    </div>
                    <div class="divmetadata">
                      <div class="techow-div">${
                        items[9].snippet.channelTitle
                      }</div>
                      <div class="divmetadata-line">
                        <div class="techow-div">${formatter.format(
                          items[9].statistics.viewCount
                        )} views</div>
                  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-div">
              <div class="ytd-card-div">
                <img
                  class="ytd-thumbnail-icon"
                  alt=""
                  src="${items[10].snippet.thumbnails.maxres.url}"
                />
                <div class="ytd-description-div">
                  <img
                    class="z-mnvfkkjr08efltsqqm5-3qn7x3gy-icon"
                    alt=""
                    src="${await getlogo(items[10].snippet.channelId)}"
                  />
                  <div class="divmeta">
                    <div class="coolest-new-gadgets-and-invent">
                    ${items[10].snippet.title}
                    </div>
                    <div class="divmetadata">
                      <div class="techow-div">${
                        items[10].snippet.channelTitle
                      }</div>
                      <div class="divmetadata-line">
                        <div class="techow-div">${formatter.format(
                          items[10].statistics.viewCount
                        )} views</div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ytd-card-div">
                <img
                  class="ytd-thumbnail-icon"
                  alt=""
                  src="${items[11].snippet.thumbnails.maxres.url}"
                />
                <div class="ytd-description-div">
                  <img
                    class="z-mnvfkkjr08efltsqqm5-3qn7x3gy-icon"
                    alt=""
                    src="${await getlogo(items[11].snippet.channelId)}"
                  />
                  <div class="divmeta">
                    <div class="coolest-new-gadgets-and-invent">
                    ${items[11].snippet.title}
                    </div>
                    <div class="divmetadata">
                      <div class="techow-div">${
                        items[11].snippet.channelTitle
                      }</div>
                      <div class="divmetadata-line">
                        <div class="techow-div">${formatter.format(
                          items[11].statistics.viewCount
                        )} views</div>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

`;

  return data;
};

getRecommended();

setTimeout(function () {
  document.getElementById("vidcontents").innerHTML = videocontent;
}, 3000);

//generated script

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
