var schedule = {
    eightAM: [],
    nineAM: [],
};

// time block paragraph clicked to enter task
$(".time-block").on("click", "p", function() {
    var task = $(this)
    .text()
    .trim();

    //create new input element
    var taskInput = $("<input>")
    .attr("type", "text")
    .val(task);


    $(this).replaceWith(taskInput);

    //auto focus
    taskInput.trigger("focus");
})

//click off time block paragraph to save new task

$(".time-block").on("blur", "input[type='text']", function(){
    //get current text
    var task = $(this)
    .val()
    .trim();

    // get the parent tasks ID
    var taskTime = $(this)
    .closest(".task")
    .attr("id");   

    // update task array and save to local storage

    schedule[taskTime].text = task;

    console.log(schedule)

    saveTask();
    

})

var saveTask = function(){
    localStorage.setItem("schedule", JSON.stringify(schedule));
}