import * as vg from "@uwdata/vgplot";

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

export default
    vg.plot(
      vg.dot(
        vg.from("memmory"),
        { x: "iteration", y: "address"}
      ),
      vg.name("Memory Access"),
      vg.grid(true),
      vg.xLabel("Iteration"),
      vg.yLabel("Address")
    );