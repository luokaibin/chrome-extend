/** Start 使用 template */
// const app = new Vue({
//   el: '#app',
//   data() {
//     return {
//       text: 'test data'
//     }
//   },
//   template: `
//     <h1>{{text}}</h1>
//   `,
//   created() {
//     console.log('create.....', this.text)
//   }
// })
/** End */

/** Start 使用 render*/
// const app = new Vue({
//   el: '#app',
//   data() {
//     return {
//       text: 'test data'
//     }
//   },
//   render: function(h) {
//     return h('h1', this.text)
//   },
//   created() {
//     console.log('create.....', this.text)
//   },
// })
/** End */

/** Start 使用 render 创建组件开发 */
const Header = {
  name: 'Header',
  data() {
    return {

    }
  },
  render(h, context) {
    console.log(this);
    return h('header', {class: ['header']}, [
      h('span', {class: ['icon-left']}, '<'),
      h('div', {class: ['title']}, this.$slots.default)
    ])
  }
}

const app = new Vue({
  el: '#app',
  components: {Header},
  data() {
    return {
      text: '标题'
    }
  },
  render: function(h) {
    return h(Header, this.text)
  },
  created() {
    console.log('create.....', this.text)
  },
})