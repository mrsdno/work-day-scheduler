var schedule = {
    eightAM: [" "],
    nineAM: [" "]
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
            nineAM: []
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
    .text(task);

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
        $("#eight-am-task").remove(".holder-task")
        $("#eight-am-task").append("<span>" + schedule.eightAM + "</span>")
        .addClass("enter-task");
    
        // load 9 am task 
        $("#nine-am-task").remove(".holder-task")
        $("#nine-am-task").append("<span>" + schedule.nineAM + "</span>")
        .addClass("enter-task");
    }
    
    else {
        schedule = {
            eightAM: [],
            nineAM: []
        };
    }
}
   



loadSchedule();