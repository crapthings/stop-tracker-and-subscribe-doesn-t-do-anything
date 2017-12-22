const container = props => {
  const sub = Meteor.subscribe('d')
  if (!sub.ready)
    return { sub }

  const data = Test.find().fetch()
  console.log('page d data length', data.length)
  return { sub, data }
}

class component extends Component {
  componentDidMount() {
    console.log('enter page d')
  }

  componentWillUnmount() {
    console.log('leave page d')
    this.props.sub.stop()
  }

  render() {
    const { sub, data } = this.props

    if (!sub.ready)
      return <div>loading</div>

    return (
      <div>
        <h1>page d</h1>
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

FlowRouter.route('/d', {
  action() {
    mount(Layout, {
      children: props => <Index />
    })
  }
})
