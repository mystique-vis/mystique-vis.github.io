// let scene = atlas.scene();
// let data = await atlas.treejson2(SvgJson);
// let node = scene.mark("text", {x: 20, y: 20, fontSize: "10px", fontWeight: "bold"});
// let nodes = scene.repeat(node, data.nodeTable);
// scene.encode(node, {field: "tag", channel: "text"});
// let colorMapping = {"1": "red", "0": "blue"}
// scene.encode(node, {field: "class", channel: "fillColor", mapping: colorMapping});
// nodes.layout = atlas.layout("tidytree", {width: 600, height: 800});
// let link = scene.mark("link", {sourceAnchor: ["right", "middle"], targetAnchor: ["left", "middle"], strokeColor: "#888", sourceOffset: [5,0], targetOffset: [-5, 0], mode: "curveHorizontal"});
// let links = scene.repeat(link, data.linkTable);
// scene.encode(link, {channel: "source", field: "parent"});
// scene.encode(link, {channel: "target", field: "child"});
// atlas.renderer('svg').render(scene,'svgElement');

let scene = atlas.scene();
let data = await atlas.treejson2(groupingJson);
let node = scene.mark("text", {x: 100, y: 100, fontSize: "14px", fontWeight: "bold", fillColor: "#006594", class: "GtreeText"});
let nodes = scene.repeat(node, data.nodeTable);
scene.encode(node, {field: "tag", channel: "text"});
nodes.layout = atlas.layout("tidytree", {width: 300, height: 500, orientation: "horizontal"});
scene.encode(node, {field: "level", channel: "x", rangeExtent: 400, invertScale: false});
let link = scene.mark("link", {sourceAnchor: ["right", "middle"], targetAnchor: ["left", "middle"], strokeColor: "#ddd", sourceOffset: [5,0], targetOffset: [-5, 0], mode: "curveHorizontal"});
scene.repeat(link, data.linkTable);
scene.encode(link, {channel: "source", field: "parent"});
scene.encode(link, {channel: "target", field: "child"});
let lbl = scene.mark("text", {x: 100, y: 100, fontSize: "14px", fontWeight: "bold", fillColor: "#006594"});
scene.repeat(lbl, data.linkTable);
// console.log(data.linkTable);
scene.affix(lbl, link, "x");
scene.affix(lbl, link, "y");
atlas.renderer('svg','svgElement').render(scene);