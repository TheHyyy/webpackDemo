import x from './x.js'

console.log('我是index文件里面的')

div.innerHTML = `
  <img src ="https://p0.ssl.qhimgs1.com/sdr/400__/t010be73dd088bc7146.jpg" >
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
  const promiseLazy = import('./lazy.js')
  promiseLazy.then(
    (module) => {
      module.default()
    },
    () => {},
  )
}
div.appendChild(button)
