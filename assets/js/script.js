
    // This displays the date, day, and current time at the top of the screen
    var today = dayjs();

    $('#currentDate').text(today.format('MMM D, YYYY')); 

    var todayDisplay = today.format('dddd');
    $('#currentDay').text(todayDisplay);
    console.log(today);

    function updateClock() {
    var presentTime = dayjs();
    var formattedTime = presentTime.format('hh:mm:ss');
    $('#presentTime').text(formattedTime);
    
    }
    // Updates the clock every 1000 miliseconds (1 second)
    setInterval(updateClock, 1000);
    updateClock();
    console.log(presentTime)
    //Updates the color based on the time of day
    function updateColor() {
        var presentTime = dayjs();
        var currentHour = presentTime.hour();
      
        for (var i = 9; i <= 17; i++) {
          var colorBlock = $('#' + i + 'AM');
          var colorBlock2 = $('#' + i + 'PM')

        
      
        if (currentHour > i) {
          // Sets color schene to past
          colorBlock.addClass('past');
          colorBlock2.addClass('past');
        } else if (currentHour === i) {
          // Present
          colorBlock.addClass('present');
          colorBlock2.addClass('present');
          // Future
        } else {
          // Future (current time is less than 9:00 AM)
          colorBlock.addClass('future');
          colorBlock2.addClass('future');
        }
      }
    } 
    // Updates the color scheme every hour
    setInterval(updateColor, 60000);
    updateColor();
        
    
    //This is a cool feature I learned about: 'DomContentLoaded'
    //It sets it so the page won't display until all the content has been fully loaded
    document.addEventListener('DOMContentLoaded', function () {
    //querySelectorAll selects all elements with the class ''description''
      var inputAreas = document.querySelectorAll('.description');



    // Uses the forEach method to iterate through each inputAreas element
    // the text area uses an arrow function that callsback each 
    // itereation of the 'forEach' loop.
    inputAreas.forEach(inputAreas => {
    // Retrieves a value from the 'localStorage' object using the 
    // 'inputAreas' ID. This assumes each 'inputAreas' has an id attribute
    var savedEvent = localStorage.getItem(inputAreas.id);
    // checks if there is a saved event in the 'localStorage' for the
    // current inputAreas. If there is a value there it sets that value
    //to the text area. This saves the info whent he page is reloaded
    if (savedEvent) {
      inputAreas.value = savedEvent;
    }
    });

    // Uses a forEach method to iterate through each inputAreas     
    inputAreas.forEach(inputAreas => {
    // Adds an event listener to each inputAreas for the 'input' event. 
    // The 'input' event activates whenever the value of an input field changes
    inputAreas.addEventListener('input', function () {
    // Saves the content of inputAreas to the localStorage. 
    // Uses the id inputAreas to do so.
    // inputAreas.Value tells it what to put in.
      localStorage.setItem(inputAreas.id, inputAreas.value);
    });
    });



    // Selects all elements with the saveBtn class and
    // Stores them in the savedInputs node list
    var savedInputs = document.querySelectorAll('.saveBtn');
    //Uses the forEach method to loop through each saveBtn element
    savedInputs.forEach(button => {
    // This EventListener prevents inputs on a selected block being
    // Saved on all blocks.
      button.addEventListener
    // adds a click event listener to the saveBtn element
    button.addEventListener('click', function () {
      // 'this' retrieves the previous sibling element in the HTML
      // and .id retrieves its id
      var inputAreasId = this.previousElementSibling.id;
      // Gets the inputAreas element coressponding to the clicked saveBtn
      // by using the returned inputAreasID
      var inputAreas = document.getElementById(inputAreasId);
      // Saves the content to the local storage.
      // Uses the inputAreas ID as the key and inputAreas's value
      localStorage.setItem(inputAreasId, inputAreas.value);
    
    });
    });
    });






    
    






  