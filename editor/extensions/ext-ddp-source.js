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
 
svgEditor.addExtension("DDP Source", function(S) {

		function setAttr(attr, val) {
			svgCanvas.changeSelectedAttribute(attr, val);
			S.call("changed", selElems);
		}

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
				id: "ddp_source",
				type: "mode",
				title: "View DDP Level Source",
				events: {
					'click': function() {
						svgCanvas.setMode("ddp_source");
					}
				}
			}, {
				id: "ddp_context",
                /* options:
                    mode_flyout
                    mode
                    context
                    app_menu
                 */
				type: "context",
				panel: "ddpSource_panel",
				title: "View DDP Level Source",
				events: {
					'click': function() {
						svgCanvas.setMode("ddp_source");
					}
				}
			}],
			context_tools: [{
				type: "input",
				panel: "ddpSource_panel",
				title: "Change Object's direction",
				id: "ddp_object_direction",
				label: "w",
				size: 3,
				events: {
					change: function() {
						setAttr('width', this.value);
					}
				}
			}],
			mouseDown: function() {
				if(svgCanvas.getMode() == "ddp_source") {
					return {started: true};
				}
			},
			mouseUp: function(opts) {
				if(svgCanvas.getMode() == "ddp_source") {
                    window.svgEditor.editingsource = true;
                    var str = svgCanvas.getSvgString();

                    var points[10];
                    ofPoint ofBezierPoint( ofPoint a, ofPoint b, ofPoint c, ofPoint d, float t){
    var tp = 1.0 - t;
    return a*tp*tp*tp + b*3*t*tp*tp + c*3*t*t*tp + d*t*t*t;
}

                    $('#svg_source_textarea').val(str);
                    $('#svg_source_editor').fadeIn();
                    //properlySourceSizeTextArea();
                    $('#svg_source_textarea').focus();
                   // var zoom = svgCanvas.getZoom();
				}
			}
		};
});

