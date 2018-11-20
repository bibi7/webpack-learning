import router from '../../router'
import template from './index.html'


export default class {
  mount(container) {
    document.title = 'foo'
    container.innerHTML = template
    container.querySelector('.foo').addEventListener('click', () => {
      router.go('/bar')
    })
  }
}