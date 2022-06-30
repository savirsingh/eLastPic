document.addEventListener('DOMContentLoaded', function(){


/*  //Fabric JS canvas creating
	var canvas = new fabric.Canvas('c');

	// create a rectangle object
	var rect = new fabric.Rect({
	  left: 100,
	  top: 100,
	  fill: 'red',
	  width: 20,
	  height: 20
	});

	// "add" rectangle onto canvas
	canvas.add(rect);

	*/

	//ChooseFile
	var loadImage = document.getElementById('load');

	function loadInputHandler(event) {
		var imageFile = event.target.files[0];
		//img container
		var imageElement = document.getElementById('image');
		imageElement.setAttribute('src', URL.createObjectURL(imageFile));
	};

	//When the value of ChooseFile is changed
	loadImage.onchange= loadInputHandler;

	//Slider Effects


	//When slider changes call function changeSliderHandler

	/*var brightnessRange = document.getElementById("brightness");
	brightnessRange.onchange = changeBrightnessSliderHandler;

		function changeBrightnessSliderHandler(event){
		Caman("#image", function renderCaman() {
			this.revert(false);
			this[event.target.name](event.target.value).render();
		});

	};

	var vibranceRange = document.getElementById("vibrance");
	vibranceRange.onchange = changeVibranceSliderHandler;

		function changeVibranceSliderHandler(event){
		Caman("#image", function renderCaman() {
			this.revert(false);
			this[event.target.name](event.target.value).render();
		});

	};

	var hueRange = document.getElementById("hue");
	hueRange.onchange = changeHueSliderHandler;

		function changeHueSliderHandler(event){
		Caman("#image", function renderCaman() {
			this.revert(false);
			this[event.target.name](event.target.value).render();
		});

	};

	var gammaRange = document.getElementById("gamma");
	gammaRange.onchange = changeGammaSliderHandler;

		function changeGammaSliderHandler(event){
		Caman("#image", function renderCaman() {
			this.revert(false);
			this[event.target.name](event.target.value).render();
		});

	}; */

	
		
	function changeSliderHandler(event){
	Caman("#image", function renderCaman() {
		var newValue = event.target.value;
				this.revert(false);
		this[event.target.name](newValue).render();
	});

	};

	var ranges = document.querySelectorAll('input[type="range"]');
	ranges.forEach(function(range){
		range.onchange = changeSliderHandler;
	});


	//Reset
	var resetButton = document.getElementById("reset");
	function resetButtonHandler(event){
		ranges.forEach(function(range){
		range.value = 0;
	});
		Caman("#image",function(){
			this.revert(true);
		});
	};

	resetButton.onclick = resetButtonHandler;

	//Filter Button

	function filterButtonHandler(event){
		Caman('#image', function(){
			this.revert(false);
			this[event.target.id]().render();
		});
	};


	var filterButtons = document.querySelectorAll('.filter');
	filterButtons.forEach(function(filterButton){
		filterButton.onclick = filterButtonHandler;
	});


	//CUSTOM FILTER BUTTON

	function Jeevan(event){
		Caman("#image", function () {
		  this.revert(false);
	  // We can call any filter before the layer
	  	  this.lomo();
		  this.exposure(-10);

		  // Create the layer
		  this.newLayer(function () {
		    // Change the blending mode
		    this.setBlendingMode("multiply");

		    // Change the opacity of this layer
		    this.opacity(50);

		    // Now we can *either* fill this layer with a
		    // solid color...
		    this.fillColor('#6899ba');

		    // ... or we can copy the contents of the parent
		    // layer to this one.
		    this.copyParent();

		    // Now, we can call any filter function though the
		    // filter object.
		    this.filter.brightness(10);
		    this.filter.contrast(20);
		  });

		  // And we can call more filters after the layer
		  this.clip(10);
		  this.render();
		});
	}
		var jeevanButton = document.getElementById('jeevan');
		jeevanButton.onclick = Jeevan;



	//Save Button
	var saveButton = document.getElementById('save');
	function saveButtonHandler(event){
		Caman('#image',function(){
			this.render(function(){
				this.save("image.png");
				alert("if it doesn't save, right click the image to save.");
			});
		});

	};

	saveButton.onclick = saveButtonHandler; 

}, false);
