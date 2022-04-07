// set up empty schedule variable for storage
var schedule = {};
// set now to current time to display in the header
var now = moment().format('MM/DD/YYYY');

function auditTimes() {
    // set present to current hour in military time
    var present = parseInt(moment().format("HH"));
    // set up variable to assign hour to each .task-box, starting at 8 am
    let time = 8;

    // loop over each task box and compare present time to hour in .task-box
    $(".task-box").each(function(){
        if (present > time) {
           $(this).addClass("future");
        }

        else if (present < time) {
            $(this).addClass("past");
        }

        else {
            $(this).addClass("present");
        }
        time ++;
    })
}

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

    //replace .task with taskInput so text can be entered
    $(this).replaceWith(taskInput);

    //auto focus on taskInput
    taskInput.trigger("focus");

})


//click save button block paragraph to save new task
$(".saveBtn").on("click", function(){
    
    // get data from local storage if it exists and parse into a new array
    if (localStorage.schedule) {
        savedSchedule = localStorage.getItem("schedule");
        savedSchedule = JSON.parse(savedSchedule);
    }
    
    // if it does not exist, set up an empty string we can update
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


    // get the parent tasks ID
    var taskTime = $(this)
    .attr("id");  

    //get current text
    var task = $("input[type='text']")
    .val();


    // if there is updated text
    if (task) {
        //create new div element to display new task
        var updatedTask = $("<span>")
        .text(task)
        .addClass("task");

        // display new task after updating
        $("input[type='text']").replaceWith(updatedTask)
    }
    
    // if task was deleted, empty the input box
    else {
        // assign text to empty string
        var updatedTask = $("<span>")
        .addClass("task")
        .addClass("col-8")
        .text(" ");

        // display new task after updating
        $("input[type='text']").replaceWith(updatedTask);
    }

    // update task array and save to local storage
    if (task) {
    savedSchedule[taskTime] = task;
    }

    else {
        savedSchedule[taskTime] = " ";
    }

    saveTask(savedSchedule);

    // update colors when you save the task
    auditTimes();
})



var saveTask = function(savedSchedule){
    localStorage.setItem("schedule", JSON.stringify(savedSchedule));
}


var loadSchedule = function(schedule) {

    // add date to the header on page load
    $("#currentDay").append(now);

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
auditTimes();