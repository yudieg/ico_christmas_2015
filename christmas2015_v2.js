(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.christmas2015_v2 = function() {
	this.initialize();

	// sound
	this.instance = new lib.sound();
	this.instance.setTransform(-112.1,427.7,1,1,0,0,0,14,1);

	// backside
	this.backside = new lib.backside();
	this.backside.setTransform(402.7,300,1,1,0,0,0,250,300);

	// speckles
	this.instance_1 = new lib.noise();
	this.instance_1.setTransform(-12.6,-175.3,0.804,0.804);

	// tree
	this.tree = new lib.tree();
	this.tree.setTransform(402,73.3,1,1,0,0,0,402,73.3);

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF3E7").s().p("EAnEAu4MhOHAAAMAAAhdvMBOHAAAMAAABdv").cp();
	this.shape.setTransform(402.1,300);

	this.addChild(this.shape,this.tree,this.instance_1,this.backside,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-139.2,-175.3,964.5,1005.1);


// symbols:
(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2083,2500);


(lib.Christi = function() {
	this.initialize(img.Christi);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,79);


(lib.Collon = function() {
	this.initialize(img.Collon);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,67);


(lib.Danna = function() {
	this.initialize(img.Danna);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,97);


(lib.from_us = function() {
	this.initialize(img.from_us);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,38);


(lib.greenBackground = function() {
	this.initialize(img.greenBackground);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1440);


(lib.Jane = function() {
	this.initialize(img.Jane);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,90);


(lib.Lang = function() {
	this.initialize(img.Lang);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,72);


(lib.larry = function() {
	this.initialize(img.larry);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,83);


(lib.Mickey = function() {
	this.initialize(img.Mickey);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,74);


(lib.mike = function() {
	this.initialize(img.mike);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,100);


(lib.mindi = function() {
	this.initialize(img.mindi);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,90);


(lib.Natalie = function() {
	this.initialize(img.Natalie);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,63);


(lib.noise = function() {
	this.initialize(img.noise);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1042,1250);


(lib.tawnya = function() {
	this.initialize(img.tawnya);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,79);





(lib.tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// star
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C88C31").s().p("AguARQgKAAgBgKQAAgEACgDQADgCAEgBIBegMQAEgBAEADQADACABAFQAAAEgCACQgDADgEABIheANIgBAA").cp();
	this.shape.setTransform(377.6,76.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C88C31").s().p("AgvAoQgFAAgEgFQgCgEABgEQABgEAEgDIBdg6QAEgCAFABQAEABACAEQADAEgBAEQgBAEgEADIheA6QgDABgDAAIAAAA").cp();
	this.shape_1.setTransform(378.9,82.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C88C31").s().p("AgBAwQgDAIgIAAIgDAAQgEgBgDgEQgCgEABgFIAahaQABgEAEgCQAEgCAEABQAEABADAEQACAEgBAEIgZBa").cp();
	this.shape_2.setTransform(398.5,93.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C88C31").s().p("AACg4IAQBuQABAEgDAEQgDADgDABIgDAAQgEAAgDgCQgBgDAAgEIgRhuQAAgEACgEQADgDAEgBQAFgBAEADQABACABAFIAAAA").cp();
	this.shape_3.setTransform(404.4,94.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C88C31").s().p("AAoAlQgDAAgDgCIhOgzQgEgDgBgEQgBgEACgEQADgEAEgBQAFgBAEACIBOAzQAEADAAAEQABAFgCAEQgEAFgFAAIAAAA").cp();
	this.shape_4.setTransform(422.7,82.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C88C31").s().p("AA3ATIgCAAIhtgRQgFgBgCgBQgDgEABgFQABgEADgDQAEgCAEAAIBuARQAEABADACQADAEgBAEQgBAEgDADQgDACgEAAIAAAA").cp();
	this.shape_5.setTransform(425.6,77.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C88C31").s().p("AAxgZQgBAEgDADIhLA3QgEACgDAAQgFAAgEgEQgDgEABgFQABgEADgDIBLg3QAJgGAHAIQADAEgBAFIAAAA").cp();
	this.shape_6.setTransform(418.3,55.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C88C31").s().p("AAkgqIg0BgQgDAGgHAAQgCAAgDgBQgEgCgBgFQgBgEACgEIA0hhQACgEAFgBQAEgCAEADQAEACABAEQACAFgDAEIAAAA").cp();
	this.shape_7.setTransform(413.8,51.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C88C31").s().p("AgHgvIAkBWQACAEgCAEQgCAFgEABIgEACQgHAAgEgHIgkhXQgBgDABgFQACgEAEgBQAEgDAFADQAEABACAEIAAAA").cp();
	this.shape_8.setTransform(389.2,50.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C88C31").s().p("AApAwQgEAAgDgDIhShJQgDgDAAgEQgBgFADgDQADgEAFAAQAEAAAEADIBSBJQADADAAAFQAAAEgDAEQgDADgFAAIAAAA").cp();
	this.shape_9.setTransform(384.1,54.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C88C31").s().p("AgCB9IiBBEIAPiNIhYhkICJgXIA9h4IBLB0ICIAmIhcBhIAUB9IiHg8").cp();
	this.shape_10.setTransform(401.4,70.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(143));

	// we
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8FA24E").s().p("AAmhtQAUAWgEA0QgfgEgtgEIgbgCQAKguAZgSQAfgXAVAXIAAAAABnhJQgHhSg/gJQhHgLgmBJQglBGAOBgQAGAtAaAcQAYAaAiADQAgAEAegTQAggVARgqQgEgFgUgMIgSgLQgJASgQAOQggAdgcgVQgjgXAFhNICYAEQAJgkgDgpIAAAA").cp();
	this.shape_11.setTransform(421.8,119.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8FA24E").s().p("AizjAIA6gIIAJD1IBdjCIB0EHIAZk9IA6AEIguGPIgzAEIhpjyIhLCUIg6AEIgYky").cp();
	this.shape_12.setTransform(389.9,126.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},11).wait(132));

	// wish
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D23027").s().p("Ai7kiQAVAGAAAYQgBAZgcAIQggAJgQgpQgQgqAhgdQAogjAvAYQA0AbAKBWQAJBNABBmQAAAxgCAjIAlhHQAuhLA2gGQA9gHANA+QALA4gfBQQgfBPACBBQACBDAkAWQAlAXAigkQAjgkgUgtQgOgfgaALQgbALALAVQAHgRASAJQATAIgHAUQgIAYgegJQgggKAEgpQAFgvAxAAQAxgBALA4QALA6gfAoQgiAshCgIQhAgIgOhTQgMhLAghdQA3ijg+gJQgQgCgYAYQgYAbgWAsQg5B3AICgQgaAFgmAFIghAEIABgnIAxgJQAEhmAChxQADjggMg5QgNhAgrgHQgQgDgMAKQgLALABASQAHgMAFgDQAHgFAMADIAAAA").cp();
	this.shape_13.setTransform(436.9,176.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D23027").s().p("ACLjZQgZgzg9gBQhBgBghA+QgjBDArBZQAfA9ArBWQAaA/gXArQgMAZgYAIQgVAHgUgKQgWgLgHgXQgHgbAPgkQgEgEgRgIIgRgHIg0CFIAeALIAbg+IAFAPQAHARALANQAjApA3gUQBEgXAGhNQAGhLg3hYQgyhTgHg9QgIg7AigWQAjgWAjAZQAkAZgMAsQgLAngaAAQgZAAAAgTQALAJANgFQAQgFgBgWQgBgZgagCQgcgDgHAeQgKAoApASQApATAggqQAigtgYgzIAAAA").cp();
	this.shape_14.setTransform(404.9,184.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D23027").s().p("AAgAAQAAgMgJgKQgKgJgNAAQgMAAgKAJQgJAKAAAMQAAANAJAKQAKAJAMAAQANAAAKgJQAJgKAAgNIAAAA").cp();
	this.shape_15.setTransform(389.3,159);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D23027").s().p("Ag1ijIBLAPIgWBLQgUBTAAAzQABA7ATAHQATAHALgrIAiAJQgCASgLAQQgWAiglgEQgtgFgDhaQgEhPAfhvIgigFIAKgl").cp();
	this.shape_16.setTransform(388,181.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D23027").s().p("ADHj3QAYAqgeAlQgcAigfgQQgegQAKgiQAKgeAZAKQAaALgJAXQAVgLgNgfQgNgfgeADQgiAEgFAoQgHAtAdBXQAjBsgBBcQgCBwg/AIQg/AIgchWQgKgagFghIgDgbIgFAhQgJApgMAhQgmBqg/gDQhCgEANiQQAKhxAlhdQgKgDgQgBIgOgCIAEglIBXASIgfBgQgfBvAABAQgBBLAlgHQAlgHAYhKQATg8ALhKIAIg8IAlgEIALB2QATB4ApgEQAsgFgKhsQgIhNggh0QguinBpgMQAxgGAYArIAAAA").cp();
	this.shape_17.setTransform(363.2,171.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},25).wait(118));

	// you a
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8FA24E").s().p("AAKi1Qg5AFhCBRQhFBVAABQQAAAqATATQAUATAigJQBQgXBdiUQgLA1ADA0QADA4ATAaQAaAlAngRQAggNAIgWQgaAQgXgaQgbgfALhHQALhHAag0IAXglQgJgLgPgFQgdgJgbAhQgRAXgLAqQhFBkgyAuQgvApgWgVQgXgWAjhLQAihKA7gnQA1gjAvAMQAAgPgKgPQgTgegwADIAAAAABAiPQgxAAgvAkQg4ApghBHIgCAEQgFADgFAAQgHAAgFgEQgEgFgBgFQAYg9A0gyQAxgwAlgDQADgBAGAAQAgAAANAWIgCAAABvhvQAQgVAPAAQAGAAAHAEQglA6gQBeQgGAGgHAAQgMAAgEgLQAEgoAKgjQAKglAOgSIAAAA").cp();
	this.shape_18.setTransform(458.6,236.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8FA24E").s().p("AG3jJQgqgBgSBUQhlDhhDAHQgkAEAShLQAPg9AlhHQAihCgEgfQgEglg7ATIACAGQABAHgBAKQgcAhgvAGQgmAEgagJIgUgJQgFgIgGgFQgNgLgHANQgEAIANALQAHAFAIAEIATApQAQA0gRA1QgUBDgtAOQgqAOgJg6QgLhFAZhLQAfhaBBgVQgLgRgVgIQgpgPgxAxQgXAXgOApQgnAug3AvQgIhlgCgpQgEhFALgTQgVgdgdAPQggAQAEA8QgaBpg1BPQg3BQgfggQgagZAphzQA0h+AIgiQALgqgngDIgqAEQAMAHgRA/QgPA8gUAmQgbA2gDBCQgEBSA4AGQA5AFA7hZQAwhLAUhTQgCAMAHA5QAJBJACAuQgTAMgjAXQhvBHgsBNQgtBPA1AtQA2AvBbg+QBcg+AThoQAKg6gFhfQAxgpAkgoQgPBGAQBBQASBGApANQA1ATApg2QAlgwAChAQACgygNgfIgMgVIAyALQA6ADAngkQgIAagSAfQglBDgGBPQgHBcA0AEQBSAGBnjUQgMBUASBAQASBAAnAIQAgAHAXgPQALgIAFgKQgZABgVgUQgrgnAOhgQAMhOASguIAQgeQgRgSgUgBIAAAAAEBi+QAFAIgFAWQgHAagUAlQgRAhgPApQgFACgFAAQgMAAgEgLQAMgmAPgaQAgg7AAglQAIgCAHAAQAJAAACAEIAAAAAGdimQALgSANAAQAJAAAIAGQgZAtgPBmIgBAJQgFAHgJAAQgLAAgEgKQABgWACgTIAIgxQAHghALgSIAAAAAAfjYQgpAXgaAzQgXAsgHA5QgGAIgJAAQgMAAgEgLQAAgsALgmQANgpAXgXQAgghAZAAQANAAALAHIAAAAAjdjVQABAbAFBEIAEA2QgDALgMAAQgJAAgFgHIgSiaQgCgoAPgQQAHgHAIAAQAJAAAFAFQgGAUABAnIAAAAAmQk2QAQAAAEAFQAEAFgEAPQgFAVgYA8QgXA5gMAkQgFADgFAAQgNAAgDgLQAFgPAGgMQALgYAPgrQAVhAgCggIAOgBAj8ARQABA9gIAzQgQBnhLA1QggAWgbABQgdACgNgWQgagtAphDQAqhGBhg7QAVgNAYgRIAAAA").cp();
	this.shape_19.setTransform(377.7,240.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19},{t:this.shape_18}]},42).wait(101));

	// merry
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C88C31").s().p("Ag3kkQghADgQAjQgUgqghgFQgbgFgbASIAGADQAHAFAGALQASAggFBIQgGBnAVA+QAbBMBDgGQBQgJAthaQgFAjgCAMQgVCIgmA9QggAxgkgJQgOgDgFgSQgEgQAGgRQAQguAnAfQARgwgtgTQgugTgdAtQgHgggbgCQgbgCgMAhQAOgBAJAQQAIAPAFAjQAHA4A3AbQBBAhBQguQBPgrAiiFQAKgpAVirQAKhSALgeQAJgVASgLQgOgWgiAHQgkAHgJAnQgHghgggPQgfgPgVARIAGAGQAHAJAFAPQAQAygHBiQgjBZgoARQgpATgNhDQgLg8AOhFQAMg2AOgZQAMgWARgHQgPgXgeACIAAAAAh1jvQAIAMAFAbQAGAdgFAXQgEAVgNAAQgQAAgBgVQAAgGAKghQALghgBgTIAAAAAhihVQgBAJgGAGQgHAGgJAAQgJgBgGgGQgGgHAAgJQABgJAGgGQAHgGAJABQAJAAAGAGQAGAHAAAJIAAAAAh8gqQAOgHALASQAEAHARAdQATAbAYAAQgbAOgcgOQgdgPgLggQgGgVAMgGIAAAAACCjLIAHAeQAHAjgEAXQgCAJgHAGQgGAFgHgBQgHgCgDgIQgEgIADgJQAJgVAIggIAGgbACCgxQgCAJgIAFQgHAFgJgDQgJgCgEgHQgFgIACgIQACgJAHgFQAIgFAIACQAJACAFAIQAFAIgCAIIAAAAABtAmQgLAGgLgCQgLgDgHgKQgGgKADgLQACgKAKgGQAKgGAMACQALADAGAJQAHAJgDALQgCAMgKAGIAAAAABTA9QAJACAEAHQAFAIgCAIQgCAJgHAFQgIAFgIgCQgJgCgFgIQgFgHACgJQACgJAIgFQAHgEAJACIAAAAABPCZQgIAmgcAdIgaAXQATgnAKg7QACgJAGgGQAGgFAHABQAHACADAHQAEAIgCAKIAAAA").cp();
	this.shape_20.setTransform(492.8,298.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C88C31").s().p("AiqjpQASAdADBHQADArAJCzQABChgtAPQANAaAfgHQAggHAMghQAJAfAfAGQAgAHAVgaQgXAAgPhLQgNg+gEhaQAyAcASA8QATA3gFA0QgEAwgVAQQARAKAWgGQAbgIAKgfQAOAbAjAAQAlABAPgfQANgagEgbIgHgWQgEAKgJAHQgRAPgbgNQgOgHgMgcQgPglgHgUQgfhOgsgGQBVgEAsgrQAqgsgDhOQgChNgugsQgvgsg9APQgwAMghAfIgXAcQgJgSgRgMQgigXglAdIASAPABsj1QAVAWAFAgQAFAUgMAFQgPAFgIgTQgFgXgEgSQgHgjgQgNQATAFARATIAAAAAhijIIAIAfQAIAjAAASQAAAJgFAHQgEAGgHAAQgGABgFgHQgFgGAAgKQAAgTAIgjIAIgeAhThCQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGQgGgGAAgIQgBgJAHgGQAGgGAIAAQAJAAAGAGIAAAAAhOgDQAIAGAAAMQAAALgIAIQgIAIgLAAQgMAAgIgIQgIgIAAgLQAAgLAIgGQAIgIALgBQAMAAAIAIIAAAAAg4gRIABgmQAJi0A9gPQAlgJARA2QARA3gaA5QgTAsgnATQgaAOgggBIAAAAACHh2QAAAIgGAGQgGAGgJAAQgIAAgGgGQgHgGABgIQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJIAAAAABogxQgSAagdAMQgXAKgTgDQATgFAWgdQALgOAOgUQAIgIAHAAQAFgBAGAGQAJAJgMARIAAAAAh2BSQAAgJAGgGQAGgGAJAAQAIAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgIAAQgJAAgGgGQgGgGAAgIIAAAAAhWB+QAFAHAAAJQAAAggQA0QgQg3AAgdQAAgJAFgGQAEgHAHAAQAGAAAFAGIAAAA").cp();
	this.shape_21.setTransform(451.7,296.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C88C31").s().p("Ah+j8QgjgWgkAfIAGACQAIADAGAJQAVAcADBHQAICtgBBJQgECjglAGQAOAaAfgIQAggJAKgiQAKAfAgAFQAgAFAUgaQgXABgNhRQgKg9gDhlQA1AZAVA+QAVA2gDA0QgCAwgUARQARAKAWgIQAagJAJgfQAPAaAjgBQAlgBAOgfQAMgbgFgbIgIgVIgMASQgRAPgbgMQgOgGgOgcQgQgkgIgUQgihMgsgFQBSgHAngtQAigqAGhSQAFhKg1gtQg0grg+ASQgwAPgfAgQgQAQgGANQgKgRgRgMIAAAAAhrjFIAJAfQAKAjAAASQABAJgFAHQgEAGgHABQgHAAgEgHQgFgGgBgJQAAgUAGgiIAHgfAh1g/QAGgGAJAAQAIgBAHAGQAGAGAAAJQAAAIgFAHQgGAGgJAAQgIABgHgGQgGgGAAgJQgBgIAGgHIAAAAAAGj9QAlgLATA2QATA2gYA6QgSAtgmAUQgZAPggABIAAgmQACi1A8gRIAAAAABij5QAVAWAHAfQAEAVgLAFQgOAGgJgTQgFgYgFgSQgJgigQgMQATAEASASIAAAAACCh+QABAIgGAHQgGAGgIAAQgJABgGgGQgHgGAAgJQAAgIAGgHQAGgGAIAAQAJAAAGAFQAGAGAAAJIAAAAABOhOQAPgOALAKQAJAJgLARQgRAbgcANQgXALgTgCQATgGAUgdQATgfAFgFIAAAAAhRAAQAJAGAAALQABALgIAJQgIAIgLAAQgMABgIgIQgIgIgBgLQAAgLAIgIQAHgHAMgBQALAAAIAIIAAAAAhMBUQAAAIgGAHQgGAGgIAAQgJABgGgGQgGgGgBgJQAAgIAGgHQAGgGAIAAQAJgBAGAGQAGAGABAJIAAAAAhPCRQABAfgOA1QgSg2gBgdQAAgJAEgHQAFgHAGAAQAHAAAFAGQAFAGAAAKIAAAA").cp();
	this.shape_22.setTransform(411.5,299.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C88C31").s().p("AiukmIgiALIAMADQANAIAIAcQAJAhgTBsQgSBngiBzQgbBeghALQgKAEgJgFIgIgGQgHAlAdAFQAbAEARgXQAEAnAjAHQAhAHAPgbQgfACgJgpQgJgoAPhGQAMg6AaheIAYhVIB+GcICRmaIAGA5QAJBHANBUQAPBggGAnQgHAsglADQAWAeAjgIQAigIAMgiQANAlAngCQAmgBAMgdQgcAAgOgxQgOgxgQiYQgPiPAHg+QAHg3AYgBQgNgcgkAHQgmAGgKAnQgRgrgogDQglgCgJAaQAOgEALATQAPAYgIAxQgIAvgqB0QgVA4gUAwIg3jrQgThTALgmQAJgeAVAGQgPgUgbACQgfADgWAlQgZgpgnACIAAAAAhehtQgFgTAAgjIAAgfIAPAcQAQAgAFARQACAJgDAIQgDAHgHACQgGABgGgFQgGgFgCgJIAAAAAhRg9QAEgHAIgDQAJgCAHAFQAHAEACAJQACAIgEAHQgEAHgJADQgIACgHgFQgIgFgCgIQgCgIAFgHIAAAAAC6jLIALAeQALAiACASQABAJgEAHQgEAIgHAAQgGABgGgGQgFgGgBgKQgCgTAFgjIAFgfADkAcQgHAJgMABQgLABgJgHQgJgHgBgLQgBgMAIgGQAHgJALgBQAMgBAIAHQAJAHABAJQABAMgHAIIAAAAADdg5QABAIgGAHQgFAHgJAAQgIABgHgFQgHgGgBgIQAAgJAFgGQAGgHAIgBQAJAAAGAFQAHAFABAJIAAAAADBBPQgBgIAFgHQAGgGAIgBQAJgBAGAFQAHAGABAIQABAJgGAGQgFAHgJABQgIABgHgGQgGgFgBgJIAAAAADZBzQAHAAAFAGQAFAGABAJQADAfgLA2QgVg1gDgdQgBgJAEgHQAEgHAHgBIAAAAAghgHQAKAFACAJQADALgGAKQgGAKgLACQgLADgKgGQgJgGgDgLQgDgLAGgJQAGgIALgDQALgCAKAGIAAAAAguBMQADgHAHgCQAGgCAGAGQAHAFACAJQAHAegDA3QgcgygHgbQgCgJACgIIAAAA").cp();
	this.shape_23.setTransform(322.1,305.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C88C31").s().p("AhRjmQgSgegjgBQghgCgLAaIAGgCQAHAAAGAJQATAcAEBoQADBSAKCiQABB9gmALIAgAQQAjAIAWgmQAXAkA0gEQAzgEAdghQAZgdAeACQAaABAMAXQAGgggLgRQgJgOgRgBQAggggKgoQgKgognADQAIAKgCAcQgCAggNAbQglBKhYggQgHgXgLikQAogMAaASQAXAQAAAfQAdgSgCgkQgDglghgKQAbgOAAgfQABgfgcgWQgDAvgiAWQgTANgbABQgIiPADgyQA0gjA7AmQA9AogYBIQAkACAVgpQAYgtgoggQAXgPgCgdQgDgcgTgJQADAVgXANQgXANglgGQg6gJgWACQgvADgVAgIAAAAAhciuIAHgfIAJAfQAKAjAAASQABAJgFAHQgEAGgHABQgHAAgEgGQgFgHgBgJQAAgUAGgiIAAAAAhAgqQgGAGgJAAQgIABgHgGQgGgGAAgJQgBgIAGgGQAGgHAJAAQAIAAAHAGQAGAGAAAIQAAAJgFAGIAAAAAgyAJQABALgIAJQgIAIgLAAQgMABgIgIQgIgIgBgLQAAgLAIgHQAHgIAMAAQALgBAIAIQAJAIAAAJIAAAAAhVB6QAFgHAGAAQAHAAAFAGQAFAGAAAKQABAfgOA1QgSg2gBgdQAAgJAEgHIAAAAAhaA+QAGgGAIAAQAJAAAGAGQAGAFABAJQAAAIgGAHQgGAGgIAAQgJABgGgGQgGgGgBgJQAAgIAGgHIAAAA").cp();
	this.shape_24.setTransform(373.1,304.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},57).wait(86));

	// christmas
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D23027").s().p("AgOgFQADAJgGAKQgDAGABAHQABAJAHABQALADALgTQAOgYgHgYQgFgQgOAMQgRANAEANIAAAA").cp();
	this.shape_25.setTransform(376.5,356.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D23027").s().p("Agng9QgiAOhNApQgOAGABARQACARASgJQBHgkBUgbQAigKAUAAQAeABATAUQAQASgFAYQgFAcgbAGIgRgBQgWgDABgYQAOAEAJgUQAKgRgPgEQgigIgSAiQgRAlAZAYQAeAdAogQQAlgPARglQAVgqgZgmQgZglgwgDQgwgChEAdIAAAA").cp();
	this.shape_26.setTransform(440.4,344.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D23027").s().p("AhOgqQANgKATgBQASgBAPAIQAKAGAEAOQACAHgDADQAAACgEAGQAJgSgOgCQgPgDgKAQQgIAOAGALQAGANARADQARADAQgSQAOgPACgUQAFg4g1gJQg0gJgkAkQgeAeADAtQAEAxAnARQArAUA7gMQAzgJAvgcQAOgJgCgRQgBgRgSAKQgrAagxAHQg5AKghgaQgRgNgCgYQgDgaARgNIAAAA").cp();
	this.shape_27.setTransform(401.9,346.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D23027").s().p("ACAhnQhJADglACQg+AFgoAWQgiASgNAlQgNAhAKAlQALAmAkAJQAjAKAdgYQAXgUgFgpQgJgnglANQgWAIALASQAKASAQgQQAIAIgFAOQgFAMgJADQgRAGgPgKQgRgJgJgeQgIgWAPgUQAMgSAYgKQAhgOA3gCQAfAAA9gCQANgBAGgTQAHgSgQABIAAAA").cp();
	this.shape_28.setTransform(497.9,400.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D23027").s().p("Ag/kKQAcAOgLA/QgEAUARgEQARgDADgQQAJgzgSgmQgVgtgyAbQgmAVAMA7QAIAnAaAtQARAcAmAmQAtAwAMAPQAcAiARArQAQAsACAtQABAzghAlQglAqgsgdQgggUABg+QABgnAagKQAOgFAKALQAIAMgVAQQgOAJACASQACARARgLQAYgSAMgbQAPgigZgUQgQgMgUAGQgRAEgSAPQgbAVgIAmQgHAkAMAjQAMAkAbATQAdAVAkgJQBOgRAThcQAQhMgchNQgRgugogsQgwg0gYgcQgngsgSg3QgGgTABgNQACgXAVAMIAAAA").cp();
	this.shape_29.setTransform(522.7,368.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D23027").s().p("AApiNQgCAKgDAJQgeBqhRBoQgkAtghgXQgWgQAEgnQACgaAOgeQAUguAdgcQAmglApAPQANAEAIgTQAKgTgNgFQgrgPgwAfQgsAdgfA3QggA0gBAzQgBA5AmAbQBBAuBXiSQAMgXAMgXQgGBpA9ANQAxAKAqhaQAbg7AMhDQAEgUgRADQgRAEgDAQQgJAwgWA0QggBNgcgSQgkgYAKhUQAEgjARg/QADgJACgIQAFgUgRAEQgRAEgFAPIAAAA").cp();
	this.shape_30.setTransform(497.6,370.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D23027").s().p("AFsBjQgFAvgVA+QgcBWgcgUQgXgQAEgzQABgUALg0QAJgnAZhMQAZhKAIgoQAIgmAAgaQABglgNgaQgTgmgwAZQgjARgbAhQgxA7gbBmQgFARgFAVQgCgKgCgHQgbhkhCAfQg4AbgYBnQgCALgDAPQgVhRgng0QgJgNgMAOQgMAMABAMQANCKgpBVQgUArgcgEQgVgDgMgeQgGgQgEghQgMhUApiVQAXhSAIg7IACgIQADgXABgYQAAgJAAgKIAAgEQAAgFAAgFIAAAAQAAgCgBgCQgBgPgRAKQgRAKABANQAEBegqBbQgnBThKBEQgNAMAHAOQAHAOAPgPQA0gxAlg2QgNAzgDARQgLBPADAyQAGBTAuAbQAcAQAggYQAagTAQgfQAeg3AIhJQADgVAAgXQAfBJAKBnIAAABQAAACAAACQACAQAQgLQAPgLABgLQAJhsADgVQAPhUAlgdQAogeAVBiQAOA/AAA3QAAATARgJQAQgJACgOQATiFAOgvQAghxA+goQAhgVAMAeQAKAVgDAlQgEAxgWBGQgNAlgZBNQg1C6BHAYQA4AUAohqQAahEAJhNQACgSgRAJQgSAIgCAPIAAAA").cp();
	this.shape_31.setTransform(441.5,371);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D23027").s().p("AgkiWQgFATARgDQARgEAEgQQAJglgOgiQgRgogoAaQgnAZAGAvQAGAnAeAmQAMAPAkAkQAdAfAPAUQAdAtAHA0QAIBBglAdQgfAZgXgbQgVgXACgiQABgZALgYQAMgcARgNQANgJgCgSQgBgSgPAMQgjAYgSAtQgQAlgDAwQgCAsAiAUQAiAUAlgQQAygVAOhBQALg1gQg5QgRg8g1g4QgrgogSgYQgPgRgHgcIAVgaQAUAagOAcIAAAA").cp();
	this.shape_32.setTransform(395.4,381.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D23027").s().p("AiKiQQgBg4gVgmQgcg0gxAaQgiASAIAzQAGAmAXAkQAdAwA8AaQAZAKAWAEQgaAlgQAuQgUA5gFAyQgGBPAqANQAkALAnghQATgQAjguQAVgcAXgjQgPBHAOA0QAJAeAaANQAbAMAagQQAugbAkg/QAVglAdhMQAIgTgQgDQgPgCgGARQgZBBgPAcQgbA1giAaQghAagRgmQgMgcABgkQADhHAohlQAIgUgPgCQgOgBgIAQQgvBag0BLQgaAkgJAKQgYAagXAEQgiAHABg/QABgjAKgsQAPg9AsgwQAOgBAOgEQAYgIAFgdQADgdgdAIQgUAFgTATQgJgBgJgDQgMgDgegKQghgLgagdQgZgagNgjQgHgSADgPQADgSAUANQAdAVACBLQAAATARgIQASgJAAgPIAAAA").cp();
	this.shape_33.setTransform(364.1,370.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D23027").s().p("AjViXQgHAsAHBNQAIBfANA7QATBYAjA6QAIAMANgMQANgKgBgLQgEhRAVhOQAYhZAzgwQAOgRARgBQAVgDAFAXQAFAUgGAdQgBAFgMAsQgHAagPA0QgJAuAAAjQAAAtAgADQAfADAegdQAvgtAhhZQARgtAbhpQAGgUgSAEQgRADgEAQQgfB2glBOQgPAegYAbQgjAlgJgoQgHgiARg7QAXhBAGgbQAIgeABgWQABgfgKgWQgTgug3AqQgrAggXAlQgmA6gSBOQgIAhgEAgQgWg4gLhIQgQheAFhoQABgZAKgWQALgYATgNQATgOAOAPQAMAMACAWQACApgSAxQgQAqgcAoQgMAQAMAIQAMAHALgOQAkgzATg0QAYhBgIgxQgHgngggKQgegJgfAaQgrAmgLBDIAAAA").cp();
	this.shape_34.setTransform(325,373.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D23027").s().p("ABNiOQgRAYgdgCQgNgBgFgOQgFgOAPACQAOACAKgTQAKgTgPgCQgfgEgVAaQgYAbAPAeQASAkApgNQAlgMAYgeQAcgkgHgzQgIg2gqgRQgzgVg1AlQgsAeggA2Qg5BegIB7QgKCMBABNQBJBXBlhlQBIhHAuhnQAIgTgPgDQgPgCgIARQglBUgiArQg5BIg9gKQg0gIgWhJQgPgwAAhGQgBhGAShAQAVhJAqgvQAmgpArAAQAxAAAMA4QAHAcgRAXIAAAA").cp();
	this.shape_35.setTransform(286.7,380);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},70).wait(73));

	// and a
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C88C31").s().p("AgIg5QgQAMgJAgQgIAbADAaQADAUAGADQAOAIASgZQAYgfANhFQgEgDgJgDQgKgEgHAAQgKAAgIAHIAAAA").cp();
	this.shape_36.setTransform(329.4,440.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C88C31").s().p("AF7iSQgEBSARBZIggAGQgEgNgFgoQgPAngWAVQgTASgVAAIgFAAQgYgCgKghQgKgfAKgrQAKgwAdgVQAfgZAmARIACgTIAiADAIhCjIhQjhQAzhtAohYQiZg7jSAkQjBAhjKBpQihBThvgcQgkgJgagTIgTgRQADBGAkBLQASAmASAYIhACzQBWA/C5gaQBpgPEghPQC4gzCLAFQBFACAhAMIAAAAAhZgrQAnARgGCXIghgBQACgwgFgsQgEgqgHgDQgGgDgJADQgIACgGAHQgmAngEBwIggAAQgFgzgJg4QgIgsgBgCIAfgHQAEAIAGAoQATg0AhgTQAagQAVAJIAAAAAAqhKQAXgFAZAKQgBgrABguQABgmAAgCIAiACQAAABgCBgQABBsAQBLIghAHQgFgcgEgdQgVA7gfARQgLAHgLAAQgJAAgHgDQgTgJgKgbQgJgZAFghQAEgeARgbQAPgfAfgGIAAAAAkKAEQgCA0AJA+QADAfAFAVIghAGQgDgJgFgoQgVA8gfASQgMAFgKAAQgHAAgHgDQgYgKgFglQgFggALgnQALgpAVgTQAegcAoATIACgPIAhgB").cp();
	this.shape_37.setTransform(299.1,444.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C88C31").s().p("AgIg6QgOANgIAgQgIAeADAZQAFAfAQgIQAhgSAShkQgPgMgNAAQgJAAgIAHIAAAA").cp();
	this.shape_38.setTransform(264.9,455.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C88C31").s().p("AgXgpQgNAXgDAZQgDAXAGARQAEAOAIACQAEACAGgDQAlgWAShdQgLgKgTAAQgVAAgNAWIAAAA").cp();
	this.shape_39.setTransform(303.7,446.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C88C31").s().p("AB1hWQhRAFiHAjQiQApgwAKQAsAACAgWQCcgeAdgEQBZgMAwANQAyANADAlQAEAogoAPQgmAPgTgVQgRgSASgTQASgRAQATQgFgBgEACQgKADADAMQADAQAWgFQAVgFgEgYQgFgbgmAAQgnAAgLAjQgHAXAPATQAOARAaAGQA/APAig1QAjg0gngqQgrguhwAHIAAAA").cp();
	this.shape_40.setTransform(327.1,471.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C88C31").s().p("ABqgMQiVA3gZAGQhKAQg2gLQg6gLgHglQgIgmAmgUQAkgSAVASQATARgQAVQgQATgSgSQAFAAAFgCQAJgFgEgLQgFgQgVAIQgVAHAHAXQAJAbAlgEQAmgEAHgkQAFgYgRgRQgQgQgagDQhBgIgcA4QgcA2AxAoQA0ArBjgPQBJgKCPg9QCcg/AngJQhDAAh8AvIAAAA").cp();
	this.shape_41.setTransform(274.1,422.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},83).wait(60));

	// happy
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8FA24E").s().p("ADtjWQghAYgUAvQgwBxg9CXIgGBtQgFgCgGgIQgMgQgCgiQgDgggshDIgug8IAkA+QAjBCAGATQAFAUgDAYQgCAOgGAhQgHgOgFgbQgGghgEgQQgIgYgpg7Igog0IAiA5QAjA8AFAOQAEALgFAdQgFAcgIAKQgDgeABgPIACgIQiFjOgfgsQgUgegUgIQgOgFgQAFIgDgTIDMgmIADAQIgWALQgTAQAOAYQAVAmBuCrQBajHAQg3QAKgjgTgIQgMgGgUAIQABgEgDgHIgDgGICigvIgBAVQgMACgRALIAAAA").cp();
	this.shape_42.setTransform(533.9,426.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8FA24E").s().p("AghAtQgHAZgMAJQgGAFgFAAIgEAOIBYgJIAFgPQgHADgFgDQgJgHAIgiQANgwANgcQAQgjAMAPQAFgkgWACQgWACgOAvQAGgrgQgFQgMgGgPAjQAYgQgiCAIAAAA").cp();
	this.shape_43.setTransform(406.5,463.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8FA24E").s().p("AgxBaICKgEIgBgOQgHADgHgDQgPgHgJghQgdhpAqAPQgRgigeAGQgeAFAJAuQgUgsgggIQgegIgBAhQAOgGAPAZQAQAbAOA5QAFAYgLAIQgHAEgHgBIAAAO").cp();
	this.shape_44.setTransform(430.3,462.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#8FA24E").s().p("AAhhcQgfAGgCAtQgIgpgcgGQgbgFgJAhQAhgMgCBrQAAAYgNAJQgGAEgHAAIgBANICNAIIAAgOQgIABgIgEQgQgIgBgdQgDg4AHgZQAHgeAVAIQgIgigfAGIAAAA").cp();
	this.shape_45.setTransform(485.9,462.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8FA24E").s().p("Ai8ijIAXAFQAYAPABAyQACBRALC/QAHgNAEgrIAIiMIAKCMQACAgAJAbQAGgaADgiQABgVACg+IACg4IAKCLQADAmALATIAAgYIAigBQApgCAkgLQB1giAJhlQAIhLgtgyQgrgwhMgKQgmgFhJACQgHAAhnAEIABANAgaiiQAaADAVALQBJAiACBlQACBKgtAqQgnAlg/ACIAAkwIAXAA").cp();
	this.shape_46.setTransform(494.7,434.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#8FA24E").s().p("AAihXQggAFgCAuQgHgqgcgFQgcgFgJAgQAhgMgBBsQgBAYgNAIQgGAFgHgBIAAANICKgDIAAgPQgIACgIgEQgRgJAAgdQAAhoAjAOQgHgiggAGIAAAA").cp();
	this.shape_47.setTransform(448.1,461.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#8FA24E").s().p("AilieQAYAPABAyQACBRALC/QAIgNADgrQADgaADg9IADg1IAJCMQACAgAKAbQAFgaADgiIAFiLIAKCLQADAmALATIAAgYIAigBQApgCAkgLQB1giAJhlQAIhLgtgyQgqgwhMgKQgngFhJACQgHAAhnAEIABANIAXAFAgaiiQAaADAWALQBIAiACBlQACBKgsAqQgoAlg/ACIABkwIAWAA").cp();
	this.shape_48.setTransform(456.5,434.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#8FA24E").s().p("AhbizIAYAFQAWANgFAqQgIBEg5DnQAFgHAIgRQAHgRAUhIIAThDIgQBFQgQBJgCAPQgBASACAGIA+j5IA4D7QAGgUgCgkQgCgXgJg7IgJg1IAnCOQAJAfATAeQADgUgGgrQgEgagPg9IgOg2IASA2QAUA8AJAWQAOAkALAOIhLlnQhugJgUgDIgCAP").cp();
	this.shape_49.setTransform(419.9,434.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#8FA24E").s().p("Ag0gJIBrACIAAARIhtAAIACgT").cp();
	this.shape_50.setTransform(416.9,448.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8FA24E").s().p("AhFgJICOADIgBAQIiPAAIACgT").cp();
	this.shape_51.setTransform(380.8,442.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8FA24E").s().p("AAxhvQgfAAgNAmQgHgpgjACQgiABgGAeQAXgGAHAaQAHAWgCA4QgBAwgNASQgIAMgTAEIABAPICagTIABgRQgJADgIgGQgRgMACgwQAEg/AFgPQAIgXAaAAQgGgZgdAAIAAAA").cp();
	this.shape_52.setTransform(391.5,463.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8FA24E").s().p("AApAdQgDAwALATQAHAMAUAEIgDAPIiigaIABgSQAKAFAJgFQAUgJADgwQADhFgEgYQgGgkgbgBQAKgaAjAFQAjAEAEArQAPgqAigCQAjgBACAjQgWgHgMAkQgKAcgFA8IAAAA").cp();
	this.shape_53.setTransform(535.5,464.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#8FA24E").s().p("AgqAdQgBAxgMASQgHAMgTAEIABAPICZgaIAAgRQgJAFgIgFQgSgKABgwQADhFAFgYQAJgkAagBQgIgaghAFQgiAEgHAsQgJgrgggCQgggBgFAjQAVgHAJAkQAGAcAAA8IAAAA").cp();
	this.shape_54.setTransform(369.2,465.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#8FA24E").s().p("ABVi3IiogVIgBALIAPAEQAPAIAAAYQAAAnAFEzQAJgOADgkIANiNIAJCSQADAhAIAcQAFgWAEgjIAMiXIAHCNQACAjALARIAPlAQACgcAPgJIAOgDIACgN").cp();
	this.shape_55.setTransform(392.8,432);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#8FA24E").s().p("ABZjCIiwglIgBAMIAQAKQAQAPgBAZIgFF4QADgDAEgJQAIgRAEgbQAEgaAHhDIAGg8IAECqQABAlAJAbQALgTADguQADgcAGhKIAFhDIADCYQACAsALAWQASk5AEgvQACgeAQgFQAIgDAHACIACgO").cp();
	this.shape_56.setTransform(370.3,430);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},95).wait(48));

	// new year
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D23027").s().p("AgWgWQgKAKAAAMQAAAOAKAJQAKAKAMAAQANAAAKgKQAKgKAAgNQAAgMgKgKQgKgKgNAAQgMAAgKAKIAAAA").cp();
	this.shape_57.setTransform(568.8,546.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D23027").s().p("AApjTQgBAVgXCZQgBAJgWDKQgOB7gLADQgFABgDhxQgChlAAiMQAAiUAHgpQAKg7AjADQAjADgFBUIAAAA").cp();
	this.shape_58.setTransform(573.2,507);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D23027").s().p("ABCAJQAJAZgSARQgSASgWgWQgTgVAWgWQgVgCgFAjQgFAkAbARQAlAVAkgnQAngrgThDQgThGhAgCQg5gBgvAzQgwAzgSBSQgJAqAAAgIgQhVQAFgkATgpQAmhVBFgdQBUglBDAtQBFAtgPBaQgOBbhJAaQgeALgcgIQgbgJgPgbQgcg0AXgqQAVglAgAKQAeAJAIAXIAAAA").cp();
	this.shape_59.setTransform(548.4,503);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D23027").s().p("AiMkYIAEAVIAJgDQAMgCALADQAhAJAJA5QANBQASCDQATCTABAjQABAngKAVQgLAXgbAGQgBATAGALIDCgUIgFgdQgRAJgTgJQgmgQgMhVQgLhWgUjNIgTi/IiMAj").cp();
	this.shape_60.setTransform(530.7,519.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D23027").s().p("ACXhnQgLgUgXgSQgtgkg7ANQhJAQg0BJQg4BLAZBOQAdBYBRACQBVACBPhuQAHgMABgQIgBgNIgoA0Qg1A3g3ALQhBAMgKg4QgKgyAkg8QAmhCA1gZQBAgdAvA6QAMgFgEgTIAAAA").cp();
	this.shape_61.setTransform(492.2,523);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D23027").s().p("AhyjgQAcgSAiAWQAkAXgLAyQgFAagZARQgXAQgdABQhIADgPhEQgRhMAyg0QA1g3BiALQBcAKAsBtQAlBcgIB3QgOC3ABAQQADBeA4AFQgBAPADAIIiLgQQAJhPAGhhQANi/gKhYQgLhihEgqQg9gmgyAiQgsAeAEBGQAEBGAqgBQAlgBALgfQAKgcgSgTQgPgPgPAFQgOAFgCAOQAGgEAIAAQAKAAAIAHQAKAJgGARQgGASgTABQgdABgFgiQgGgiAZgQIAAAA").cp();
	this.shape_62.setTransform(497.5,510.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D23027").s().p("AgXjfQgwAygJCEQAAAIgBAIICygFQADgggDgoQgFhRggglQgpgwgqAtIAAAAACWAAIjoAAQgDBpAXA+QAaBGAwgIQAogGAZhBIAQhAIAdgDIAbB6IgSALQgFgLgHgKQgPgTgMALQgoAngLAHQgtAdgwgQQg5gTgbhuQgchwAah5QAah4BUgZQBPgZBABOQAdAkAGBXQADArgDAiIAAAA").cp();
	this.shape_63.setTransform(457.2,516.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D23027").s().p("Ai+jLQgKAHgOgDQgRgDABgbQABgdAZgHQAegIATAYQAUAagVAoQgXAsgzgPQg1gQgCg+QgBhAA7glQA7gkA3AcQAvAYAHBKQACALgCCVQAABrAJAkQAOA1AsgMQAvgMArh7QAnhwABhSQACg7gBgpIgBgcICUAEIgDAYQgFgCgHAAQgOgBgLAFQgmASAABIQAAAdABBjQAABkgHBJQgUDghUAoQhYArg/gXQgvgRgdgvQgWgkgRACQgTACgOAuQgIAAgIgCIgGgCIAkiSIAiAEIAEAXQAGAcAKAYQAiBNBCAMQBTARAvhmQAzhygDjzQgdCRgxBAQgvA9hDgGQg8gFgPh3QgLhNAKiJQAGhZgigbQgcgXgoAaQghAVgCA0QgCA1AhAGQAdAFANgPQAKgNgGgRQgCALgLAGIAAAA").cp();
	this.shape_64.setTransform(414.9,513.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D23027").s().p("ACCjbIAjAKQAiAUAAA3QAABZghDaIiGk0IhNEkIiHndIiMA/IAKAUIAjgMQAmgDAQAtQAaBHCIHEIBPk8ICZFBQAqleAQhUQAKg1AggOQAFgCAmgCQAEgIAAgJIAAgIIi6ghIgEAX").cp();
	this.shape_65.setTransform(338.4,515.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D23027").s().p("ACOhDQACAjgCAcIjagIQgNDsBfgNQAigEAbgrIAUgrIAYABIAlBVIgVAJQgFgKgHgIQgPgPgOAMQglAfgYAJQgyAUgxgiQg3glgOhxQgNhpAfhbQAfhaBYgWQBXgVAnBPQATAoADBIIAAAAAgVjFQgsAsgKB1ICZACQAFgdAAgiQAAhGgbgeQgQgSgVgBQgUgBgUAUIAAAA").cp();
	this.shape_66.setTransform(297.9,524.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D23027").s().p("Aibk2ID8JeQgEhKgBhiQgEjCALhzQANiHBDgtQA5gmBBAjQA5AegHBLQgHBMg+AKQg7AKgagrQgYgoAXgqQAUglAhAFQAgAEAJAeQAHAZgTARQgSARgOgKQgNgIAAgRQgBgRAOgJQgTABgGAgQgGAiAXAMQAeAQAdgZQAggbgRgzQgSg3g1AFQg1AGggBBQgeA9gFDsQgEDgARA3QALAnAdAHQAOAEAMgFIADAkIiXAIIjno+IgNBcQgQBtgQBhQgWCGABAmQACA7AqAFQgBAJAAASIiVgTIAGghQAOAJARgKQAigSANhXQAdivANhcQAXirgOggQgNgfgZgFIgVABIgBggIB5AM").cp();
	this.shape_67.setTransform(261.9,516.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},110).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(371.8,45.2,60.5,56.3);


(lib.sparkle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAYgWQAKAJASAEQAaAGAjADQgmAEgXAFQghAIgKAjQgGAagDAjQgCgjgHgaQgEgTgKgJQgJgJgTgGQgQgEgYgDIgVgCIAUgBQAXgDARgFQAVgFAIgJQAJgIAFgVQAFgRADgXIABgUIACAUQADAYAEAQQAGAUAJAKIAAAA").cp();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_68}]},29).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sound = function() {
	this.initialize();

	// timeline function:
	this.frame_0 = function() {
		// playSound("wewishyou");
	}

	// Layer 1
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#ABC8E6").s().p("AEOiVIAAErIobAAIAAkrIIbAA").cp();
	this.shape_69.setTransform(14,1);

	this.addChild(this.shape_69);
	this.frame_0();
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.9,-13.9,54,30);


(lib.icologo = function() {
	this.initialize();

	// Layer 1
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AafgTIAANqQAAAdgmAUQglAUhVACQhIAAgtgWQgtgWAAgdIAAtoQAAgQAGgTQAFgQASgOQASgNAggIQAggJAzAAQA3AAAiAJQAhAKAPANQAOANAFASQAEASAAAOIAAAAAYFiXQh5AAhHARQhGASgiAaQgiAagJAhQgJAfAAAbIAAMbQAAA8BOAqQBPAqC/AAQBbAABDgMQBAgMAmgVQAogVARgbQARgaAAgfIAAsXQAAgZgIgeQgIgegggbQgggbhEgSQhDgTh3AAIAAAAAPugnQgIgggjgYQgkgZhCgPQhFgQh2AAQh5AAhGAPQhHAQghAZQghAZgKAhQgKAgAAAgIAAMbQAAA8BPAqQBOAqC/AAQBcAABEgMQBAgMApgVQApgVARgbQARgaAAgfIAAiOIi6AAIAAC1QAAAdgmAUQgkAUhVACQhIAAgtgWQgtgVAAgeIAAtoQAAgSAGgRQAFgQARgOQAUgNAegIQAhgJAzAAQA3AAAiAJQAhAKAOANQAQANADASQAEASAAAOIAACKIC6AAIAAheQAAgggIggIAAAAAphu+IrREWIAAYDIogAAIAABrIUCAAIAA8eIIbFZIChAAIq8nCIAAgEIgEACIgCgCIgLAHAgviRIAARSICzAAIAAxSIizAAAwkpQIAAWrIh5AAIAA18IB5gvAr2rEIAAYfIh7AAIAA3wIB7gv").cp();
	this.shape_70.setTransform(-0.5,-41.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgThWQgjAAgZAXQgZAYAAAgIAAAPQAAAhAZAXQAZAXAjAAIAoAAQAjAAAZgXQAYgXAAghIAAgPQAAgggYgYQgZgXgjAAIgoAA").cp();
	this.shape_71.setTransform(4.1,-74.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AdfgEMg69AAAIAAAJMA69AAAIAAgJ").cp();
	this.shape_72.setTransform(0,113.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AA8BRQggAFglAAQgBgYAAg+QAAhDADgoQgNABgNAAQgMAAgOgBQAEAqAABBQAABCgEAqQAggCAZAAQAaAAAkACIAAgb").cp();
	this.shape_73.setTransform(181.5,89.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAABrQAMAAAOABQgDglAAhHQAAhFADgmQgNABgNAAQgMAAgNgBQADAsAAA/QAAA+gDAuQAPgBAKAAIAAAA").cp();
	this.shape_74.setTransform(110.1,89.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("ABVg5QADgXAFgQQghgQgjAAQg1AAggAfQggAfAAAyQAAA1AeAeQAeAeA0AAQAjAAAdgPIAIgbIgEgBQgbAYghAAQghAAgUgYQgTgZAAgtQAAgsATgZQATgXAfAAQAuAAAKAjIAEAA").cp();
	this.shape_75.setTransform(75.5,89.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AA7hrIh1AAQAEAgAAA8IAAAPQAABLgEAhQATgBAZAAIBJABIgBgPIABgMIhDAFQgCgLAAggIAAgmQATAAAwADIgBgNIABgNIhDADIABhFQAPAAA1AEIgCgOIACgN").cp();
	this.shape_76.setTransform(-0.2,89.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("ABHhrQgmBWggA9Qggg+gmhVIgNAAIgNAAIgeDXQAHgBAFAAQAGAAAHABQAAgbAGgwIAHhAQAkBDAhBIIANAAQAdhGAnhKIAJBkQABAFACAnQAOgBALAAQAMAAAPABQgEgRgGgwIgSiWIgOAAIgOAA").cp();
	this.shape_77.setTransform(-42.1,89.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("ABVhrIgOAAQgjBQgkBDQglhLgghIIgNAAIgOAAIgeDXQAIgBAFAAQAFAAAIABQAAgWAGg1IAHhAQAiA/AjBMIANAAQAdhGAnhKIAMCQQAOgBALAAQALAAAPABQgDgRgHgwIgRiWIgOAA").cp();
	this.shape_78.setTransform(-89.5,89.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("Ag/BTQAfAeA0AAQAjAAAegPIAGgbIgDgBQgcAYggAAQgiAAgTgYQgTgYAAguQAAgtATgYQASgXAgAAQAtAAALAjIAEAAQADgXAFgQQghgQgjAAQg1AAggAfQghAfAAAyQAAA1AeAeIAAAA").cp();
	this.shape_79.setTransform(-178,89.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgdhaIAEAAQAoAAAAAoQAAAYgMALQgKAMgZAAIAAAAIAAhXIADAAAhRhrQAEAoAABDQAABEgEAoQAPgBALAAQAMAAANABQgCgdAAgfIAAgrQAkA8AXArQAQgBAMAAQAMAAAPABIhFhrQAygKAAgrQAAg3hIAAIhIAA").cp();
	this.shape_80.setTransform(37.2,89.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AguAvIBGAAIAUBAIA1AAQgxh0gkhpIgLABIgLgBQgrB7grBiIAPgBIAMABQALgdAMgjIAAAAAAPAaIg1AAQAPgrANgdQANAkAMAkIAAAA").cp();
	this.shape_81.setTransform(144.1,88.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("Agxg5IAmBCIAAAOQAAASgCARIANgBIAOABIgBg0QARgfAUggQgDAAgGAAQgGAAgEAAQgIAZgQAbQgOgbgLgZIgfAA").cp();
	this.shape_82.setTransform(156.5,132.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAlAUIhEhNQgDAAgHAAQgGAAgDAAQACAjAAAXQAAAYgCAhIAHgBIAIABIgBhQQAnApAhAnIAHgBIAIABQgCgMAAgZIAAgIQAAg5ACgNIgIAAIgHAAIABBN").cp();
	this.shape_83.setTransform(140.2,132.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("Ag0g5IgQBzIAHgBIAHABQAAgMADgcIAEgiQARAeAVAsIAHAAQATguARgfIAHBNIAOgBIAOABQgCgIgDgbIgKhQQgCAAgGAAIgHAAQgVAvgSAfQgTgngSgnIgHAAIgIAA").cp();
	this.shape_84.setTransform(92,132.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAwAmQgQAMgRAAQgSAAgKgNQgLgNAAgYQAAgXAKgNQAKgNARAAQAZAAAGATIACAAQACgMADgJQgUgIgSAAQgcAAgSAQQgRAQAAAbQAAAcAQAQQARAQAbAAQAUAAAQgIIAEgOIgCAA").cp();
	this.shape_85.setTransform(54.7,132.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAgg5Ig/AAQACAPAAAjIAAAHQAAArgCAPQANgBALAAIAnABIgBgIIABgHIgkADIgBgsIAkABIAAgFIAAgHIgkACIABgmQAEAAAgADIgBgIIABgH").cp();
	this.shape_86.setTransform(2.8,132.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgEAuQgBgKAAgkQAAglACgUIgOABIgOgBQACAeAAAbQAAAbgCAfQATgCAMAAQALAAAWACIgBgHIABgIQgYADgNAAIAAAA").cp();
	this.shape_87.setTransform(-10.3,132.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgxAAQAAAmgCAUIAOgBIAOABIgBg5IAxAAIAAAgQAAAQgBAJIANgBIAPABQgCgZAAghQAAgfACgaIgPABIgNgBQABAKAAARIAAAUIgxAAIABgvIgOABIgOgBQACAUAAAlIAAAA").cp();
	this.shape_88.setTransform(-26.6,132.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAgg5Ig/AAQACAPAAAjIAAAHQAAArgCAPQANgBALAAIAnABIgBgIIABgHIgkADQgBgIAAgPIAAgVIAkABIAAgFIAAgHIgkACIABgmQAEAAAgADIgBgIIABgH").cp();
	this.shape_89.setTransform(-42.2,132.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgpArQAMAQAdAAQAbAAAMgPQAHgIACgLQACgJAAgOIAAgXQAAgWABgPQgDAAgGAAQgGAAgCAAQACAUAAAjIgBAXQgBAJgEAHQgJANgSAAQgSAAgGgPQgDgJAAgXQAAgmADgWIgdAAQACAQAAAcIAAAOQAAARABAIQACALAEAHIAAAA").cp();
	this.shape_90.setTransform(-58.3,132.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAvg5QgGAAgCAAQgVAvgSAfQgTgngSgnIgHAAIgIAAIgQBzIAHgBIAHABQAAgOADgaIAEgiQARAeAVAsIAHAAQANghAXgsIAHBNIAOgBIAOABIgPhzIgHAA").cp();
	this.shape_91.setTransform(-77.5,132.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgdAAQAAAjgCAXQANgBAMAAIAmABIAAgIIAAgHIgkADIAAgsIAkABIgCgFIACgHIgkACIAAgmQAEAAAgADIAAgIIAAgHIg/AAQACAWAAAcIAAAH").cp();
	this.shape_92.setTransform(-109.7,132.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgkgWQAkAkAkAsIAHgBIAIABQgCgMAAgZIAAgIQAAg5ACgNIgIAAIgGAAIAABNIhEhNQgDAAgGAAQgHAAgDAAQACAXAAAjQAAAjgCAWIAIgBIAHABIgBhQ").cp();
	this.shape_93.setTransform(-143.9,132.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAAg4IgNgBQACASAAAnQAAAmgCAUIANgBIAOABQgCgSAAgoQAAgnACgSIgOAB").cp();
	this.shape_94.setTransform(-158.1,132.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAkgvQgOgKgcAAIgwAAQACAOAAAjIAAAXQAAAfgCAMIApAAQBEAAAAg8QAAgegTgPIAAAAAARglQALAMAAAZQAAAwgrAAQgHAAgEgBIAAheIALAAQAVAAALAKIAAAA").cp();
	this.shape_95.setTransform(-125.7,132.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("Agsg5QACAUAAAlQAAAmgCAUIAPgBIANABIgBg4QATAgANAYIAPgBIAPABIgmg5QAbgFAAgXQAAgegmAAIgoAAAgNgvQAVAAAAAUQAAAOgGAGQgFAGgNAAIgBAAIAAguIAEAA").cp();
	this.shape_96.setTransform(-94.8,132.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgbgzQgIAHAAAMQAAAOALAPQgeALAAAWQAAANAKAIQAJAIAPAAQAUAAAOgOIAIAMQAMgBAFAAQAEAAAMABIAAgEQgOgNgJgMQAMgLALgRQgFgDgEgFQgFAOgPAQQgPgQgLgPQAMgIAEgFQAFgHAAgIQAAgKgHgGQgHgFgLAAQgPAAgIAHIAAAAAgEgPQgKgNAAgKQAAgMAMAAQAJAAAAAOQAAALgLAKIAAAAAgYAnQgGgGAAgLQAAgMALgIQAOARAPAUQgKAHgJAAQgJAAgGgHIAAAA").cp();
	this.shape_97.setTransform(27.9,132.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("Ag+ABQAAAdAQAPQARAPAdAAQAcAAASgQQARgQAAgcQAAgcgQgPQgQgQgeAAQgcAAgSARQgRAQAAAbIAAAAAgZgkQAKgOAPAAQARAAAJAOQAKAOAAAWQAAAXgKAOQgJAOgRAAQgPAAgKgOQgKgOAAgXQAAgWAKgOIAAAA").cp();
	this.shape_98.setTransform(72.2,132.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAMAZIAMAiIAOgBIAPABQgZg6gWg7IgGAAIgFAAQgVA6gaA7QADAAAFAAIAHAAIAMgiIAlAAAgFgYQAGATAHASIgcAAQAHgTAIgSIAAAA").cp();
	this.shape_99.setTransform(123.7,132.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgFgvQARAAAAAWQAAANgGAGQgGAGgMAAIACgvIAFAAAgGAHQAsAAAAgiQAAgPgIgIQgKgHgTAAIgmAAQACAfAAAaQAAAcgCAeIANgBIAOABIgCgzIAGAA").cp();
	this.shape_100.setTransform(110,132.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AADhwQg2AAggAgQggAeAAA1QAAA1AeAcQAfAdA2AAQA0AAAhgfQAfgfAAgzQAAg1gdgdQgegeg2AAIAAAAAAwhGQASAaAAAsQAAAtgRAZQgTAZgeAAQgdAAgTgZQgRgYAAguQAAgtARgYQATgZAdAAQAfAAARAYIAAAA").cp();
	this.shape_101.setTransform(-135.7,89.1);

	this.addChild(this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-188.7,-138.3,377.5,276.8);


(lib.green_background = function() {
	this.initialize();

	// Layer 1
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#586D31").s().p("EgnDAu4MAAAhdvMBOHAAAMAAABdvMhOHAAA").cp();
	this.shape_102.setTransform(250,300);

	this.addChild(this.shape_102);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.sparkles = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sparkle();
	this.instance.setTransform(112.6,22.3,1.305,1.305,-44.9);

	this.instance_1 = new lib.sparkle();
	this.instance_1.setTransform(112.6,22.2,1.958,1.958);

	this.instance_2 = new lib.sparkle();
	this.instance_2.setTransform(183.8,26.6,0.533,0.533);

	this.instance_3 = new lib.sparkle();
	this.instance_3.setTransform(303.6,182.7,0.538,0.538);

	this.instance_4 = new lib.sparkle();
	this.instance_4.setTransform(196.4,176,0.915,0.915);

	this.instance_5 = new lib.sparkle();
	this.instance_5.setTransform(250.5,344.9,0.488,0.488);

	this.instance_6 = new lib.sparkle();
	this.instance_6.setTransform(437.4,312.2,0.588,0.588);

	this.instance_7 = new lib.sparkle();
	this.instance_7.setTransform(382.3,205.8,0.588,0.588);

	this.instance_8 = new lib.sparkle();
	this.instance_8.setTransform(431.7,238.3,0.588,0.588);

	this.instance_9 = new lib.sparkle();
	this.instance_9.setTransform(445.5,189.9,0.588,0.588);

	this.instance_10 = new lib.sparkle();
	this.instance_10.setTransform(440.1,138.4,0.588,0.588);

	this.instance_11 = new lib.sparkle();
	this.instance_11.setTransform(382.1,107.5);

	this.instance_12 = new lib.sparkle();
	this.instance_12.setTransform(274.6,72.8,0.741,0.741);

	this.instance_13 = new lib.sparkle();
	this.instance_13.setTransform(202.7,116.1,0.5,0.5);

	this.instance_14 = new lib.sparkle();
	this.instance_14.setTransform(53.5,73);

	this.instance_15 = new lib.sparkle();
	this.instance_15.setTransform(74.2,133.6);

	this.instance_16 = new lib.sparkle();
	this.instance_16.setTransform(29.3,158.8);

	this.instance_17 = new lib.sparkle();
	this.instance_17.setTransform(11.4,212.2);

	this.instance_18 = new lib.sparkle();
	this.instance_18.setTransform(58.6,198.6);

	this.instance_19 = new lib.sparkle();
	this.instance_19.setTransform(206.8,233.1,0.689,0.689);

	this.instance_20 = new lib.sparkle();
	this.instance_20.setTransform(161.3,254.9,0.548,0.548);

	this.instance_21 = new lib.sparkle();
	this.instance_21.setTransform(18.2,267.1,0.601,0.601);

	this.instance_22 = new lib.sparkle();
	this.instance_22.setTransform(202.7,356.1,0.811,0.811);

	this.instance_23 = new lib.sparkle();
	this.instance_23.setTransform(161.3,345.3,0.518,0.518);

	this.instance_24 = new lib.sparkle();
	this.instance_24.setTransform(84.8,345.3,0.5,0.5);

	this.instance_25 = new lib.sparkle();
	this.instance_25.setTransform(324.3,344.9,0.671,0.671);

	this.instance_26 = new lib.sparkle();
	this.instance_26.setTransform(44.6,323,0.794,0.794);

	this.instance_27 = new lib.sparkle();
	this.instance_27.setTransform(367.1,365.4,0.654,0.654);

	this.instance_28 = new lib.sparkle();
	this.instance_28.setTransform(415.2,339.6);

	this.addChild(this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.logoset = function() {
	this.initialize();

	// logo
	this.instance_29 = new lib.icologo();
	this.instance_29.setTransform(2.1,-0.7);

	// sparkles
	this.sparkles = new lib.sparkles();
	this.sparkles.setTransform(-2,2,1,1,0,0,0,226.1,186.4);

	this.addChild(this.sparkles,this.instance_29);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-216.8,-162.1,434.1,343.2);


(lib.backside = function() {
	this.initialize();

	// Layer 5
	this.instance_30 = new lib.from_us();
	this.instance_30.setTransform(150,204.8,0.432,0.432);

	// signatures
	this.logoset = new lib.logoset();
	this.logoset.setTransform(249.7,335.9,0.578,0.578,0,0,0,-2.1,2);

	this.instance_31 = new lib.tawnya();
	this.instance_31.setTransform(236.3,135.3,0.515,0.515);

	this.instance_32 = new lib.Danna();
	this.instance_32.setTransform(81.7,83.3,0.48,0.48);

	this.instance_33 = new lib.mindi();
	this.instance_33.setTransform(364.3,76.3,0.501,0.501);

	this.instance_34 = new lib.mike();
	this.instance_34.setTransform(251.9,12.5,0.505,0.505);

	this.instance_35 = new lib.Natalie();
	this.instance_35.setTransform(37.9,25.4,0.494,0.494);

	this.instance_36 = new lib.Mickey();
	this.instance_36.setTransform(67.4,544,0.492,0.492);

	this.instance_37 = new lib.Collon();
	this.instance_37.setTransform(332.9,546.6,0.497,0.497);

	this.instance_38 = new lib.Lang();
	this.instance_38.setTransform(345.6,449.8,0.493,0.493);

	this.instance_39 = new lib.Jane();
	this.instance_39.setTransform(242.9,495.2,0.512,0.512);

	this.instance_40 = new lib.larry();
	this.instance_40.setTransform(19.5,464.8,0.515,0.515);

	this.instance_41 = new lib.Christi();
	this.instance_41.setTransform(16.6,151.6,0.501,0.501);

	// background
	this.instance_42 = new lib.greenBackground();
	this.instance_42.setTransform(0,0,0.417,0.417);

	this.instance_43 = new lib.green_background();
	this.instance_43.setTransform(250,300,1,1,0,0,0,250,300);

	this.addChild(this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.logoset,this.instance_30);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;