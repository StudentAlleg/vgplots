//import * as index from "./index.js";
import * as vg from "./node_modules/@uwdata/vgplot/dist/vgplot.js";
//https://forum.freecodecamp.org/t/how-do-i-import-data-from-json-to-javascript/526050/3
let memdata
await fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    memdata = data.memdata;
  });

console.log(memdata);

//lets reign in this data because errors


memdata.length = 950;

const wasm = await vg.wasmConnector();
vg.coordinator().databaseConnector(wasm);

const $brush = vg.Selection.single();

await vg.coordinator().exec(
    vg.loadObjects("memmory", memdata)
  );


let graph= vg.plot(
  vg.dot(
    vg.from("memmory"),
    { x: "iteration", y: "address"}
  ),
  vg.name("Memory Access"),
  vg.grid(true),
  vg.xLabel("Iteration"),
  vg.yLabel("Address")
);

const div1 = document.getElementById("div1");
div1.appendChild(graph);