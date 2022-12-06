let api_key = "AIzaSyB4X6Wt3VoDyk5j3nQwYFm4vjrVqtYcqkM";
let videoID;
let related;

window.addEventListener("load",()=>{
videoID=localStorage.getItem("video_id");
console.log(videoID);
console.log("loaded");
getvideoembed();
getstuffbelow();
getVideoandRelated();
});

let searchcontent = "";
const formatter = Intl.NumberFormat("en", { notation: "compact" });

video_related = "";

video_url=``;
let stuff;
//no need of getting api for video, as when the videos are clicked they would be sent to the video page function and the argument passed would be the video ID.
// but need to get video related to ID.
// and also need video stats to display, like title and like count.

let embed=document.getElementById("videoembed");
let videoembed;



const getvideoembed = () => {
videoembed=
`       
<iframe
  class="youtube-video-player"
  src="https://www.youtube.com/embed/${videoID}?rel=0"
  frameborder="0"
  allowfullscreen
></iframe>`;
console.log(videoembed);
embed.innerHTML=videoembed;
}




let related_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&relatedToVideoId=${videoID}&type=video&key=${api_key}`;

const getVideoandRelated = async () => {
  const result = await fetch(related_url, {
    method: "GET",
  });

  const ytdata = await result.json();
  items = ytdata.items; //json data related to searched query]
  console.log(items);
items.forEach(ele => {
  
  related+=`
  <div class="ytd-compact-video-renderer-div">
              <div class="divdismissible">
                <button class="athumbnail-div">
                  <img
                    class="hqdefaultjpg-icon"
                    alt=""
                    src="${ele.snippet.thumbnails.medium.url}"
                  />
                  <div class="ytd-thumbnail-overlay-time-sta-div">
                  </button>
                </div>
                <div class="div8">
                  <div class="div9">
                    <div class="a-div5">
                      <div class="figma-design-to-live-dashboard">
                        <div class="figma-design-to-live-dashboard1">
                         ${ele.snippet.title}
                        </div>
                      </div>
                      <div class="div10">
                        <div class="divmetadata12">
                          <div class="divbyline-container">
                            <div class="divcontainer1">
                              <div class="divbyline-container">
                                <div class="locofy-div1">${ele.snippet.channelTitle}</div>
                              </div>
                            </div>
                          </div>
                          <div class="divmetadata-line12">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  `;
  console.log(related);
  })

  document.getElementById("relatedvideos").innerHTML=related;


};


const getstuffbelow = async() => {

  const res = await fetch(video_url, {
    method: "GET",
  });

  const ytdata = await res.json();
  items = ytdata.items;

//add channel logo api
const getchannelLogo = async () => {
  const res = await fetch(channelURL, {
    method: "GET", //Method of https request
    headers: {},
  });
  //the resultant json is stored into the data
  let logodata = await res.json();
  let logo_data_items = logodata.items;


stuff=`
<div class="divabove-the-fold">
              <div class="divtitle">
                <div class="locofy-quick-builds">Locofy Quick Builds</div>
                <div class="figma-design-to-live-website-w">
                  ${items.snippet.title}
                </div>
              </div>
              <div class="divtop-row">
                <div class="divowner">
                  <div class="ytd-video-owner-renderer-div">
                    <div class="yt-img-shadow-div">
                      <img
                        class="gqvpuag9wayv3emkh5utoqkdvhimgl-icon"
                        alt=""
                        src="${logo_data_items.snippet.thumbnails.default.url}"
                      />
                    </div>
                    <div class="divupload-info">
                      <div class="k-subscribers-div">
                        <div class="k-subscribers-div1">${subscribers} subscribers</div>
                      </div>
                      <div class="divcontainer">
                        <div class="yt-formatted-string-div45">
                          <div class="a-div4">
                            <div class="locofy-div">${items.snippet.channelTitle}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ytd-button-renderer-div4">
                    <div class="button-div">
                      <div class="div4">
                        <div class="subscribe-div">Subscribe</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ytd-menu-renderer-div">
                  <div class="divtop-level-buttons-computed">
                    <div class="ytd-segmented-like-dislike-but-div">
                      <div class="ytd-toggle-button-renderer-div">
                        <div class="like-this-video-along-with-169">
                          <img
                            class="svg-icon38"
                            alt=""
                            src="public/svg40.svg"
                          />
                          <div class="div5">${formatter.format(items.statistics.likeCount)}</div>
                        </div>
                      </div>
                      <div class="like-this-video-along-with-1691"></div>
                      <img
                        class="ytd-toggle-button-renderer-icon"
                        alt=""
                        src="public/ytdtogglebuttonrenderer.svg"
                      />
                    </div>
                    <div class="ytd-button-renderer-div5">
                      <div class="share-div">
                        <img class="svg-icon38" alt="" src="public/svg41.svg" />
                        <div class="share-div1">Share</div>
                      </div>
                    </div>
                  </div>
                  <div class="ytd-toggle-button-renderer-div">
                    <div class="save-to-playlist">
                      <div class="svg-div">
                        <img class="frame-icon" alt="" src="public/frame.svg" />
                      </div>
                      <div class="save-div">Save</div>
                    </div>
                  </div>
                  <img
                    class="more-actions-icon"
                    alt=""
                    src="public/more-actions.svg"
                  />
                </div>
              </div>
              <div class="divdescription">
                <div class="divdescription-inner">
                  <div class="k-views-3-months-ago">
                    ${formatter.format(items.statistics.viewCount)}views
                  </div>
                  <div class="in-this-video-youll-be-learni">
                    <p class="blank-line-p">
                      <span
                        >
                     ${items.snippet.localized.description}
                        </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="div6"></div>
            <div class="ytd-item-section-renderer-div">
              <div class="ytd-comments-header-renderer-div">
                <div class="divtitle1">
                  <div class="comments-div">Comments</div>
                  <div class="yt-sort-filter-sub-menu-render-div">
                    <div class="sort-comments-div">
                      <img class="svg-icon42" alt="" src="public/svg42.svg" />
                      <div class="sort-by-div">Sort by</div>
                    </div>
                  </div>
                </div>
                <div class="ytd-comment-simplebox-renderer-div">
                  <div class="yt-img-shadow-div1">
                    <img
                      class="gqvpuag9wayv3emkh5utoqkdvhimgl-icon"
                      alt=""
                      src="public/defaultusers48ckc0x00ffffffnorj@2x.png"
                    />
                  </div>
                  <input
                    class="frame-input"
                    type="text"
                    placeholder="Add a comment..."
                  />
                </div>
              </div>
              <div class="divcontents3"></div>
            </div>
          </div>
          `;
}
getchannelLogo();
}

document.getElementById("belowstuff").innerHTML=stuff;
 


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

//Backend Code
