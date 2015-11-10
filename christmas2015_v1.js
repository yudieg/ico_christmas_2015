(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.christmas2015_v1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// sound
	this.instance = new lib.sound();
	this.instance.setTransform(-112.1,427.7,1,1,0,0,0,14,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(40));

	// speckles
	this.instance_1 = new lib.noise();
	this.instance_1.setTransform(-12.6,-175.3,0.804,0.804);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(40));

	// tree
	this.instance_2 = new lib.tree();
	this.instance_2.setTransform(402,73.3,1,1,0,0,0,402,73.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF3E7").s().p("EAnEAu4MhOHAAAMAAAhdvMBOHAAAMAAABdv").cp();
	this.shape.setTransform(402.1,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.2,-175.3,964.5,1005.1);


// symbols:
(lib.noise = function() {
	this.initialize(img.noise);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1042,1250);





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
	this.shape_6.graphics.f("#C88C31").s().p("AAvgiQADAEgBAFQgBAEgDADIhLA3QgEACgDAAQgFAAgEgEQgDgEABgFQABgEADgDIBLg3QAJgGAHAIIAAAA").cp();
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},143).wait(1));

	// we
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8FA24E").s().p("ABnhJQgHhSg/gJQhHgLgmBJQglBGAOBgQAGAtAaAcQAYAaAiADQAgAEAegTQAggVARgqQgEgFgUgMIgSgLQgJASgQAOQggAdgcgVQgjgXAFhNICYAEQAJgkgDgpIAAAAAAmhtQAUAWgEA0QgfgEgtgEIgbgCQAKguAZgSQAfgXAVAXIAAAA").cp();
	this.shape_11.setTransform(421.8,119.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8FA24E").s().p("AizjAIA6gIIAJD1IBdjCIB0EHIAZk9IA6AEIguGPIgzAEIhpjyIhLCUIg6AEIgYky").cp();
	this.shape_12.setTransform(389.9,126.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},11).to({state:[]},132).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},25).to({state:[]},118).wait(1));

	// you a
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8FA24E").s().p("ABAiPQgxAAgvAkQg4ApghBHIgCAEQgFADgFAAQgHAAgFgEQgEgFgBgFQAYg9A0gyQAxgwAlgDQADgBAGAAQAgAAANAWIgCAAAAKi1Qg5AFhCBRQhFBVAABQQAAAqATATQAUATAigJQBQgXBdiUQgLA1ADA0QADA4ATAaQAaAlAngRQAggNAIgWQgaAQgXgaQgbgfALhHQALhHAag0IAXglQgJgLgPgFQgdgJgbAhQgRAXgLAqQhFBkgyAuQgvApgWgVQgXgWAjhLQAihKA7gnQA1gjAvAMQAAgPgKgPQgTgegwADIAAAAABvhvQAQgVAPAAQAGAAAHAEQglA6gQBeQgGAGgHAAQgMAAgEgLQAEgoAKgjQAKglAOgSIAAAA").cp();
	this.shape_18.setTransform(458.6,236.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8FA24E").s().p("AG3jJQgqgBgSBUQhlDhhDAHQgkAEAShLQAPg9AlhHQAihCgEgfQgEglg7ATIACAGQABAHgBAKQgcAhgvAGQgmAEgagJIgUgJQgFgIgGgFQgNgLgHANQgEAIANALQAHAFAIAEIATApQAQA0gRA1QgUBDgtAOQgqAOgJg6QgLhFAZhLQAfhaBBgVQgLgRgVgIQgpgPgxAxQgXAXgOApQgnAug3AvQgIhlgCgpQgEhFALgTQgVgdgdAPQggAQAEA8QgaBpg1BPQg3BQgfggQgagZAphzQA0h+AIgiQALgqgngDIgqAEQAMAHgRA/QgPA8gUAmQgbA2gDBCQgEBSA4AGQA5AFA7hZQAwhLAUhTQgCAMAHA5QAJBJACAuQgTAMgjAXQhvBHgsBNQgtBPA1AtQA2AvBbg+QBcg+AThoQAKg6gFhfQAxgpAkgoQgPBGAQBBQASBGApANQA1ATApg2QAlgwAChAQACgygNgfIgMgVIAyALQA6ADAngkQgIAagSAfQglBDgGBPQgHBcA0AEQBSAGBnjUQgMBUASBAQASBAAnAIQAgAHAXgPQALgIAFgKQgZABgVgUQgrgnAOhgQAMhOASguIAQgeQgRgSgUgBIAAAAAEBi+QAFAIgFAWQgHAagUAlQgRAhgPApQgFACgFAAQgMAAgEgLQAMgmAPgaQAgg7AAglQAIgCAHAAQAJAAACAEIAAAAAGdimQALgSANAAQAJAAAIAGQgZAtgPBmIgBAJQgFAHgJAAQgLAAgEgKQABgWACgTIAIgxQAHghALgSIAAAAAAfjYQgpAXgaAzQgXAsgHA5QgGAIgJAAQgMAAgEgLQAAgsALgmQANgpAXgXQAgghAZAAQANAAALAHIAAAAAjdjVQABAbAFBEIAEA2QgDALgMAAQgJAAgFgHIgSiaQgCgoAPgQQAHgHAIAAQAJAAAFAFQgGAUABAnIAAAAAmQk2QAQAAAEAFQAEAFgEAPQgFAVgYA8QgXA5gMAkQgFADgFAAQgNAAgDgLQAFgPAGgMQALgYAPgrQAVhAgCggIAOgBAj8ARQABA9gIAzQgQBnhLA1QggAWgbABQgdACgNgWQgagtAphDQAqhGBhg7QAVgNAYgRIAAAA").cp();
	this.shape_19.setTransform(377.7,240.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19},{t:this.shape_18}]},42).to({state:[]},101).wait(1));

	// merry
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C88C31").s().p("Ag3kkQghADgQAjQgUgqghgFQgbgFgbASIAGADQAHAFAGALQASAggFBIQgGBnAVA+QAbBMBDgGQBQgJAthaQgFAjgCAMQgVCIgmA9QggAxgkgJQgOgDgFgSQgEgQAGgRQAQguAnAfQARgwgtgTQgugTgdAtQgHgggbgCQgbgCgMAhQAOgBAJAQQAIAPAFAjQAHA4A3AbQBBAhBQguQBPgrAiiFQAKgpAVirQAKhSALgeQAJgVASgLQgOgWgiAHQgkAHgJAnQgHghgggPQgfgPgVARIAGAGQAHAJAFAPQAQAygHBiQgjBZgoARQgpATgNhDQgLg8AOhFQAMg2AOgZQAMgWARgHQgPgXgeACIAAAAAh/i7QALghgBgTQAIAMAFAbQAGAdgFAXQgEAVgNAAQgQAAgBgVQAAgGAKghIAAAAAhihVQgBAJgGAGQgHAGgJAAQgJgBgGgGQgGgHAAgJQABgJAGgGQAHgGAJABQAJAAAGAGQAGAHAAAJIAAAAAh8gqQAOgHALASQAEAHARAdQATAbAYAAQgbAOgcgOQgdgPgLggQgGgVAMgGIAAAAACCjLIAHAeQAHAjgEAXQgCAJgHAGQgGAFgHgBQgHgCgDgIQgEgIADgJQAJgVAIggIAGgbACCgxQgCAJgIAFQgHAFgJgDQgJgCgEgHQgFgIACgIQACgJAHgFQAIgFAIACQAJACAFAIQAFAIgCAIIAAAAABtAmQgLAGgLgCQgLgDgHgKQgGgKADgLQACgKAKgGQAKgGAMACQALADAGAJQAHAJgDALQgCAMgKAGIAAAAABTA9QAJACAEAHQAFAIgCAIQgCAJgHAFQgIAFgIgCQgJgCgFgIQgFgHACgJQACgJAIgFQAHgEAJACIAAAAABPCZQgIAmgcAdIgaAXQATgnAKg7QACgJAGgGQAGgFAHABQAHACADAHQAEAIgCAKIAAAA").cp();
	this.shape_20.setTransform(492.8,298.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C88C31").s().p("AiqjpQASAdADBHQADArAJCzQABChgtAPQANAaAfgHQAggHAMghQAJAfAfAGQAgAHAVgaQgXAAgPhLQgNg+gEhaQAyAcASA8QATA3gFA0QgEAwgVAQQARAKAWgGQAbgIAKgfQAOAbAjAAQAlABAPgfQANgagEgbIgHgWQgEAKgJAHQgRAPgbgNQgOgHgMgcQgPglgHgUQgfhOgsgGQBVgEAsgrQAqgsgDhOQgChNgugsQgvgsg9APQgwAMghAfIgXAcQgJgSgRgMQgigXglAdIASAPABsj1QAVAWAFAgQAFAUgMAFQgPAFgIgTQgFgXgEgSQgHgjgQgNQATAFARATIAAAAAhaipQAIAjAAASQAAAJgFAHQgEAGgHAAQgGABgFgHQgFgGAAgKQAAgTAIgjIAIgeIAIAfAhThCQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGQgGgGAAgIQgBgJAHgGQAGgGAIAAQAJAAAGAGIAAAAAhOgDQAIAGAAAMQAAALgIAIQgIAIgLAAQgMAAgIgIQgIgIAAgLQAAgLAIgGQAIgIALgBQAMAAAIAIIAAAAAg4gRIABgmQAJi0A9gPQAlgJARA2QARA3gaA5QgTAsgnATQgaAOgggBIAAAAACHh2QAAAIgGAGQgGAGgJAAQgIAAgGgGQgHgGABgIQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJIAAAAABogxQgSAagdAMQgXAKgTgDQATgFAWgdQALgOAOgUQAIgIAHAAQAFgBAGAGQAJAJgMARIAAAAAh2BSQAAgJAGgGQAGgGAJAAQAIAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgIAAQgJAAgGgGQgGgGAAgIIAAAAAhWB+QAFAHAAAJQAAAggQA0QgQg3AAgdQAAgJAFgGQAEgHAHAAQAGAAAFAGIAAAA").cp();
	this.shape_21.setTransform(451.7,296.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C88C31").s().p("AhrjFIAJAfQAKAjAAASQABAJgFAHQgEAGgHABQgHAAgEgHQgFgGgBgJQAAgUAGgiIAHgfAh+j8QgjgWgkAfIAGACQAIADAGAJQAVAcADBHQAICtgBBJQgECjglAGQAOAaAfgIQAggJAKgiQAKAfAgAFQAgAFAUgaQgXABgNhRQgKg9gDhlQA1AZAVA+QAVA2gDA0QgCAwgUARQARAKAWgIQAagJAJgfQAPAaAjgBQAlgBAOgfQAMgbgFgbIgIgVIgMASQgRAPgbgMQgOgGgOgcQgQgkgIgUQgihMgsgFQBSgHAngtQAigqAGhSQAFhKg1gtQg0grg+ASQgwAPgfAgQgQAQgGANQgKgRgRgMIAAAAAh1g/QAGgGAJAAQAIgBAHAGQAGAGAAAJQAAAIgFAHQgGAGgJAAQgIABgHgGQgGgGAAgJQgBgIAGgHIAAAAAAGj9QAlgLATA2QATA2gYA6QgSAtgmAUQgZAPggABIAAgmQACi1A8gRIAAAAAA9kPQATAEASASQAVAWAHAfQAEAVgLAFQgOAGgJgTQgFgYgFgSQgJgigQgMIAAAAAB8iNQAGAGAAAJQABAIgGAHQgGAGgIAAQgJABgGgGQgHgGAAgJQAAgIAGgHQAGgGAIAAQAJAAAGAFIAAAAABOhOQAPgOALAKQAJAJgLARQgRAbgcANQgXALgTgCQATgGAUgdQATgfAFgFIAAAAAhIARQABALgIAJQgIAIgLAAQgMABgIgIQgIgIgBgLQAAgLAIgIQAHgHAMgBQALAAAIAIQAJAGAAALIAAAAAhMBUQAAAIgGAHQgGAGgIAAQgJABgGgGQgGgGgBgJQAAgIAGgHQAGgGAIAAQAJgBAGAGQAGAGABAJIAAAAAhPCRQABAfgOA1QgSg2gBgdQAAgJAEgHQAFgHAGAAQAHAAAFAGQAFAGAAAKIAAAA").cp();
	this.shape_22.setTransform(411.5,299.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C88C31").s().p("AiukmIgiALIAMADQANAIAIAcQAJAhgTBsQgSBngiBzQgbBeghALQgKAEgJgFIgIgGQgHAlAdAFQAbAEARgXQAEAnAjAHQAhAHAPgbQgfACgJgpQgJgoAPhGQAMg6AaheIAYhVIB+GcICRmaIAGA5QAJBHANBUQAPBggGAnQgHAsglADQAWAeAjgIQAigIAMgiQANAlAngCQAmgBAMgdQgcAAgOgxQgOgxgQiYQgPiPAHg+QAHg3AYgBQgNgcgkAHQgmAGgKAnQgRgrgogDQglgCgJAaQAOgEALATQAPAYgIAxQgIAvgqB0QgVA4gUAwIg3jrQgThTALgmQAJgeAVAGQgPgUgbACQgfADgWAlQgZgpgnACIAAAAAhehtQgFgTAAgjIAAgfIAPAcQAQAgAFARQACAJgDAIQgDAHgHACQgGABgGgFQgGgFgCgJIAAAAAhRg9QAEgHAIgDQAJgCAHAFQAHAEACAJQACAIgEAHQgEAHgJADQgIACgHgFQgIgFgCgIQgCgIAFgHIAAAAAC6jLIALAeQALAiACASQABAJgEAHQgEAIgHAAQgGABgGgGQgFgGgBgKQgCgTAFgjIAFgfADqAIQABAMgHAIQgHAJgMABQgLABgJgHQgJgHgBgLQgBgMAIgGQAHgJALgBQAMgBAIAHQAJAHABAJIAAAAADdg5QABAIgGAHQgFAHgJAAQgIABgHgFQgHgGgBgIQAAgJAFgGQAGgHAIgBQAJAAAGAFQAHAFABAJIAAAAADZBzQAHAAAFAGQAFAGABAJQADAfgLA2QgVg1gDgdQgBgJAEgHQAEgHAHgBIAAAAADBBPQgBgIAFgHQAGgGAIgBQAJgBAGAFQAHAGABAIQABAJgGAGQgFAHgJABQgIABgHgGQgGgFgBgJIAAAAAghgHQAKAFACAJQADALgGAKQgGAKgLACQgLADgKgGQgJgGgDgLQgDgLAGgJQAGgIALgDQALgCAKAGIAAAAAguBMQADgHAHgCQAGgCAGAGQAHAFACAJQAHAegDA3QgcgygHgbQgCgJACgIIAAAA").cp();
	this.shape_23.setTransform(322.1,305.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C88C31").s().p("AhRjmQgSgegjgBQghgCgLAaIAGgCQAHAAAGAJQATAcAEBoQADBSAKCiQABB9gmALIAgAQQAjAIAWgmQAXAkA0gEQAzgEAdghQAZgdAeACQAaABAMAXQAGgggLgRQgJgOgRgBQAggggKgoQgKgognADQAIAKgCAcQgCAggNAbQglBKhYggQgHgXgLikQAogMAaASQAXAQAAAfQAdgSgCgkQgDglghgKQAbgOAAgfQABgfgcgWQgDAvgiAWQgTANgbABQgIiPADgyQA0gjA7AmQA9AogYBIQAkACAVgpQAYgtgoggQAXgPgCgdQgDgcgTgJQADAVgXANQgXANglgGQg6gJgWACQgvADgVAgIAAAAAhciuIAHgfIAJAfQAKAjAAASQABAJgFAHQgEAGgHABQgHAAgEgGQgFgHgBgJQAAgUAGgiIAAAAAg7gIQAJAIAAAJQABALgIAJQgIAIgLAAQgMABgIgIQgIgIgBgLQAAgLAIgHQAHgIAMAAQALgBAIAIIAAAAAhAgqQgGAGgJAAQgIABgHgGQgGgGAAgJQgBgIAGgGQAGgHAJAAQAIAAAHAGQAGAGAAAIQAAAJgFAGIAAAAAhaA+QAGgGAIAAQAJAAAGAGQAGAFABAJQAAAIgGAHQgGAGgIAAQgJABgGgGQgGgGgBgJQAAgIAGgHIAAAAAhVB6QAFgHAGAAQAHAAAFAGQAFAGAAAKQABAfgOA1QgSg2gBgdQAAgJAEgHIAAAA").cp();
	this.shape_24.setTransform(373.1,304.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},57).to({state:[]},86).wait(1));

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
	this.shape_32.graphics.f("#D23027").s().p("AgqjMQAUAagOAcQgFATARgDQARgEAEgQQAJglgOgiQgRgogoAaQgnAZAGAvQAGAnAeAmQAMAPAkAkQAdAfAPAUQAdAtAHA0QAIBBglAdQgfAZgXgbQgVgXACgiQABgZALgYQAMgcARgNQANgJgCgSQgBgSgPAMQgjAYgSAtQgQAlgDAwQgCAsAiAUQAiAUAlgQQAygVAOhBQALg1gQg5QgRg8g1g4QgrgogSgYQgPgRgHgcIAVga").cp();
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},70).to({state:[]},73).wait(1));

	// and a
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C88C31").s().p("AgIg5QgQAMgJAgQgIAbADAaQADAUAGADQAOAIASgZQAYgfANhFQgEgDgJgDQgKgEgHAAQgKAAgIAHIAAAA").cp();
	this.shape_36.setTransform(329.4,440.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C88C31").s().p("AF7iSQgEBSARBZIggAGQgEgNgFgoQgPAngWAVQgTASgVAAIgFAAQgYgCgKghQgKgfAKgrQAKgwAdgVQAfgZAmARIACgTIAiADAIhCjIhQjhQAzhtAohYQiZg7jSAkQjBAhjKBpQihBThvgcQgkgJgagTIgTgRQADBGAkBLQASAmASAYIhACzQBWA/C5gaQBpgPEghPQC4gzCLAFQBFACAhAMIAAAAAjGgNQAEAIAGAoQATg0AhgTQAagQAVAJQAnARgGCXIghgBQACgwgFgsQgEgqgHgDQgGgDgJADQgIACgGAHQgmAngEBwIggAAQgFgzgJg4QgIgsgBgCIAfgHAAqhKQAXgFAZAKQgBgrABguQABgmAAgCIAiACQAAABgCBgQABBsAQBLIghAHQgFgcgEgdQgVA7gfARQgLAHgLAAQgJAAgHgDQgTgJgKgbQgJgZAFghQAEgeARgbQAPgfAfgGIAAAAAkKAEQgCA0AJA+QADAfAFAVIghAGQgDgJgFgoQgVA8gfASQgMAFgKAAQgHAAgHgDQgYgKgFglQgFggALgnQALgpAVgTQAegcAoATIACgPIAhgB").cp();
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},83).to({state:[]},60).wait(1));

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
	this.shape_48.graphics.f("#8FA24E").s().p("AgaiiQAaADAWALQBIAiACBlQACBKgsAqQgoAlg/ACIABkwIAWAAAilieQAYAPABAyQACBRALC/QAIgNADgrQADgaADg9IADg1IAJCMQACAgAKAbQAFgaADgiIAFiLIAKCLQADAmALATIAAgYIAigBQApgCAkgLQB1giAJhlQAIhLgtgyQgqgwhMgKQgngFhJACQgHAAhnAEIABANIAXAF").cp();
	this.shape_48.setTransform(456.5,434.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#8FA24E").s().p("AhDiuQAWANgFAqQgIBEg5DnQAFgHAIgRQAHgRAUhIIAThDIgQBFQgQBJgCAPQgBASACAGIA+j5IA4D7QAGgUgCgkQgCgXgJg7IgJg1IAnCOQAJAfATAeQADgUgGgrQgEgagPg9IgOg2IASA2QAUA8AJAWQAOAkALAOIhLlnQhugJgUgDIgCAPIAYAF").cp();
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},95).to({state:[]},48).wait(1));

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
	this.shape_66.graphics.f("#D23027").s().p("AATjYQgUgBgUAUQgsAsgKB1ICZACQAFgdAAgiQAAhGgbgeQgQgSgVgBIAAAAACOhDQACAjgCAcIjagIQgNDsBfgNQAigEAbgrIAUgrIAYABIAlBVIgVAJQgFgKgHgIQgPgPgOAMQglAfgYAJQgyAUgxgiQg3glgOhxQgNhpAfhbQAfhaBYgWQBXgVAnBPQATAoADBIIAAAA").cp();
	this.shape_66.setTransform(297.9,524.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D23027").s().p("Aibk2ID8JeQgEhKgBhiQgEjCALhzQANiHBDgtQA5gmBBAjQA5AegHBLQgHBMg+AKQg7AKgagrQgYgoAXgqQAUglAhAFQAgAEAJAeQAHAZgTARQgSARgOgKQgNgIAAgRQgBgRAOgJQgTABgGAgQgGAiAXAMQAeAQAdgZQAggbgRgzQgSg3g1AFQg1AGggBBQgeA9gFDsQgEDgARA3QALAnAdAHQAOAEAMgFIADAkIiXAIIjno+IgNBcQgQBtgQBhQgWCGABAmQACA7AqAFQgBAJAAASIiVgTIAGghQAOAJARgKQAigSANhXQAdivANhcQAXirgOggQgNgfgZgFIgVABIgBggIB5AM").cp();
	this.shape_67.setTransform(261.9,516.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},110).to({state:[]},33).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(371.8,45.2,60.5,56.3);


(lib.sound = function() {
	this.initialize();

	// timeline function:
	this.frame_0 = function() {
		playSound("wewishyou");
	}

	// Layer 1
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#ABC8E6").s().p("AEOiVIAAErIobAAIAAkrIIbAA").cp();
	this.shape_68.setTransform(14,1);

	this.addChild(this.shape_68);
	//this.frame_0();
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.9,-13.9,54,30);

//playSound("wewishyou");


})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;