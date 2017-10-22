
$(document).ready(function() {

//function that converts Celsius to Faranheit
    function celToFar(cel){
      return cel*(9/5) + 32;
    }
//Function that converts Faranheit to celsius
    function farToCel(far){
      return (far - 32)*5/9;
    }
//Function that converts miles to kilometers
  function mToKm(miles){
    return miles*1.60934
  }
//Function that converts kilometers to miles
  function KmToM(km){
    return km/1.60934
  }
//Determines which function runs upon button click based on the value of the dropdown menu option selected
    function assigner(num, sel){
      if (sel == 'F-C'){
        return farToCel(num);
      } else if (sel == 'C-F'){
        return celToFar(num);
      } else if (sel == 'M-Km'){
        return mToKm(num);
      } else if (sel == 'Km-M'){
        return mToKm(num);
      }
    }
//Clears input field when selected dropdown option is changed
    $('#units').on("change", function(){
      $('#input').val("");
    })

    $("#submit").on("click", function(){
      var selection = $('#units').val();
      var userNum = $('#input').val();
//If user input is not a number, notifies user they must enter a number.
      if (userNum/1 != userNum){
        $('#output').text("Please enter a number.")
      } else {
//Passes menu selection into assigner function, and input value through assigner function into appropriate conversion function
        var run = assigner(userNum, selection);
        $('#output').text((run).toFixed(2));
      }
    })
});
