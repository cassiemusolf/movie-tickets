// Business Logic

function showMovies(userInputAge) {
  if (userInputAge === 'Child (12 and under)') {
    $('#kidsMovies, #time').show();
  } else {
    $('#adultMovies, #time').show();
  }
}

function Ticket (Movie, Time, Age) {
  this.userMovie = Movie;
  this.userTime = Time;
  this.userAge = Age;
}

Ticket.prototype.price = function() {
  var defaultPrice = 10.50;
  console.log(this.userAge);
  console.log(this.userTime);
  if (this.userAge === 'Child (12 and under)' && this.userTime === 'Matinee (Before 4pm)') {
    return defaultPrice -4;
  } else if (this.userAge === 'Child (12 and under)' && this.userTime === 'Evening') {
    return defaultPrice -2;
  } else if (this.userAge === 'Adult' && this.userTime === 'Matinee (Before 4pm)') {
    return defaultPrice;
  } else if (this.userAge === 'Adult' && this.userTime === 'Evening') {
    return defaultPrice +2;
  } else if (this.userAge === 'Senior (65 and up)' && this.userTime === 'Matinee (Before 4pm)') {
    return defaultPrice -2;
  } else if (this.userAge === 'Senior (65 and up)' && this.userTime === 'Evening') {
    return defaultPrice;
  }
  console.log(defaultPrice);
}

// User Logic

$(document).ready(function() {
  var userInputAge;
  $('form#form-age').submit(function(event) {
    event.preventDefault();

    $('.hide-me').hide();
    $('.hide-me2').hide();

    userInputAge = $('select#age').val();
    // var ageUserInputs = new selectAge(userInputAge);

    return showMovies(userInputAge);
});

  $('form.movie-times').submit(function(event) {
    event.preventDefault();

    var pgMovies = $('#pg').val();
    var pg13Movies = $('#pg13').val();
    var userTimeSelected = $('#timeSelected').val();
    var moviesUserInput1 = new Ticket(pgMovies, userTimeSelected, userInputAge);
    var moviesUserInput2 = new Ticket(pg13Movies, userTimeSelected, userInputAge);
    $('.hide-me2').show();

    $("#span").text("$" + moviesUserInput2.price());
  });
});
