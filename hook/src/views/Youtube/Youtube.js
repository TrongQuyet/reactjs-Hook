import { useEffect, useState, React } from "react";
import axios from "axios";
import { format, parseISO } from "date-fns";
import "./Youtube.scss";
const Youtube = () => {
  const [query, setquery] = useState("");
  const [videos, setvideos] = useState([]);
  let search = async (event) => {
    let query = event.target.value;
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyCqX_5XlQr6VS_qLuVA7DMqkYeWtxd1Hqc",
        q: query,
      },
    });

    if (res && res.data && res.data.items) {
      let data = res.data.items;
      let result = [];
      if (data && data.length > 0) {
        data.map((item) => {
          let obj = {};
          obj.id = item.id.videoId;
          obj.title = item.snippet.title;
          obj.description = item.snippet.description;
          obj.author = item.snippet.channelTitle;
          obj.publishedAt = item.snippet.publishedAt;
          result.push(obj);
        });
      }
      setvideos(result);
    }
  };
  return (
    <>
      <div className="contaiter-search">
        <input
          placeholder="Search"
          className="input-search"
          type="text"
          value={query}
          onChange={(event) => setquery(event.target.value)}
        ></input>
        <button
          value={query}
          className="btn-search"
          onClick={(event) => search(event)}
        >
          Search
        </button>
      </div>
      {videos &&
        videos.length > 0 &&
        videos.map((item) => {
          return (
            <div className="contaiter-body" key={item.id}>
              <div className="left">
                <div>
                  <iframe
                    className="iframe"
                    src={`https://www.youtube.com/embed/${item.id}`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="right">
                <div className="title">{item.title}</div>
                <div className="time">
                  {format(parseISO(item.publishedAt), "dd/MM/yyyy-HH:mm:ss a")}
                </div>
                <div className="author"> {item.author}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Youtube;

// {
//   "kind": "youtube#searchListResponse",
//   "etag": "gANeTaHDgMN96ZsfQaCsjhfDeUg",
//   "nextPageToken": "CAUQAA",
//   "regionCode": "VN",
//   "pageInfo": {
//     "totalResults": 1000000,
//     "resultsPerPage": 5
//   },
//   "items": [
//     {
//       "kind": "youtube#searchResult",
//       "etag": "0syfXKgMUvoIop6hAB_CewNR3Cw",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "DfG54UC8fmA"
//       },
//       "snippet": {
//         "publishedAt": "2023-02-23T22:24:53Z",
//         "channelId": "UC4LvrpNXujjbGOS4RDvr41g",
//         "title": "HIGHLIGHTS: MAN UNITED - BARCELONA:  NG?????C D??NG C???M X??C, V?? ??I???U SAMBA L??M LU M??? &quot;V?? ??I???U XAVI&quot;",
//         "description": "Qu?? kh??n gi??? ?????ng qu??n SUBSCRIBE: https://bit.ly/FPTBongda HIGHLIGHTS: MAN UNITED - BARCELONA: NG?????C D??NG ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/DfG54UC8fmA/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/DfG54UC8fmA/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/DfG54UC8fmA/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "FPT B??ng ????",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-02-23T22:24:53Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "-UARcd84xR7nhVB6LsBIpQSwFdg",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "TaHvvJS9Ru0"
//       },
//       "snippet": {
//         "publishedAt": "2023-02-23T21:30:11Z",
//         "channelId": "UC4LvrpNXujjbGOS4RDvr41g",
//         "title": "HIGHLIGHTS: AS MONACO - LEVERKUSEN | R?????T ??U???I M??N NH??N, ?????NH ??O???T B???NG LO???T PENALTY | UEL 22/23",
//         "description": "Qu?? kh??n gi??? ?????ng qu??n SUBSCRIBE: https://bit.ly/FPTBongda HIGHLIGHTS: AS MONACO - LEVERKUSEN | R?????T ??U???I M??N ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/TaHvvJS9Ru0/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/TaHvvJS9Ru0/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/TaHvvJS9Ru0/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "FPT B??ng ????",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-02-23T21:30:11Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "AJoAzN2EKL-NW_8963jDl_c2qLI",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "Be56oMmJHBQ"
//       },
//       "snippet": {
//         "publishedAt": "2023-02-23T22:13:52Z",
//         "channelId": "UC8XztUclX1Patc7P3uWBcGg",
//         "title": "TIN N??NG B??NG ???? 24/2| MU NG?????C D??NG LO???I BARCA, CR7 DI???N ????? ??? R???P G??Y S???T, L?? DO C.PH?????NG B??? LO???I",
//         "description": "Tham gia l??m h???i vi??n c???a k??nh n??y ????? ???????c h?????ng ?????c quy???n: ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/Be56oMmJHBQ/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/Be56oMmJHBQ/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/Be56oMmJHBQ/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Tuy???n V??n H??a",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-02-23T22:13:52Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "SF9aP_1F3Jjf1lg1ezmVEXmLgXg",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "cRmtLcY7CyE"
//       },
//       "snippet": {
//         "publishedAt": "2023-02-23T20:51:57Z",
//         "channelId": "UC4LvrpNXujjbGOS4RDvr41g",
//         "title": "HIGHLIGHTS: NANTES - JUVENTUS | TH??? ????? NG??? NG???N, DI MARIA L???P HAT-TRICK ?????NG C???P | UEL 22/23",
//         "description": "Qu?? kh??n gi??? ?????ng qu??n SUBSCRIBE: https://bit.ly/FPTBongda HIGHLIGHTS: NANTES - JUVENTUS | TH??? ????? NG??? NG???N, DI ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/cRmtLcY7CyE/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/cRmtLcY7CyE/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/cRmtLcY7CyE/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "FPT B??ng ????",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-02-23T20:51:57Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "5jUQ-VfdAihN68gBUa-h05jiHPk",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "-r1pZBy0MqM"
//       },
//       "snippet": {
//         "publishedAt": "2023-02-23T22:16:55Z",
//         "channelId": "UCY7GIDaXNnMviPvijIQUWzg",
//         "title": "TIN B??NG ???? 24/2: MANUTD LO???I BARCELONA, DI MARIA L???P HATTRICK, MOURINHO C??NG ROMA ??I TI???P",
//         "description": "TIN B??NG ???? 24/2: MANUTD LO???I BARCELONA, DI MARIA L???P HATTRICK, MOURINHO C??NG ROMA ??I TI???P Ch??o m???ng c??c ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/-r1pZBy0MqM/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/-r1pZBy0MqM/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/-r1pZBy0MqM/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "BLV Anh Qu??n News",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-02-23T22:16:55Z"
//       }
//     }
//   ]
// }
