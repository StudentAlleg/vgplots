//import * as index from "./index.js";
import * as vg from "./node_modules/@uwdata/vgplot/dist/vgplot.js";
const wasm = await vg.wasmConnector();
vg.coordinator().databaseConnector(wasm);

const $brush = vg.Selection.single();

await vg.coordinator().exec(
    vg.loadObjects("memmory", [
      {address: 5, iteration: 1},
      {address: 3, iteration: 3},
      {address: 2, iteration: 3},
      {address: 5, iteration: 4},
      {address: 1, iteration: 5},
      {address: 9, iteration: 5},
      {address: 3, iteration: 6},
      {address: 3, iteration: 7}
    ])
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