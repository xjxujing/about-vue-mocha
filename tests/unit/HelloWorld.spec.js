import Vue from "vue";
import { expect } from "chai";
import { mount } from "@vue/test-utils";

import HelloWorld from "@/components/HelloWorld";

describe("Hello World .vue-----使用原生方法", () => {
  it("传递属性后能否正常显示结果", () => {
    /**
     * 原生-自己测试vue
     * extend 方法可以根据实例创建一个类
     */
    let Constructor = Vue.extend(HelloWorld);

    /**
     *  挂载组件 vm.$el
     *  借助 mocha 的 jsdom 在 node 环境获取当前组件元素
     */
    let vm = new Constructor({
      propsData: { msg: "hello" }
    }).$mount();

    expect(vm.$el.querySelector("h1").innerHTML).to.be.contain("hello");
  });
});

describe("Hello World .vue-----使用库方法", () => {
  it("测试", () => {
    // 一步挂载并传参
    // let wrapper = mount(HelloWorld, {
    //   propsData: { msg: "hello" }
    // });

    // 或者这么写
    let wrapper = mount(HelloWorld);
    wrapper.setProps({ msg: "hello" });

    expect(wrapper.find("h1").text()).to.be.contain("hello");
  });
});