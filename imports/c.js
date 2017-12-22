const container = props => {
  const sub = Meteor.subscribe('c')
  if (!sub.ready)
    return { sub }

  const data = Test.find().fetch()
  console.log('page c data length', data.length)
  return { sub, data }
}

class component extends Component {
  componentDidMount() {
    console.log('enter page c')
  }

  componentWillUnmount() {
    console.log('leave page c')
    this.props.sub.stop()
  }

  render() {
    const { sub, data } = this.props

    if (!sub.ready)
      return <div>loading</div>

    return (
      <div>
        <h1>page c</h1>
        <h3>react komposer</h3>
        {data.map(({ _id, title, text }) => (
          <div key={_id} className='mgb'>
            <h5>{title}</h5>
            <p>{text}</p>
          </div>
        ))}
      </div>
    )
  }
}

const Index = withTracker(container)(component)

FlowRouter.route('/c', {
  action() {
    mount(Layout, {
      children: props => <Index />
    })
  }
})
