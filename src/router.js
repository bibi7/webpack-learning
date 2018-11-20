import foo from './views/foo/foo'
import bar from './views/bar/bar'


const routes = {
  '/foo': foo,
  '/bar': bar
}

class Router {
  constructor(name) {
    this.name = name
  }

  start() {
    window.addEventListener('popstate', () => {
      this.load(location.pathname)
    })

    // 打开页面时加载当前页面
    this.load(location.pathname)
  }

  go(path) {
    history.pushState({}, '', path)
    this.load(path)
  }

  load(path) {
    if (path === '/') path = '/foo'
    const view = new routes[path]()
    view.mount(document.body)
  }

  console() {
    console.log(this.name)
  }
}

export default new Router()