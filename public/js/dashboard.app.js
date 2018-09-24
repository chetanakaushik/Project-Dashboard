var app = new Vue({
  el: '#dashboard',
  data: {
    message: 'Hello Vue!'
  }
});

var app1 = new Vue({
  el: '#main',
  data: {
    "name" : "Tapestry",
  "short_description": "Build a visualization layer for the project dashboard",
  "start_date" : "2018-07-01",
  "target_date" : "2018-11-03",
  "budget" : "4950000",
  "spent" : "3456700",
  "projected_spend": "4740500",
  "weekly_effort_target": 400,
  "tasks" : [
  {
    "id": 1,
    "title": '',
    "type" : '',
    "size" : '',
    "team" : '',
    "status": '',
    "start_date": '',
    "close_date": '',
    "hours_worked": '',
    "perc_complete":'' ,
    "current_sprint" : ''
  },
  // {
  //   "id": 2,
  //   "title": "Update unit tests",
  //   "type" : "Story",
  //   "size" : "L",
  //   "team" : "MS Why Us",
  //   "status": "Closed",
  //   "start_date": "2018-07-15",
  //   "close_date": "2018-08-1",
  //   "hours_worked": 40,
  //   "perc_complete": 100,
  //   "current_sprint" : true
  // },
  // {
  //   "id": 3,
  //   "title": "Write middleware",
  //   "type" : "Epic",
  //   "size" : "XL",
  //   "team" : "California Dream",
  //   "status": "Open",
  //   "start_date": null,
  //   "close_date": null,
  //   "hours_worked": 0,
  //   "perc_complete": 0,
  //   "current_sprint" : true
  // },
  // {
  //   "id": 4,
  //   "title": "Completion % not saving",
  //   "type" : "Bug",
  //   "size" : "XS",
  //   "team" : "Luke's Parents",
  //   "status": "Open",
  //   "start_date": "2018-07-29",
  //   "close_date": "",
  //   "hours_worked": 27,
  //   "perc_complete": 80,
  //   "current_sprint" : false
  // }
]
},

computed:{
  days_left: function(){
    return 31;
  }
},

methods:{
  fetchTasks: function(){
    fetch("https://raw.githubusercontent.com/tag/iu-msis/dev/public/p1-tasks.json")
    .then(function (response) {return response.json();})
    .then(function (json){app1.tasks = json; console.log(json);})
    .catch(function (err) {
      console.log('Fetch Error: ', err);
    })

  },
  gotoTask(tid){
    window.location = 'task.html?taskId='+ tid;
  }
},
created: function(){
  this.fetchTasks();
  // console.log(window.location.href);
  // const url = new URL(window.location.href);
  // const taskId = url.searchParams.get("taskId");
  // this.task.id = taskId;
  // console.log('Task: '+taskId);

},
});
