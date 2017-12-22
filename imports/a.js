const container = (props, onData, env, trackerHandler) => {
  const subHandler = Meteor.subscribe('a')
  if (!subHandler.ready)
    return onData(null, { subHandler })

  const data = Test.find().fetch()
  console.log('page a data length', data.length)
  onData(null, { subHandler, data, trackerHandler })
}

class component extends Component {
  componentDidMount() {
    console.log('enter page a')
  }

  componentWillUnmount() {
    console.log('leave page a')
    console.log(this.props.trackerHandler)
    this.props.subHandler.stop()
    this.props.trackerHandler.stop()
  }

  render() {
    const { subHandler, data } = this.props

    if (!subHandler.ready)
      return <div>loading</div>

    return (
      <div>
        <h1>page a</h1>
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

const Index = compose(composeWithTracker(container))(component)

FlowRouter.route('/a', {
  action() {
    mount(Layout, {
      children: props => <Index />
    })
  }
})
