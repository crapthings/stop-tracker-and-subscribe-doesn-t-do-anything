_ = require('lodash')
moment = require('moment')
faker = require('faker')

React = require('react')
Component = React.Component
mount = require('react-mounter').mount

// composeWithTracker = require('react-komposer').composeWithTracker
compose = require('react-komposer').compose
withTracker = require('meteor/react-meteor-data').withTracker

composeWithTracker = function (reactiveMapper) {
  return (props, onData, env) => {
    let trackerCleanup = null
    const handler = Tracker.nonreactive(() => {
      return Tracker.autorun(trackerHandler => {
        trackerCleanup = reactiveMapper(props, onData, env, trackerHandler)
      })
    })

    return () => {
      if(typeof trackerCleanup === 'function') trackerCleanup()
      return handler.stop()
    }
  }
}

Layout = ({ children }) => <div>
  <nav>
    <a href="/">home</a>
    <a href="/a">a</a>
    <a href="/b">b</a>
    <a href="/c">c</a>
    <a href="/d">d</a>
  </nav>
  {children()}
</div>

Test = new Mongo.Collection('test')
