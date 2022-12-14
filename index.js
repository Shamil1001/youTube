function myFunct() {
  const container = document.querySelector(".video-container");

  const objects = [
    {
      imgSource:
        "https://i.ytimg.com/vi/MusIvEKjqsc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRqfcQuxbrgyhh8fHfLLPpujNJhQ",
      title: "3 Alternatives for Heroku's Free Tier - Full Stack & API Hosting",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s68-c-k-c0x00ffffff-no-rj",
      channelName: "Traversy Media",
      importDate: "3 months ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/C4wvd0G5pZ0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoBQqoWbwARgzC4q9gVbhIU95x6Q",
      title:
        "HIGHLIGHTS: Liverpool 1-3 Lyon | Carvalho scores as Reds return to action",
      imgChannel:
        "https://yt3.ggpht.com/-EP0-qy3ZJQLWIFc7vdOSSTe1moE_6ZpS4ptKUzQlchpP_TIzc973C6m08dMlLTEmcUJJwl1=s68-c-k-c0x00ffffff-no-rj",
      channelName: "Liverpool FC",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/4jKfDM87Aaw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuCDbKhBwrg4XoEJyVY3gue8r_Jw",
      title: "The funniest animals 2022-2023 😂 The funniest cats and dogs",
      imgChannel:
        "https://yt3.ggpht.com/yDdeoecBpbXdWljuBJ3x2RnUnsozpIQBoOxfMzsm5osyh5Aq_FqghTFdQAiLOtmt8JttWhRXEQ=s68-c-k-c0x00ffffff-no-rj",
      channelName: "Animal Entertainment",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/kHwmzef842g/hq720_live.jpg?sqp=CPyy5ZwG-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE0qqIlCQDz8_qZy8P6wp5Yek5WA",
      title: "Webcam Zürich HB Автор: David Gubler",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu-JB74RUy-2i9b51KQHZI07gIbOUoNkbrEFJg=s68-c-k-c0x00ffffff-no-rj",
      channelName: "David Gubler",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/TD-5pfyh2Ug/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb9fLqa1YkdxyTK5HIn27QHHQ-7g",
      title: "Keane - Somewhere Only We Know (Lyrics / Lyric Video)",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu_YxNpWnyVTldNgRIKaqViVghZH4iOLAI6uCdmXHw=s68-c-k-c0x00ffffff-no-rj",
      channelName: "The Good Melodies   ",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/Wt3w2Erc_HI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDawMjMrzksKBobnTPoAS8gYXDuKg",
      title: "УЧЕБА В МФТИ: чего стоит ожидать Автор: AnnaV",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu8SfzjKOfNQlAX4vQGpnfhwPB9zeLyGtw3Xm4PVWDg2AvzrdojHWy0nVL-ryzBv=s68-c-k-c0x00ffffff-no-rj",
      channelName: "AnnaV",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/1ewgGjqIN_E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu52A-A-VRmgmeMQVFu45DBp7_7w",
      title: "Wie Miroslav Klose zur WM-Legende wurde | sportstudio",
      imgChannel:
        "https://yt3.ggpht.com/YjGZO2XRIB6nF7HHPnOOGNRmJchiK-rvBKW9ELqg5GalNMcKwt-TR_DEhQ_pZqL40pSPQo28=s68-c-k-c0x00ffffff-no-rj",
      channelName: "sportstudio fußball",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/K8YELRmUb5o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9upAvqs1B2Y_LaZGrlQcc_4AW4A",
      title: "Build a COMPLETE Fullstack Responsive MERN App with Auth",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu9qrvnGzHqTaO6XQ-lyDJjWMc1kozC2CV7EcNV1=s68-c-k-c0x00ffffff-no-rj",
      channelName: "EdRoh",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/MusIvEKjqsc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRqfcQuxbrgyhh8fHfLLPpujNJhQ",
      title: "3 Alternatives for Heroku's Free Tier - Full Stack & API Hosting",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s68-c-k-c0x00ffffff-no-rj",
      channelName: "Traversy Media",
      importDate: "3 months ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/C4wvd0G5pZ0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoBQqoWbwARgzC4q9gVbhIU95x6Q",
      title:
        "HIGHLIGHTS: Liverpool 1-3 Lyon | Carvalho scores as Reds return to action",
      imgChannel:
        "https://yt3.ggpht.com/-EP0-qy3ZJQLWIFc7vdOSSTe1moE_6ZpS4ptKUzQlchpP_TIzc973C6m08dMlLTEmcUJJwl1=s68-c-k-c0x00ffffff-no-rj",
      channelName: "Liverpool FC",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/4jKfDM87Aaw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuCDbKhBwrg4XoEJyVY3gue8r_Jw",
      title: "The funniest animals 2022-2023 😂 The funniest cats and dogs",
      imgChannel:
        "https://yt3.ggpht.com/yDdeoecBpbXdWljuBJ3x2RnUnsozpIQBoOxfMzsm5osyh5Aq_FqghTFdQAiLOtmt8JttWhRXEQ=s68-c-k-c0x00ffffff-no-rj",
      channelName: "Animal Entertainment",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/kHwmzef842g/hq720_live.jpg?sqp=CPyy5ZwG-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE0qqIlCQDz8_qZy8P6wp5Yek5WA",
      title: "Webcam Zürich HB Автор: David Gubler",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu-JB74RUy-2i9b51KQHZI07gIbOUoNkbrEFJg=s68-c-k-c0x00ffffff-no-rj",
      channelName: "David Gubler",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/TD-5pfyh2Ug/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb9fLqa1YkdxyTK5HIn27QHHQ-7g",
      title: "Keane - Somewhere Only We Know (Lyrics / Lyric Video)",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu_YxNpWnyVTldNgRIKaqViVghZH4iOLAI6uCdmXHw=s68-c-k-c0x00ffffff-no-rj",
      channelName: "The Good Melodies   ",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/Wt3w2Erc_HI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDawMjMrzksKBobnTPoAS8gYXDuKg",
      title: "УЧЕБА В МФТИ: чего стоит ожидать Автор: AnnaV",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu8SfzjKOfNQlAX4vQGpnfhwPB9zeLyGtw3Xm4PVWDg2AvzrdojHWy0nVL-ryzBv=s68-c-k-c0x00ffffff-no-rj",
      channelName: "AnnaV",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/1ewgGjqIN_E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu52A-A-VRmgmeMQVFu45DBp7_7w",
      title: "Wie Miroslav Klose zur WM-Legende wurde | sportstudio",
      imgChannel:
        "https://yt3.ggpht.com/YjGZO2XRIB6nF7HHPnOOGNRmJchiK-rvBKW9ELqg5GalNMcKwt-TR_DEhQ_pZqL40pSPQo28=s68-c-k-c0x00ffffff-no-rj",
      channelName: "sportstudio fußball",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/K8YELRmUb5o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9upAvqs1B2Y_LaZGrlQcc_4AW4A",
      title: "Build a COMPLETE Fullstack Responsive MERN App with Auth",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu9qrvnGzHqTaO6XQ-lyDJjWMc1kozC2CV7EcNV1=s68-c-k-c0x00ffffff-no-rj",
      channelName: "EdRoh",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/MusIvEKjqsc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRqfcQuxbrgyhh8fHfLLPpujNJhQ",
      title: "3 Alternatives for Heroku's Free Tier - Full Stack & API Hosting",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s68-c-k-c0x00ffffff-no-rj",
      channelName: "Traversy Media",
      importDate: "3 months ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/C4wvd0G5pZ0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoBQqoWbwARgzC4q9gVbhIU95x6Q",
      title:
        "HIGHLIGHTS: Liverpool 1-3 Lyon | Carvalho scores as Reds return to action",
      imgChannel:
        "https://yt3.ggpht.com/-EP0-qy3ZJQLWIFc7vdOSSTe1moE_6ZpS4ptKUzQlchpP_TIzc973C6m08dMlLTEmcUJJwl1=s68-c-k-c0x00ffffff-no-rj",
      channelName: "Liverpool FC",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/4jKfDM87Aaw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuCDbKhBwrg4XoEJyVY3gue8r_Jw",
      title: "The funniest animals 2022-2023 😂 The funniest cats and dogs",
      imgChannel:
        "https://yt3.ggpht.com/yDdeoecBpbXdWljuBJ3x2RnUnsozpIQBoOxfMzsm5osyh5Aq_FqghTFdQAiLOtmt8JttWhRXEQ=s68-c-k-c0x00ffffff-no-rj",
      channelName: "Animal Entertainment",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/kHwmzef842g/hq720_live.jpg?sqp=CPyy5ZwG-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE0qqIlCQDz8_qZy8P6wp5Yek5WA",
      title: "Webcam Zürich HB Автор: David Gubler",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu-JB74RUy-2i9b51KQHZI07gIbOUoNkbrEFJg=s68-c-k-c0x00ffffff-no-rj",
      channelName: "David Gubler",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/TD-5pfyh2Ug/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb9fLqa1YkdxyTK5HIn27QHHQ-7g",
      title: "Keane - Somewhere Only We Know (Lyrics / Lyric Video)",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu_YxNpWnyVTldNgRIKaqViVghZH4iOLAI6uCdmXHw=s68-c-k-c0x00ffffff-no-rj",
      channelName: "The Good Melodies   ",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/Wt3w2Erc_HI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDawMjMrzksKBobnTPoAS8gYXDuKg",
      title: "УЧЕБА В МФТИ: чего стоит ожидать Автор: AnnaV",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu8SfzjKOfNQlAX4vQGpnfhwPB9zeLyGtw3Xm4PVWDg2AvzrdojHWy0nVL-ryzBv=s68-c-k-c0x00ffffff-no-rj",
      channelName: "AnnaV",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/1ewgGjqIN_E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu52A-A-VRmgmeMQVFu45DBp7_7w",
      title: "Wie Miroslav Klose zur WM-Legende wurde | sportstudio",
      imgChannel:
        "https://yt3.ggpht.com/YjGZO2XRIB6nF7HHPnOOGNRmJchiK-rvBKW9ELqg5GalNMcKwt-TR_DEhQ_pZqL40pSPQo28=s68-c-k-c0x00ffffff-no-rj",
      channelName: "sportstudio fußball",
      importDate: "2 days ago",
    },
    {
      imgSource:
        "https://i.ytimg.com/vi/K8YELRmUb5o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9upAvqs1B2Y_LaZGrlQcc_4AW4A",
      title: "Build a COMPLETE Fullstack Responsive MERN App with Auth",
      imgChannel:
        "https://yt3.ggpht.com/ytc/AMLnZu9qrvnGzHqTaO6XQ-lyDJjWMc1kozC2CV7EcNV1=s68-c-k-c0x00ffffff-no-rj",
      channelName: "EdRoh",
      importDate: "2 days ago",
    },
  ];

  container.innerHTML = "";
  objects.map((i) => {
    var video = `<img
          class="thumbnail"
          src="${i.imgSource}"
        />
        <div class="content">
          <img
            src="${i.imgChannel}"
            class="channel-icon"
          />
          <div class="info">
            <h4 class="title">
              ${i.title}
            </h4>
            <p class="channel-name">${i.channelName}</p>
          </div>
        </div>`;

    let item = document.createElement("div");
    item.classList.add("video");
    item.innerHTML = video;
    container.appendChild(item);
  });
}

myFunct();
