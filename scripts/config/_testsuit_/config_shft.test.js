const sqr_shft = require("../config_shft");
const sqrs = sqr_shft["b2"];

// partial chk on sqr_shft: include more ...
describe("chking square:b2 shfts", () => {
  const expected_sqrs = ["a3", "b3", "b4", "c3"];

  expected_sqrs.forEach((expected_sqr, index) => {
    test(`pn in sqr:b2 can shft in ${expected_sqr}`, () => {
      expect(expected_sqr).toBe(sqrs[index]);
      //console.log(sqrs[index]);
    });
  });
});
