var schedule = {
    eightAM: [],
    nineAM: [],
};


// time block paragraph clicked to enter task
$(".time-block").on("click", "span", function() {
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
    .addClass("enter-task")
    .text(task);

    // display new task after updating

    $("input[type='text']").replaceWith(updatedTask);
    }

    else {
        // assign text to empty string
        var updatedTask = $("<span>")
        .addClass("enter-task")
        .addClass("col-8")
        .text(" ");

        // display new task after updating
        $("input[type='text']").replaceWith(updatedTask);
    }

    // update task array and save to local storage
    schedule[taskTime] = task;
    console.log(taskTime);
    console.log(this);
    console.log(schedule);


    saveTask();
})



var saveTask = function(){
    
    localStorage.setItem("schedule", JSON.stringify(schedule));


}

var loadSchedule = function(schedule) {

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

loadSchedule();