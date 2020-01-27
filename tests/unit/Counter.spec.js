import { expect } from "chai";
import { mount } from "@vue/test-utils";

import Counter from "@/components/Counter";

describe("测试Counter组件", () => {
  it("测试点击按钮后 能否+1", () => {
    let wrapper = mount(Counter);
    expect(wrapper.find("#count").text()).to.be.equal("10");

    // 触发 click 事件
    wrapper.find("button").trigger("click");

    expect(wrapper.find("#count").text()).to.be.equal("11");
  });
});
