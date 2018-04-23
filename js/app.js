$(document).ready(function(){

    console.log('locked and loaded');

    // Hide Rusults Well and Clear Button
    $('#resultWell').hide();
    $('#clearBtn').hide();

    // Set up variables
    var form = $('#headline-form');
    var desiredOutcome = '';
    
    // Setup Headlines Object
    var headlines = [
        { headline: 'How to ' + desiredOutcome },
        { headline: '16 Ways to ' + desiredOutcome },
        { headline: 'The Ultimate Guide to ' + desiredOutcome },
        { headline: '12 proven ways to ' + desiredOutcome },
        { headline: 'Secrets to ' + desiredOutcome },
        { headline: 'The Tool Over 283,000 Websites Use to to ' + desiredOutcome },
        { headline: 'No, You Don’t Have to Count Calories to ' + desiredOutcome },
        { headline: '14 Easy Ways to ' + desiredOutcome },
        { headline: '25 Hacks to ' + desiredOutcome },
        { headline: '15 Little-Known Ways to  ' + desiredOutcome },
    ];

    // Form Submit Function
    $('#headline-form').submit(function(e){
        e.preventDefault();

        // Show Results Well and Clear Button
        $('#resultWell').show();
        $('#clearBtn').show();

        // If Form is empty
        if (desiredOutcome = $('#desiredOutcome').val() == '') {
         // Add Red Border
         $('.form-control').css('border', '1px solid red');
            alert('You must enter a word');
            // Keep results hidden
            $('#resultWell').hide();
            return;
        } else {
         // Process the form
         desiredOutcome = $('#desiredOutcome').val();
        }

        // Loop over the each headline and print to DOM
        for(var i = 0; i < headlines.length; i++) {
            // Set up results well variable
            var resultWell = $('#resultWell');
            // Set up HTML and insert Object  
            var li = '<li>' + headlines[i].headline + ' ' + desiredOutcome + '</li>';
            // Append HTML to results well
            resultWell.append(li);
        }
    });

    // Function to clear out content
    $('#clearBtn').click(function(e) {
      e.preventDefault();
      // Clear Well
      $('#resultWell').empty();
      // Hide Well
      $('#resultWell').hide();
      // Remove Value from form
      $('#headline-form').trigger("reset");

     });


});