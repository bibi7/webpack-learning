class Router {
  constructor(name) {
    this.name = name
  }

  start() {
    window.addEventListener('popstate', () => {
      this.load(location.pathname)
    })

    this.load(location.pathname)
  }

  go(path) {
    history.pushState({}, '', path)
    this.load(path)
  }

  load(path) {
    if (path === '/') path = '/foo'
  }

  console() {
    console.log(this.name)
  }
}

export default new Router()