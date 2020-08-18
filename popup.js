/** Start 基础示例 */
const Header = ({children}) => {
  const left = '<'
  return (
  <header className="header"><span className="icon-left">{left}</span><div className="title">{children}</div></header>
  )
}

const App = () => {
  const [text, setText] = React.useState('标题');
return (<Header>{text}</Header>);
}
const domContainer = document.querySelector('#app');
ReactDOM.render(App, domContainer);
/** End */
