const html = `
  <img src="https://www.51xuediannao.com/uploads/allimg/140105/1-140105142A3-51.gif" class="icon" />
`

const div = document.createElement('div');
div.classList.add('goTop');
div.innerHTML = html;
document.body.appendChild(div);

div.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
})