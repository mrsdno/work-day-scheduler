var schedule = {

};


// time block paragraph clicked to enter task
$(".time-block").on("click", ".task", function() {
    var task = $(this)
    .text()
    .trim();

    //create new input element
    var taskInput = $("<input>")
    .attr("type", "text")
    .addClass("enter-task")
    .val(task);


    $(this).replaceWith(taskInput);

    //auto focus
    taskInput.trigger("focus");
})

//click save button block paragraph to save new task

$(".saveBtn").on("click", function(){


    if (localStorage.schedule) {
        savedSchedule = localStorage.getItem("schedule");

        savedSchedule = JSON.parse(savedSchedule);
    }
    
    else {
        savedSchedule = {
            eightAM: [],
            nineAM: [],
            tenAM: [],
            elevenAM: [],
            twelvePM: [],
            onePM: [],
            twoPM: [],
            threePM: [],
            fourPM: [],
            fivePM: []
        };
    }

    // get data from local storage


    // get the parent tasks ID
    var taskTime = $(this)
    .attr("id");  

    //get current text
    var task = $("input[type='text']")
    .val()
    .trim();

    if (task) {
    //create new div element to display new task
    var updatedTask = $("<span>")
    .text(task)
    .addClass("task");

    // display new task after updating

    $("input[type='text']").replaceWith(updatedTask)

    }

    else {
        // assign text to empty string
        var updatedTask = $("<span>")
        .addClass("task")
        .addClass("col-8")
        .text(" ");

        // display new task after updating
        $("input[type='text']").replaceWith(updatedTask);
    }

    console.log(taskTime);
    console.log(this);
    console.log(savedSchedule);
    // update task array and save to local storage
    savedSchedule[taskTime] = task;



    saveTask(savedSchedule);
})



var saveTask = function(savedSchedule){

    localStorage.setItem("schedule", JSON.stringify(savedSchedule));
  
}

var loadSchedule = function(schedule) {


    if (localStorage.schedule) {

        schedule = JSON.parse(localStorage.schedule);

        // load 8 am task 
        $("#eight-am-task").append("<span>" + schedule.eightAM + "</span>")
        .addClass("enter-task");
    
        // load 9 am task 
        $("#nine-am-task").append("<span>" + schedule.nineAM + "</span>")
        .addClass("enter-task");

        // load 10 am task 
        $("#ten-am-task").append("<span>" + schedule.tenAM + "</span>")
        .addClass("enter-task");

        // load 11 am task 
        $("#eleven-am-task").append("<span>" + schedule.elevenAM + "</span>")
        .addClass("enter-task");

        // load 12 pm task 
        $("#twelve-pm-task").append("<span>" + schedule.twelvePM + "</span>")
        .addClass("enter-task");

        // load 1 pm task 
        $("#one-pm-task").append("<span>" + schedule.onePM + "</span>")
        .addClass("enter-task");

        // load 2 pm task 
        $("#two-pm-task").append("<span>" + schedule.twoPM + "</span>")
        .addClass("enter-task");
        
        // load 3 pm task 
        $("#three-pm-task").append("<span>" + schedule.threePM + "</span>")
        .addClass("enter-task");

        // load 4 pm task 
        $("#four-pm-task").append("<span>" + schedule.fourPM + "</span>")
        .addClass("enter-task");

        // load 5 pm task 
        $("#five-pm-task").append("<span>" + schedule.fivePM + "</span>")
        .addClass("enter-task");
    }
    
    else {
        schedule = {
            eightAM: [" "],
            nineAM: [" "],
            tenAM: [" "],
            elevenAM: [" "],
            twelvePM: [" "],
            onePM: [" "],
            twoPM: [" "],
            threePM: [" "],
            fourPM: [" "],
            fivePM: [" "]
        };
    }
}
   



loadSchedule();