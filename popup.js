/** Start 基础示例 */
const e = React.createElement;

const Header = ({children}) => {
  return e('header', {class: 'header'}, e('span', {class: 'icon-left'}, '<'), e('div', {class: 'title'}, children))
}

const App = () => {
  const [text, setText] = React.useState('标题');
  return e(Header, null, text);
}
const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);
/** End */
