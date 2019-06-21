import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import card from './card.vue'

function domElementGetter() {
    return document.getElementById("vueapp")
}
const vueLifecycles = singleSpaVue({
  Vue,
  domElementGetter,
  appOptions: {
    el: '#vueapp',
    render: r => r(card)
  }
});
export const bootstrap = [vueLifecycles.bootstrap,];
export const mount = [vueLifecycles.mount,];
export const unmount = [vueLifecycles.unmount,];
