import { parser, stringify } from "@/code/parser";

// 引入期望
import { expect } from "chai";

// 我要测试的方法
// 一个用例
describe("专门测试 parser", () => {
  it("我要测试 parser 是否靠谱", () => {
    expect(parser("name=zfpx")).to.be.deep.equal({ name: "zfpx" });
  });
});

describe("专门测试 stringify", () => {
  it("我要测试 stringify 是否靠谱", () => {
    expect(stringify({ name: "zfpx" })).to.be.equal("name=zfpx");
  });
});

describe("测试方法", () => {
  it("相等关系", () => {
    expect(1 + 1).to.be.equal(2);
    expect([1, 2, 3]).to.be.lengthOf(3);
    expect(true).to.be.true;
});
  it("包含", () => {
      expect("zfpx").to.be.contain("zf"); // 包含
      expect("zfpx").to.be.match(/zf/); // 匹配
  });
  it("大于 小于", () => {
      expect(5).to.be.greaterThan(3);
      expect(3).to.be.lessThan(5);
      expect(3).to.be.not.greaterThan(10);
  });
});
