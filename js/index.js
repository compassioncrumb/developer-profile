$( document ).ready(function() {

var cardinals = {
profile: {
  title: "Public Profile",
  summary: "stylized profile page for a speaker or public figure",
  screenshot: "./screenshot_size/dennet_300x190.png",
  url: "https://compassioncrumb.github.io/front-end-composition-1/",
  skills: ["scss", "html5"]
}, 
jobBoard: {
  title: "Modern Job Board", 
  summary: "detailed layout for a modern job board",
  screenshot: "./screenshot_size/job_board_300x190.png",
  url: "https://compassioncrumb.github.io/job-board-composition/",
  skills: ["scss", "html5", "flexbox"]
},
userInfo: {
  title: "User Info Cards",
  summary: "card-based layout to display profile information",
  screenshot: "./screenshot_size/user_info_300x190.png",
  url: "https://compassioncrumb.github.io/users-info-composition/",
  skills: ["scss", "html"]
},
wikipedia: {
  title: "Wikipedia Search",
  summary: "utilizes the wikipedia api to fetch search results and tastefully display them",
  screenshot: "./screenshot_size/wikipedia_300x190.png",
  url: "https://compassioncrumb.github.io/wikipedia-search/",
  skills: ["ajax", "jqeury", "javascript"]
},
pomodoro: {
  title: "Pomodoro Timer", 
  summary: "stay focused, then take a break with this minimalist pomodoro timer",
  screenshot: "./screenshot_size/il_doro_300x190.png",
  url: "https://compassioncrumb.github.io/il-doro/",
  skills: ["jquery", "javascript", "transitions"]
}, 
simon: {
    title: "Simon Signifies", 
    summary: "a simple, elegant simon says game",
    screenshot: "./screenshot_size/simon_300x190.png",
    url: "https://compassioncrumb.github.io/simon-signifies/",
    skills: ["jquery", "javascript"]
  },
  library: {
    title: "Library Catalog", 
    summary: "back-end and form based library catalog site, with content management functions",
    screenshot: "./screenshot_size/library_300x190.png", 
    url: "https://townlibrary.herokuapp.com/catalog/book/create",
    skills: ["node", "pug/jade", "Express"]
  }
};

for (var item in cardinals) {
  console.log(cardinals[item].title)
  
  var project = cardinals[item];
  var composeSkills = function(thing) { 
    var skillList = ``;
    for (var index in thing.skills) {
    skillList += `<div class='skill'>${thing.skills[index]}</div>`;
    };
    return skillList;
  }
  var skills = composeSkills(project);
  
  // $('body').append(
  //   `<h2>${cardinals[project].title}</h2>
  //   <div>${cardinals[project].summary}</div>`
  // )
  
  $(".display").append(
  `<div class='project-container'>
    <a href="${project.url}"><h2>${project.title.toUpperCase()}</h2></a>
    <div class='project-detail'>
      <a href="${project.url}">
        <img src=${project.screenshot}>
      </a>
      <div class='skill-list'>
        <div class='inner-div'>${skills}</div>
      </div>
      <div class='project-summary'>
        <div class="summary-inner">
          <h3></h3>
          <div class='summary'>${project.summary}</div>
        </div>
      </div>
    </div>
  </div>`
  )
};

      console.log( "ready!" );
});