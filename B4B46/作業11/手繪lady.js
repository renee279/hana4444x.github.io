(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"手繪lady_atlas_1", frames: [[0,0,623,434],[625,0,278,280],[705,282,153,408],[222,436,180,465],[404,669,192,322],[598,797,231,138],[404,436,299,231],[598,692,312,103],[625,282,54,128],[0,436,220,527]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.手握筆04psd = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.pen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 手筆
	this.instance = new lib.手握筆04psd();
	this.instance.setTransform(-144,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 筆頭
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#683C11").s().p("AgbAXIATgnQAVgbAQBDg");
	this.shape.setTransform(-0.25,2.9534);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pen, new cjs.Rectangle(-144,0,220,527), null);


// stage content:
(lib.手繪lady = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pen12
	this.instance = new lib.pen();
	this.instance.setTransform(274.3,551.45,1,1,0,0,0,-34,263.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(136).to({_off:false},0).wait(1).to({x:280.3,y:568.3},0).wait(1).to({x:283.7,y:593.3},0).wait(1).to({x:282.2,y:602.3},0).to({_off:true},1).wait(10));

	// 遮色片12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_136 = new cjs.Graphics().p("AhHB8QgmgWgTglQgSgjADglQACgpAagkQAagkAngOQAmgPAqAJQArAJAeAeQAdAdAJArQAJAqgPAnQgPAngkAZQgjAagqACIgHABQgkAAgjgVg");
	var mask_graphics_137 = new cjs.Graphics().p("Ah+C7QgmgXgTglQgSgjADglQACgqAagiQAagkAngPIARgFQAFglAXggQAagkAmgPQAmgPArAJQArAKAeAdQAdAeAJArQAJArgPAmQgPAmgkAaQgYARgaAHQgCATgHARQgPAngkAaQgiAagqACIgHAAQglAAgjgUg");
	var mask_graphics_138 = new cjs.Graphics().p("AANE9QglgXgTglQgSgjADglIABgMQghgWgSgiQgLgWgEgXQgRgGgQgJQgmgXgTgkQgSgjADglQACgqAagjQAagkAngPIARgFQAFglAXggQAagkAngPQAlgPArAJQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaIgKAHQANAIALALQAdAeAJAqQAFAZgDAXQAOAIALALQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACIgHAAQglAAgjgUg");
	var mask_graphics_139 = new cjs.Graphics().p("AgzGSQgmgXgTglQgSgjADglQACgqAagjQASgaAagPQgJgZACgbIABgMQghgWgSgiQgLgWgEgWQgRgGgQgJQgmgXgTglQgSgjADglQACgqAagjQAagkAngPIARgFQAFglAXggQAagkAngPQAlgPArAJQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaIgKAHQANAIALALQAdAeAJArQAFAZgDAXQAOAIALAKQAdAeAJArQAJArgPAmQgPAngkAaIgMAIIAEAQQAJArgPAmQgPAngkAaQgjAagqACIgHAAQgkAAgjgUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(136).to({graphics:mask_graphics_136,x:317.8751,y:282.4646}).wait(1).to({graphics:mask_graphics_137,x:312.3751,y:288.7146}).wait(1).to({graphics:mask_graphics_138,x:315.3751,y:301.7146}).wait(1).to({graphics:mask_graphics_139,x:315.3751,y:310.2146}).wait(11));

	// lady12
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(302.3,281.05,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(136).to({_off:false},0).wait(14));

	// pen11
	this.instance_2 = new lib.pen();
	this.instance_2.setTransform(138.4,523.8,1,1,0,0,0,-34,263.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(127).to({_off:false},0).wait(1).to({x:134.6,y:521.15},0).wait(1).to({x:141.55,y:522.2},0).wait(1).to({x:132.55,y:521.7},0).wait(1).to({x:142.3,y:519.65},0).wait(1).to({x:131,y:520.15},0).wait(1).to({x:143.8,y:522.2},0).wait(1).to({x:129.95,y:525.65},0).wait(1).to({x:129.25,y:522},0).to({_off:true},1).wait(14));

	// 遮色片11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_127 = new cjs.Graphics().p("AAHATQgEgCgDgFIAAAAQgCADgEACQgJADgGgGQgJgHADgJIAEgIIAIgGQAEgDALAAIAOABQAFABADADIADAGQACAGABAHIAAAAQAAAFgDAEQgEAEgEABIgEABIgGgBg");
	var mask_1_graphics_128 = new cjs.Graphics().p("AgMAbQgIgBgEgDIgGgGIgCgDIgBgEIgBgSIABgFQABgFAEgDQAEgDAFgBIAGACIAAgBQAEgCAKAAIAPABQAFABADADIADAGIADAJIACACQAFAIgEAIQgCADgEADQgGAFgIACIgHACg");
	var mask_1_graphics_129 = new cjs.Graphics().p("AgQApQgIgBgEgDIgGgGIgCgDIgBgEIgBgRQgEAAgDgCQgHgFAAgGQgBgFAEgGQADgFAFgEQAIgIAIgDQAIgDAKAAQAfAAAVATQAFAGACADQABAFAAAFQABAKgCAEQgGAKgLgCIgEgCQAAAEgCAEQgCADgEADQgGAEgIADIgHACg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AgOAwIgKAAIgIgEQgQgJgFgIQgDgIAAgOIABgIIACgFIAAgFQgBgGAEgFQADgFAFgEQAIgIAIgDQAIgDAKAAQAfAAAVATQAFAFACAEQABAFAAAFIAAAIIABAAQAEAEAAAEQAAAFgEAJQgEAHgFAFQgHAIgNAEIgIADIgKAAg");
	var mask_1_graphics_131 = new cjs.Graphics().p("AgKA5IgKgBIgIgDQgQgJgFgJQgDgHAAgOIABgJIACgFIAAgCIAAAAQgHABgEgGQgFgEAAgHQAAgGAGgHQAFgIAGgDQALgJATgDQANgCATABQAMAAAFACIAHADQALAHAKAMQAHAJAAAHQAAAHgHAFIgDABIAAACIAAAGIABABQAEAEAAAFQAAAFgEAIQgEAIgFAFQgHAIgNAEIgIACIgKABg");
	var mask_1_graphics_132 = new cjs.Graphics().p("AgcBDQgNgEgLgMQgWgZABglQABgMAEgGIAAgBQAAgGAGgHQAFgIAGgDQALgJATgDQANgCATABQAMAAAFACIAHADQALAHAKAMQAEAFACAEQAGABADAHQADAFgBAHQAAAUgOAdQgEAIgDADQgFAHgJAFQgSAKghAAg");
	var mask_1_graphics_133 = new cjs.Graphics().p("AgfBNQgNgDgLgMQgWgaABglQABgLAEgGIAAgCQAAgFAGgIIACgDIgCgDQgHgHAFgIQACgFAJgFQAigSAkAGIALACQANAEALAKQAYAVAEAjQABAFgCAEQgDAHgFACQgEAOgIARQgEAIgDAEQgFAGgJAFQgSALghAAg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AgTBaQgLgCgNgGQgNgFgGgFIgPgTQgHgKAAgGQgBgIAHgFIAGgCQgGgQABgSQABgMAEgGIAAgBQAAgGAGgHIACgEIgCgDQgHgHAFgIQACgFAJgFQAigSAkAGIALADQANADALALQAYAVAEAiIAAADQAEABACAEQADAFAAAHIgBANIgEAMQgIATgGAIQgKANgVAKQgZALgTAAIgKAAg");
	var mask_1_graphics_135 = new cjs.Graphics().p("AgLBaQgLgCgNgGQgNgFgGgFIgPgTIgDgFIgGgDQgEgDgFgJIgDgGQgCgGAAgMIABgdIAEgRQAEgJAFgIQAEgHAEgCQAFgEAFABQACgFAIgFQAjgSAkAGIALADQAMADAMALQAYAVADAiIABADQADABADAEQACAFAAAHIAAANIgFAMQgIATgGAIQgKANgVAKQgYALgTAAIgKAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(127).to({graphics:mask_1_graphics_127,x:170.801,y:260.1321}).wait(1).to({graphics:mask_1_graphics_128,x:170.6232,y:260.85}).wait(1).to({graphics:mask_1_graphics_129,x:171.0365,y:259.475}).wait(1).to({graphics:mask_1_graphics_130,x:171.125,y:260.2}).wait(1).to({graphics:mask_1_graphics_131,x:170.7267,y:259.3357}).wait(1).to({graphics:mask_1_graphics_132,x:171.0078,y:260.5107}).wait(1).to({graphics:mask_1_graphics_133,x:171.3403,y:259.475}).wait(1).to({graphics:mask_1_graphics_134,x:171.4271,y:260.6421}).wait(1).to({graphics:mask_1_graphics_135,x:170.6583,y:260.6421}).wait(15));

	// lady11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(127).to({_off:false},0).wait(23));

	// pen10
	this.instance_3 = new lib.pen();
	this.instance_3.setTransform(193.1,532.2,1,1,0,0,0,-34,263.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(121).to({_off:false},0).wait(1).to({x:199.45,y:535.9},0).wait(1).to({x:205.55,y:537.65},0).wait(1).to({x:212.45,y:539.75},0).wait(1).to({x:219.45},0).wait(1).to({x:230.05,y:535.4},0).to({_off:true},1).wait(23));

	// 遮色片10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_121 = new cjs.Graphics().p("AgEA2QgOgBgMgIQgMgIgGgNQgHgOABgNQABgOAIgMQAJgNANgGQAMgHAPABQAPABAMAIQALAJAHANQAHAOgBANQgBAOgJANQgJAMgNAGQgKAGgMAAIgFgBg");
	var mask_2_graphics_122 = new cjs.Graphics().p("AAeBFQgQgCgNgKQgJgJgGgMQgLAFgOgCQgPgBgMgIQgLgIgHgNQgGgNAAgOQABgOAJgMQAIgNANgGQANgHAPABQAPABAMAIQALAJAGANIACADIAKgDQAQgDAPAGQAPAGAJANQAKAMAAAQQABAQgIAOQgIAOgPAHQgMAHgNAAIgFgBg");
	var mask_2_graphics_123 = new cjs.Graphics().p("AAvBQQgMgEgKgKIgIgKQgHABgIAAQgPgCgNgLQgKgJgFgMQgMAFgOgBQgOgBgMgIQgMgJgGgMQgHgNABgOQABgPAIgMQAJgMANgHQAMgGAQABQAPABAMAIQALAIAHAOIABACIALgDQAOgDAPAGQAQAHAJAMIACAEQAHgCAIABQAYADAOAUQAJALABAOQACAOgGANQgFANgLAIQgKAJgOADIgLABQgIAAgIgDg");
	var mask_2_graphics_124 = new cjs.Graphics().p("ABCBnQgUgEgRgOQgNgMgHgPQgJgEgJgJIgIgKQgHABgIAAQgQgCgNgLQgKgJgFgMQgMAFgOgBQgOgBgMgHQgMgJgGgNQgHgNABgOQABgPAIgMQAJgMANgHQAMgGAQABQAPABAMAIQALAIAHAOIABACIALgDQAPgDAPAGQAPAHAJAMIACAEQAIgCAHABQALABAJAFIAMgDQAWgDATAIQAUAJAMASQANASAAAVQABAXgOAVQgMASgUAIQgPAHgPAAIgMgBg");
	var mask_2_graphics_125 = new cjs.Graphics().p("ABYBnQgIgDgHgEQgUAHgTgDQgVgDgQgPQgNgMgGgOQgLgFgJgIIgHgKQgIABgHgBQgQgCgNgKQgLgKgFgLQgLAEgOgBQgPgBgMgHQgLgIgHgNQgGgOAAgOQABgOAJgMQAIgNANgGQANgHAPABQAPABAMAIQAMAJAGANIACADIAKgDQAQgDAPAGQAPAGAJANIADADQAHgBAHABQAKABAJAFIANgDQAVgEAUAJIAIAEQAPgGAQABQASABAQAJQAPAJAKAPQAJAOACASQACASgGAQQgHASgPANQgOAMgUAEQgHABgIAAQgLAAgLgDg");
	var mask_2_graphics_126 = new cjs.Graphics().p("ABcBqQgMgCgMgGQgIAEgJABQgTAEgSgGQgIgCgGgFQgUAIgTgDQgVgEgRgOQgNgMgGgPQgLgEgJgJIgIgKQgHACgHgBQgQgCgNgLQgLgJgFgLQgLAEgOgBQgPgBgMgHQgLgJgHgNQgGgNAAgOQABgPAJgMQAIgMANgHQANgGAPABQAPABAMAIQAMAIAGAOIABADIALgEQAQgDAPAGQAPAHAJAMIACAEQAIgCAIABQAKACAJAEIANgDQAVgDATAIIAIAFQAPgGAQAAQARABAPAJQAJgEALgCQATgDASAGQAPgQAXgGQAegHAZAQQATALALAVQAKAUgEAWQgDAWgQARQgQARgVAGQgWAFgVgIQgLALgPAHQgPAGgPAAIgMgBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(121).to({graphics:mask_2_graphics_121,x:222.2545,y:268.1574}).wait(1).to({graphics:mask_2_graphics_122,x:225.8038,y:269.6558}).wait(1).to({graphics:mask_2_graphics_123,x:228.5893,y:270.9414}).wait(1).to({graphics:mask_2_graphics_124,x:232.0765,y:273.0423}).wait(1).to({graphics:mask_2_graphics_125,x:235.3217,y:273.2983}).wait(1).to({graphics:mask_2_graphics_126,x:242.7436,y:273.4173}).wait(24));

	// 下嘴唇
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("AhhAgQgWgWgpggIgsgkQgHgHgBgHQAqACAiAFIgCABQAYAAA7ARQBEAUANACQAYAEApgDIA7gHIAEAAQAegCAbALQAEAEgHAIIgWAVIgkAmQgdAYggAAQiSAAgogpg");
	this.shape_1.setTransform(243.4083,274.95);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(121).to({_off:false},0).wait(29));

	// pen09
	this.instance_4 = new lib.pen();
	this.instance_4.setTransform(193.15,528.95,1,1,0,0,0,-34,263.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(113).to({_off:false},0).wait(1).to({x:200.15,y:527.2},0).wait(1).to({x:205.9,y:525.3},0).wait(1).to({x:212.65,y:526.55},0).wait(1).to({x:218.9,y:526.05},0).wait(1).to({x:223.55,y:528.3},0).wait(1).to({x:227.4,y:532.95},0).wait(1).to({y:534.2},0).to({_off:true},1).wait(29));

	// 遮色片09 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_113 = new cjs.Graphics().p("AgFA3QgQgCgNgLQgNgLgEgPQgHgWAMgVQANgVAYgFQAOgDAPAGQAQAHAJAMQAJANABAQQABAQgIANQgIAOgPAIQgMAGgNAAIgFAAg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AglBBQgQgCgNgLQgNgLgFgPQgHgXANgUQANgVAXgFQAQgDAOAGQAMgSAWgFQAQgDAPAGQAPAHAJAMQAKANAAAQQABAQgIANQgIAOgPAIQgPAIgPgCQgIgBgGgDQgIALgMAHQgMAGgMAAIgGAAg");
	var mask_3_graphics_115 = new cjs.Graphics().p("AhDBJQgQgCgNgLQgNgLgFgPQgHgXANgUQANgVAXgFQAQgDAOAGQANgSAWgFQAOgDAOAGIADgDQALgMAQgEQAQgDAPAGQAQAGAJANQAKANAAARQABAQgIANQgMAVgXAEQgRAEgOgFQgHAIgKAFQgPAIgOgCQgIgBgGgDQgIALgNAHQgMAGgMAAIgGAAg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AhmBOQgQgCgNgLQgNgLgFgPQgHgXANgUQANgVAXgFQAQgDAOAGQANgSAWgFQAPgDAOAGIADgDQAKgMAQgEQAQgDAPAGIAKAEIACgBQALgMAQgEQAQgDAPAGQAQAGAJANQAKANAAARQABAQgIANQgMAVgXAEQgXAFgSgMQgLAOgSADQgRAEgOgFQgHAIgJAFQgPAIgPgCQgIgBgGgDQgIALgNAHQgMAGgMAAIgGAAg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AiEBOQgQgCgNgLQgNgLgFgPQgHgXANgUQANgVAXgFQAQgDAOAGQANgSAWgFQAPgDAOAGIADgDQALgMAQgEQAPgDAPAGIAKAEIACgBQALgMAQgEQAQgDAPAGQAMAEAIAIIAJgCQAQgEAPAGQAQAGAJANQAKANAAARQABAQgIAOQgMAUgXAFQgYAFgTgNIgIgHIgJACQgXAFgSgMQgLAOgSADQgQAEgOgFQgHAIgKAFQgPAIgPgCQgIgBgGgDQgIALgNAHQgMAGgMAAIgGAAg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AiiBOQgQgCgNgLQgNgLgEgPQgHgXAMgUQANgVAYgFQAPgDAPAGQANgSAWgFQAOgDAPAGIACgDQAMgMAPgEQAQgDAQAGIAJAEIACgBQALgMAPgEQAQgDAQAGQALAEAIAIIAJgCQAQgEAQAGIABABQAGgGAIgEQAMgGAQABQAPABAMAIQALAIAHAOQAHANgBAOQgBAPgJALQgJANgNAGQgMAGgQgBQgIgBgIgDQgKALgQADQgXAFgTgNIgJgHIgJACQgWAFgTgMQgKAOgSADQgQAEgOgFQgHAIgKAFQgPAIgQgCQgHgBgHgDQgHALgNAHQgMAGgNAAIgGAAg");
	var mask_3_graphics_119 = new cjs.Graphics().p("Ai8BOQgQgCgNgLQgNgLgEgPQgHgXAMgUQANgVAYgFQAPgDAPAGQANgSAWgFQAOgDAPAGIACgDQAMgMAPgEQAQgDAQAGIAJAEIACgBQAMgMAOgEQAQgDAQAGQALAEAIAIIAJgCQAQgEAQAGIABABQAGgGAIgEQAMgGAQABQAPABAMAIQALAIAHAOIABADQAHAAAHACQAZAFALAWQAKARgEAUQgEATgQANQgUAPgZgFQgZgFgMgXIgDgGIgGAAQgIgBgIgDQgKALgQADQgXAFgTgNIgJgHIgJACQgWAFgSgMQgLAOgSADQgQAEgOgFQgHAIgKAFQgPAIgQgCQgHgBgHgDQgIALgMAHQgMAGgNAAIgGAAg");
	var mask_3_graphics_120 = new cjs.Graphics().p("ACzBfQgMgHgIgLQgHgLgBgPIAAgIIgBAAQgZgGgMgWIgDgGIgGgBQgIAAgIgDQgKAKgQADQgXAGgTgOIgJgHIgJADQgVAFgTgLQgLAMgSAEQgQAEgOgGQgHAIgKAFQgPAIgQgCQgHgBgHgCQgIALgMAGQgPAIgQgCQgQgCgNgKQgNgLgEgQQgHgVAMgWQANgUAYgFQAPgDAPAGQANgSAWgFQAOgDAPAFIACgDQAMgMAPgDQAQgEAQAGIAJAFIACgCQAMgMAPgDQAQgEAPAGQALAFAIAIIAJgDQAQgDAQAGIABAAQAGgFAIgEQAMgHAQABQAPABAMAIQALAJAHANIABAEQAHAAAHABQAZAGALAWQAIAPgBAQQAIABAJAEQAQAKAHAQQAFAMgBAOQgBAOgIAMQgHALgNAHQgMAGgOAAQgOAAgMgHg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(113).to({graphics:mask_3_graphics_113,x:222.3799,y:267.145}).wait(1).to({graphics:mask_3_graphics_114,x:225.6299,y:266.145}).wait(1).to({graphics:mask_3_graphics_115,x:228.6296,y:265.3305}).wait(1).to({graphics:mask_3_graphics_116,x:232.1296,y:264.8305}).wait(1).to({graphics:mask_3_graphics_117,x:235.1296,y:264.8305}).wait(1).to({graphics:mask_3_graphics_118,x:238.0806,y:264.8305}).wait(1).to({graphics:mask_3_graphics_119,x:240.6942,y:264.8305}).wait(1).to({graphics:mask_3_graphics_120,x:242.8904,y:267.2605}).wait(30));

	// 上嘴唇
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D60B2F").s().p("ACbA9QgwgwgMAAQgmAFgVAAQgKgBgRgFQgPgFgLAAQgSAAhlAUQghgFgqgCQAAgHAIgCQAxgVAlgUQBKgnAkAAQAGAAASAIQAUAIAKAAQADgBAXgHQARgHARAIQAaAKAiAmQAmAqAHAoQgbgLgeACg");
	this.shape_2.setTransform(243.35,265.7);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(113).to({_off:false},0).wait(37));

	// pen08
	this.instance_5 = new lib.pen();
	this.instance_5.setTransform(262.05,618.45,1,1,0,0,0,-34,263.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(105).to({_off:false},0).wait(1).to({x:240.05,y:625.95},0).wait(1).to({x:220.05,y:637.45},0).wait(1).to({x:197.95,y:647.45},0).wait(1).to({x:176.45,y:657.45},0).wait(1).to({x:152.45,y:663.45},0).wait(1).to({x:129.95},0).wait(1).to({x:119.45,y:662.45},0).to({_off:true},1).wait(37));

	// 遮色片08 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_105 = new cjs.Graphics().p("Ag0CGQgfgNgWgXQgUgWgKgdQgKgcACgdQADgdAOgbQAOgbAXgTQAXgSAegIQAdgIAcAEQA4AIAlAtQAYAfAFApQAFAogQAkQgPAkgiAXQgiAYgoACIgJAAQgaAAgagKg");
	var mask_4_graphics_106 = new cjs.Graphics().p("AipCTQgggNgVgYQgUgVgLgdQgKgdACgdQADgdAOgbQAOgbAXgSQAXgTAegIQAdgIAdAEQA3AIAiAoQANgYAWgSQAXgTAegIQAdgIAdAFQA4AIAlAtQAYAfAFAoQAFAogQAkQgPAkgiAYQgiAYgoACQggACgegNQgfgMgWgYIgDgDQgOAdgcATQgiAYgnADIgLAAQgbAAgZgKg");
	var mask_4_graphics_107 = new cjs.Graphics().p("AkQDFQgegNgWgXQgUgWgLgdQgKgcACgeQADgdAOgaQAOgbAXgTQAXgTAdgIQAegIAdAFQAWACAUAKQAEgTAKgSQAOgbAXgSQAXgTAegIQAdgIAcAEQA3AIAiAoQAOgYAWgSQAXgTAegIQAdgIAdAFQA4AIAlAtQAYAfAFAoQAFApgQAkQgPAjgiAYQgiAYgoACQggACgegNQgfgMgWgYIgDgDQgPAdgcATQgiAYgmADQghACgegMIgKgFQgDAPgGAOQgQAkgiAXQgiAYgnADIgLAAQgbAAgZgKg");
	var mask_4_graphics_108 = new cjs.Graphics().p("Al8EAQgegMgWgYQgUgVgKgdQgKgdACgdQACgeAOgbQAOgaAYgTQAXgSAdgIQAegIAdAEQAbAEAWAMIAAgDQADgdAOgbQAOgbAXgTQAXgTAdgIQAegIAdAFQAWACAUAKQAEgTAKgSQAOgbAWgSQAXgTAegIQAdgIAdAEQA3AIAiAoQAOgYAWgSQAXgTAegIQAdgIAdAFQA4AIAlAtQAYAfAFAoQAFApgQAkQgPAkgiAYQgiAXgoACQggACgegNQgfgLgWgYIgCgDQgQAcgcATQgiAYgnADQghACgegMIgKgFQgDAPgGAOQgQAkghAXQgiAYgnADQggACgfgMIgRgJQgBAcgLAZQgQAkgiAYQghAXgoADIgKAAQgbAAgagLg");
	var mask_4_graphics_109 = new cjs.Graphics().p("AnnErQgegMgWgYQgUgVgLgdQgKgdACgdQADgeAOgbQAOgbAXgSQAXgTAdgIQAegIAdAEQAbAEAYAOIAEACQAFgPAHgOQAOgaAYgTQAXgSAdgIQAegIAdAEQAbAEAWAMIAAgDQADgeAOgbQAOgbAXgSQAXgTAdgIQAegIAcAEQAWADAUAKQAEgTAKgSQAOgbAXgTQAXgSAegJQAdgIAdAEQA3AJAiAoQAOgZAWgSQAXgSAegIQAdgIAdAEQA4AIAlAtQAYAfAFApQAFApgQAkQgPAkgiAXQgiAYgoACQggACgegMQgfgNgWgXIgDgDQgPAcgcAUQgiAXgnACQghADgegMIgKgEQgDANgGAOQgQAkgiAYQgiAYgnACQgfADgfgNIgRgIQgBAbgLAZQgQAlgiAXQghAYgoACQggADgfgNQgMgFgKgGQgDAKgEAKQgQAkgiAYQgiAYgnACIgLABQgaAAgagLg");
	var mask_4_graphics_110 = new cjs.Graphics().p("ApyFEQgggVgSglQgSglADgnQADgnAYgiQAXghAjgRQAZgMAYgCQAmgEAkAQQAOAHAMAIQADgKAFgKQAOgbAXgSQAYgSAdgIQAdgIAeAEQAbAEAYANIAEACQAEgOAIgOQAOgbAXgTQAXgSAegIQAdgIAdAEQAcAEAWAMIAAgDQACgeAOgbQAOgbAWgSQAYgTAdgIQAdgIAeAEQAWADAUAKQAEgTAJgSQAPgbAXgTQAXgSAdgJQAdgIAeAEQA3AJAiAoQAOgZAWgSQAXgSAdgIQAegIAdAEQA4AIAkAtQAZAfAFApQAFApgQAkQgQAkgiAXQgiAYgnACQggACgfgMQgfgNgVgXIgDgDQgPAcgdAUQghAYgoACQggADgfgNIgKgEQgCAPgHANQgPAjgiAYQgiAYgoACQggADgegNIgRgIQgBAcgLAYQgQAlghAXQgiAYgnACQggADgfgNQgMgFgKgGQgDAKgFAKQgPAkgiAYQgiAYgnACQggADgfgNQgRgHgPgKQgJAegXAYQgkAog1AHQgLACgLAAQgoAAglgXg");
	var mask_4_graphics_111 = new cjs.Graphics().p("AreFbQgmgXgTglQgSgjADglQACgqAagjQAagkAngPQAmgPArAJQAqAKAdAbQAFgKAHgLQAXghAkgRQAYgMAYgCQAmgEAkAQQAOAHAMAIQAEgKAFgKQAOgbAXgRQAXgTAdgIQAegIAdAEQAbAEAYAOIAFACQAEgPAHgOQAOgbAYgTQAXgSAdgIQAdgIAdAEQAbAEAWAMIAAgDQADgeAOgbQAOgbAXgSQAXgTAdgIQAegIAdAEQAWADAUAKQAEgTAKgSQAOgbAXgTQAXgSAegJQAdgIAdAEQA3AJAiAoQAOgZAWgSQAXgSAegIQAdgIAdAEQA4AIAlAtQAYAfAFApQAFApgQAkQgPAkgiAXQgiAYgoACQggACgegMQgfgNgWgXIgCgDQgQAcgcAUQgiAYgnACQghADgegNIgKgEQgDAPgGANQgQAkgiAXQgiAYgnACQggADgfgNIgRgIQgBAcgLAYQgQAlgiAXQghAYgoACQgfADgfgNQgLgFgLgGQgDAKgEAKQgQAkgiAYQgiAYgnACQggADgfgNQgRgHgOgKQgKAegXAYQgkAog1AHQg0AIgugdQgMgIgKgKQgQAfgeAWQgjAagqACIgHAAQglAAgjgUg");
	var mask_4_graphics_112 = new cjs.Graphics().p("ApuFbQgXgOgRgVQgMAPgQAMQgkAagpACQgqACgmgWQglgXgTglQgSgjACglQADgqAZgjQAagkAngPQAngPArAJQArAKAdAdIALAMQAZgfAjgOQAngPArAJQApAKAdAbQAGgKAHgLQAXghAjgRQAZgMAYgCQAmgEAkAQQAOAHAMAIQADgKAFgKQAOgbAXgRQAYgTAdgIQAdgIAeAEQAbAEAYAOIAEACQAEgPAIgOQANgbAXgTQAXgSAegIQAdgIAdAEQAbAEAXAMIAAgDQACgeAOgbQAOgbAXgSQAYgTAdgIQAdgIAeAEQAWADAUAKQAEgTAJgSQAPgbAXgTQAXgSAdgJQAdgIAeAEQA2AJAjAoQAOgZAWgSQAXgSAdgIQAegIAdAEQA4AIAkAtQAZAfAFApQAFApgQAkQgQAkgiAXQgiAYgnACQggACgfgMQgfgNgVgXIgDgDQgPAcgdAUQghAYgoACQggADgfgNIgKgEQgDAPgGANQgPAkgiAXQgiAYgoACQggADgegNIgRgIQgBAcgLAYQgQAlgiAXQgiAYgnACQggADgfgNQgMgFgKgGQgDAKgFAKQgPAkghAYQgiAYgnACQggADgfgNQgRgHgPgKQgKAegWAYQgkAog1AHQg1AIgugdQgMgIgKgKQgPAfgeAWQgkAagpACIgHAAQgmAAgjgUg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_4_graphics_105,x:309.0929,y:356.4328}).wait(1).to({graphics:mask_4_graphics_106,x:297.2929,y:357.6898}).wait(1).to({graphics:mask_4_graphics_107,x:287.0929,y:362.6898}).wait(1).to({graphics:mask_4_graphics_108,x:276.3679,y:368.6892}).wait(1).to({graphics:mask_4_graphics_109,x:265.5929,y:372.9398}).wait(1).to({graphics:mask_4_graphics_110,x:254.306,y:376.7043}).wait(1).to({graphics:mask_4_graphics_111,x:242.7693,y:378.7023}).wait(1).to({graphics:mask_4_graphics_112,x:231.5193,y:378.7023}).wait(38));

	// lady08
	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(153.35,351.75,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).wait(45));

	// pen07
	this.instance_7 = new lib.pen();
	this.instance_7.setTransform(241.25,572.45,1,1,0,0,0,-34,263.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(95).to({_off:false},0).wait(1).to({x:245.75,y:592.95},0).wait(1).to({x:260.75,y:607.45},0).wait(1).to({x:282.2},0).wait(1).to({x:302.85,y:601.95},0).wait(1).to({x:326.3,y:598.95},0).wait(1).to({x:349.75,y:606.95},0).wait(1).to({x:365.5,y:619.95},0).wait(1).to({x:378,y:639.45},0).wait(1).to({x:385.5,y:658.95},0).to({_off:true},1).wait(45));

	// 遮色片07 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_95 = new cjs.Graphics().p("AgjCLQglgJgbgaQgbgagLglQgLgmAJgjQAJgoAfgeQAfgeAngIQAmgJAoAPQAoAOAYAfQAZAgAFAqQAFAogRAkQgJAUgQARQgdAfgnAKQgSAFgTAAQgRAAgTgFg");
	var mask_5_graphics_96 = new cjs.Graphics().p("Ag0D5QgmgJgbgaQgagagLglQgLgmAIgkQAKgoAegeQANgLAPgJQgVgYgJgfQgLgmAIgkQAKgoAegeQAfgeAogIQAmgJAnAPQAoAOAZAfQAZAgAFAqQAFApgRAkQgKAUgPARQgPAPgSAKIAFAGQAZAgAFAqQAFApgRAkQgKAUgPARQgdAfgoAKQgSAFgRAAQgTAAgSgFg");
	var mask_5_graphics_97 = new cjs.Graphics().p("AAJFdQgkgJgbgaQgbgagLglQgLgmAJgkQADgPAHgOQgjgKgZgYQgbgagLglQgLgmAJgjQAJgoAfgeQAMgMAPgJQgVgYgJgfQgLgmAJgkQAJgoAfgeQAfgeAngIQAngJAnAPQAoAOAYAfQAZAgAFAqQAFApgRAkQgJAUgQARQgPAQgRAKIAFAGQAYAgAFAqQAFAogRAkIAAABIAIADQAoAOAYAfQAZAgAFAqQAFApgRAkQgJAUgQARQgcAfgoAKQgSAFgTAAQgSAAgTgFg");
	var mask_5_graphics_98 = new cjs.Graphics().p("ABrGIQgmgKgbgaQgYgYgLghQgKAFgLADQgkAKglgKQgmgKgbgaQgagagLglQgLglAIglQAEgPAGgNQgjgKgZgZQgagagLglQgLgkAIglQAKgnAegeQANgNAPgJQgVgXgJggQgLglAIglQAKgnAegeQAfgeAogJQAngIAnAOQAoAOAYAgQAZAfAFAqQAFAqgRAkQgKAUgOARQgPAPgSALIAFAGQAZAfAEAqQAFAqgQAjIgBABIAIACQAnAOAZAgQAPATAIAYQANgGAQgEQAngIAnAOQAoAOAZAgQAZAfAFAqQAFAqgRAkQgKAUgPARQgdAegoALQgSAFgSAAQgTAAgSgFg");
	var mask_5_graphics_99 = new cjs.Graphics().p("AAAGIQglgKgbgaQgZgYgLghQgKAFgLADQgkAKgmgKQglgKgbgaQgbgagLglQgLglAJglQADgPAHgNQgjgKgZgZQgbgagLglQgLgkAJglQAJgnAfgeQAMgNAPgJQgVgXgJggQgLglAJglQAJgnAfgeQAfgeAngJQAngIAoAOQAoAOAYAgQAZAfAFAqQAFAqgRAkQgJAUgQARQgPAPgRALIAFAGQAYAfAFAqQAFAqgRAjIAAABIAIACQAoAOAYAgQAPATAIAYQAOgGAOgEQAngIAoAOQAaAKAUARQAIgNAMgLQAegeAogJQAogIAnAOQAoAOAZAgQAYAfAFAqQAFAqgRAkQgJAUgQARQgcAegoALQgkAKgmgKQghgJgZgVQgHAKgIAJQgcAegoALQgSAFgTAAQgSAAgSgFg");
	var mask_5_graphics_100 = new cjs.Graphics().p("AhrGIQgmgKgbgaQgYgYgLghQgLAFgLADQgkAKglgKQgmgKgbgaQgagagLglQgLglAIglQAEgPAGgNQgjgKgZgZQgagagLglQgLgkAIglQAKgnAegeQANgNAPgJQgVgXgJggQgLglAIglQAKgnAegeQAfgeAogJQAngIAnAOQAoAOAZAgQAZAfAFAqQAFAqgRAkQgKAUgPARQgPAPgSALIAFAGQAZAfAFAqQAFAqgRAjIgBABIAIACQAoAOAZAgQAPATAIAYQANgGAQgEQAngIAnAOQAaAKATARQAJgNALgLQAfgeAogJQAngIAoAOQATAHAQAMQALgXATgSQAfgeAogJQAngIAnAOQAoAOAZAgQAZAfAFAqQAFAqgRAkQgKAUgPARQgdAegoALQgkAKglgKQgbgHgWgPQgJATgPARQgcAegpALQgkAKglgKQgigJgZgVQgGAKgIAJQgdAegnALQgSAFgSAAQgTAAgSgFg");
	var mask_5_graphics_101 = new cjs.Graphics().p("AjjGIQgmgKgbgaQgYgYgLghQgLAFgLADQgkAKglgKQgmgKgbgaQgagagLglQgLglAIglQAEgPAGgNQgjgKgZgZQgagagLglQgLgkAIglQAKgnAegeQANgNAPgJQgVgXgJggQgLglAIglQAKgnAegeQAfgeAogJQAngIAnAOQAoAOAZAgQAZAfAFAqQAFAqgRAkQgKAUgPARQgPAPgSALIAFAGQAZAfAFAqQAFAqgRAjIgBABIAIACQAoAOAZAgQAPATAIAYQANgGAQgEQAngIAnAOQAbAKATARQAJgNALgLQAfgeAogJQAmgIAoAOQATAHAQAMQALgXATgSQAfgeAogJQAngIAnAOQAoAOAZAgQAHAIAFAKIAOgQQAfgeAogJQAngIAnAOQAoAOAZAgQAZAfAFAqQAFAqgRAkQgKAUgPARQgdAegoALQgkAKglgKQgmgKgbgaQgOgOgKgRIgJALQgdAegoALQgkAKglgKQgbgHgWgPQgJATgPARQgcAegpALQgkAKgkgKQgigJgZgVQgGAKgIAJQgdAegoALQgSAFgSAAQgTAAgSgFg");
	var mask_5_graphics_102 = new cjs.Graphics().p("AH7GBQgmgVgTgkQgGgLgEgMQgMAGgNADQgkAKgmgKQglgJgbgaQgOgOgKgSIgKALQgcAfgoAKQgkAKgmgKQgagHgWgPQgJAUgQAQQgcAfgnAKQgkAKgmgKQghgIgZgWQgGAKgJAJQgcAfgoAKQgkAKgmgKQglgJgbgaQgYgYgMghQgKAEgLADQgkAKgmgKQglgJgbgaQgbgagLglQgLgmAJgkQAEgPAGgOQgjgKgZgYQgbgagLglQgLglAJgkQAJgoAfgeQANgMAOgJQgUgYgKgfQgLgmAJgkQAJgoAfgeQAfgeAngIQAngJAoAPQAoAOAYAfQAZAgAFAqQAFApgRAkQgJAUgQARQgOAQgSAKIAFAGQAYAgAFAqQAFApgRAjIAAABIAIADQAoAOAYAfQAQAUAIAXQANgGAPgDQAngJAoAPQAaAJAUARQAJgNALgLQAegeAogIQAogJAnAOQAUAHAPAMQALgWATgTQAegeAogIQAngJAoAPQAoAOAZAfQAHAJAFAJIAOgQQAegeAogIQAngJAoAPQAoAOAYAfQARAUAHAZIARgHQAngNAqAKQAqALAcAdQAcAeAJAqQAIArgPAmQgPAngjAZQgjAZgqACIgIAAQgkAAgigTg");
	var mask_5_graphics_103 = new cjs.Graphics().p("AJTHZQgZgLgTgVQgTgUgKgaQgNgiAGgnIAAgBIgJABQgpADglgWQgmgVgTgkQgGgMgEgLQgMAGgNADQgkAKgmgKQglgJgbgaQgPgPgKgRIgJALQgcAfgoAKQgkAKgmgKQgagHgVgPQgKATgPARQgcAfgoAKQgkAKgmgKQghgIgZgWQgHAKgIAJQgcAfgoAKQgkAKgmgKQglgJgbgaQgZgYgLghQgKAEgLADQgkAKgmgKQglgJgbgaQgbgagLglQgLgmAJgkQADgPAHgOQgjgKgZgXQgbgagLglQgLgmAJgkQAJgoAfgeQAMgNAPgIQgVgYgJgfQgLgmAJgkQAJgoAfgeQAfgeAngIQAngJAoAPQAoAOAYAfQAZAgAFAqQAFApgRAkQgJAUgQARQgPAQgRAKIAFAGQAYAgAFAqQAFApgRAkIAAABIAIADQAoAOAYAfQAQASAHAYQAOgGAPgDQAngJAoAPQAaAJAUARQAIgNAMgLQAegeAogHQAogJAnAOQAUAGAQAMQALgVATgTQAegeAngIQAngJAoAPQAoAOAZAfQAGAJAFAIIAPgPQAegeAogIQAngJAoAPQAoAOAYAeQAQAUAIAZIARgHQAngNAqAKQAqALAcAdQAcAeAJAqQAEAZgDAYQAQgCAQACQAlAEAfAXQAgAXAPAhQAQAigDAmQgDAngVAeQgKAPgLAKQgfAeguAHQgNACgMAAQgfAAgcgOg");
	var mask_5_graphics_104 = new cjs.Graphics().p("AKhJXQglgJgbgaQgbgagLglQgLgmAJgkQAHggAWgaQgdgBgbgNQgYgLgTgVQgTgUgKgaQgNgiAFgnIAAAAIgIAAQgpADgmgWQgmgVgTgkQgGgLgEgMQgMAGgNADQgkAKglgKQgmgJgbgaQgOgOgKgSIgJALQgdAfgoAKQgkAKgkgKQgbgGgWgQQgJAUgPAQQgcAfgpAKQgkAKglgKQgigIgZgVQgGAJgIAJQgdAfgoAKQgkAKglgKQgmgJgbgaQgYgYgLghQgLAEgLADQgkAKglgKQgmgJgbgaQgagagLglQgLglAIgkQAEgPAGgOQgigKgagYQgagagLglQgLgmAIgkQAKgoAegeQANgMAPgJQgVgYgJgfQgLgmAIgkQAKgoAegeQAfgeAogIQAngJAnAPQAoAOAZAfQAZAgAFAqQAFApgRAkQgKAUgPARQgPAQgSAKIAFAGQAZAgAFAqQAFApgRAkIgBABIAIADQAoAOAZAfQAPAUAIAXQAOgGAPgDQAngJAnAPQAbAJATARQAJgMALgMQAfgeAogIQAngJAoAOQATAIAQALQALgWATgTQAfgeAogIQAmgJAnAPQAoAOAZAfQAHAJAFAJIAOgQQAfgeAogIQAngJAnAPQAoAOAZAfQAQAVAHAYIARgHQAngNAqAKQAqALAcAdQAdAeAIApQAFAagDAYQAPgCARABQAlAEAfAXQAfAXAQAhQAPAigDAmQgDAngUAeIgIALQAUABAVAHQAoAPAZAfQAZAfAFAqQAEAqgRAkQgJAUgQARQgcAfgoAKQgSAFgTAAQgSAAgTgFg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(95).to({graphics:mask_5_graphics_95,x:277.5966,y:298.0679}).wait(1).to({graphics:mask_5_graphics_96,x:275.8466,y:309.0679}).wait(1).to({graphics:mask_5_graphics_97,x:278.5966,y:319.0679}).wait(1).to({graphics:mask_5_graphics_98,x:288.3466,y:323.3179}).wait(1).to({graphics:mask_5_graphics_99,x:299.0966,y:323.3179}).wait(1).to({graphics:mask_5_graphics_100,x:309.8466,y:323.3179}).wait(1).to({graphics:mask_5_graphics_101,x:321.8466,y:323.3179}).wait(1).to({graphics:mask_5_graphics_102,x:331.8539,y:324.081}).wait(1).to({graphics:mask_5_graphics_103,x:339.7891,y:332.2991}).wait(1).to({graphics:mask_5_graphics_104,x:345.0368,y:344.0679}).wait(46));

	// lady07
	this.instance_8 = new lib.CachedBmp_3();
	this.instance_8.setTransform(270.45,282.15,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(95).to({_off:false},0).wait(55));

	// pen06
	this.instance_9 = new lib.pen();
	this.instance_9.setTransform(255.05,530.45,1,1,0,0,0,-34,263.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(86).to({_off:false},0).wait(1).to({x:246.55,y:548.95},0).wait(1).to({x:230.05,y:561.95},0).wait(1).to({x:212.25,y:572.45},0).wait(1).to({x:189.75,y:568.95},0).wait(1).to({x:170.75,y:554.95},0).wait(1).to({x:155.75,y:535.95},0).wait(1).to({x:146.75,y:514.95},0).wait(1).to({y:510.25},0).wait(1).to({x:112.45,y:750.25},0).to({_off:true},1).wait(54));

	// 遮色片06 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_86 = new cjs.Graphics().p("AgjCLQgmgJgbgaQgagagLglQgLgmAIgjQAKgoAegeQAfgeAogIQAmgJAoAOQAnAPAZAfQAZAfAFAqQAFApgRAkQgKAUgPARQgcAfgpAKQgSAFgSAAQgRAAgTgFg");
	var mask_6_graphics_87 = new cjs.Graphics().p("AhED0QglgJgbgaQgbgagLglQgLgmAJgkQAJgoAfgeQAUgSAYgLQgLgQgGgUQgLgmAJgkQAJgoAfgeQAfgeAmgIQAogJAnAOQAoAPAZAfQAZAfAFAqQAEAqgRAkQgJAUgQARQgVAWgbAMQAQAbAEAiQAFApgRAkQgJAUgQARQgcAfgoAKQgRAFgSAAQgTAAgTgFg");
	var mask_6_graphics_88 = new cjs.Graphics().p("AiHFMQgmgKgbgaQgagagLglQgLglAIglQAKgnAegeQAfgeAogJQAMgCAMgBQgHggAHgfQAKgnAegeQAUgUAYgKQgKgRgGgUQgLglAIglQAKgnAegeQAegeAogJQAngIAoAOQAnAOAZAgQAZAfAFAqQAFAqgRAkQgKAUgPARQgVAXgcALQARAbAEAhQAFAqgRAkQgKAUgPARQgdAegoALQgPAEgQABIACAOQAFAqgRAkQgKAUgPARQgbAegpALQgSAFgSAAQgSAAgTgFg");
	var mask_6_graphics_89 = new cjs.Graphics().p("AjaGNQglgKgbgaQgbgagLglQgLglAJglQAJgnAfgeQAegeAogJQAagFAaAEQABgKACgLQAJgnAfgeQAfgdAngJQANgCAMgBQgHggAHggQAJgnAegeQAUgUAYgKQgLgRgGgUQgLglAJglQAJgnAfgeQAfgeAngJQAogIAnAOQAoAOAZAgQAZAfAFAqQAEAqgRAkQgJAUgQARQgVAXgbALQAQAbAEAiQAFAqgRAjQgJAUgQARQgcAegoALQgQAEgPABIACAOQAEAqgRAkQgJAUgQARQgcAegoALQgcAIgegFQgCAagLAXQgJAUgQARQgcAegoALQgSAFgSAAQgTAAgTgFg");
	var mask_6_graphics_90 = new cjs.Graphics().p("AlFGmQgmgKgbgaQgagagLglQgLglAIglQAKgnAegeQAfgeAogJQAngIAoAOQAVAIARAMQAKgUARgRQAfgeAogJQAagFAZAEQABgKACgLQAKgnAegeQAegdAogJQAMgCAMgBQgHggAHggQAKgnAegeQAUgUAYgKQgKgRgGgUQgLglAIglQAKgnAegeQAfgeAogJQAngIAoAOQAnAOAZAgQAZAfAFAqQAFAqgRAkQgKAUgPARQgVAXgcALQARAbAEAiQAFAqgRAkQgKATgPARQgdAegoALQgPAEgQABIACAOQAFAqgRAkQgKAUgPARQgcAegpALQgcAIgegFQgCAagLAXQgKAUgPARQgcAegoALQgkAKglgKQgcgHgWgRQgJASgOAPQgdAegoALQgSAFgSAAQgSAAgTgFg");
	var mask_6_graphics_91 = new cjs.Graphics().p("AjaGmQglgKgbgaQgbgagLglIAAgDQgSALgVAGQgkAKgmgKQglgKgbgaQgbgagLglQgLglAJglQAJgnAfgeQAegeAogJQAngIAoAOQAoAOAZAgQASAXAHAdQAWgNAYgGQAogIAnAOQAVAIARAMQALgUARgRQAegeAngJQAagFAaAEQABgKACgLQAJgnAfgeQAfgdAngJQANgCAMgBQgHggAHggQAJgnAfgeQAUgUAYgKQgLgRgGgUQgLglAJglQAJgnAfgeQAfgeAngJQAogIAnAOQAoAOAZAgQAZAfAFAqQAEAqgRAkQgJAUgQARQgVAXgbALQAQAbAEAiQAFAqgRAkQgJATgQARQgcAegoALQgQAEgPABIACAOQAEAqgRAkQgJAUgQARQgcAegoALQgdAIgegFQgCAagLAXQgJAUgQARQgcAegoALQgkAKglgKQgcgHgWgRQgJASgOAPQgcAegoALQgSAFgSAAQgTAAgTgFg");
	var mask_6_graphics_92 = new cjs.Graphics().p("AiMGmQgmgKgbgaQgagagLglIgBgDQgSALgVAGQgkAKglgKQgmgKgbgaQgagagLglQgLglAIglIADgLIgIAAQgsADgpgYQgYgPgRgYQgRgZgHgcQgJgqASgrQARgrAlgXQAlgYAvACQAuABAkAbQAjAaAOAtQAOArgMAqIgBADQAggEAhAMQAoAOAZAgQASAXAIAdQAVgNAZgGQAngIAoAOQAVAIAQAMQALgUAQgRQAfgeAogJQAZgFAaAEQABgKACgLQAKgnAegeQAfgdAogJQAMgCAMgBQgHggAHggQAKgnAegeQAUgUAYgKQgKgRgGgUQgLglAIglQAKgnAegeQAfgeAogJQAngIAoAOQAnAOAZAgQAZAfAFAqQAFAqgRAkQgKAUgPARQgVAXgcALQARAbAEAiQAFAqgRAkQgKATgPARQgdAegoALQgPAEgQABIACAOQAFAqgRAkQgKAUgPARQgcAegpALQgdAIgegFQgBAagLAXQgKAUgPARQgcAegpALQgkAKglgKQgcgHgXgRQgJASgNAPQgcAegoALQgSAFgSAAQgTAAgSgFg");
	var mask_6_graphics_93 = new cjs.Graphics().p("AhCGmQglgKgbgaQgbgagLglIgBgDQgRALgVAGQgkAKgmgKQglgKgbgaQgbgagLglQgLglAJglIADgLIgIAAQgtADgogYQgZgPgRgYQgRgZgGgcQgIghAJggIAAAAQgtADgogZQgZgPgRgYQgRgYgGgcQgKgrASgrQARgrAlgYQAlgYAvACQAuABAjAbQAjAaAPAsQAOAqgLAoIAPAAQAvABAjAbQAjAaAPAtQAOArgNAqIgBADQAhgEAhAMQAoAOAZAgQASAXAHAdQAVgNAZgGQAogIAmAOQAVAIARAMQAKgUASgRQAegeAogJQAagFAZAEQABgKADgLQAJgnAfgeQAfgdAngJQAMgCANgBQgIggAIggQAJgnAfgeQAUgUAXgKQgKgRgGgUQgLglAJglQAJgnAfgeQAfgeAngJQAogIAnAOQAoAOAZAgQAZAfAFAqQAEAqgRAkQgJAUgQARQgVAXgcALQARAbAEAiQAFAqgRAkQgJATgQARQgcAegoALQgQAEgQABIADAOQAEAqgRAkQgJAUgQARQgcAegoALQgdAIgegFQgCAagLAXQgJAUgQARQgcAegoALQgkAKgmgKQgcgHgWgRQgJASgOAPQgcAegoALQgRAFgTAAQgSAAgTgFg");
	var mask_6_graphics_94 = new cjs.Graphics().p("AguHSQgmgKgbgaQgagagLglIgBgDQgSALgVAGQgkAKglgKQgmgKgbgaQgagagLglQgLglAIglIADgLIgIAAQgsADgpgYQgYgPgRgYQgRgZgHgcQgHghAJghIgBAAQgsADgpgYQgYgPgRgYQgRgYgHgcQgJgrARgrQAGgOAIgMQgWgPgQgWQgRgZgGgcQgJgqASgsQASgrAkgXQAlgYAvACQAuACAjAbQAjAaAPAsQAOAtgNAqQgGAVgMASIAGAEQAjAaAPAsQANAqgKAoIAPAAQAuABAkAbQAjAaAOAsQAOAsgMAqIgBADQAggEAhAMQAoAOAZAgQASAXAIAdQAVgNAZgGQAngIAnAOQAVAIAQAMQALgUARgRQAfgeAogJQAZgFAaAEQABgKACgLQAKgnAegeQAfgeAogJQAMgCAMgBQgHgfAHggQAKgnAegeQAUgUAYgKQgKgRgGgUQgLglAIglQAKgnAegeQAfgeAogJQAngIAoAOQAnAOAZAgQAZAfAFAqQAFAqgRAkQgKAUgPARQgVAXgcALQARAbAEAiQAFAqgRAjQgKAUgPARQgdAegoALQgPAEgQABIACAOQAFAqgRAkQgKAUgPARQgcAegpALQgdAIgegFQgBAagLAXQgKAUgPARQgcAegpALQgkAKglgKQgcgHgXgRQgJASgNAPQgdAegoALQgSAFgRAAQgTAAgSgFg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(86).to({graphics:mask_6_graphics_86,x:293.6118,y:254.0644}).wait(1).to({graphics:mask_6_graphics_87,x:290.3618,y:264.5644}).wait(1).to({graphics:mask_6_graphics_88,x:283.6118,y:273.3144}).wait(1).to({graphics:mask_6_graphics_89,x:275.3618,y:279.8144}).wait(1).to({graphics:mask_6_graphics_90,x:264.6118,y:282.3144}).wait(1).to({graphics:mask_6_graphics_91,x:253.8618,y:282.3144}).wait(1).to({graphics:mask_6_graphics_92,x:246.133,y:282.3144}).wait(1).to({graphics:mask_6_graphics_93,x:238.68,y:282.3144}).wait(1).to({graphics:mask_6_graphics_94,x:236.733,y:277.9172}).wait(56));

	// lady06
	this.instance_10 = new lib.CachedBmp_4();
	this.instance_10.setTransform(179.55,246.75,0.5,0.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(86).to({_off:false},0).wait(64));

	// pen05
	this.instance_11 = new lib.pen();
	this.instance_11.setTransform(149.55,547.45,1,1,0,0,0,-34,263.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(75).to({_off:false},0).wait(1).to({x:152.05,y:567.45},0).wait(1).to({x:154.05,y:590.45},0).wait(1).to({y:612.8},0).wait(1).to({x:151.05,y:630.5},0).wait(1).to({x:137.55,y:644.5},0).wait(1).to({x:119.05,y:655},0).wait(1).to({x:102.55,y:661},0).wait(1).to({x:84.8,y:668.4},0).wait(1).to({x:65.3,y:687.4},0).wait(1).to({x:63.8,y:691.4},0).to({_off:true},1).wait(64));

	// 遮色片05 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_75 = new cjs.Graphics().p("AhHB8QgmgWgTglQgSgjADglQACgpAagkQAagkAngOQAmgPAqAJQArAJAeAeQAdAdAJArQAJAqgPAnQgPAngkAZQgjAagqACIgHABQgkAAgjgVg");
	var mask_7_graphics_76 = new cjs.Graphics().p("Ag9DlQgmgWgTglQgSgjADgmQACgpAagkIAJgLQgbgTgPgdQgSgjADgmQACgpAagkQAagkAngOQAmgPAqAJQArAJAeAeQAdAdAJArQAJArgPAnQgKAYgRATIAPAMQAdAdAJArQAJArgPAnQgPAngkAZQgjAagqACIgHABQgkAAgjgVg");
	var mask_7_graphics_77 = new cjs.Graphics().p("AgzFbQgmgXgTglQgSgjADglQACgqAagjQALgPANgLQgmgXgTglQgSgjADgkQACgqAagjIAJgLQgbgVgPgdQgSgjADglQACgqAagjQAagkAngPQAmgPAqAJQArAKAeAdQAdAeAJArQAJArgPAmQgKAZgRATIAPAMQAdAeAJArQAJAqgPAmQgNAjgdAXQAQAKAOANQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACIgHAAQgkAAgjgUg");
	var mask_7_graphics_78 = new cjs.Graphics().p("AgpHJQgmgXgTglQgSgjADglQACgqAagjQAGgJAIgIQgegWgRggQgSgjADglQACgqAagjQALgPANgLQgmgWgTglQgSgjADglQACgqAagjIAJgLQgbgVgPgdQgSgjADglQACgqAagjQAagkAngPQAmgPAqAJQArAKAeAdQAdAeAJArQAJArgPAmQgKAZgRATIAPAMQAdAeAJArQAJArgPAmQgNAjgdAXQAQAKAOAMQAdAeAJArQAJArgPAmQgLAcgWAWQALAHAKAJQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACIgHAAQgkAAgjgUg");
	var mask_7_graphics_79 = new cjs.Graphics().p("AgzIlQgmgWgTglQgSgjADgmQACgpAagkIALgNQgIgLgGgLQgSgjADgmQACgpAagkQAGgJAIgIQgegVgRggQgSgjADgmQACgoAagkQALgPANgLQgmgWgTglQgSgjADgmQACgpAagkIAJgLQgbgUgPgdQgSgjADgmQACgpAagkQAagkAngOQAmgPAqAJQArAJAeAeQAdAdAJArQAJArgPAnQgKAYgRATIAPANQAdAdAJArQAJArgPAnQgNAigdAYQAQAJAOAOQAdAdAJArQAJAqgPAnQgLAcgWAVQALAHAKAKQAdAdAJArQAJArgPAnQgKAagTAUQASAZAHAgQAJArgPAnQgPAngkAZQgjAagqACIgHABQgkAAgjgVg");
	var mask_7_graphics_80 = new cjs.Graphics().p("AhoKJQglgWgTglQgSgjACgmQADgpAZgkQAUgbAbgPIgEgIQgSgjACgmQADgpAZgkIAMgNQgIgLgGgLQgSgjACgmQADgpAZgkQAHgJAHgIQgegVgQgfQgSgjACgmQADgpAZgkQALgPANgLQglgWgTglQgSgjACgmQADgpAZgkIAJgLQgagUgPgdQgSgjACgmQADgpAZgkQAagkAngOQAngPAqAJQArAJAdAeQAeAdAJArQAJArgQAnQgJAYgRATIAOANQAeAdAJArQAJArgQAnQgNAigdAYQARAJANAOQAeAdAJArQAJArgQAnQgLAbgVAVQALAHAJAKQAeAdAJArQAJArgQAnQgKAagTAUQATAZAHAgQAJArgQAnQgPAngjAZIgPAKQAMAUAFAYQAJArgQAnQgPAngjAZQgkAagoACIgHABQgmAAgjgVg");
	var mask_7_graphics_81 = new cjs.Graphics().p("Ai1LDQgmgXgTglQgSgjADglQACgqAagjQAagkAngPQAfgMAhAEQAHgeATgaQAUgcAbgOIgFgJQgSgjADglQACgqAagjIALgOQgIgKgGgMQgSgjADglQACgqAagiQAFgJAIgIQgdgWgRggQgSgjADglQACgqAagjQALgPANgLQgmgXgTglQgSgjADglQACgqAagjIAJgLQgbgVgPgdQgSgjADglQACgqAagjQAagkAngPQAlgPArAJQArAKAeAdQAdAeAJArQAJArgPAmQgKAZgRATIAPAMQAdAeAJArQAJArgPAmQgNAjgdAXQAQAKAOANQAdAeAJArQAJArgPAmQgLAcgWAWQALAHAKAJQAdAdAJArQAJArgPAmQgKAagTAUQASAZAHAhQAJArgPAmQgPAngkAaIgOAKQALAUAFAYQAJArgPAmQgPAngkAaQgjAagqACQgKAAgKgBQgDAMgEALQgPAngjAaQgjAagqACIgHAAQglAAgjgUg");
	var mask_7_graphics_82 = new cjs.Graphics().p("AkILeQglgWgTglQgSgjACgmQADgpAZgkQAagkAngOQAngPArAJIAQAEIACgDQAagkAngOQAfgMAiADQAGgdASgbQAUgbAbgPIgEgIQgSgjACgmQADgpAZgkIAMgNQgIgLgGgLQgSgjACgmQADgpAZgjQAHgJAHgIQgegVgQggQgSgjACgmQADgpAZgkQALgPANgLQglgWgTglQgSgjACgmQADgpAZgkIAJgLQgagUgPgdQgRgjACgmQADgpAYgkQAagkAngOQAngPArAJQArAJAdAeQAeAdAJArQAJArgQAnQgJAYgRATIAOANQAeAdAJArQAJArgQAnQgNAigdAYQARAJANAOQAeAdAJArQAJArgQAnQgLAcgVAVQALAHAJAKQAeAdAJAqQAJArgQAnQgKAagTAUQATAZAHAgQAJArgQAnQgPAngjAZIgPAKQAMAUAFAYQAJArgQAnQgPAngjAZQgkAagpACQgLABgKgBQgCAMgFALQgPAngjAZQgkAagoACQgcACgagJQgNATgVAPQgkAagpACIgHABQgmAAgjgVg");
	var mask_7_graphics_83 = new cjs.Graphics().p("AlpMBQgmgWgTglQgSgjADgmQACgpAagkQAagkAngOQAmgPArAJQASAEAQAHQAGgMAJgNQAagkAngOQAmgPArAJIARAEIACgDQAagkAmgOQAfgMAhADQAHgdATgbQAUgbAbgPIgFgIQgSgjADgmQACgpAagkIALgNQgIgLgGgLQgSgjADgmQACgoAagkQAGgJAIgIQgegVgRggQgSgjADgmQACgpAagkQALgPANgLQgmgWgTglQgSgjADgmQACgpAagkIAJgLQgbgUgPgdQgSgjADgmQACgpAagkQAagkAngOQAmgPArAJQArAJAeAeQAdAdAJArQAJArgPAnQgKAYgRATIAPANQAdAdAJArQAJArgPAnQgNAigdAYQAQAJAOAOQAdAdAJArQAJArgPAnQgLAcgWAVQALAHAKAKQAdAdAJArQAJAqgPAnQgKAagTAUQASAZAHAgQAJArgPAnQgPAngkAZIgOAKQALAUAFAYQAJArgPAnQgPAngkAZQgjAagqACQgKABgKgBQgDAMgEALQgPAngkAZQgjAagqACQgbACgagJQgOATgUAPQgjAagqACQgkACgigRQgQAiggAXQgjAagqACIgHABQglAAgjgVg");
	var mask_7_graphics_84 = new cjs.Graphics().p("AnfNHQglgWgTglQgSgjACgmQADgpAZgkQAagkAngOQAngPArAJQAkAIAbAWQgEgSABgTQADgpAZgkQAagkAngOQAngPArAJQASAEAPAHQAHgMAIgNQAagkAngOQAmgPArAJIAQAEIACgDQAagkAngOQAfgMAiADQAGgdATgbQAUgbAbgPIgEgIQgSgjACgmQADgpAZgkIAMgNQgIgLgGgLQgSgiACgmQADgpAZgkQAHgJAHgIQgegVgQggQgSgjACgmQADgpAZgkQALgPANgLQglgWgTglQgSgjACgmQADgpAZgkIAJgLQgagUgPgdQgSgjACgmQADgpAZgkQAagkAngOQAngPArAJQArAJAdAeQAeAdAJArQAJArgQAnQgJAYgRATIAOANQAeAdAJArQAJArgQAnQgNAigdAYQARAJANAOQAeAdAJArQAJArgQAnQgLAcgVAVQALAHAJAKQAeAdAJArQAJArgQAmQgKAagTAUQATAZAHAgQAJArgQAnQgPAngjAZIgPAKQAMAUAFAYQAJArgQAnQgPAngjAZQgkAagpACQgLABgKgBQgCAMgFALQgPAngjAZQgkAagpACQgcACgagJQgNATgVAPQgkAagpACQgkACgigRQgPAiggAXQgkAagpACQgqACgmgWQgMgHgJgIIAAABQAJArgQAnQgPAngjAZQgkAagpACIgHABQgmAAgjgVg");
	var mask_7_graphics_85 = new cjs.Graphics().p("AoOOIQgmgWgTglQgSgjADgmQACgpAagkQAagkAngOIACgBIAAgCQACgpAagkQAagkAngOQAmgPArAJQAlAIAbAWQgFgSACgTQACgpAagkQAagkAngOQAmgPArAJQASAEAQAHQAGgMAJgNQAagkAmgOQAmgPArAJIARAEIACgDQAagkAngOQAfgMAhADQAHgdATgbQAUgbAbgPIgFgIQgSgjADgmQACgpAagjIALgNQgIgLgGgLQgSgjADgmQACgpAagkQAGgJAIgIQgegVgRggQgSgjADgmQACgpAagkQALgPANgLQgmgWgTglQgSgjADgmQACgpAagkIAJgLQgbgUgPgdQgSgjADgmQACgpAagkQAagkAngOQAmgPArAJQArAJAeAeQAdAdAJArQAJArgPAnQgKAYgRATIAPANQAdAdAJArQAJArgPAnQgNAigdAYQAQAJAOAOQAdAdAJArQAJArgPAnQgLAcgWAVQALAHAKAKQAdAdAJArQAJArgPAnQgKAagTAUQASAYAHAgQAJArgPAnQgPAngkAZIgOAKQALAUAFAYQAJArgPAnQgPAngkAZQgjAagqACQgKABgKgBQgDAMgEALQgPAngkAZQgjAagqACQgbACgagJQgOATgVAPQgjAagqACQgkACgigRQgPAiggAXQgjAagqACQgpACgmgWQgMgHgKgIIAAABQAJArgPAnQgPAngkAZQgQANgTAHQAAAXgJAXQgPAngkAZQgjAagqACIgHABQglAAgjgVg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(75).to({graphics:mask_7_graphics_75,x:181.4751,y:270.9646}).wait(1).to({graphics:mask_7_graphics_76,x:182.4751,y:281.4646}).wait(1).to({graphics:mask_7_graphics_77,x:183.4751,y:293.2146}).wait(1).to({graphics:mask_7_graphics_78,x:184.4751,y:304.2146}).wait(1).to({graphics:mask_7_graphics_79,x:184.4751,y:313.4646}).wait(1).to({graphics:mask_7_graphics_80,x:184.2251,y:323.4646}).wait(1).to({graphics:mask_7_graphics_81,x:176.4751,y:329.2146}).wait(1).to({graphics:mask_7_graphics_82,x:168.2251,y:331.9646}).wait(1).to({graphics:mask_7_graphics_83,x:158.4751,y:335.4646}).wait(1).to({graphics:mask_7_graphics_84,x:146.7251,y:342.4646}).wait(1).to({graphics:mask_7_graphics_85,x:141.9751,y:348.9646}).wait(65));

	// lady05
	this.instance_12 = new lib.CachedBmp_5();
	this.instance_12.setTransform(96.75,268.65,0.5,0.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(75).to({_off:false},0).wait(75));

	// pen04
	this.instance_13 = new lib.pen();
	this.instance_13.setTransform(140.05,429.95,1,1,0,0,0,-34,263.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(59).to({_off:false},0).wait(1).to({x:119.55,y:428.45},0).wait(1).to({x:97.55,y:433.95},0).wait(1).to({x:81.55,y:447.95},0).wait(1).to({x:70.55,y:467.95},0).wait(1).to({x:73.55,y:492.45},0).wait(1).to({x:89.05,y:513.45},0).wait(1).to({x:94.35,y:535.95},0).wait(1).to({x:87.8,y:545.95},0).wait(1).to({x:90.8,y:571.45},0).wait(1).to({x:107.3,y:583.95},0).wait(1).to({x:103.8,y:600.95},0).wait(1).to({x:101.3,y:619.45},0).wait(1).to({x:113.8,y:633.45},0).wait(1).to({x:129.3,y:647.95},0).wait(1).to({x:131.3,y:652.95},0).to({_off:true},1).wait(75));

	// 遮色片04 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_59 = new cjs.Graphics().p("AhHB8QgmgWgTglQgSgjADglQACgpAagkQAagkAngOQAmgPAqAJQArAJAeAeQAdAdAJArQAJAqgPAnQgPAngkAZQgjAagqACIgHABQgkAAgjgVg");
	var mask_8_graphics_60 = new cjs.Graphics().p("AirCdQgmgXgTglQgSgjADglQACgpAagjQAagkAngPQAmgPArAJQAWAFASAKQAGgMAIgLQAZgkAngPQAmgPArAJQArAKAeAdQAdAeAJArQAJArgPAlQgPAngkAaQgjAagqACQgoACgkgUQgQAggeAXQgjAagqACIgHAAQglAAgjgUg");
	var mask_8_graphics_61 = new cjs.Graphics().p("Ag2CdQgbgRgSgYQgNATgUAOQgkAagpACQgqACgmgWQglgXgTglQgSgjACglQADgpAZgjQAagkAngPQAngPArAJQArAKAdAdQAJAJAHAKIAAgBQAagkAngPQAmgPArAJQAVAFATAKQAFgMAIgLQAagkAngPQAngPArAJQArAKAdAdQAeAeAJArQAJArgQAlQgPAngjAaQgkAagpACQgoACglgUQgPAggfAXQgkAagpACIgHAAQglAAgjgUg");
	var mask_8_graphics_62 = new cjs.Graphics().p("AmHDMQgmgWgTglQgSgjADgmQACgpAagjQAagkAngOQAmgPArAJQATAEAQAIQAHgbARgYQAagkAngOQAmgPArAJQArAJAeAeQAIAIAGAKIABgBQAagkAngOQAmgPArAJQAWAFASAJQAGgLAIgMQAagkAngOQAmgPArAJQArAJAeAeQAdAdAJArQAJArgPAnQgPAmgkAZQgjAagqACQgoACgkgUQgQAhgfAWQgjAagqACQgpACgmgWQgcgQgRgZQgNATgUAOQgjAagqACQglACgigRIgGASQgPAngkAZQgjAagqACIgHABQglAAgjgVg");
	var mask_8_graphics_63 = new cjs.Graphics().p("AnQEuQglgXgTglQgSgjACglQADgqAZgjQAagkAngPQAegLAgACQgMgcACgdQADgqAZgjQAagkAngPQAngPArAJQASAEAQAIQAHgaARgYQAagkAngPQAngPArAJQAqAKAdAdQAJAJAHAKIAAgBQAagkAngPQAngPArAJQAVAFATAKQAFgMAIgLQAagkAngPQAngPArAJQArAKAdAdQAeAeAJArQAJArgQAmQgPAngjAaQgkAagpACQgoACglgUQgPAggfAWQgkAagpACQgqACgmgWQgbgQgSgYQgNATgUANQgkAagoACQglACgjgSIgGASQgPAngjAaQgkAagpACIgRAAQADAKADALQAJArgQAmQgPAngjAaQgkAagpACIgHAAQgmAAgjgUg");
	var mask_8_graphics_64 = new cjs.Graphics().p("AnrGmQgmgXgTglQgSgjADglQACgqAagjQAagkAngPIAFgCQgRgQgLgWQgSgjADglQACgqAagiQAagkAngPQAdgLAgACQgLgcACgeQACgqAagjQAagkAngPQAmgPArAJQATAEAQAIQAHgaARgYQAagkAngPQAmgPAqAJQArAKAeAdQAIAJAHAKIABgBQAagkAngPQAmgPArAJQAWAFASAKQAGgMAIgLQAagkAngPQAmgPArAJQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACQgoACgkgUQgQAggfAXQgjAagqACQgpACgmgWQgcgRgRgYQgOATgUAOQgjAagpACQglACgigSIgGASQgPAngkAaQgjAZgqACIgRAAQAEAKACALQAJArgPAmQgPAngkAaQgSANgUAHIACABQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACIgHAAQglAAgjgUg");
	var mask_8_graphics_65 = new cjs.Graphics().p("AmCIZQgmgXgTglQgSgjADglQACgqAagjIABgBQgggDgegRQgmgXgTglQgSgjADglQACgqAagjQAagkAngPIAFgCQgRgQgLgWQgSgiADglQACgqAagjQAagkAngPQAdgLAgACQgLgcACgeQACgqAagjQAagkAngPQAmgPArAJQATAEAQAIQAHgaARgYQAagkAngPQAmgPAqAJQArAKAeAdQAIAJAHAKIABgBQAagkAngPQAmgPArAJQAWAFASAKQAGgMAIgLQAagkAngPQAmgPArAJQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACQgoACgkgUQgQAggfAXQgjAagqACQgpACgmgWQgcgRgRgYQgOATgUAOQgjAagpACQglACgigSIgGASQgPAngkAaQgjAagqACIgRAAQAEAKACALQAJArgPAmQgPAmgkAaQgSANgUAHIACABQAdAeAJArQAJArgPAmQgHATgMAQIATACQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACIgHAAQglAAgjgUg");
	var mask_8_graphics_66 = new cjs.Graphics().p("AjsJzQgmgXgTglQgSgjADglQABgPADgNIgDAAQgpACgmgWQgmgXgTglQgSgjADglQACgqAagjIABgBQgggDgegRQgmgXgTglQgSgjADglQACgqAagjQAagjAngPIAFgCQgRgQgLgWQgSgjADglQACgqAagjQAagkAngPQAdgLAgACQgLgcACgeQACgqAagjQAagkAngPQAmgPArAJQATAEAQAIQAHgaARgYQAagkAngPQAmgPAqAJQArAKAeAdQAIAJAHAKIABgBQAagkAngPQAmgPArAJQAWAFASAKQAGgMAIgLQAagkAngPQAmgPArAJQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACQgoACgkgUQgQAggfAXQgjAagqACQgpACgmgWQgcgRgRgYQgOATgUAOQgjAagpACQglACgigSIgGASQgPAngkAaQgjAagqACIgRAAQAEAKACALQAJArgPAmQgPAngkAaQgSANgUAHIACABQAdAdAJArQAJArgPAmQgHATgMAQIATACQArAKAeAdQAdAeAJArQAHAigIAfQAUgBAUAEQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACIgHAAQglAAgjgUg");
	var mask_8_graphics_67 = new cjs.Graphics().p("AjOLKQgmgWgTglQgSgjADgmQACggAQgcQgUgSgNgYQgSgjADgmQABgOADgOIgDAAQgpACgmgWQgmgWgTglQgSgjADgmQACgpAagkIABgBQgggCgegSQgmgWgTglQgSgjADglQACgpAagkQAagkAngOIAFgCQgRgRgLgVQgSgjADgmQACgpAagkQAagkAngOQAdgMAgADQgLgdACgeQACgpAagkQAagkAngOQAmgPArAJQATAEAQAIQAHgbARgYQAagkAngOQAmgPAqAJQArAJAeAeQAIAIAHAKIABgBQAagkAngOQAmgPArAJQAWAFASAJQAGgLAIgMQAagkAngOQAmgPArAJQArAJAeAeQAdAdAJArQAJArgPAnQgPAngkAZQgjAagqACQgoACgkgUQgQAhgfAWQgjAagqACQgpACgmgWQgcgQgRgZQgOATgUAOQgjAagpACQglACgigRIgGASQgPAngkAZQgjAagqACIgRAAQAEAKACALQAJArgPAnQgPAngkAZQgSAOgUAHIACABQAdAdAJArQAJAqgPAnQgHASgMAQIATADQArAJAeAeQAdAdAJArQAHAigIAgQAUgBAUAEQArAJAeAeQAdAdAJArQAJArgPAnIgHAQIAFAFQAdAdAIArQAJArgPAnQgOAngkAZQgjAagqACIgHABQglAAgjgVg");
	var mask_8_graphics_68 = new cjs.Graphics().p("AlpMxQgmgXgTglQgSgjADglQACgqAagjQAagkAngPQAkgOAoAHQgRgiADgkQACggAQgdQgUgSgNgYQgSgjADglQABgPADgNIgDAAQgpACgmgWQgmgXgTglQgSgjADglQACgqAagjIABgBQgggDgegRQgmgXgTgkQgSgjADglQACgqAagjQAagkAngPIAFgCQgRgQgLgWQgSgjADglQACgqAagjQAagkAngPQAdgLAgACQgLgcACgeQACgqAagjQAagkAngPQAmgPArAJQATAEAQAIQAHgaARgYQAagkAngPQAmgPAqAJQArAKAeAdQAIAJAHAKIABgBQAagkAngPQAmgPArAJQAWAFASAKQAGgMAIgLQAagkAngPQAmgPArAJQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACQgoACgkgUQgQAggfAXQgjAagqACQgpACgmgWQgcgRgRgYQgOATgUAOQgjAagpACQglACgigSIgGASQgPAngkAaQgjAagqACIgRAAQAEAKACALQAJArgPAmQgPAngkAaQgSANgUAHIACABQAdAeAJArQAJArgPAmQgHATgMAQIATACQArAJAeAdQAdAeAJArQAHAigIAfQAUgBAUAEQArAKAeAdQAdAeAJArQAJArgPAmIgHAQIAFAFQAdAeAIArQAJArgPAmQgOAngkAaQgjAagqACQgQABgQgDQAIAPADASQAJArgPAmQgPAngkAaQgjAagqACIgHAAQglAAgjgUg");
	var mask_8_graphics_69 = new cjs.Graphics().p("AjdOLQgmgXgTglQgSgjADglQABgOADgOQglAAgjgUQgmgXgTglQgSgjADglQACgqAagjQAagkAngPQAkgOAoAHQgRgiADgkQACggAQgdQgUgSgNgYQgSgjADglQABgPADgNIgDAAQgpACgmgWQgmgXgTglQgSgjADglQACgpAagjIABgBQgggDgegRQgmgXgTglQgSgjADglQACgqAagjQAagkAngPIAFgCQgRgQgLgWQgSgjADglQACgqAagjQAagkAngPQAdgLAgACQgLgcACgeQACgqAagjQAagkAngPQAmgPArAJQATAEAQAIQAHgaARgYQAagkAngPQAmgPAqAJQArAKAeAdQAIAJAHAKIABgBQAagkAngPQAmgPArAJQAWAFASAKQAGgMAIgLQAagkAngPQAmgPArAJQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACQgoACgkgUQgQAggfAXQgjAagqACQgpACgmgWQgcgRgRgYQgOATgUAOQgjAagpACQglACgigSIgGASQgPAngkAaQgjAagqACIgRAAQAEAKACALQAJArgPAmQgPAngkAaQgSANgUAHIACABQAdAeAJArQAJArgPAmQgHATgMAQIATACQArAKAeAdQAdAeAJAqQAHAigIAfQAUgBAUAEQArAKAeAdQAdAeAJArQAJArgPAmIgHAQIAFAFQAdAeAIArQAJArgPAmQgOAngkAaQgjAagqACQgQABgQgDQAIAPADASQAHAigIAfQAPAAAPADQArAKAeAdQAdAeAJArQAIArgOAmQgPAngkAaQgjAagqACIgHAAQglAAgjgUg");
	var mask_8_graphics_70 = new cjs.Graphics().p("AgzPRQgmgXgTglQgPgegBggIgSACQgpACgmgWQgmgXgTglQgSgjADglQABgOADgOQglAAgjgUQgmgXgTglQgSgjADglQACgqAagjQAagkAngPQAkgOAoAHQgRgiADgkQACggAQgdQgUgSgNgYQgSgjADglQABgPADgNIgDAAQgpACgmgWQgmgXgTglQgSgjADgkQACgqAagjIABgBQgggDgegRQgmgXgTglQgSgjADglQACgqAagjQAagkAngPIAFgCQgRgQgLgWQgSgjADglQACgqAagjQAagkAngPQAdgLAgACQgLgcACgeQACgqAagjQAagkAngPQAmgPArAJQATAEAQAIQAHgaARgYQAagkAngPQAmgPAqAJQArAKAeAdQAIAJAHAKIABgBQAagkAngPQAmgPArAJQAWAFASAKQAGgMAIgLQAagkAngPQAmgPArAJQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACQgoACgkgUQgQAggfAXQgjAagqACQgpACgmgWQgcgRgRgYQgOATgUAOQgjAagpACQglACgigSIgGASQgPAngkAaQgjAagqACIgRAAQAEAKACALQAJArgPAmQgPAngkAaQgSANgUAHIACABQAdAeAJArQAJArgPAmQgHATgMAQIATACQArAKAeAdQAdAeAJArQAHAigIAeQAUgBAUAEQArAKAeAdQAdAeAJArQAJArgPAmIgHAQIAFAFQAdAeAIArQAJArgPAmQgOAngkAaQgjAagqACQgQABgQgDQAIAPADASQAHAigIAfQAPAAAPADQArAKAeAdQAdAeAJArQADAOAAANQAagFAdAGQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACIgHAAQgkAAgjgUg");
	var mask_8_graphics_71 = new cjs.Graphics().p("Ai1QcQgmgXgTglQgSgjADglQACgqAagjQAagkAngPQASgHASgBIAAgEIgSACQgpACgmgWQgmgXgTglQgSgjADglQABgOADgOQglAAgjgUQgmgXgTglQgSgjADglQACgqAagjQAagkAngPQAkgOAoAHQgRgiADgkQACggAQgdQgUgSgNgYQgSgjADglQABgPADgNIgDAAQgpACgmgWQgmgWgTglQgSgjADglQACgqAagjIABgBQgggDgegRQgmgXgTglQgSgjADglQACgqAagjQAagkAngPIAFgCQgRgQgLgWQgSgjADglQACgqAagjQAagkAngPQAdgLAgACQgLgcACgeQACgqAagjQAagkAngPQAmgPArAJQATAEAQAIQAHgaARgYQAagkAngPQAmgPAqAJQArAKAeAdQAIAJAHAKIABgBQAagkAngPQAmgPArAJQAWAFASAKQAGgMAIgLQAagkAngPQAmgPArAJQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACQgoACgkgUQgQAggfAXQgjAagqACQgpACgmgWQgcgRgRgYQgOATgUAOQgjAagpACQglACgigSIgGASQgPAngkAaQgjAagqACIgRAAQAEAKACALQAJArgPAmQgPAngkAaQgSANgUAHIACABQAdAeAJArQAJArgPAmQgHATgMAQIATACQArAKAeAdQAdAeAJArQAHAigIAfQAUgBAUAEQArAKAeAdQAdAdAJArQAJArgPAmIgHAQIAFAFQAdAeAIArQAJArgPAmQgOAngkAaQgjAagqACQgQABgQgDQAIAPADASQAHAigIAfQAPAAAPADQArAKAeAdQAdAeAJArQADAOAAANQAagFAdAGQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaQggAYgmADQACAfgLAbQgPAngjAaQgjAagqACIgHAAQglAAgjgUg");
	var mask_8_graphics_72 = new cjs.Graphics().p("AiNR7QgmgXgTglQgSgjADglQACgjASgfQgdgVgQgfQgSgjADglQACgqAagjQAagkAngPQASgHASgBIAAgEIgSACQgpACgmgWQgmgXgTglQgSgjADglQABgOADgOQglAAgjgUQgmgXgTglQgSgjADglQACgqAagjQAagkAngPQAkgOAoAHQgRgiADgkQACggAQgdQgUgSgNgYQgSgjADgkQABgPADgNIgDAAQgpACgmgWQgmgXgTglQgSgjADglQACgqAagjIABgBQgggDgegRQgmgXgTglQgSgjADglQACgqAagjQAagkAngPIAFgCQgRgQgLgWQgSgjADglQACgqAagjQAagkAngPQAdgLAgACQgLgcACgeQACgqAagjQAagkAngPQAmgPArAJQATAEAQAIQAHgaARgYQAagkAngPQAmgPAqAJQArAKAeAdQAIAJAHAKIABgBQAagkAngPQAmgPArAJQAWAFASAKQAGgMAIgLQAagkAngPQAmgPArAJQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaQgjAagqACQgoACgkgUQgQAggfAXQgjAagqACQgpACgmgWQgcgRgRgYQgOATgUAOQgjAagpACQglACgigSIgGASQgPAngkAaQgjAagqACIgRAAQAEAKACALQAJArgPAmQgPAngkAaQgSANgUAHIACABQAdAeAJArQAJArgPAmQgHATgMAQIATACQArAKAeAdQAdAeAJArQAHAigIAfQAUgBAUAEQArAKAeAdQAdAeAJArQAJArgPAlIgHAQIAFAFQAdAeAIArQAJArgPAmQgOAngkAaQgjAagqACQgQABgQgDQAIAPADASQAHAigIAfQAPAAAPADQArAKAeAdQAdAeAJArQADAOAAANQAagFAdAGQArAKAeAdQAdAeAJArQAJArgPAmQgPAngkAaQggAYgmADQACAfgLAbQgEALgGAKQAJAHAJAIQAdAeAJArQAJArgPAmQgPAngkAaQgiAagqACIgHAAQglAAgjgUg");
	var mask_8_graphics_73 = new cjs.Graphics().p("AAhTDQglgWgTglQgRghABgkQgLADgMAAQgpACgmgWQgmgWgTglQgSgjADgmQACgjASgeQgdgVgQgfQgSgjADgmQACgpAagkQAagkAngOQASgHASgCIAAgEIgSACQgpACgmgWQgmgWgTglQgSgjADgmQABgOADgNQglgBgjgUQgmgWgTglQgSgjADgmQACgpAagkQAagkAngOQAkgOAoAHQgRgiADglQACggAQgcQgUgRgNgYQgSgjADgmQABgOADgOIgDAAQgpACgmgWQgmgWgTglQgSgjADgmQACgpAagkIABgBQgggCgegSQgmgWgTglQgSgjADgmQACgpAagkQAagkAngOIAFgCQgRgRgLgVQgSgjADgmQACgpAagkQAagkAngOQAdgMAgADQgLgdACgeQACgpAagkQAagkAngOQAmgPArAJQATAEAQAIQAHgbARgYQAagkAngOQAmgPAqAJQArAJAeAeQAIAIAHAKIABgBQAagkAngOQAmgPArAJQAWAFASAJQAGgLAIgMQAagkAngOQAmgPArAJQArAJAeAeQAdAdAJArQAJArgPAnQgPAngkAZQgjAagqACQgoACgkgUQgQAhgfAWQgjAagqACQgpACgmgWQgcgQgRgZQgOATgUAOQgjAagpACQglACgigRIgGASQgPAngkAZQgjAagqACIgRAAQAEAKACALQAJArgPAnQgPAngkAZQgSAOgUAHIACABQAdAdAJArQAJArgPAnQgHASgMAQIATADQArAJAeAeQAdAdAJArQAHAigIAgQAUgBAUAEQArAJAeAeQAdAdAJArQAJArgPAnIgHAQIAFAFQAdAcAIArQAJArgPAnQgOAngkAZQgjAagqACQgQABgQgDQAIAQADARQAHAigIAgQAPAAAPADQArAJAeAeQAdAdAJArQADAOAAAOQAagFAdAGQArAJAeAeQAdAdAJArQAJArgPAnQgPAngkAZQggAYgmAEQACAegLAcQgEALgGAKQAJAGAJAJQAdAdAJArQAEARgBARQAegHAfAHQArAJAeAeQAdAdAJArQAJArgPAnQgPAngkAZQgjAagqACIgHABQglAAgjgVg");
	var mask_8_graphics_74 = new cjs.Graphics().p("ABxT/QgmgWgTglQgOgbgBgdIgIgFQglgWgTglQgRghABgkQgLADgMAAQgpACgmgWQgmgWgTglQgSgjADgmQACgjASgeQgdgVgQgfQgSgjADgmQACgpAagkQAagkAngOQASgHASgCIAAgEIgSACQgpACgmgWQgmgWgTglQgSgjADgmQABgOADgNQglgBgjgUQgmgWgTglQgSgjADgmQACgpAagkQAagkAngOQAkgOAoAHQgRgiADglQACgfAQgcQgUgSgNgYQgSgjADgmQABgOADgOIgDAAQgpACgmgWQgmgWgTglQgSgjADgmQACgpAagkIABgBQgggCgegSQgmgWgTglQgSgjADgmQACgpAagkQAagkAngOIAFgCQgRgRgLgVQgSgjADgmQACgpAagkQAagkAngOQAdgMAgADQgLgdACgeQACgpAagkQAagkAngOQAmgPArAJQATAEAQAIQAHgbARgYQAagkAngOQAmgPAqAJQArAJAeAeQAIAIAHAKIABgBQAagkAngOQAmgPArAJQAWAFASAJQAGgLAIgMQAagkAngOQAmgPArAJQArAJAeAeQAdAdAJArQAJArgPAnQgPAngkAZQgjAagqACQgoACgkgUQgQAhgfAWQgjAagqACQgpACgmgWQgcgQgRgZQgOATgUAOQgjAagpACQglACgigRIgGASQgPAngkAZQgjAagqACIgRAAQAEAKACALQAJArgPAnQgPAngkAZQgSAOgUAHIACABQAdAdAJArQAJArgPAnQgHASgMAQIATADQArAJAeAeQAdAdAJArQAHAigIAgQAUgBAUAEQArAJAeAeQAdAdAJArQAJArgPAnIgHAQIAFAFQAdAdAIArQAJAqgPAnQgOAngkAZQgjAagqACQgQABgQgDQAIAQADARQAHAigIAgQAPAAAPADQArAJAeAeQAdAdAJArQADAOAAAOQAagFAdAGQArAJAeAeQAdAdAJArQAJArgPAnQgPAngkAZQggAYgmAEQACAegLAcQgEALgGAKQAJAGAJAJQAdAdAJArQAEARgBARQAegHAfAHQArAJAeAeQAdAdAJArIADAUQAWALARARQAdAdAJArQAJArgPAnQgPAngkAZQgjAagqACIgHABQglAAgjgVg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_8_graphics_59,x:186.9751,y:158.9646}).wait(1).to({graphics:mask_8_graphics_60,x:176.9751,y:162.2146}).wait(1).to({graphics:mask_8_graphics_61,x:165.2251,y:162.2146}).wait(1).to({graphics:mask_8_graphics_62,x:154.9751,y:166.9646}).wait(1).to({graphics:mask_8_graphics_63,x:147.7251,y:176.7146}).wait(1).to({graphics:mask_8_graphics_64,x:144.9751,y:188.7146}).wait(1).to({graphics:mask_8_graphics_65,x:144.9751,y:200.2146}).wait(1).to({graphics:mask_8_graphics_66,x:144.9751,y:209.2146}).wait(1).to({graphics:mask_8_graphics_67,x:144.9751,y:217.9646}).wait(1).to({graphics:mask_8_graphics_68,x:144.9751,y:228.2146}).wait(1).to({graphics:mask_8_graphics_69,x:144.9751,y:237.2146}).wait(1).to({graphics:mask_8_graphics_70,x:144.9751,y:244.2146}).wait(1).to({graphics:mask_8_graphics_71,x:144.9751,y:251.7146}).wait(1).to({graphics:mask_8_graphics_72,x:144.9751,y:261.2146}).wait(1).to({graphics:mask_8_graphics_73,x:144.9751,y:268.4646}).wait(1).to({graphics:mask_8_graphics_74,x:144.9751,y:274.4646}).wait(76));

	// lady04
	this.instance_14 = new lib.CachedBmp_6();
	this.instance_14.setTransform(99.25,158.25,0.5,0.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(59).to({_off:false},0).wait(91));

	// pen03
	this.instance_15 = new lib.pen();
	this.instance_15.setTransform(167.1,427,1,1,0,0,0,-34,263.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(47).to({_off:false},0).wait(1).to({x:161.1,y:449.35},0).wait(1).to({x:144.45,y:469.2},0).wait(1).to({x:119.6,y:476.25},0).wait(1).to({x:99.35,y:492.95},0).wait(1).to({x:107.3,y:514.2},0).wait(1).to({x:123.25,y:530.5},0).wait(1).to({x:133.5,y:547.9},0).wait(1).to({x:123.95,y:570.95},0).wait(1).to({x:132.45,y:586.9},0).wait(1).to({x:125.35,y:610.3},0).wait(1).to({y:612.75},0).to({_off:true},1).wait(91));

	// 遮色片03 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_47 = new cjs.Graphics().p("AgiCLQgtgLgdghQgYgcgIglQgIgkALgjQALgjAbgaQAbgbAkgJQAjgKAkAKQAlAJAaAZQAbAZAMAkQALAkgHAjQgGAkgZAdQgZAdgiANQgXAJgaAAQgRAAgTgFg");
	var mask_9_graphics_48 = new cjs.Graphics().p("AgsEJQgegFgYgRQgagRgQgcQgRgcgDgfQgDgkAOgjQAPgiAcgXQARgMAUgHQgMgJgJgLQgYgcgIglQgIglAKgjQALgjAcgaQAbgbAjgJQAigKAlAKQAlAJAbAZQAaAZAMAkQAMAkgHAkQgHAkgZAdQgYAcghAMQAKAIAJAJQAZAcAIAjQAJAjgKAkQgKAlgZAaQgZAagjALQgWAHgVAAQgOAAgNgDg");
	var mask_9_graphics_49 = new cjs.Graphics().p("AiRFqQgjgVgTgnQgTgnAFgpQAFgpAbghQAbghAogNQASgFASgBIgJgOQgQgcgDgfQgEgjAPgiQAOgjAcgWQARgNAUgIQgLgJgKgLQgYgbgIglQgIglALgjQALgjAbgbQAbgaAjgKQAjgJAlAJQAlAJAaAZQAbAZAMAkQALAlgHAjQgGAkgZAdQgYAdghANQAKAHAIAKQAZAcAJAjQAIAigJAkQgKAkgZAaQgZAagkAMQgRAFgSABQAVAbAGAjQAHArgQAmQgQAmgjAYQgjAZgpABIgFAAQgoAAgjgVg");
	var mask_9_graphics_50 = new cjs.Graphics().p("AkGGpQgkgZgRgqQgQgsAKgqQALgrAigeQAjgeArgGQAggEAeAKQASAGAPAKQgBgOABgPQAFgpAcghQAbghAngNQARgGATgBIgJgNQgRgbgDgfQgDgkAOgjQAPgiAcgXQARgNAUgHQgLgJgKgLQgYgcgIglQgIglAKgjQALgjAcgaQAbgbAjgJQAjgKAlAKQAlAJAbAZQAaAZAMAkQAMAkgHAkQgHAkgZAdQgXAcgiANQAKAIAJAJQAZAcAIAjQAJAjgKAkQgKAkgZAaQgZAagjALQgSAGgRABQAUAbAGAjQAIAqgQAmQgQAmgkAZQgjAYgpACQgrABglgWIgCgCQACAfgLAfQgQArgkAZQgkAZguABQguAAgkgZg");
	var mask_9_graphics_51 = new cjs.Graphics().p("Al5HfQgfgTgTgfQgTgggCgkQgCgkARghQAQgiAdgVQAdgVAlgEQAlgFAhANQAdALAWAXQAAgQAEgPQAKgrAjgeQAigeAsgGQAfgEAeAKQARAGAPAKQgBgOACgPQAFgpAbghQAbghAogMQASgGASgBIgJgNQgQgcgDgfQgEgkAPgjQAOgiAcgXQARgNAUgHQgLgJgKgLQgYgcgIglQgIglALgjQALgjAbgaQAbgbAkgJQAjgKAlAKQAlAJAaAZQAbAZAMAkQALAkgHAkQgGAkgZAdQgYAcghANQAKAIAIAJQAZAcAJAjQAIAjgJAkQgKAlgZAaQgZAZgkALQgRAGgSABQAVAbAGAjQAHAqgQAmQgQAmgjAZQgkAYgpACQgrABglgWIgDgCQADAfgMAfQgQArgjAZQgjAZguABQguAAglgZQgLgIgKgKQAAATgGATQgLAjgZAaQgjAigxAGIgUACQglAAgigUg");
	var mask_9_graphics_52 = new cjs.Graphics().p("AmkJSQgogRgXgnQgYgnACgrQACgsAcgkQAbglAqgOQARgFASgBQgSgfgCgjQgBgkAQghQAQghAdgWQAdgVAlgEQAlgFAiANQAcALAWAXQAAgQAEgPQALgrAigeQAjgeArgFQAfgFAeAKQARAGAQAKQgCgOACgOQAFgpAcghQAbghAngNQASgGASgBIgIgNQgRgcgDgfQgDgkAOgjQAPgiAcgWQAQgOAVgHQgMgJgJgLQgYgbgIgmQgIgkAKgjQALgkAcgaQAbgbAjgJQAjgKAlAKQAlAJAbAZQAaAZAMAkQAMAlgHAjQgHAkgZAdQgYAcghAOQAKAHAJAJQAZAdAIAiQAJAkgKAjQgKAlgZAaQgZAagjALQgSAGgSABQAVAbAGAjQAIApgQAmQgQAngkAYQgjAYgpACQgrABgmgWIgCgCQACAfgLAfQgQAsgkAZQgkAZguAAQgtAAgkgYQgMgJgKgJQAAASgGATQgLAjgZAaQgjAjgxAFIgHABQAGALAEAMQANAggEAiQgEAigUAdQgTAdgdARQgeARgjABIgJABQgeAAgbgNg");
	var mask_9_graphics_53 = new cjs.Graphics().p("AjXKwQgkgEgegUQgZgRgQgYQgbgrAFgxIAAgHIgKABQgjACgfgOQgogSgXgnQgYgnACgrQACgsAcgkQAbgkAqgOQARgGASgBQgSgfgCgjQgBgjAQgiQAQghAdgVQAdgVAlgFQAlgFAiANQAcALAWAXQAAgPAEgQQALgpAigfQAjgeArgFQAfgEAeAKQARAGAQAKQgCgPACgPQAFgpAcghQAbghAngNQASgFASgBIgIgOQgRgcgDgfQgDgkAOgiQAPgjAcgWQAQgNAVgIQgMgJgJgLQgYgbgIglQgIglAKgjQALgjAcgbQAbgaAjgKQAjgJAlAJQAlAJAbAZQAaAZAMAkQAMAlgHAjQgHAkgZAdQgYAdghANQAKAHAJAKQAZAcAIAjQAJAjgKAkQgKAkgZAaQgZAagjAMQgSAFgSABQAVAbAGAjQAIArgQAmQgQAlgkAYQgjAZgpABQgrACgmgXIgCgBQACAegLAfQgQAsgkAZQgkAZguAAQgtAAgkgYQgMgIgKgKQAAASgGATQgLAkgZAZQgjAjgxAGIgHABQAGAKAEAMQANAggEAiIgBAEQAfgDAfAJQAiAMAZAZQAYAZALAjQAKAjgHAjQgHAigYAcQgYAdggANQgaAKgdAAIgOAAg");
	var mask_9_graphics_54 = new cjs.Graphics().p("AhVLrQgigPgWgcQgXgdgGgmIgCgWQgVAFgWgCQgkgEgegUQgZgRgQgYQgbgrAFgxIAAgHIgKABQgjACgfgOQgogSgXgnQgYgnACgrQACgsAcgkQAbgkAqgOQARgGASgBQgSgfgCgjQgBgjAQgiQAQggAdgVQAdgVAlgFQAlgFAiANQAcALAWAXQAAgQAEgPQALgqAigfQAjgeArgFQAfgEAeAKQARAFAQAKQgCgOACgPQAFgpAcghQAbghAngNQASgGASgBIgIgNQgRgcgDgfQgDgkAOgiQAPgjAcgWQAQgOAVgHQgMgJgJgLQgYgbgIglQgIglAKgjQALgjAcgbQAbgaAjgKQAjgJAlAJQAlAJAbAZQAaAZAMAkQAMAlgHAjQgHAkgZAdQgYAcghAOQAKAHAJAKQAZAcAIAjQAJAjgKAkQgKAkgZAaQgZAagjAMQgSAFgSABQAVAbAGAjQAIArgQAmQgQAmgkAYQgjAYgpABQgrACgmgWIgCgBQACAdgLAfQgQAsgkAZQgkAZguAAQgtAAgkgYQgMgIgKgKQAAASgGATQgLAkgZAZQgjAjgxAGIgHAAQAGALAEAMQANAggEAiIgBAEQAfgEAfAKQAiAMAZAZQAYAZALAjQAFAUAAATIACAAQAkgHAkAMQAkAMAZAbQAbAeAIAqQAHApgOAmQgPAlgiAZQgiAZgnADIgMABQgdAAgcgMg");
	var mask_9_graphics_55 = new cjs.Graphics().p("Ag9NlQgtgGgggdQgRgQgKgSQgOgZgEgcQgFgcAHgbQAIgeAVgaQAMgPAQgLQgJgIgIgKQgXgdgGgmIgCgWQgVAEgWgCQgkgEgegTQgZgRgQgZQgbgrAFgwIAAgHIgKAAQgjACgfgOQgogSgXgnQgYgnACgrQACgrAcglQAbgkAqgOQARgFASgBQgSgfgCgiQgBgkAQghQAQgiAdgVQAdgVAlgEQAlgFAiANQAcALAWAXQAAgQAEgPQALgrAigeQAjgeArgGQAfgEAeAKQARAGAQAKQgCgOACgPQAFgpAcghQAbghAngNQASgGASgBIgIgNQgRgcgDgfQgDgkAOgjQAPgiAcgXQAQgNAVgHQgMgJgJgLQgYgcgIglQgIglAKgjQALgjAcgaQAbgbAjgJQAjgKAlAKQAlAJAbAZQAaAZAMAkQAMAkgHAkQgHAkgZAdQgYAcghANQAKAIAJAJQAZAcAIAjQAJAjgKAkQgKAlgZAaQgZAagjALQgSAGgSABQAVAaAGAkQAIAqgQAmQgQAmgkAZQgjAYgpACQgrABgmgWIgCgCQACAfgLAfQgQArgkAYQgkAZguABQgtAAgkgZQgMgHgKgKQAAASgGATQgLAjgZAaQgjAigxAGIgHABQAGALAEALQANAhgEAiIgBAEQAfgEAfAKQAiALAZAZQAYAZALAkQAFATAAAUIACAAQAkgHAkAMQAkAMAZAbQAbAeAIApQAHAqgOAlQgPAlgiAaIgDACQAJAIAIAKQAcAjADArQADArgWAoQgXAngnATQgcAOggAAQgLAAgLgCg");
	var mask_9_graphics_56 = new cjs.Graphics().p("Ah1O5QgegKgYgWQgUgUgMgaQgLgagBgcQgCglASghQANgZAUgRQgOgYgDgbQgFgcAHgbQAIgeAVgaQAMgQAQgKQgJgJgIgJQgXgdgGgmIgCgWQgVAEgWgCQgkgEgegTQgZgRgQgZQgbgrAFgwIAAgIIgKABQgjACgfgOQgogSgXgnQgYgnACgrQACgrAcglQAbgjAqgOQARgGASgBQgSgfgCgiQgBgkAQghQAQgiAdgVQAdgVAlgEQAlgFAiANQAcALAWAWQAAgPAEgPQALgrAigeQAjgeArgGQAfgEAeAKQARAGAQAKQgCgPACgOQAFgpAcghQAbghAngNQASgGASgBIgIgNQgRgcgDgfQgDgkAOgjQAPgiAcgXQAQgNAVgIQgMgIgJgLQgYgcgIglQgIglAKgjQALgjAcgaQAbgbAjgJQAjgKAlAKQAlAJAbAZQAaAZAMAkQAMAkgHAkQgHAkgZAdQgYAcghANQAKAIAJAJQAZAcAIAjQAJAjgKAkQgKAlgZAaQgZAagjALQgSAFgSACQAVAaAGAkQAIAqgQAmQgQAmgkAZQgjAYgpACQgrABgmgWIgCgCQACAegLAgQgQArgkAZQgkAZguABQgtAAgkgZQgMgIgKgKQAAATgGATQgLAjgZAaQgjAhgxAGIgHABQAGAKAEAMQANAhgEAiIgBADQAfgDAfAKQAiALAZAZQAYAZALAkQAFATAAAUIACAAQAkgHAkAMQAkAMAZAbQAbAeAIApQAHAqgOAlQgPAlgiAaIgDACQAJAIAIAKQAcAjADArQADArgWAoQgNAVgRAPQAOAYAEAcQAEAkgOAjQgOAkgcAXQgaAXgmAHQgOACgOAAQgXAAgVgHg");
	var mask_9_graphics_57 = new cjs.Graphics().p("AgiQuQgfgHgagSQgZgTgPgcQgQgcgCgfQgCgdAKgcQAIgYAOgSQgdgKgXgWQgUgUgMgaQgLgagBgcQgCglASghQANgZAUgRQgOgYgDgbQgFgcAHgbQAIgeAVgaQAMgPAQgLQgJgIgIgKQgXgdgGgmIgCgWQgVAEgWgCQgkgEgegTQgZgRgQgZQgbgrAFgwIAAgHIgKAAQgjACgfgOQgogSgXgnQgYgnACgqQACgrAcglQAbgkAqgOQARgFASgBQgSgfgCgjQgBgkAQghQAQgiAdgVQAdgVAlgEQAlgFAiANQAcALAWAXQAAgQAEgPQALgrAigeQAjgeArgGQAfgEAeAKQARAGAQAKQgCgOACgPQAFgpAcghQAbghAngNQASgGASgBIgIgNQgRgcgDgfQgDgkAOgjQAPgiAcgXQAQgNAVgHQgMgJgJgLQgYgcgIglQgIglAKgjQALgjAcgaQAbgbAjgJQAjgKAlAKQAlAJAbAZQAaAZAMAkQAMAkgHAkQgHAkgZAdQgYAcghANQAKAIAJAJQAZAcAIAjQAJAjgKAkQgKAlgZAaQgZAagjALQgSAGgSABQAVAaAGAkQAIAqgQAmQgQAmgkAZQgjAYgpACQgrABgmgWIgCgCQACAfgLAfQgQArgkAZQgkAZguABQgtAAgkgZQgMgIgKgKQAAATgGATQgLAjgZAaQgjAigxAGIgHABQAGALAEALQANAhgEAhIgBAEQAfgEAfAKQAiALAZAZQAYAZALAkQAFATAAAUIACAAQAkgHAkAMQAkAMAZAbQAbAeAIApQAHAqgOAlQgPAlgiAaIgDACQAJAIAIAKQAcAjADArQADArgWAoQgNAVgRAQQAOAYAEAbQAEAkgOAjQgIAVgMAQIAJADQAcAMAUAVQAgAiAGAtQAHAtgVAqQgPAcgZATQgaAUgeAHQgQAEgPAAQgOAAgPgDg");
	var mask_9_graphics_58 = new cjs.Graphics().p("AiZRyQgmgTgUgjQgRgcgDgiQgCghALgeQAMgeAYgXQASgRAWgKQgDgLAAgLQgCgdAKgcQAIgYAOgSQgdgKgXgWQgUgUgMgaQgLgagBgcQgCglASghQANgZAUgRQgOgYgDgbQgFgcAHgbQAIgeAVgaQAMgPAQgLQgJgIgIgKQgXgdgGgmIgCgWQgVAFgWgDQgkgEgegTQgZgRgQgZQgbgrAFgwIAAgHIgKAAQgjACgfgOQgogSgXgmQgYgnACgrQACgrAcglQAbgkAqgOQARgFASgBQgSgfgCgjQgBgkAQghQAQgiAdgVQAdgVAlgEQAlgFAiANQAcALAWAXQAAgQAEgPQALgrAigeQAjgeArgGQAfgEAeAKQARAGAQAKQgCgOACgPQAFgpAcghQAbghAngNQASgGASgBIgIgNQgRgcgDgfQgDgkAOgjQAPgiAcgXQAQgNAVgHQgMgJgJgLQgYgcgIglQgIglAKgjQALgjAcgaQAbgbAjgJQAjgKAlAKQAlAJAbAZQAaAZAMAkQAMAkgHAkQgHAkgZAdQgYAcghANQAKAIAJAJQAZAcAIAjQAJAjgKAkQgKAlgZAaQgZAagjALQgSAGgSABQAVAbAGAjQAIAqgQAmQgQAmgkAZQgjAYgpACQgrABgmgWIgCgCQACAfgLAfQgQArgkAZQgkAZguABQgtAAgkgZQgMgIgKgKQAAATgGATQgLAjgZAaQgjAigxAGIgHABQAGALAEALQANAhgEAiIgBAEQAfgEAfAKQAiALAZAZQAYAYALAkQAFAUAAATIACAAQAkgHAkAMQAkAMAZAbQAbAeAIApQAHAqgOAlQgPAlgiAaIgDACQAJAIAIAKQAcAjADArQADArgWAoQgNAVgRAQQAOAYAEAbQAEAkgOAjQgIAVgMAQIAJADQAcAMAUAVQAgAiAGAtQAHAtgVAqQgPAcgZATQgOALgPAHQACAMABAMQACAhgNAgQgOAggZAVQgjAegtAEIgNABQgiAAgggRg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_9_graphics_47,x:203.1595,y:149.978}).wait(1).to({graphics:mask_9_graphics_48,x:201.4234,y:162.3736}).wait(1).to({graphics:mask_9_graphics_49,x:196.0553,y:173.9172}).wait(1).to({graphics:mask_9_graphics_50,x:185.0033,y:180.5625}).wait(1).to({graphics:mask_9_graphics_51,x:172.6512,y:185.4546}).wait(1).to({graphics:mask_9_graphics_52,x:166.9496,y:196.25}).wait(1).to({graphics:mask_9_graphics_53,x:166.9496,y:204.4235}).wait(1).to({graphics:mask_9_graphics_54,x:166.9496,y:211.4382}).wait(1).to({graphics:mask_9_graphics_55,x:166.9496,y:222.6703}).wait(1).to({graphics:mask_9_graphics_56,x:166.9496,y:231.5949}).wait(1).to({graphics:mask_9_graphics_57,x:166.9496,y:242.869}).wait(1).to({graphics:mask_9_graphics_58,x:166.9496,y:251.0641}).wait(92));

	// lady03
	this.instance_16 = new lib.CachedBmp_7();
	this.instance_16.setTransform(128,146.85,0.5,0.5);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(47).to({_off:false},0).wait(103));

	// pen02
	this.instance_17 = new lib.pen();
	this.instance_17.setTransform(229.8,441.9,1,1,0,0,0,-34,263.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(32).to({_off:false},0).wait(1).to({x:250.05,y:454},0).wait(1).to({x:268.85,y:467.15},0).wait(1).to({x:287.65},0).wait(1).to({x:293.7,y:444.45},0).wait(1).to({x:295.5,y:418.95},0).wait(1).to({y:394.9},0).wait(1).to({x:283.7,y:373.25},0).wait(1).to({x:264.2,y:358.35},0).wait(1).to({x:241.5,y:348.05},0).wait(1).to({x:217.4,y:345.3},0).wait(1).to({x:197.55,y:352.1},0).wait(1).to({x:177.35,y:363.45},0).wait(1).to({x:162.1,y:377.3},0).wait(1).to({x:161.75,y:379.45},0).to({_off:true},1).wait(103));

	// 遮色片02 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_32 = new cjs.Graphics().p("AgFCQQgsgCgkgbQghgZgPgoQgPgpAIgnQAJgoAegeQAfgfAogJQAngJAoAPQApAPAZAgQAZAhAEAqQADAqgTAlQgTAkglAWQgiATgkAAIgHAAg");
	var mask_10_graphics_33 = new cjs.Graphics().p("AAUDFQgVgOgRgXQgRgXgHgdQgFgYACgYQgcAMgegCQgsgCgkgbQghgZgPgnQgPgpAIgoQAJgoAegeQAfgfAogJQAogJAoAPQApAPAYAgQAZAhAEAqQABAPgBANQAngPAnAHQAqAIAgAfQAgAeAIAqQAJApgQApQgQAqgjAYQgjAYgsABIgEAAQgqAAgjgVg");
	var mask_10_graphics_34 = new cjs.Graphics().p("ADBETQgogBgjgYQgkgYgQgmQgIgTgCgUQgaALgeABQgsABgkgWQgWgOgRgXQgRgXgHgdQgFgYACgYQgcALgegBQgsgCgkgaQghgZgPgoQgPgpAIgoQAJgoAegeQAfgfAogJQAogJAoAPQApAPAZAgQAZAhAEAqQABAOgCAOQAogQAmAIQAqAIAgAfQAgAfAIAqIACALIAKgCQAjgNAjAFQAgAEAcASQAbASARAcQAQAbADAiQADAhgLAeQgQAsgnAZQglAYgpAAIgIAAg");
	var mask_10_graphics_35 = new cjs.Graphics().p("ADjFLQgjgPgXgfQgYgfgEgmIgBgKQgQADgQgBQgogCgjgYQgjgYgQglQgIgTgCgUQgaALgeABQgtABgkgXQgWgOgRgXQgRgXgHgbQgFgYACgYQgcALgegCQgsgBgkgcQghgYgPgpQgPgoAIgoQAJgoAegfQAfgeAogJQAogJAoAOQApAPAZAhQAZAgAEArQABAOgCAOQAogQAnAIQAqAIAfAfQAgAfAIApIACANIAKgEQAjgNAjAFQAgAFAcASQAbATARAbQAQAbADAhIABAGQAYgEAZAEQAnAGAgAbQAfAbAMAmQAOAsgOAsQgOAsgmAcQgeAWgnAFIgRABQgdAAgbgMg");
	var mask_10_graphics_36 = new cjs.Graphics().p("ACYFLQgigPgYgfQgXgfgFgmIgBgKQgPADgQgBQgogCgjgYQgjgYgQglQgIgTgDgUQgaALgeABQgsABgkgXQgWgOgSgXQgRgXgGgbQgGgYADgYQgcALgfgCQgsgBgkgcQghgYgPgpQgPgoAJgoQAJgoAegfQAegeAogJQAogJApAOQAoAPAZAhQAZAgAEArQABAOgBAOQAngQAoAIQApAIAgAfQAgAfAJApIACANIAJgEQAigNAkAFQAgAFAbASQAcATAQAbQARAbADAhIAAAGQAQgDAQABIgBgTQABgmAWgiQAVgiAigRQAigSAoADQAoACAgAVQAgAWASAkQARAjgDAmQgDAbgLAXQgMAbgYAUQgXAUgdAJQgXAHgYgBQADAegKAdQgOAsglAcQgfAWgmAFIgRABQgeAAgbgMg");
	var mask_10_graphics_37 = new cjs.Graphics().p("ACIFUQgigPgYgfQgXgfgFgmIgBgKQgPACgQAAQgogCgjgYQgjgYgQglQgIgTgDgUQgaALgeABQgsABgkgXQgWgOgSgXQgRgXgGgbQgGgYADgYQgdALgegCQgsgBgkgcQghgYgPgpQgPgoAJgoQAJgoAegfQAegeAogJQAogJApAOQAoAPAZAhQAZAgAEArQABAOgBAOQAngQAoAIQApAIAgAfQAgAfAJApIACANIAJgEQAigNAkAFQAgAFAbASQAcATAQAbQARAbADAhIAAAGQAQgDAQABIgBgTQABgnAWghQAVgiAigRIATgIIgCgBQgbgTgRgeQgRgegCgiQgCgoAVglQAVgkAjgUQAhgSAoABQAoABAhAUQAgAVATAjQASAjgCAmQgCAngVAhQgWAigiARIgRAHIAAAAQAgAWASAkQARAjgDAmQgDAbgLAXQgMAbgYAUQgXAUgdAJQgXAHgYgBQADAdgKAeQgOAsglAcQgfAWgmAFIgRAAQgeAAgbgLg");
	var mask_10_graphics_38 = new cjs.Graphics().p("ACDHPQgjgPgXgfQgYgfgEgmIgBgKQgPADgRgBQgngCgjgYQgkgYgQglQgIgTgCgUQgaALgeABQgtABgkgXQgWgOgRgXQgRgXgHgcQgFgYACgYQgcALgegCQgsgBgkgcQghgYgPgoQgPgoAIgoQAJgoAegfQAfgeAogJQAogJAoAOQApAPAZAhQAZAgAEArQABAOgBAOQAngQAnAIQAqAIAgAfQAgAeAIApIADANIAJgEQAigNAjAFQAgAFAcASQAbATARAbQAQAcADAhIABAGQAQgDAQABIgBgTQABgnAVgiQAWgiAigRIASgIIgBgBQgcgTgRgdQgRgegBgiQgCgoAUglQAVgkAjgUIABAAQghgXgSgmQgRgnAGgpQAFgoAdghQAcggAngMQAngMApAMQApAMAcAeQAdAhAFAuQAGAugVAnQgOAagYATQgKAIgKAFQAeAVARAhQATAjgCAmQgCAngWAhQgWAhgiARIgRAHIABAAQAgAWARAkQASAkgEAmQgCAbgLAXQgNAbgXAUQgYAUgcAJQgXAHgZgBQAEAegKAdQgOAsgmAcQgeAWgnAFIgQABQgeAAgbgMg");
	var mask_10_graphics_39 = new cjs.Graphics().p("ACDJJQgjgPgXgfQgYgggEglIgBgLQgPADgRgBQgngBgjgYQgkgYgQgmQgIgTgCgUQgaAMgeAAQgtABgkgWQgWgOgRgXQgRgXgHgdQgFgYACgYQgcAMgegCQgsgCgkgbQghgZgPgoQgPgpAIgoQAJgnAegeQAfgfAogJQAogJAoAPQApAPAZAgQAZAgAEAqQABAPgBANQAngPAnAHQAqAIAgAfQAgAfAIAqIADAMIAJgDQAigNAjAFQAgAEAcATQAbASARAcQAQAbADAiIABAGQAQgDAQAAIgBgTQABgmAVgiQAWgiAigSIASgIIgBgBQgcgSgRgfQgRgegBghQgCgoAUgkQAVglAjgTIABgBQghgWgSgnQgRgnAGgoQAFgpAdggQAIgJAJgIIgOgHQgogWgTgmQgNgZgCgeQgDgdAKgcQALggAagZQAagZAhgKQAigJAjAHQAjAHAbAWQAhAbANArQANArgMApQgMApgiAbQAeAMAWAZQAdAgAFAuQAGAugVAnQgOAagYATQgKAIgKAGQAeAUARAhQATAjgCAmQgCAmgWAiQgWAhgiARIgRAHIABABQAgAVARAkQASAlgEAmQgCAbgLAXQgNAbgXAUQgYAUgcAIQgXAHgZgBQAEAegKAeQgOAsgmAcQgeAWgnAEIgQABQgeAAgbgLg");
	var mask_10_graphics_40 = new cjs.Graphics().p("ACDKcQgjgPgXgfQgYgfgEgmIgBgKQgPADgRgBQgngCgjgYQgkgYgQglQgIgTgCgUQgaALgeABQgtABgkgXQgWgOgRgXQgRgXgHgcQgFgYACgYQgcALgegCQgsgBgkgcQghgYgPgpQgPgoAIgoQAJgoAegfQAfgeAogIQAogJAoANQApAPAZAhQAZAgAEArQABAOgBAOQAngQAnAIQAqAIAgAfQAgAfAIApIADANIAJgEQAigNAjAFQAgAFAcASQAbATARAbQAQAcADAhIABAGQAQgDAQABIgBgTQABgnAVgiQAWgiAigRIASgIIgBgBQgcgTgRgeQgRgegBgiQgCgoAUglQAVgkAjgTIABAAQghgXgSgmQgRgnAGgpQAFgoAdghQAIgJAJgIIgOgGQgogWgTgmQgNgagCgdQgCgSADgRQgaAEgagGQglgIgdgaQgdgbgMgkQgLgjAIgnQAJgmAZgcQAZgcAmgMQAlgMAlAIQAlAHAdAbQAdAaAMAkQAJAdgDAgIgBAIQAZgEAZAGQAjAHAbAWQAhAbANArQANArgMApQgMAogiAcQAeAMAWAYQAdAhAFAuQAGAugVAnQgOAagYATQgKAHgKAFQAeAUARAiQATAjgCAmQgCAngWAhQgWAigiARIgRAHIABAAQAgAWARAkQASAkgEAmQgCAbgLAXQgNAbgXAUQgYAUgcAJQgXAHgZgBQAEAegKAdQgOAsgmAcQgeAWgnAFIgQABQgeAAgbgMg");
	var mask_10_graphics_41 = new cjs.Graphics().p("ACDLgQgjgPgXgfQgYgfgEgmIgBgKQgPADgRgBQgngCgjgYQgkgYgQglQgIgTgCgUQgaALgeABQgtABgkgXQgWgOgRgXQgRgXgHgcQgFgYACgYQgcALgegCQgsgBgkgcQghgYgPgpQgPgoAIgoQAJgoAegfQAfgeAogJQAogJAoAOQApAPAZAhQAZAgAEArQABAOgBAOQAngQAnAIQAqAIAgAfQAgAfAIApIADANIAJgEQAigNAjAFQAgAFAcASQAbATARAbQAQAcADAhIABAGQAQgDAQABIgBgTQABgnAVgiQAWgiAigRIASgIIgBgBQgcgTgRgeQgRgegBgiQgCgoAUglQAVgkAjgUIABAAQghgXgSgmQgRgmAGgpQAFgoAdghQAIgJAJgHIgOgHQgogWgTgmQgNgagCgdQgCgSADgRQgaAEgagGQglgIgdgaQgdgbgMgkQgIgaACgbQgbAPgiABQgtADglgXQgkgWgTgpQgTgpAHgrQAJgwAiggQAighAwgGQAfgDAeAJQAeAKAXAWQAXAVAMAeQANAegCAgIAAACQAMgGANgEQAlgMAlAIQAlAHAdAbQAdAaAMAkQAJAdgDAgIgBAIQAZgEAZAGQAjAHAbAWQAhAbANArQANArgMApQgMAogiAcQAeAMAWAYQAdAhAFAuQAGAugVAmQgOAagYATQgKAIgKAFQAeAVARAhQATAjgCAmQgCAngWAhQgWAigiARIgRAHIABAAQAgAWARAkQASAkgEAmQgCAbgLAXQgNAbgXAUQgYAUgcAJQgXAHgZgBQAEAegKAdQgOAsgmAcQgeAWgnAFIgQABQgeAAgbgMg");
	var mask_10_graphics_42 = new cjs.Graphics().p("ACDMJQgjgPgXgfQgYgggEglIgBgKQgPACgRgBQgngBgjgYQgkgYgQgmQgIgSgCgVQgaAMgeAAQgtABgkgWQgWgOgRgXQgRgXgHgdQgFgXACgZQgcAMgegCQgsgCgkgbQghgZgPgoQgPgpAIgoQAJgoAegeQAfgfAogJQAogJAoAPQApAPAZAgQAZAhAEAqQABAPgBANQAngPAnAHQAqAIAgAfQAgAfAIAqIADANIAJgEQAigNAjAFQAgAEAcATQAbASARAcQAQAbADAiIABAGQAQgDAQABIgBgUQABgmAVgiQAWgiAigSIASgIIgBgBQgcgSgRgfQgRgegBghQgCgoAUglQAVglAjgTIABgBQghgWgSgnQgRgnAGgnQAFgpAdggQAIgJAJgIIgOgHQgogWgTgmQgNgZgCgeQgCgRADgRQgaAEgagGQglgIgdgbQgdgagMgkQgIgaACgcQgbAPgiACQgtACglgWQgkgWgTgqQgHgPgDgPQgRAOgVAIQgiAPglgFQgmgEgegVQgegVgQgjQgQgiACgkQACgnAWghQAWghAjgRQAjgQAoADQAoAEAfAWQAfAWARAkQAHAPADAQQAggcArgFQAfgEAeAKQAeAKAXAVQAXAWAMAeQANAegCAfIAAADQAMgGANgFQAlgMAlAIQAlAIAdAaQAdAaAMAkQAJAdgDAhIgBAHQAZgDAZAFQAjAHAbAWQAhAbANArQANArgMApQgMApgiAbQAeANAWAYQAdAgAFAuQAGAtgVAnQgOAagYATQgKAIgKAGQAeAUARAhQATAkgCAmQgCAmgWAiQgWAhgiARIgRAHIABABQAgAVARAkQASAlgEAmQgCAbgLAXQgNAbgXAUQgYAUgcAIQgXAIgZgCQAEAegKAeQgOAsgmAcQgeAWgnAEIgQABQgeAAgbgLg");
	var mask_10_graphics_43 = new cjs.Graphics().p("ACvMJQgigPgYgfQgXgggFglIgBgKQgPACgQgBQgpgBgigYQgjgYgQgmQgJgSgCgVQgaAMgeAAQgsABgkgWQgWgOgSgXQgRgXgGgdQgGgXADgZQgdAMgegCQgsgCgkgbQghgZgPgoQgPgpAJgoQAJgoAegeQAegfAogJQAogJApAPQAoAPAZAgQAZAhAEAqQABAPgBANQAngPAoAHQApAIAgAfQAgAfAIAqIACANIAJgEQAjgNAkAFQAgAEAbATQAcASAQAcQARAbADAiIAAAGQAQgDAQABIgBgUQABgmAWgiQAVgiAigSIATgIIgCgBQgbgSgRgfQgRgegCghQgCgoAVglQAVglAjgTIABgBQgigWgRgnQgSgnAGgnQAGgpAcggQAIgJAJgIIgOgHQgngWgUgmQgNgZgCgeQgBgRACgRQgaAEgagGQgkgIgegbQgdgagLgkQgIgaACgcQgcAPgiACQgtACgkgWQglgWgTgqQgHgPgDgPQgRAOgUAIQgiAPgmgFQgmgEgegVIgKgIQgNAOgPALQgjAXgsABQgpABglgXQglgXgRglQgSglAGgrQAFgrAbggQAagfApgNQAqgNAnALQAfAJAZAVQATgWAcgOQAigQAoADQAoAEAfAWQAgAWAQAkQAHAPADAQQAggcArgFQAegEAfAKQAfAKAXAVQAXAWAMAeQAMAegCAfIAAADQAMgGANgFQAmgMAkAIQAlAIAdAaQAeAaALAkQAKAdgDAhIgBAHQAYgDAZAFQAjAHAbAWQAhAbANArQAOArgNApQgMApgiAbQAeANAWAYQAdAgAGAuQAFAtgUAnQgOAagZATQgKAIgKAGQAeAUASAhQASAkgCAmQgCAmgVAiQgWAhgiARIgRAHIAAABQAgAVASAkQARAlgDAmQgDAbgLAXQgMAbgYAUQgXAUgdAIQgXAIgYgCQADAegKAeQgOAsglAcQgfAWgmAEIgRABQgeAAgbgLg");
	var mask_10_graphics_44 = new cjs.Graphics().p("AEZMJQgigPgYgfQgXgggFglIgBgKQgPACgQgBQgpgBgjgYQgjgYgQgmQgIgSgDgVQgZAMgeAAQgsABgkgWQgWgOgSgXQgRgXgGgdQgGgXADgZQgcAMgfgCQgsgCgkgbQghgZgPgoQgPgpAJgoQAJgoAegeQAegfAogJQAogJApAPQAoAPAZAgQAZAhAEAqQACAPgCANQAngPAoAHQAoAIAgAfQAgAfAJAqIACANIAJgEQAjgNAkAFQAgAEAbATQAcASAQAcQARAbADAiIAAAGQAQgDAQABIgBgUQABgmAWgiQAVgiAigSIATgIIgCgBQgbgSgRgfQgRgegCghQgCgoAVglQAVglAjgTIABgBQghgWgSgnQgSgnAGgnQAGgpAcggQAIgJAJgIIgOgHQgngWgUgmQgNgZgCgeQgBgRADgRQgbAEgagGQgkgIgegbQgdgagLgkQgIgaACgcQgcAPgiACQguACgkgWQglgWgSgqQgGgPgEgPQgQAOgVAIQgiAPgmgFQgmgEgegVIgKgIQgMAOgQALQgjAXgsABQgmABgjgUQgCAOgHAOQgKAZgTATQgWAYggALQgfAMgggEQgggDgdgRQgdgRgRgbQgSgbgEghQgEghAKgfQALgkAegbQAegaAmgIQAlgHAmANQANAEALAHQAIglAXgcQAagfApgNQAqgNAnALQAgAJAYAVQAUgWAbgOQAigQAoADQAoAEAfAWQAfAWAQAkQAHAPADAQQAhgcAqgFQAfgEAfAKQAfAKAXAVQAXAWAMAeQAMAegCAfIAAADQAMgGANgFQAmgMAkAIQAlAIAdAaQAeAaALAkQAKAdgDAhIgBAHQAYgDAZAFQAjAHAbAWQAhAbANArQAOArgNApQgMApgiAbQAfANAVAYQAdAgAGAuQAFAtgUAnQgOAagZATQgJAIgLAGQAeAUASAhQASAkgCAmQgCAmgVAiQgWAhgiARIgRAHIAAABQAgAVASAkQARAlgDAmQgDAbgLAXQgMAbgYAUQgXAUgdAIQgWAIgZgCQADAegKAeQgOAsglAcQgfAWgmAEIgRABQgdAAgcgLg");
	var mask_10_graphics_45 = new cjs.Graphics().p("AFyMJQgigPgYgfQgXgggFglIgBgKQgPACgQgBQgpgBgjgYQgjgYgQgmQgIgSgDgVQgZAMgfAAQgsABgjgWQgWgOgSgXQgRgXgGgdQgGgXADgZQgcAMgfgCQgsgCgkgbQghgZgPgoQgPgpAJgoQAJgoAegeQAegfAogJQAogJApAPQAoAPAZAgQAZAhADAqQACAPgCANQAngPAoAHQApAIAgAfQAgAfAJAqIACANIAJgEQAjgNAkAFQAgAEAbATQAcASAQAcQARAbADAiIAAAGQAQgDAQABIgBgUQABgmAWgiQAVgiAigSIATgIIgCgBQgbgSgRgfQgRgegCghQgCgoAVglQAVglAjgTIABgBQghgWgSgnQgSgnAGgnQAGgpAcggQAIgJAJgIIgOgHQgngWgUgmQgNgZgCgeQgBgRADgRQgbAEgagGQgkgIgegbQgdgagLgkQgIgaACgcQgcAPgiACQguACgkgWQglgWgTgqQgGgPgEgPQgRAOgUAIQghAPgmgFQgmgEgegVIgKgIQgMAOgQALQgjAXgsABQgmABgjgUQgDAOgGAOQgKAZgTATQgWAYggALQgfAMgggEQgLgBgKgCQgGAngcAfQgcAhgmAMQgnALgpgLQgpgLgcgeQgWgYgKggQgKggAGghQAFghAUgbQATgcAdgPQAdgQAigBQAWgBAUAFQABgLAEgLQALgkAegbQAegaAmgIQAlgHAmANQANAEALAHQAIglAXgcQAagfApgNQAqgNAnALQAgAJAYAVQAUgWAbgOQAigQAoADQAnAEAfAWQAgAWAQAkQAHAPADAQQAggcArgFQAfgEAfAKQAfAKAXAVQAXAWAMAeQAMAegCAfIAAADQAMgGANgFQAmgMAkAIQAlAIAdAaQAeAaALAkQAKAdgDAhIgBAHQAYgDAZAFQAjAHAbAWQAhAbANArQAOArgNApQgMApgiAbQAfANAVAYQAdAgAGAuQAFAtgUAnQgOAagZATQgJAIgLAGQAeAUASAhQASAkgCAmQgCAmgVAiQgWAhgiARIgRAHIAAABQAgAVASAkQARAlgDAmQgDAbgLAXQgMAbgYAUQgXAUgdAIQgWAIgZgCQADAegKAeQgOAsglAcQgfAWgmAEIgRABQgeAAgbgLg");
	var mask_10_graphics_46 = new cjs.Graphics().p("AGdMJQgjgPgXgfQgYgggEglIgBgKQgQACgQgBQgogBgjgYQgkgYgQgmQgIgSgCgVQgaAMgeAAQgtABgkgWQgVgOgRgXQgRgXgHgdQgFgXACgZQgcAMgegCQgsgCgkgbQghgZgPgoQgPgpAIgoQAJgoAegeQAfgfAogJQAogJAoAPQApAPAYAgQAZAhAEAqQABAPgBANQAngPAnAHQAqAIAgAfQAgAfAIAqIADANIAJgEQAjgNAjAFQAgAEAcATQAbASARAcQAQAbADAiIABAGQAQgDAQABIgBgUQABgmAVgiQAWgiAigSIASgIIgBgBQgcgSgRgfQgRgegBghQgCgoAUglQAVglAjgTIABgBQghgWgSgnQgRgnAGgnQAFgpAdggQAIgJAJgIIgOgHQgogWgTgmQgNgZgCgeQgCgRADgRQgaAEgagGQglgIgdgbQgdgagMgkQgIgaACgcQgbAPgjACQgtACglgWQgkgWgTgqQgHgPgDgPQgRAOgVAIQgiAPglgFQglgEgegVIgLgIQgMAOgQALQgjAXgrABQgnABgigUQgDAOgGAOQgLAZgSATQgXAYgfALQggAMgggEQgLgBgKgCQgGAngbAfQgaAeghAMQgHATgNAQQgTAagcAPQgcAPghACQghACgdgMQgdgMgWgYQgWgYgKgfQgLgjAHgjQAHglAageQAZgcAigNQAGgRALgQQAUgcAdgPQAdgQAhgBQAWgBAUAFQACgLADgLQAMgkAegbQAegaAlgIQAlgHAmANQANAEAMAHQAHglAXgcQAagfAqgNQApgNAoALQAfAJAZAVQATgWAbgOQAjgQAnADQAoAEAfAWQAfAWARAkQAGAPAEAQQAggcArgFQAfgEAfAKQAeAKAXAVQAXAWAMAeQANAegCAfIAAADQALgGAOgFQAlgMAlAIQAlAIAdAaQAdAaAMAkQAJAdgDAhIgBAHQAZgDAZAFQAjAHAbAWQAhAbANArQANArgMApQgNApghAbQAeANAWAYQAdAgAFAuQAGAtgVAnQgOAagYATQgKAIgKAGQAeAUARAhQATAkgCAmQgCAmgWAiQgWAhgiARIgRAHIABABQAgAVARAkQASAlgEAmQgCAbgLAXQgNAbgXAUQgYAUgcAIQgXAIgZgCQAEAegKAeQgOAsgmAcQgeAWgnAEIgQABQgeAAgbgLg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(32).to({graphics:mask_10_graphics_32,x:253.1485,y:171.6157}).wait(1).to({graphics:mask_10_graphics_33,x:262.9083,y:179.0298}).wait(1).to({graphics:mask_10_graphics_34,x:273.0273,y:184.7384}).wait(1).to({graphics:mask_10_graphics_35,x:281.5401,y:191.4709}).wait(1).to({graphics:mask_10_graphics_36,x:288.9754,y:191.4709}).wait(1).to({graphics:mask_10_graphics_37,x:290.581,y:190.5907}).wait(1).to({graphics:mask_10_graphics_38,x:291.1044,y:178.2682}).wait(1).to({graphics:mask_10_graphics_39,x:291.1044,y:166.1278}).wait(1).to({graphics:mask_10_graphics_40,x:291.1044,y:157.7832}).wait(1).to({graphics:mask_10_graphics_41,x:291.1044,y:150.9711}).wait(1).to({graphics:mask_10_graphics_42,x:291.1044,y:146.9126}).wait(1).to({graphics:mask_10_graphics_43,x:286.6924,y:146.9126}).wait(1).to({graphics:mask_10_graphics_44,x:276.051,y:146.9126}).wait(1).to({graphics:mask_10_graphics_45,x:267.1606,y:146.9126}).wait(1).to({graphics:mask_10_graphics_46,x:262.9221,y:146.9126}).wait(104));

	// lady02
	this.instance_18 = new lib.CachedBmp_8();
	this.instance_18.setTransform(195.3,77.3,0.5,0.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(32).to({_off:false},0).wait(118));

	// pen01
	this.instance_19 = new lib.pen();
	this.instance_19.setTransform(55.55,464.45,1,1,0,0,0,-34,263.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({x:46.55,y:448.2},0).wait(1).to({x:41.05,y:430.2},0).wait(1).to({y:411.2},0).wait(1).to({y:391.2},0).wait(1).to({x:52.05,y:376.7},0).wait(1).to({x:66.55,y:363.2},0).wait(1).to({x:78.55,y:357.7},0).wait(1).to({x:92.55,y:355.8},0).wait(1).to({x:110},0).wait(1).to({x:129.15,y:363.6},0).wait(1).to({x:146.9,y:376.4},0).wait(1).to({x:159.3,y:390.95},0).wait(1).to({x:171.7,y:404.75},0).wait(1).to({x:183.75,y:420.7},0).wait(1).to({x:194.05,y:436.3},0).wait(1).to({x:205.05,y:450.45},0).wait(1).to({x:217.5,y:468.9},0).wait(1).to({x:229.9,y:485.55},0).wait(1).to({x:241.6,y:499.35},0).wait(1).to({x:252.25,y:513.9},0).wait(1).to({x:265.05,y:526.3},0).wait(1).to({x:282.05,y:541.2},0).wait(1).to({x:296.9,y:553.25},0).wait(1).to({x:314.25,y:562.85},0).wait(1).to({x:334.5,y:566.75},0).wait(1).to({x:347.25,y:551.5},0).wait(1).to({x:340.15,y:533.45},0).wait(1).to({x:328.45,y:513.95},0).wait(1).to({x:310.35,y:492.65},0).wait(1).to({x:301.5,y:480.95},0).to({_off:true},1).wait(119));

	// 遮色片01 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("Ag7CBQgvgVgWgrQgWgrALgyQAKgyAkgfQAlgfA0gCQAygCAnAcQAnAdANAyQAOAwgTAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgdAAgfgOg");
	var mask_11_graphics_1 = new cjs.Graphics().p("AAADHQgugVgWgrQgPgeAAgiQgSgDgSgJQgvgVgWgqQgWgrALgzQAKgyAkgfQAlgfA0gCQAzgCAmAcQAnAdANAyQAGASAAASQAiAFAcAUQAnAdANAxQAOAxgTAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_2 = new cjs.Graphics().p("AAyEhQgvgVgVgrQgPgeAAgiQgSgDgSgJQgvgVgWgrQgWgrALgyIADgNQgLgDgMgGQgvgVgWgrQgWgrALgzQAKgyAkgfQAlgfA0gCQAzgCAnAcQAmAdANAyQAMApgLAmQAZAGAWAQQAnAdANAyQAGARAAASQAiAFAcAUQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_3 = new cjs.Graphics().p("AAyGAQgvgVgVgrQgPgeAAgiQgSgDgSgJQgvgVgWgrQgWgrALgzIADgNQgLgDgMgGQgvgVgWgrQgWgqALgzQAIgnAYgcQgMgNgJgQQgWgrALgzQAKgyAkgfQAlgfA0gCQAzgCAnAcQAmAdANAyQAOAxgTAtQgJAVgOASQATAXAJAiQAMApgLAmQAZAGAWAQQAnAcANAyQAGASAAASQAiAFAcAUQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_4 = new cjs.Graphics().p("ABGHkQgvgVgWgrQgOgeAAgiQgSgDgSgJQgvgVgWgrQgWgrALgzIADgNQgLgDgMgGQgvgVgWgrQgWgrALgzQAIgmAYgcQgMgNgJgQQgWgrALgzQAGgdAPgXQgggVgSghQgWgrALgzQAKgyAkgfQAlgfA0gCQAzgCAnAcQAnAdAMAyQAOAxgTAtQgEAMgHAMIAFADQAmAdANAyQAOAxgTAtQgJAVgPASQAUAXAJAiQAMAogLAmQAZAGAWAQQAnAdANAyQAGASAAASQAiAFAcAUQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_5 = new cjs.Graphics().p("ABGI5QgvgVgWgrQgOgeAAgiQgSgDgSgJQgvgVgWgrQgWgrALgzIADgNQgLgDgMgGQgvgVgWgrQgWgrALgzQAIgnAYgcQgMgNgJgPQgWgrALgzQAGgdAPgXQgggVgSghQgWgrALgzQAKgyAkgfQAQgOATgIQgIgfAHgkQAKgyAkgfQAlgfA0gCQAzgCAmAcQAnAdANAyQAOAxgTAtQgNAfgaAWQgRAOgTAIIAAABQAOAxgTAtQgEAMgHAMIAFADQAmAdANAyQAOAxgTAtQgJAUgPASQAUAXAJAiQAMApgLAmQAZAGAWAQQAnAdANAyQAGASAAASQAiAFAcAUQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_6 = new cjs.Graphics().p("ABGKOQgvgVgWgrQgOgeAAgiQgSgDgSgJQgvgVgWgrQgWgrALgzIADgNQgLgDgMgGQgvgVgWgrQgWgrALgzQAIgnAYgcQgMgNgJgQQgWgrALgyQAGgdAPgXQgggVgSghQgWgrALgzQAKgyAkgfQAQgOATgIQgIgfAHgkQAKgyAkgfQAYgUAegIQgHgdAHggQAKgyAkgfQAlgfAzgCQAzgCAnAcQAnAdANAyQAOAxgTAtQgNAfgaAWQgYAVgeAIQALAugSAqQgNAfgaAWQgRAOgTAIIAAABQAOAxgTAtQgEAMgHAMIAFADQAmAdANAyQAOAwgTAtQgJAVgPASQAUAXAJAiQAMApgLAmQAZAGAWAQQAnAdANAyQAGASAAASQAiAFAcAUQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_7 = new cjs.Graphics().p("AAyK7QgvgVgVgrQgPgeAAgiQgSgDgSgJQgvgVgWgrQgWgrALgzIADgNQgLgDgMgGQgvgVgWgrQgWgrALgzQAIgnAYgcQgMgNgJgQQgWgrALgzQAGgdAPgWQgggVgSghQgWgrALgzQAKgyAkgfQAQgOATgIQgIgfAHgkQAKgyAkgfQAYgUAegIQgHgdAHggQAKgyAkgfQAigdAugEQAMgiAbgXQAlgfA0gCQAzgCAnAcQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIIgUAEIgCADQgNAfgaAWQgYAVgeAIQALAugSAqQgNAfgaAWQgRAOgSAIIAAABQANAxgSAtQgFAMgHAMIAFADQAmAdANAxQAOAxgTAtQgJAVgOASQATAXAJAiQAMApgLAmQAZAGAWAQQAnAdANAyQAGASAAASQAiAFAcAUQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_8 = new cjs.Graphics().p("AgOLPQgvgVgWgrQgPgeAAgiQgSgDgSgJQgvgVgWgrQgWgrALgzIADgNQgLgDgMgGQgvgVgWgrQgWgrALgzQAIgnAYgcQgMgNgJgQQgWgrALgzQAGgdAPgWQgggVgSghQgWgrALgzQAKgyAkgfQAQgOATgIQgIgfAHgkQAKgyAkgfQAYgUAegIQgHgdAHggQAKgyAkgfQAigdAvgEQAMgiAbgXQAkgfA0gCQARgBAPADIAJgJQAlgfA0gCQAzgCAnAcQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgfAIgfgHIgJAJQgbAWggAIIgUAEIgCADQgNAfgaAWQgYAVgeAIQALAugRAqQgNAfgaAWQgRAOgTAIIAAABQAOAxgTAtQgFAMgHAMIAFADQAnAdANAxQAOAxgTAtQgJAVgPASQAUAXAJAiQAMApgLAmQAZAGAVAQQAnAdANAyQAGASAAASQAiAFAcAUQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgeAAgegOg");
	var mask_11_graphics_9 = new cjs.Graphics().p("AhjLUQgvgVgWgrQgPgeAAgiQgSgDgSgJQgvgVgWgrQgWgrALgzIADgNQgLgDgMgGQgvgVgWgrQgWgrALgzQAIgnAYgcQgMgNgJgQQgWgrALgzQAGgdAPgXQgggUgSghQgWgrALgzQAKgyAkgfQAQgOATgIQgIgfAHgkQAKgyAkgfQAYgUAegIQgHgdAHggQAKgyAkgfQAigdAvgEQAMgiAbgXQAlgfA0gCQAQgBAPADIAJgJQAlgfA0gCQAvgCAkAYQAlgeAygCQAzgCAnAcQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgfgHIgJAJQgbAWggAIIgUAEIgCADQgMAfgaAWQgYAVgeAIQALAugSAqQgNAfgaAWQgRAOgTAIIAAABQAOAxgTAtQgFAMgHAMIAFADQAnAdANAxQAOAxgTAtQgJAVgPASQAUAXAJAiQAMApgLAmQAZAGAWAQQAnAdANAyQAGASAAASQAhAFAcAUQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWgfAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_10 = new cjs.Graphics().p("AjMLUQgvgVgWgrQgPgeAAgiQgSgDgSgJQgvgVgWgrQgWgrALgzIADgNQgLgDgMgGQgvgVgWgrQgWgrALgzQAIgnAYgcQgMgNgJgQQgWgrALgzQAGgdAPgXQgggUgSghQgWgrALgzQAKgyAkgfQAQgOATgIQgIgfAHgkQAKgyAkgfQAYgUAegIQgHgdAHggQAKgyAkgfQAigdAvgEQAMgiAbgXQAlgfA0gCQARgBAPADIAJgJQAlgfAzgCQAvgCAkAYQAlgeAygCQAzgCAnAcQAOAKAKANIAHgGQAlgfA0gCQAzgCAnAcQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgvAMgvgWQgegOgUgWIgHAGQgbAWggAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgJAJQgbAWggAIIgUAEIgCADQgNAfgaAWQgYAVgeAIQALAugSAqQgNAfgaAWQgRAOgTAIIAAABQAOAxgTAtQgFAMgHAMIAFADQAnAdANAxQAOAxgTAtQgJAVgPASQAUAXAJAiQAMApgLAmQAZAGAWAQQAnAdANAyQAGASAAASQAiAFAcAUQAnAdANAyQANAxgSAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_11 = new cjs.Graphics().p("AkhLUQgvgVgWgrQgPgeAAgiQgSgDgSgJQgvgVgWgrQgWgrALgzIADgNQgLgDgMgGQgvgVgWgrQgWgrALgzQAIgnAYgcQgMgNgJgQQgWgrALgzQAGgdAPgXQgggUgSghQgWgrALgzQAKgyAkgfQAQgOATgIQgIgfAHgkQAKgyAkgfQAYgUAegIQgHgdAHggQAKgyAkgfQAigdAvgEQAMgiAbgXQAlgfA0gCQARgBAPADIAJgJQAlgfA0gCQAvgCAjAYQAlgeAygCQAzgCAnAcQAOAKAKANIAHgGQAlgfA0gCQAzgCAnAcQAnAdANAyQAGATAAASIAWgCQAzgCAnAcQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgvAMgvgWQgvgVgWgrQgPgeABgiQgsAIgrgUQgegOgUgWIgHAGQgbAWggAIQgvAMgvgWIgSgJQgaAVgfAIQgfAIgfgHIgJAJQgbAWggAIIgUAEIgCADQgNAfgaAWQgYAVgeAIQALAugSAqQgNAfgaAWQgRAOgTAIIAAABQAOAxgTAtQgFAMgHAMIAFADQAnAdANAxQAOAxgTAtQgJAVgPASQAUAXAJAiQAMApgLAmQAZAGAWAQQAnAdANAyQAGASAAASQAiAFAcAUQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_12 = new cjs.Graphics().p("AlxLUQgvgVgWgrQgPgeAAgiQgSgDgSgJQgvgVgWgrQgWgrALgzIADgNQgLgDgMgGQgvgVgWgrQgWgrALgzQAIgnAYgcQgMgNgJgQQgWgrALgzQAGgdAPgXQgggUgSghQgWgrALgzQAKgyAkgfQAQgOATgIQgIgfAHgkQAKgyAkgfQAYgUAegIQgHgdAHggQAKgyAkgfQAigdAvgEQAMgiAbgXQAlgfA0gCQARgBAPADIAJgJQAlgfA0gCQAvgCAkAYQAlgeAxgCQAzgCAnAcQAOAKAKANIAHgGQAlgfA0gCQAzgCAnAcQAnAdANAyQAGATAAASIAWgCQAzgCAnAcQAiAZAOApIAWgCQAzgCAnAcQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgvAMgvgWQgvgVgWgrIgGgOQgqAIgrgUQgvgVgWgrQgPgeABgiQgsAIgrgUQgegOgUgWIgHAGQgbAWggAIQgvAMgugWIgSgJQgaAVggAIQgfAIgfgHIgJAJQgbAWggAIIgUAEIgCADQgNAfgaAWQgYAVgeAIQALAugSAqQgNAfgaAWQgRAOgTAIIAAABQAOAxgTAtQgFAMgHAMIAFADQAnAdANAxQAOAxgTAtQgJAVgPASQAUAXAJAiQAMApgLAmQAZAGAWAQQAnAdANAyQAGASAAASQAiAFAcAUQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_13 = new cjs.Graphics().p("AmtLUQgvgVgWgrQgPgeAAgiQgSgDgSgJQgvgVgWgrQgWgrALgzIADgNQgLgDgMgGQgvgVgWgrQgWgrALgzQAIgnAYgcQgMgNgJgQQgWgrALgzQAGgdAPgXQgggUgSghQgWgrALgzQAKgyAkgfQAQgOATgIQgIgfAHgkQAKgyAkgfQAYgUAegIQgHgdAHggQAKgyAkgfQAigdAvgEQAMgiAbgXQAlgfA0gCQARgBAPADIAJgJQAlgfA0gCQAvgCAkAYQAlgeAygCQAygCAnAcQAOAKAKANIAHgGQAlgfA0gCQAzgCAnAcQAnAdANAyQAGATAAASIAWgCQAzgCAnAcQAiAZAOApIAWgCQAzgCAnAcQAnAdANAyQAHAYgBAWQAiAFAcAUQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgvAMgvgWQgvgVgWgrQgRgjADgnQgSgDgTgJQgvgVgWgrIgGgOQgqAIgrgUQgvgVgWgrQgPgeABgiQgsAIgrgUQgegOgUgWIgHAGQgbAWggAIQguAMgvgWIgSgJQgaAVggAIQgfAIgfgHIgJAJQgbAWggAIIgUAEIgCADQgNAfgaAWQgYAVgeAIQALAugSAqQgNAfgaAWQgRAOgTAIIAAABQAOAxgTAtQgFAMgHAMIAFADQAnAdANAxQAOAxgTAtQgJAVgPASQAUAXAJAiQAMApgLAmQAZAGAWAQQAnAdANAyQAGASAAASQAiAFAcAUQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_14 = new cjs.Graphics().p("AnzLUQgvgVgWgrQgPgeAAgiQgSgDgSgJQgvgVgWgrQgWgrALgzIADgNQgLgDgMgGQgvgVgWgrQgWgrALgzQAIgnAYgcQgMgNgJgQQgWgrALgzQAGgdAPgXQgggUgSghQgWgrALgzQAKgyAkgfQAQgOATgIQgIgfAHgkQAKgyAkgfQAYgUAegIQgHgdAHggQAKgyAkgfQAigdAvgEQAMgiAbgXQAlgfA0gCQARgBAPADIAJgJQAlgfA0gCQAvgCAkAYQAlgeAygCQAzgCAnAcQAOAKAJANIAHgGQAlgfA0gCQAzgCAnAcQAnAdANAyQAGATAAASIAWgCQAzgCAnAcQAiAZAOApIAWgCQAzgCAnAcQAnAdANAyQAHAYgBAWQAiAFAcAUQAnAdANAyQAHAXgBAWQAvAAAjAaQAnAdANAyQAOAxgTAsQgNAfgaAWQgbAWggAIQgvAMgvgWQgvgVgWgrQgRghADgmQgdgBgcgNQgvgVgWgrQgRgjADgnQgSgDgTgJQgvgVgWgrIgGgOQgqAIgrgUQgvgVgWgrQgPgeABgiQgsAIgrgUQgegOgUgWIgGAGQgbAWggAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgfgHIgJAJQgbAWggAIIgUAEIgCADQgNAfgaAWQgYAVgeAIQALAugSAqQgNAfgaAWQgRAOgTAIIAAABQAOAxgTAtQgFAMgHAMIAFADQAnAdANAxQAOAxgTAtQgJAVgPASQAUAXAJAiQAMApgLAmQAZAGAWAQQAnAdANAyQAGASAAASQAiAFAcAUQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_15 = new cjs.Graphics().p("AobLUQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgzIAEgNQgMgDgMgGQgugVgWgrQgWgrAKgzQAIgnAYgcQgMgNgIgQQgWgrAKgzQAGgdAPgXQgggUgRghQgWgrAKgzQAKgyAlgfQAQgOATgIQgJgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAkgfAzgCQA0gCAmAcQAnAdAOAyQAFATABASIAVgCQA0gCAmAcQAiAZAPApIAVgCQA0gCAmAcQAnAdAOAyQAHAYgBAWQAiAFAbAUQAnAdAOAyQAGAXAAAWQAuAAAjAaQAnAdAOAyQAKAjgHAhQAeANAUAYQAZAfAFAoQAGAogPAkQgUAxgwAYQglASgsgFQgrgFgggaQgggbgNgqQgLglAIgjQgugWgWgqQgRghACgmQgcgBgdgNQgugVgWgrQgSgjADgnQgSgDgTgJQgugVgWgrIgGgOQgrAIgrgUQgugVgWgrQgQgeABgiQgrAIgsgUQgdgOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgeAIgfgHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgTAIIAAABQAOAxgTAtQgFAMgIAMIAFADQAnAdAOAxQAOAxgTAtQgJAVgQASQAVAXAJAiQAMApgMAmQAaAGAVAQQAnAdAOAyQAFASABASQAiAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgQAEgQAAQgfAAgfgOg");
	var mask_11_graphics_16 = new cjs.Graphics().p("ApSLUQgvgVgWgrQgPgeAAgiQgSgDgSgJQgvgVgWgrQgWgrALgzIADgNQgLgDgMgGQgvgVgWgrQgWgrALgzQAIgnAYgcQgMgNgJgQQgWgrALgzQAGgdAPgXQgggUgSghQgWgrALgzQAKgyAkgfQARgOASgIQgIgfAHgkQAKgyAkgfQAYgUAegIQgHgdAHggQAKgyAkgfQAigdAvgEQAMgiAbgXQAlgfA0gCQARgBAPADIAJgJQAlgfA0gCQAvgCAkAYQAlgeAygCQAzgCAnAcQAOAKAKANIAHgGQAlgfAzgCQAzgCAnAcQAnAdANAyQAGATAAASIAWgCQAzgCAnAcQAiAZAOApIAWgCQAzgCAnAcQAnAdANAyQAHAYgBAWQAiAFAcAUQAnAdANAyQAHAXgBAWQAvAAAjAaQAnAdANAyQAKAjgGAhQAdANAVAYQAYAfAGAoQACAQgBAPQAkAIAcAaQAjAgAJAsQAIAngOAnQgOAogfAYQgpAhg4gDQg4gDglglQgggfgIgvQgDgSABgRQgigIgagVQgggbgMgqQgMglAIgjQgugWgWgqQgRghADgmQgdgBgcgNQgvgVgWgrQgRgjADgnQgSgDgTgJQgvgVgWgrIgGgOQgqAIgrgUQgvgVgWgrQgPgeABgiQgrAIgrgUQgegOgUgWIgHAGQgbAWggAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgfgHIgJAJQgbAWggAIIgUAEIgCADQgNAfgaAWQgYAVgeAIQALAugSAqQgNAfgaAWQgRAOgTAIIAAABQAOAxgTAtQgFAMgHAMIAFADQAnAdANAxQAOAxgTAtQgJAVgPASQAUAXAJAiQAMApgLAmQAZAGAWAQQAnAdANAyQAGASAAASQAiAFAcAUQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_17 = new cjs.Graphics().p("AqTLUQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgzIADgNQgLgDgMgGQgugVgWgrQgWgrAKgzQAIgnAYgcQgMgNgIgQQgWgrAKgzQAGgdAPgXQgggUgRghQgWgrAKgzQAKgyAlgfQAQgOASgIQgIgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAlgfAzgCQA0gCAlAcQAnAdAOAyQAFATABASIAVgCQA0gCAmAcQAiAZAPApIAVgCQA0gCAmAcQAnAdAOAyQAGAYgBAWQAjAFAbAUQAnAdAOAyQAGAXAAAWQAuAAAjAaQAnAdAOAyQAKAjgHAhQAeANAUAYQAZAfAFAoQADAQgBAPQAjAIAdAaQAjAgAJAsQAGAdgGAcQApACAhAYQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgvAMgvgWQgvgVgWgrQgWgrALgyQg3gEgkgkQgggfgIgvQgDgSABgRQghgIgagVQgggbgNgqQgLglAHgjQgtgWgWgqQgRghACgmQgcgBgdgNQgugVgWgrQgSgjADgnQgSgDgTgJQgugVgWgrIgGgOQgrAIgrgUQgugVgVgrQgQgeABgiQgrAIgsgUQgegOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgUAIIABABQAOAxgTAtQgGAMgHAMIAFADQAnAdAOAxQAOAxgTAtQgJAVgQASQAVAXAJAiQALApgLAmQAaAGAVAQQAnAdAOAyQAFASAAASQAjAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_18 = new cjs.Graphics().p("ArULUQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgzIADgNQgLgDgMgGQgugVgWgrQgWgrAKgzQAIgnAYgcQgMgNgIgQQgWgrAKgzQAGgdAPgXQgggUgRghQgWgrAKgzQAKgyAlgfQAQgOASgIQgIgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAlgfAzgCQA0gCAmAcQAmAdAOAyQAFATABASIAVgCQA0gCAmAcQAiAZAPApIAVgCQA0gCAmAcQAnAdAOAyQAGAYgBAWQAjAFAbAUQAnAdAOAyQAGAXAAAWQAuAAAjAaQAnAdAOAyQAKAjgHAhQAeANAUAYQAZAfAFAoQADAQgBAPQAjAIAdAaQAjAgAJAsQAGAdgGAcQApACAhAYQAnAdANAyQAIAcgDAbQApADAgAXQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgvAMgvgWQgvgVgWgrQgTgmAGgsQgYgDgYgLQgvgVgWgrQgWgrALgyQg3gEgkgkQgggfgIgvQgDgSABgRQghgIgagVQgggbgNgqQgLglAHgjQgtgWgWgqQgRghACgmQgcgBgdgNQgugVgWgrQgSgjADgnQgSgDgTgJQgugVgWgrIgGgOQgrAIgqgUQgugVgWgrQgQgeABgiQgrAIgsgUQgegOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgUAIIABABQAOAxgTAtQgGAMgHAMIAFADQAnAdAOAxQAOAxgTAtQgJAVgQASQAVAXAJAiQALApgLAmQAaAGAVAQQAnAdAOAyQAFASAAASQAjAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgQAEgRAAQgeAAgfgOg");
	var mask_11_graphics_19 = new cjs.Graphics().p("AOYMaQgvgVgWgrQgSgkAEgoQgNgDgOgHQgvgVgWgrQgTgmAGgsQgYgDgYgLQgvgVgWgrQgWgrALgyQg3gEgkgkQgggfgIgvQgDgSABgRQghgIgagVQgggbgNgqQgLglAHgjQgtgVgWgqQgRgiACgmQgcgBgdgNQgugVgWgrQgSgjADgnQgSgDgTgJQgugVgWgrIgGgOQgqAIgrgUQgugVgWgrQgQgeABgiQgrAIgsgUQgegOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgUAIIABABQAOAxgTAtQgGAMgHAMIAFADQAnAdAOAyQAOAwgTAtQgJAVgQASQAVAXAJAiQALApgLAmQAaAGAVAQQAnAdAOAyQAFASAAASQAjAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgvAMgvgWQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgzIADgNQgLgDgMgGQgugVgWgrQgWgrAKgzQAIgnAYgcQgMgNgIgQQgWgrAKgyQAGgdAPgXQgggVgRghQgWgrAKgzQAKgyAlgfQAQgOASgIQgIgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAlgfAzgCQA0gCAmAcQAnAdAOAyQAFATABASIAVgCQAzgCAmAcQAiAZAPApIAVgCQA0gCAmAcQAnAdAOAyQAGAYgBAWQAjAFAbAUQAnAdAOAyQAGAXAAAWQAuAAAjAaQAnAdAOAyQAKAjgHAhQAeANAUAZQAZAfAFAnQADAQgBAPQAjAIAdAaQAjAgAJAsQAGAdgGAcQApACAhAYQAnAdANAyQAIAcgDAbQApADAgAXQAnAdANAyQAHAYgBAYQAcAGAYARQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgRAEgQAAQgfAAgegOg");
	var mask_11_graphics_20 = new cjs.Graphics().p("APFNlQgvgVgWgrQgTgmAGgsIgIgEQgvgVgWgrQgSgkAEgoQgNgDgOgHQgvgVgWgrQgTgmAGgsQgYgDgYgLQgvgVgWgrQgWgrALgyQg3gEgkgkQgggfgIgvQgDgSABgRQghgIgagVQgggbgNgqQgLgkAHgjQgtgWgWgqQgRgiACgmQgcgBgdgNQgugVgWgrQgSgjADgnQgSgDgTgJQgugVgVgrIgGgOQgrAIgrgUQgugVgWgrQgQgeABgiQgrAIgsgUQgegOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgUAIIABABQAOAxgTAtQgGAMgHAMIAFADQAnAdAOAyQAOAxgTAtQgJAUgQASQAVAXAJAiQALApgLAmQAaAGAVAQQAnAdAOAyQAFASAAASQAjAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgvAMgvgWQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgzIADgNQgLgDgMgGQgugVgWgrQgWgrAKgzQAIgnAYgcQgMgNgIgQQgWgqAKgzQAGgdAPgXQgggVgRghQgWgrAKgzQAKgyAlgfQAQgOASgIQgIgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAlgfAzgCQA0gCAmAcQAnAdAOAyQAFATABASIAVgCQAzgCAmAcQAiAZAPApIAVgCQA0gCAmAcQAnAdAOAyQAGAYgBAWQAjAFAbAUQAnAdAOAyQAGAXAAAWQAuAAAjAaQAnAdAOAyQAKAjgHAhQAeANAUAZQAZAfAFAoQADAQgBAPQAjAIAdAZQAjAgAJAsQAGAdgGAcQApACAhAYQAnAdANAyQAIAcgDAbQApADAgAXQAnAdANAyQAHAYgBAYQAcAGAYARQAnAdANAyQAIAcgDAaQASAGAPALQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgRAEgQAAQgfAAgegOg");
	var mask_11_graphics_21 = new cjs.Graphics().p("AQGOrQgvgVgWgrQgPgeAAggQgXgDgXgLQgvgVgWgrQgTgmAGgsIgIgEQgvgVgWgrQgSgkAEgoQgNgDgOgHQgvgVgWgrQgTgmAGgsQgYgDgYgLQgvgVgWgrQgWgrALgyQg3gEgkgkQgggfgIgvQgDgSABgRQghgIgagVQgggagNgqQgLglAHgjQgtgWgWgqQgRgiACgmQgcgBgdgNQgugVgWgrQgSgjADgnQgSgDgSgJQgugVgWgrIgGgOQgrAIgrgUQgugVgWgrQgQgeABgiQgrAIgsgUQgegOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgUAIIABABQAOAxgTAtQgGAMgHAMIAFADQAnAdAOAyQAOAxgTAtQgJAVgQASQAVAXAJAhQALApgLAmQAaAGAVAQQAnAdAOAyQAFASAAASQAjAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgvAMgvgWQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgzIADgNQgLgDgMgGQgugVgWgrQgWgrAKgzQAIgmAYgcQgMgNgIgQQgWgrAKgzQAGgdAPgXQgggVgRghQgWgrAKgzQAKgyAlgfQAQgOASgIQgIgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAlgfAzgCQA0gCAmAcQAnAdAOAyQAFATABASIAVgCQA0gCAmAcQAhAZAPApIAVgCQA0gCAmAcQAnAdAOAyQAGAYgBAWQAjAFAbAUQAnAdAOAyQAGAXAAAWQAuAAAjAaQAnAdAOAyQAKAjgHAhQAeANAUAZQAZAfAFAoQADAQgBAPQAjAIAdAaQAjAgAJArQAGAdgGAcQApACAhAYQAnAdANAyQAIAcgDAbQApADAgAXQAnAdANAyQAHAYgBAYQAcAGAYARQAnAdANAyQAIAcgDAaQASAGAPALQAnAdANAyQAFASABARQAoADAgAXQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgRAEgQAAQgfAAgegOg");
	var mask_11_graphics_22 = new cjs.Graphics().p("ARWP2QgvgVgWgrQgRgiADgnQgnAFgmgSQgvgVgWgrQgPgeAAggQgXgDgXgLQgvgVgWgrQgTgmAGgsIgIgEQgvgVgWgrQgSgkAEgoQgNgDgOgHQgvgVgWgrQgTgmAGgsQgYgDgYgLQgvgVgWgrQgWgrALgyQg3gEgkgkQgggfgIguQgDgSABgRQghgIgagVQgggbgNgqQgLglAHgjQgtgWgWgqQgRgiACgmQgcgBgdgNQgtgVgWgrQgSgjADgnQgSgDgTgJQgugVgWgrIgGgOQgrAIgrgUQgugVgWgrQgQgeABgiQgrAIgsgUQgegOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgUAIIABABQAOAxgTAtQgGAMgHAMIAFADQAnAdAOAyQAOAxgTAtQgJAVgQASQAVAXAJAiQALApgLAlQAaAGAVAQQAnAdAOAyQAFASAAASQAjAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgvAMgvgWQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgzIADgNQgLgDgMgGQgugVgWgrQgWgrAKgyQAIgnAYgcQgMgNgIgQQgWgrAKgzQAGgdAPgXQgggVgRghQgWgrAKgzQAKgyAlgfQAQgOASgIQgIgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAlgfAzgCQA0gCAmAcQAnAdAOAyQAFATABASIAVgCQA0gCAmAcQAiAZAPApIAVgCQAzgCAmAcQAnAdAOAyQAGAYgBAWQAjAFAbAUQAnAdAOAyQAGAXAAAWQAuAAAjAaQAnAdAOAyQAKAjgHAhQAeANAUAZQAZAfAFAoQADAQgBAPQAjAIAdAaQAjAgAJAsQAGAdgGAcQApACAhAXQAnAdANAyQAIAcgDAbQApADAgAXQAnAdANAyQAHAYgBAYQAcAGAYARQAnAdANAyQAIAcgDAaQASAGAPALQAnAdANAyQAFASABARQAoADAgAXQAnAdANAyQAHAXgBAXIAMgBQAzgCAnAcQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgRAEgQAAQgfAAgegOg");
	var mask_11_graphics_23 = new cjs.Graphics().p("AScQ8QgvgVgWgrQgPgdAAghQgcgBgcgNQgvgVgWgrQgRgiADgnQgnAFgmgSQgvgVgWgrQgPgeAAggQgXgDgXgLQgvgVgWgrQgTgmAGgsIgIgEQgvgVgWgrQgSgkAEgoQgNgDgOgHQgvgVgWgrQgTgmAGgsQgYgDgYgLQgvgVgWgrQgWgrALgyQg3gEgkgjQgggfgIgvQgDgSABgRQghgIgagVQgggbgNgqQgLglAHgjQgtgWgWgqQgRgiACgmQgbgBgdgNQgugVgWgrQgSgjADgnQgSgDgTgJQgugVgWgrIgGgOQgrAIgrgUQgugVgWgrQgQgeABgiQgrAIgsgUQgegOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgUAIIABABQAOAxgTAtQgGAMgHAMIAFADQAnAdAOAyQAOAxgTAtQgJAVgQASQAVAXAJAiQALApgLAmQAaAGAVAQQAnAcAOAyQAFASAAASQAjAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgvAMgvgWQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgzIADgNQgLgDgMgGQgugVgWgqQgWgrAKgzQAIgnAYgcQgMgNgIgQQgWgrAKgzQAGgdAPgXQgggVgRghQgWgrAKgzQAKgyAlgfQAQgOASgIQgIgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAlgfAzgCQA0gCAmAcQAnAdAOAyQAFATABASIAVgCQA0gCAmAcQAiAZAPApIAVgCQA0gCAmAcQAmAdAOAyQAGAYgBAWQAjAFAbAUQAnAdAOAyQAGAXAAAWQAuAAAjAaQAnAdAOAyQAKAjgHAhQAeANAUAZQAZAfAFAoQADAQgBAPQAjAIAdAaQAjAgAJAsQAGAdgGAcQApACAhAYQAnAdANAxQAIAcgDAbQApADAgAXQAnAdANAyQAHAYgBAYQAcAGAYARQAnAdANAyQAIAcgDAaQASAGAPALQAnAdANAyQAFASABARQAoADAgAXQAnAdANAyQAHAXgBAXIAMgBQAzgCAnAcQAnAdANAyQAFASABARQAuAAAkAaQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgRAEgQAAQgfAAgegOg");
	var mask_11_graphics_24 = new cjs.Graphics().p("AT2RuQgvgVgWgrQgHgOgDgOIgHACQgvAMgvgWQgvgVgWgrQgPgdAAghQgcgBgcgNQgvgVgWgrQgRgiADgnQgnAFgmgSQgvgVgWgrQgPgeAAggQgXgDgXgLQgvgVgWgrQgTgmAGgsIgIgEQgvgVgWgrQgSgkAEgoQgNgDgOgHQgvgVgWgrQgTgmAGgsQgYgDgYgLQgvgVgWgrQgWgrALgxQg3gEgkgkQgggfgIgvQgDgSABgRQghgIgagVQgggbgNgqQgLglAHgjQgsgWgWgqQgRgiACgmQgcgBgdgNQgugVgWgrQgSgjADgnQgSgDgTgJQgugVgWgrIgGgOQgrAIgrgUQgugVgWgrQgQgeABgiQgrAIgsgUQgegOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgUAIIABABQAOAxgTAtQgGAMgHAMIAFADQAnAdAOAyQAOAxgTAtQgJAVgQASQAVAXAJAiQALApgLAmQAaAGAVAQQAnAdAOAxQAFASAAASQAjAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgvAMgvgWQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgzIADgNQgLgDgMgFQgugVgWgrQgWgrAKgzQAIgnAYgcQgMgNgIgQQgWgrAKgzQAGgdAPgXQgggVgRghQgWgrAKgzQAKgyAlgfQAQgOASgIQgIgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAlgfAzgCQA0gCAmAcQAnAdAOAyQAFATABASIAVgCQA0gCAmAcQAiAZAPApIAVgCQA0gCAmAcQAnAdAOAyQAGAYgBAWQAjAFAaAUQAnAdAOAyQAGAXAAAWQAuAAAjAaQAnAdAOAyQAKAjgHAhQAeANAUAZQAZAfAFAoQADAQgBAPQAjAIAdAaQAjAgAJAsQAGAdgGAcQApACAhAYQAnAdANAyQAIAbgDAbQApADAgAXQAnAdANAyQAHAYgBAYQAcAGAYARQAnAdANAyQAIAcgDAaQASAGAPALQAnAdANAyQAFASABARQAoADAgAXQAnAdANAyQAHAXgBAXIAMgBQAzgCAnAcQAnAdANAyQAFASABARQAuAAAkAaQAnAdANAyIAAABQASgFAUgBQAzgCAnAcQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgRAEgQAAQgfAAgegOg");
	var mask_11_graphics_25 = new cjs.Graphics().p("AVQSRQgvgVgWgrIAAgBIgRAFQgvAMgvgWQgvgVgWgrQgHgOgDgOIgHACQgvAMgvgWQgvgVgWgrQgPgdAAghQgcgBgcgNQgvgVgWgrQgRgiADgnQgnAFgmgSQgvgVgWgrQgPgeAAggQgXgDgXgLQgvgVgWgrQgTgmAGgsIgIgEQgvgVgWgrQgSgkAEgoQgNgDgOgHQgvgVgWgrQgTgmAGgsQgYgDgYgLQgvgVgWgrQgWgrALgxQg3gEgkgkQgggfgIgvQgDgSABgRQgggIgagVQgggbgNgqQgLglAHgjQgtgWgWgqQgRgiACgmQgcgBgdgNQgugVgWgrQgSgjADgnQgSgDgTgJQgugVgWgrIgGgOQgrAIgrgUQgugVgWgrQgQgeABgiQgrAIgsgUQgegOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgUAIIABABQAOAxgTAtQgGAMgHAMIAFADQAnAdAOAyQAOAxgTAtQgJAVgQASQAVAXAJAiQALApgLAmQAaAGAVAQQAnAdAOAyQAFASAAARQAjAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgvAMgvgWQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgyIADgNQgLgDgMgGQgugVgWgrQgWgrAKgzQAIgnAYgcQgMgNgIgQQgWgrAKgzQAGgdAPgXQgggVgRghQgWgrAKgzQAKgyAlgfQAQgOASgIQgIgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAlgfAzgCQA0gCAmAcQAnAdAOAyQAFATABASIAVgCQA0gCAmAcQAiAZAPApIAVgCQA0gCAmAcQAnAdAOAyQAGAYgBAWQAjAFAbAUQAnAdAOAyQAGAXAAAWQAtAAAjAaQAnAdAOAyQAKAjgHAhQAeANAUAZQAZAfAFAoQADAQgBAPQAjAIAdAaQAjAgAJAsQAGAdgGAcQApACAhAYQAnAdANAyQAIAcgDAbQApACAgAXQAnAdANAyQAHAYgBAYQAcAGAYARQAnAdANAyQAIAcgDAaQASAGAPALQAnAdANAyQAFASABARQAoADAgAXQAnAdANAyQAHAXgBAXIAMgBQAzgCAnAcQAnAdANAyQAFASABARQAuAAAkAaQAnAdANAyIAAABQASgFAUgBQAzgCAnAcQAcAVAPAgQAWgIAZgBQAzgCAnAcQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgRAEgQAAQgfAAgegOg");
	var mask_11_graphics_26 = new cjs.Graphics().p("AWvSRQgUgJgPgNIgCACQgbAWggAIQgvAMgvgWQgvgVgWgrIAAgBIgRAFQgvAMgvgWQgvgVgWgrQgHgOgDgOIgHACQgvAMgvgWQgvgVgWgrQgPgdAAghQgcgBgcgNQgvgVgWgrQgRgiADgnQgnAFgmgSQgvgVgWgrQgPgeAAggQgXgDgXgLQgvgVgWgrQgTgmAGgsIgIgEQgvgVgWgrQgSgkAEgoQgNgDgOgHQgvgVgWgrQgTgmAGgsQgYgDgYgLQgvgVgWgrQgWgrALgxQg3gEgjgkQgggfgIgvQgDgSABgRQghgIgagVQgggbgNgqQgLglAHgjQgtgWgWgqQgRgiACgmQgcgBgdgNQgugVgWgrQgSgjADgnQgSgDgTgJQgugVgWgrIgGgOQgrAIgrgUQgugVgWgrQgQgeABgiQgrAIgsgUQgegOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgUAIIABABQAOAxgTAtQgGAMgHAMIAFADQAnAdAOAyQAOAxgTAtQgJAVgQASQAVAXAJAiQALApgLAmQAaAGAVAQQAnAdAOAyQAFASAAARQAjAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgvAMgvgWQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgyIADgNQgLgDgMgGQgugVgWgrQgWgrAKgzQAIgnAYgcQgMgNgIgQQgWgrAKgzQAGgdAPgXQgggVgRghQgWgrAKgzQAKgyAlgfQAQgOASgIQgIgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAlgfAzgCQA0gCAmAcQAnAdAOAyQAFATABASIAVgCQA0gCAmAcQAiAZAPApIAVgCQA0gCAmAcQAnAdAOAyQAGAYgBAWQAjAFAbAUQAnAdAOAyQAGAXAAAWQAuAAAjAaQAmAdAOAyQAKAjgHAhQAeANAUAZQAZAfAFAoQADAQgBAPQAjAIAdAaQAjAgAJAsQAGAdgGAcQApACAhAYQAnAdANAyQAIAcgDAbQApACAgAXQAnAdANAyQAHAYgBAYQAcAGAYARQAnAdANAyQAIAcgDAaQASAGAPALQAnAdANAyQAFASABARQAoADAgAXQAnAdANAyQAHAXgBAXIAMgBQAzgCAnAcQAnAdANAyQAFASABARQAuAAAkAaQAnAdANAyIAAABQASgFAUgBQAzgCAnAcQAcAVAPAgQAWgIAZgBQAzgCAnAcIAJAIIACgBQAlgfA0gCQAzgCAnAcQAnAdANAyQAOAxgTAtQgNAfgaAWQgbAWggAIQgRAEgQAAQgfAAgegOg");
	var mask_11_graphics_27 = new cjs.Graphics().p("AWRSRQgUgJgPgNIgCACQgbAWggAIQgvAMgvgWQgvgVgWgrIAAgBIgRAFQgvAMgvgWQgvgVgWgrQgHgOgDgOIgHACQgvAMgvgWQgvgVgWgrQgPgdAAghQgcgBgcgNQgvgVgWgrQgRgiADgnQgnAFgmgSQgvgVgWgrQgPgeAAggQgXgDgXgLQgvgVgWgrQgTgmAGgsIgIgEQgvgVgWgrQgSgkAEgoQgNgDgOgHQgvgVgWgrQgTgmAGgsQgYgDgYgLQgvgVgWgrQgWgrALgxQg2gEgkgkQgggfgIgvQgDgSABgRQghgIgagVQgggbgNgqQgLglAHgjQgtgWgWgqQgRgiACgmQgcgBgdgNQgugVgWgrQgSgjADgnQgSgDgTgJQgugVgWgrIgGgOQgrAIgrgUQgugVgWgrQgQgeABgiQgrAIgsgUQgegOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgUAIIABABQAOAxgTAtQgGAMgHAMIAFADQAnAdAOAyQAOAxgTAtQgJAVgQASQAVAXAJAiQALApgLAmQAaAGAVAQQAnAdAOAyQAFASAAARQAjAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgvAMgvgWQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgyIADgNQgLgDgMgGQgugVgWgrQgWgrAKgzQAIgnAYgcQgMgNgIgQQgWgrAKgzQAGgdAPgXQgggVgRghQgWgrAKgzQAKgyAlgfQAQgOASgIQgIgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAlgfAzgCQA0gCAmAcQAnAdAOAyQAFATABASIAVgCQA0gCAmAcQAiAZAPApIAVgCQA0gCAmAcQAnAdAOAyQAGAYgBAWQAjAFAbAUQAnAdAOAyQAGAXAAAWQAuAAAjAaQAnAdAOAyQAJAjgGAhQAdANAUAZQAZAfAFAoQADAQgBAPQAjAIAdAaQAjAgAJAsQAGAdgGAcQApACAhAYQAnAdANAyQAIAcgDAbQApACAgAXQAnAdANAyQAHAYgBAYQAcAGAYARQAnAdANAyQAIAcgDAaQASAGAPALQAnAdANAyQAFASABARQAoADAgAXQAnAdANAyQAHAXgBAXIAMgBQAzgCAnAcQAnAdANAyQAFASABARQAuAAAkAaQAnAdANAyIAAABQASgFAUgBQAzgCAnAcQAcAVAPAgQAWgIAZgBQAzgCAnAcIAJAIIACgBQAMgKAMgHQgVgqALgyQAKgyAkgfQAlgfA0gCQAzgCAnAcQAnAdANAyQAOAxgTAtQgNAfgaAWQgMAKgNAHQAGAMADAOQAOAxgTAtQgNAfgaAWQgbAWggAIQgRAEgQAAQgfAAgegOg");
	var mask_11_graphics_28 = new cjs.Graphics().p("AWRSRQgUgJgPgNIgCACQgbAWggAIQgvAMgvgWQgvgVgWgrIAAgBIgRAFQgvAMgvgWQgvgVgWgrQgHgOgDgOIgHACQgvAMgvgWQgvgVgWgrQgPgdAAghQgcgBgcgNQgvgVgWgrQgRgiADgnQgnAFgmgSQgvgVgWgrQgPgeAAggQgXgDgXgLQgvgVgWgrQgTgmAGgsIgIgEQgvgVgWgrQgSgkAEgoQgNgDgOgHQgvgVgWgrQgTgmAGgsQgYgDgYgLQgvgVgWgrQgWgrALgxQg2gEgkgkQgggfgIgvQgDgSABgRQghgIgagVQgggbgNgqQgLglAHgjQgtgWgWgqQgRgiACgmQgcgBgdgNQgugVgWgrQgSgjADgnQgSgDgTgJQgugVgWgrIgGgOQgrAIgrgUQgugVgWgrQgQgeABgiQgrAIgsgUQgegOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgUAIIABABQAOAxgTAtQgGAMgHAMIAFADQAnAdAOAyQAOAxgTAtQgJAVgQASQAVAXAJAiQALApgLAmQAaAGAVAQQAnAdAOAyQAFASAAARQAjAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgvAMgvgWQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgyIADgNQgLgDgMgGQgugVgWgrQgWgrAKgzQAIgnAYgcQgMgNgIgQQgWgrAKgzQAGgdAPgXQgggVgRghQgWgrAKgzQAKgyAlgfQAQgOASgIQgIgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAlgfAzgCQA0gCAmAcQAnAdAOAyQAFATABASIAVgCQA0gCAmAcQAiAZAPApIAVgCQA0gCAmAcQAnAdAOAyQAGAYgBAWQAjAFAbAUQAnAdAOAyQAGAXAAAWQAuAAAjAaQAnAdAOAyQAJAjgGAhQAdANAUAZQAZAfAFAoQADAQgBAPQAjAIAdAaQAjAgAJAsQAGAdgGAcQApACAhAYQAnAdANAyQAIAcgDAbQApACAgAXQAnAdANAyQAHAYgBAYQAcAGAYARQAnAdANAyQAIAcgDAaQASAGAPALQAnAdANAyQAFASABARQAoADAgAXQAnAdANAyQAHAXgBAXIAMgBQAzgCAnAcQAnAdANAyQAFASABARQAuAAAkAaQAnAdANAyIAAABQASgFAUgBQAzgCAnAcQAcAVAPAgQAWgIAZgBQAzgCAnAcIAJAIIACgBQAMgKAMgHQgVgqALgyQAEgXALgTQgNgEgMgGQgvgVgWgrQgWgrALgzQAKgyAkgfQAlgfA0gCQAzgCAnAcQAnAdANAyQAOAxgTAtIgHAOQAbAHAXAQQAnAdANAyQAOAxgTAtQgNAfgaAWQgMAKgNAHQAGAMADAOQAOAxgTAtQgNAfgaAWQgbAWggAIQgRAEgQAAQgfAAgegOg");
	var mask_11_graphics_29 = new cjs.Graphics().p("AWRSRQgUgJgPgNIgCACQgbAWggAIQgvAMgvgWQgvgVgWgrIAAgBIgRAFQgvAMgvgWQgvgVgWgrQgHgOgDgOIgHACQgvAMgvgWQgvgVgWgrQgPgdAAghQgcgBgcgNQgvgVgWgrQgRgiADgnQgnAFgmgSQgvgVgWgrQgPgeAAggQgXgDgXgLQgvgVgWgrQgTgmAGgsIgIgEQgvgVgWgrQgSgkAEgoQgNgDgOgHQgvgVgWgrQgTgmAGgsQgYgDgYgLQgvgVgWgrQgWgrALgxQg2gEgkgkQgggfgIgvQgDgSABgRQghgIgagVQgggbgNgqQgLglAHgjQgtgWgWgqQgRgiACgmQgcgBgdgNQgugVgWgrQgSgjADgnQgSgDgTgJQgugVgWgrIgGgOQgrAIgrgUQgugVgWgrQgQgeABgiQgrAIgsgUQgegOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgUAIIABABQAOAxgTAtQgGAMgHAMIAFADQAnAdAOAyQAOAxgTAtQgJAVgQASQAVAXAJAiQALApgLAmQAaAGAVAQQAnAdAOAyQAFASAAARQAjAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgvAMgvgWQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgyIADgNQgLgDgMgGQgugVgWgrQgWgrAKgzQAIgnAYgcQgMgNgIgQQgWgrAKgzQAGgdAPgXQgggVgRghQgWgrAKgzQAKgyAlgfQAQgOASgIQgIgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAlgfAzgCQA0gCAmAcQAnAdAOAyQAFATABASIAVgCQA0gCAmAcQAiAZAPApIAVgCQA0gCAmAcQAnAdAOAyQAGAYgBAWQAjAFAbAUQAnAdAOAyQAGAXAAAWQAuAAAjAaQAnAdAOAyQAJAjgGAhQAdANAUAZQAZAfAFAoQADAQgBAPQAjAIAdAaQAjAgAJAsQAGAdgGAcQApACAhAYQAnAdANAyQAIAcgDAbQApACAgAXQAnAdANAyQAHAYgBAYQAcAGAYARQAnAdANAyQAIAcgDAaQASAGAPALQAnAdANAyQAFASABARQAoADAgAXQAnAdANAyQAHAXgBAXIAMgBQAzgCAnAcQAnAdANAyQAFASABARQAuAAAkAaQAnAdANAyIAAABQASgFAUgBQAzgCAnAcQAcAVAPAgQAWgIAZgBQAzgCAnAcIAJAIIACgBQAMgKAMgHQgVgqALgyQAEgXALgTQgNgEgMgGQgvgVgWgrQgWgrALgzQAFgcAPgXQgNAGgNADQgvAMgvgWQgvgVgWgrQgWgrALgzQAKgyAkgfQAlgfA0gCQAzgCAnAcQAnAdANAyQAOAxgTAtQgFAMgHALQAZgLAegBQAzgCAnAcQAnAdANAyQAOAxgTAtIgHAOQAbAHAXAQQAnAdANAyQAOAxgTAtQgNAfgaAWQgMAKgNAHQAGAMADAOQAOAxgTAtQgNAfgaAWQgbAWggAIQgRAEgQAAQgfAAgegOg");
	var mask_11_graphics_30 = new cjs.Graphics().p("AWRSRQgUgJgPgNIgCACQgbAWggAIQgvAMgvgWQgvgVgWgrIAAgBIgRAFQgvAMgvgWQgvgVgWgrQgHgOgDgOIgHACQgvAMgvgWQgvgVgWgrQgPgdAAghQgcgBgcgNQgvgVgWgrQgRgiADgnQgnAFgmgSQgvgVgWgrQgPgeAAggQgXgDgXgLQgvgVgWgrQgTgmAGgsIgIgEQgvgVgWgrQgSgkAEgoQgNgDgOgHQgvgVgWgrQgTgmAGgsQgYgDgYgLQgvgVgWgrQgWgrALgxQg2gEgkgkQgggfgIgvQgDgSABgRQghgIgagVQgggbgNgqQgLglAHgjQgtgWgWgqQgRgiACgmQgcgBgdgNQgugVgWgrQgSgjADgnQgSgDgTgJQgugVgWgrIgGgOQgrAIgrgUQgugVgWgrQgQgeABgiQgrAIgsgUQgegOgUgWIgHAGQgaAWghAIQgvAMgvgWIgSgJQgaAVggAIQgfAIgegHIgKAJQgaAWghAIIgUAEIgBADQgNAfgbAWQgYAVgeAIQAMAugSAqQgNAfgbAWQgQAOgUAIIABABQAOAxgTAtQgGAMgHAMIAFADQAnAdAOAyQAOAxgTAtQgJAVgQASQAVAXAJAiQALApgLAmQAaAGAVAQQAnAdAOAyQAFASAAARQAjAFAbAUQAnAdAOAyQAOAxgTAtQgNAfgbAWQgaAWghAIQgvAMgvgWQgugVgWgrQgQgeABgiQgSgDgTgJQgugVgWgrQgWgrAKgyIADgNQgLgDgMgGQgugVgWgrQgWgrAKgzQAIgnAYgcQgMgNgIgQQgWgrAKgzQAGgdAPgXQgggVgRghQgWgrAKgzQAKgyAlgfQAQgOASgIQgIgfAHgkQAKgyAlgfQAXgUAegIQgGgdAGggQAKgyAlgfQAigdAugEQAMgiAcgXQAlgfAzgCQARgBAPADIAKgJQAlgfAzgCQAvgCAkAYQAlgeAygCQA0gCAmAcQAOAKALANIAHgGQAlgfAzgCQA0gCAmAcQAnAdAOAyQAFATABASIAVgCQA0gCAmAcQAiAZAPApIAVgCQA0gCAmAcQAnAdAOAyQAGAYgBAWQAjAFAbAUQAnAdAOAyQAGAXAAAWQAuAAAjAaQAnAdAOAyQAJAjgGAhQAdANAUAZQAZAfAFAoQADAQgBAPQAjAIAdAaQAjAgAJAsQAGAdgGAcQApACAhAYQAnAdANAyQAIAcgDAbQApACAgAXQAnAdANAyQAHAYgBAYQAcAGAYARQAnAdANAyQAIAcgDAaQASAGAPALQAnAdANAyQAFASABARQAoADAgAXQAnAdANAyQAHAXgBAXIAMgBQAzgCAnAcQAnAdANAyQAFASABARQAuAAAkAaQAnAdANAyIAAABQASgFAUgBQAzgCAnAcQAcAVAPAgQAWgIAZgBQAzgCAnAcIAJAIIACgBQAMgKAMgHQgVgqALgyQAEgXALgTQgNgEgMgGQgvgVgWgrQgWgrALgzQAFgcAPgXQgNAGgNADQgvAMgvgWQgvgVgWgrQgTgmAGgtQgnAFgngSQgvgVgWgrQgWgrALgzQAKgyAkgfQAlgfA0gCQAzgCAnAcQAnAdANAyQAIAdgDAbIANgBQAzgCAnAcQAnAdANAyQAOAxgTAtQgFAMgHALQAZgLAegBQAzgCAnAcQAnAdANAyQAOAxgTAtIgHAOQAbAHAXAQQAnAdANAyQAOAxgTAtQgNAfgaAWQgMAKgNAHQAGAMADAOQAOAxgTAtQgNAfgaAWQgbAWggAIQgRAEgQAAQgfAAgegOg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:97.0024,y:213.0188}).wait(1).to({graphics:mask_11_graphics_1,x:91.0024,y:206.0188}).wait(1).to({graphics:mask_11_graphics_2,x:86.0024,y:197.0188}).wait(1).to({graphics:mask_11_graphics_3,x:86.0024,y:187.5188}).wait(1).to({graphics:mask_11_graphics_4,x:84.0024,y:177.5188}).wait(1).to({graphics:mask_11_graphics_5,x:84.0024,y:169.0188}).wait(1).to({graphics:mask_11_graphics_6,x:84.0024,y:160.5188}).wait(1).to({graphics:mask_11_graphics_7,x:86.0024,y:156.0188}).wait(1).to({graphics:mask_11_graphics_8,x:92.5024,y:154.0188}).wait(1).to({graphics:mask_11_graphics_9,x:101.0024,y:153.5188}).wait(1).to({graphics:mask_11_graphics_10,x:111.5024,y:153.5188}).wait(1).to({graphics:mask_11_graphics_11,x:120.0024,y:153.5188}).wait(1).to({graphics:mask_11_graphics_12,x:128.0024,y:153.5188}).wait(1).to({graphics:mask_11_graphics_13,x:134.0024,y:153.5188}).wait(1).to({graphics:mask_11_graphics_14,x:141.0024,y:153.5188}).wait(1).to({graphics:mask_11_graphics_15,x:144.9661,y:153.5188}).wait(1).to({graphics:mask_11_graphics_16,x:150.5008,y:153.5188}).wait(1).to({graphics:mask_11_graphics_17,x:156.9774,y:153.5188}).wait(1).to({graphics:mask_11_graphics_18,x:163.4774,y:153.5188}).wait(1).to({graphics:mask_11_graphics_19,x:168.9774,y:160.5188}).wait(1).to({graphics:mask_11_graphics_20,x:173.4774,y:168.0188}).wait(1).to({graphics:mask_11_graphics_21,x:179.9774,y:175.0188}).wait(1).to({graphics:mask_11_graphics_22,x:187.9774,y:182.5188}).wait(1).to({graphics:mask_11_graphics_23,x:194.9774,y:189.5188}).wait(1).to({graphics:mask_11_graphics_24,x:203.9774,y:194.5188}).wait(1).to({graphics:mask_11_graphics_25,x:212.9774,y:198.0188}).wait(1).to({graphics:mask_11_graphics_26,x:222.4774,y:198.0188}).wait(1).to({graphics:mask_11_graphics_27,x:225.4774,y:198.0188}).wait(1).to({graphics:mask_11_graphics_28,x:225.4774,y:198.0188}).wait(1).to({graphics:mask_11_graphics_29,x:225.4774,y:198.0188}).wait(1).to({graphics:mask_11_graphics_30,x:225.4774,y:198.0188}).wait(120));

	// lady01
	this.instance_20 = new lib.CachedBmp_9();
	this.instance_20.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(150));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(168.1,330.3,327.4,683.5);
// library properties:
lib.properties = {
	id: 'ED2E8C8AE615CF4AA8B79451A5F55003',
	width: 474,
	height: 506,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/手繪lady_atlas_1.png?1734358668479", id:"手繪lady_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['ED2E8C8AE615CF4AA8B79451A5F55003'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;