$(document).ready(function(){

    console.log('locked and loaded');

    // Hide Rusults Well and Clear Button
    $('#resultWell').hide();
    $('#clearBtn').hide();

    // Set up variables
    var form = $('#headline-form');
    var desiredOutcome = '';

    var doHeadline = 'Desired Outcome';
    var bestHeadline = 'Best Headline';
    var makeLifeEasier = 'Make Life Easier';
    var ifWereYou = 'If I Were You'
    var race = 'It\'s a race';
    var counter = 0;

    var headlineTypes = [doHeadline, bestHeadline, makeLifeEasier, race, ifWereYou ];


    
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

   //----------------------------------------------
   //   SET UP HEADLINE TYPE SELECT
   //----------------------------------------------

   var hl_col = $('<div/>',{
      'class' : 'col',
      'id' : 'hl_col'
   }).appendTo('#headlines');

   // Set up form with id and append to new div
   var hl_form = $('<form/>', {
      'id':'hl_form'
   }).appendTo('#hl_col');

   // Set up form group
   var hl_formGroup = $('<div/>', {
      'class' : 'form-group'
   }).appendTo('#hl_form');

   // Set up form group label
   var hl_label = $('<label/>', {
      'for' : 'hl_select',
      text : 'Choose Headline Type'
   }).appendTo(hl_formGroup);

   // Set up select
   var hl_select = $('<select/>', {
      'class' : 'form-control',
      'id' : 'hs_select',
   }).appendTo(hl_formGroup);

   // Set default select
   var defaultSelect = $('<option>', {
      'text': '-',
      'value' : null
   }).appendTo('#hs_select');

   // Loop over headlineTypes array and add options to select
   var options = '';
   headlineTypes.forEach(function(option) {
      var options = '<option value="'+ option +'">' + option + '</option>';
      $(options).appendTo('#hs_select');
   });

   var counter = 0;
   // Headline Select Function
   $('#hs_select').on('change', function(){
      counter++
      // Get selected value
      var optionVal = $(this).find(':selected').val();
      console.log(optionVal);
      
      // Pass Option Val to createInput(); 
      createInput(optionVal, counter);
   });

   function createInput(optionVal, counter) {
      console.log('disiredOutcome: ' + optionVal);

      if (counter > 1) {
         console.log(counter);
         $('#input_wrap').empty();
      }
      // Set up form input wrapper to allow for clearing out on submit
      var input_wrap = $('<div/>', {
         'id' : 'input_wrap'
      }).appendTo('#hl_form');

      // Set up form group
      var ip_formGroup = $('<div/>', {
         'class' : 'form-group',
         'id' : 'ip_formGroup'
      }).appendTo('#input_wrap');

      // set up input and append to form group
      var ip_input = $('<input/>',{
         'type' : 'text',
         'class' : 'form-control',
         'id': 'ip_input',
         'placeholder' : 'Enter Desired Outcome'
      }).appendTo(ip_formGroup);

      createButtons();
   }


   // Set up Submit and Clear Buttons
   function createButtons(){
      var btn_col = $('<div/>',{
         'id': 'btn_col'
      }).appendTo('#input_wrap');

      var sub_btn = $('<button/>', {
         'type' : 'submit',
         'id' : 'sub_btn',
         'class' : 'btn btn-primary',
         'text': 'Submit'
      }).appendTo('#btn_col');

      var clear_btn = $('<button/>', {
         'type' : 'submit',
         'id' : 'clear_btn',
         'class' : 'btn btn-danger ml-2',
         'text': 'Clear'
      }).appendTo('#btn_col');
   }



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
            counter++;
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
            
            resultWell.append(div).addClass(doHeadline);
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