$(document).ready(function(){

    console.log('locked and loaded');

    // Hide Rusults Well and Clear Button
    $('#resultWell').hide();
    $('#clearBtn').hide();

    // Set up variables
    var form = $('#headline-form');
    var desiredOutcome = '';
    var doHeadline = 'Desired Outcome: ';
    var bestHeadline = 'Best Headline: ';

    var headlineTypes = ['Desired Outcome', 'Best', 'Make Life Easier', 'It\'s a race', 'If I were you' ];


    
    // Setup Headlines Object
    var headlines = [
        { 
           headlineType: doHeadline,
           headline: 'How to ' + desiredOutcome 
         },
        { 
            headlineType: doHeadline,
            headline: '16 Ways to ' + desiredOutcome 
         },
        { 
            headlineType: doHeadline,
            headline: 'The Ultimate Guide to ' + desiredOutcome 
         },
        { 
            headlineType: doHeadline,  
            headline: '12 proven ways to ' + desiredOutcome 
         },
        { 
            headlineType: doHeadline,  
            headline: 'Secrets to ' + desiredOutcome 
         },
        { 
            headlineType: doHeadline,  
            headline: 'The Tool Over 283,000 Websites Use to to ' + desiredOutcome 
         },
        { 
            headlineType: doHeadline,  
            headline: 'No, You Don’t Have to Count Calories to ' + desiredOutcome 
         },
        { 
            headlineType: doHeadline,  
            headline: '14 Easy Ways to ' + desiredOutcome 
         },
        { 
            headlineType: doHeadline,  
            headline: '25 Hacks to ' + desiredOutcome 
         },
        { 
            headlineType: doHeadline,  
            headline: '15 Little-Known Ways to  ' + desiredOutcome 
         },
         { 
            headlineType: bestHeadline,  
            headline: '15 Little-Known Ways to  ' + desiredOutcome 
         },
         { 
            headlineType: bestHeadline,  
            headline: '15 Little-Known Ways to  ' + desiredOutcome 
         },
         { 
            headlineType: bestHeadline,  
            headline: '15 Little-Known Ways to  ' + desiredOutcome 
         },
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
         $('.form-control').addClass('alertBorder');
            alert('You must enter a word');
            // Keep results hidden
            $('#resultWell').hide();
            return;
        } else {
         $('.form-control').removeClass('alertBorder');
         // Process the form
         desiredOutcome = $('#desiredOutcome').val();
        }

        // Loop over the each headline and print to DOM
        for(var i = 0; i < headlines.length; i++) {

           if(headlines[i].headlineType == doHeadline){
              console.log('true');
           } else {
              console.log('false');
           }
            // Set up results well variable
            var resultWell = $('#resultWell');
            // Set up HTML and insert Object  
            var li = '<li>' + doHeadline + headlines[i].headline + ' ' + desiredOutcome + '</li>';
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