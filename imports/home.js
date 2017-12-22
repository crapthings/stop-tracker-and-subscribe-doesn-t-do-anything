FlowRouter.route('/', {
  action() {
    mount(Layout, {
      children: props => <div>home</div>
    })
  }
})
