      // accordion
      $(function () {
        $("#accordion").accordion({
          collapsible: true,
          heightStyle: "content",
        });
      });

      // datepicker
      $( function() {
        $( "#datepicker" ).datepicker();
      } );

      // progress bar
      $( function() {
        $( "#progressbar" ).progressbar({
          value: 50
        });
      } );

      // tooltip on the progress bar
      $( function() {
        $( document ).tooltip();
      } );

      // menu
      $( function() {
        $( "#menu" ).menu();
      } );

      // menu 2
      $( function() {
        $( "#menu2" ).menu({
          items: "> :not(.ui-widget-header)"
        });
      } );

      // tabs
      $( function() {
        $( "#tabs" ).tabs();
      } );



      function changeValue () {
        var newValue = document.getElementById('numInput').value;

        if ( newValue === '' ) {
            newValue = 0;
        } else if ( newValue >= 100 ) {
            newValue = 100;
        }

        console.log(`New Value is ${newValue}`);

        $( "#progressbar" ).progressbar({
            value: Number(newValue)
          });
      }






      // color picker
      $( function() {
        function hexFromRGB(r, g, b) {
          var hex = [
            r.toString( 16 ),
            g.toString( 16 ),
            b.toString( 16 )
          ];
          $.each( hex, function( nr, val ) {
            if ( val.length === 1 ) {
              hex[ nr ] = "0" + val;
            }
          });
          return hex.join( "" ).toUpperCase();
        }
        function refreshSwatch() {
          var red = $( "#red" ).slider( "value" ),
            green = $( "#green" ).slider( "value" ),
            blue = $( "#blue" ).slider( "value" ),
            hex = hexFromRGB( red, green, blue );
          $( "#swatch" ).css( "background-color", "#" + hex );
        }
     
        $( "#red, #green, #blue" ).slider({
          orientation: "horizontal",
          range: "min",
          max: 255,
          value: 127,
          slide: refreshSwatch,
          change: refreshSwatch
        });
        $( "#red" ).slider( "value", 255 );
        $( "#green" ).slider( "value", 140 );
        $( "#blue" ).slider( "value", 60 );
      } );


      $( function() {
        // run the currently selected effect
        function runEffect() {
          // get effect type from
          var selectedEffect = $( "#effectTypes" ).val();
     
          // Most effect types need no options passed by default
          var options = {};
          // some effects have required parameters
          if ( selectedEffect === "scale" ) {
            options = { percent: 50 };
          } else if ( selectedEffect === "transfer" ) {
            options = { to: "#button", className: "ui-effects-transfer" };
          } else if ( selectedEffect === "size" ) {
            options = { to: { width: 200, height: 60 } };
          }
     
          // Run the effect
          $( "#effect" ).effect( selectedEffect, options, 500, callback );
        };
     
        // Callback function to bring a hidden box back
        function callback() {
          setTimeout(function() {
            $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
          }, 1000 );
        };
     
        // Set effect from select menu value
        $( "#button" ).on( "click", function() {
          runEffect();
          return false;
        });
      } );