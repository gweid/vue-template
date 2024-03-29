// 动态加载全局组件
import Vue from 'vue';
const componentsContext = require.context('./', true, /\.vue$/);
componentsContext.keys().forEach((component) => {
    const componentConfig = componentsContext(component);
    /**
     * 兼容 import export 和 require module.export 两种规范
     * c,t,r,l
     */
    const ctrl = componentConfig.default || componentConfig;
    Vue.component(ctrl.name, ctrl);
});
