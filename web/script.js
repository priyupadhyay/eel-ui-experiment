// onload of the page fetch the list of tasks
function getDataFromUrl(){
    eel.get_list_of_tasks()(function (list) {
        var $dropdown = $("#task_list");
        var option = "";
        for (var i = 0; i < list.length; i++) {
          option += '<option value="' + list[i] + '">' + list[i] + "</option>";
        }
        $dropdown.append(option);
      });
}
$("#loadData").click(function() {
    getDataFromUrl()
});

// $(function () {
//     getDataFromUrl()
//   });

function getSelectedTask() {
    return $('#task_list').find(":selected").text();
}

$( "#action1" ).click(function() {
    eel.perform_task(getSelectedTask(), "run_now")(function (action) {
        $(".alert_display").html(`<div class="alert alert-success" role="alert">`+action+`</div>`); 
    });
  });
  
  $( "#action2" ).click(function() {
    eel.perform_task(getSelectedTask(), "schedule")(function (action) {
        $(".alert_display").html(`<div class="alert alert-success" role="alert">`+action+`</div>`); 
    });
  });
  
  $( "#action3" ).click(function() {
    eel.perform_task(getSelectedTask(), "disable")(function (action) {
        $(".alert_display").html(`<div class="alert alert-success" role="alert">`+action+`</div>`); 
    });
  });
  
  $( "#action4" ).click(function() {
    eel.perform_task(getSelectedTask(), "stop")(function (action) {
        $(".alert_display").html(`<div class="alert alert-success" role="alert">`+action+`</div>`); 
    });
  });
  