/*
 * ext-helloworld.js
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Alexis Deveria
 *
 */
 
/* 
	This is a very basic SVG-Edit extension. It adds a "Hello World" button in
	the left panel. Clicking on the button, and then the canvas will show the
 	user the point on the canvas that was clicked on.
*/
 
svgEditor.addExtension("DDP Source", function() {

		return {
            /*
            Properties:
                panel, id of panel - used when "context", try "tools_top"
                position, if excluded it appends to end of the panel
             */
			name: "DDP Source",
			// For more notes on how to make an icon file, see the source of
			// the hellorworld-icon.xml
			svgicons: "extensions/ddp-source-icon.xml",
			
			// Multiple buttons can be added in this array
			buttons: [{
				// Must match the icon ID in helloworld-icon.xml
				id: "ddp_source",
				
				// This indicates that the button will be added to the "mode"
				// button panel on the left side
                /* options:
                    mode_flyout
                    mode
                    context
                    app_menu
                 */
				type: "mode",
				
				// Tooltip text
				title: "View DDP Level Source",
				
				// Events
				events: {
					'click': function() {
						// The action taken when the button is clicked on.
						// For "mode" buttons, any other button will 
						// automatically be de-pressed.
						svgCanvas.setMode("ddp_source");
					}
				}
			}],
			// This is triggered when the main mouse button is pressed down 
			// on the editor canvas (not the tool panels)
			mouseDown: function() {
				// Check the mode on mousedown
				if(svgCanvas.getMode() == "ddp_source") {
				
					// The returned object must include "started" with 
					// a value of true in order for mouseUp to be triggered
					return {started: true};
				}
			},
			
			// This is triggered from anywhere, but "started" must have been set
			// to true (see above). Note that "opts" is an object with event info
			mouseUp: function(opts) {
				// Check the mode on mouseup
				if(svgCanvas.getMode() == "ddp_source") {
                    window.svgEditor.editingsource = true;
                    var str = svgCanvas.getSvgString();
                    $('#svg_source_textarea').val(str);
                    $('#svg_source_editor').fadeIn();
                    //properlySourceSizeTextArea();
                    $('#svg_source_textarea').focus();
                   // var zoom = svgCanvas.getZoom();

					// Get the actual coordinate by dividing by the zoom value
					//var x = opts.mouse_x / zoom;
					//var y = opts.mouse_y / zoom;

					//var text = "Hello World!\n\nYou clicked here: " + x + ", " + y;

					// Show the text using the custom alert function
					//$.alert(str);
				}
			}
		};
});

