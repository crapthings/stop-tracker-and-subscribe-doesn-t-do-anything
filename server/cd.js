Meteor.publish('c', function () {
  this.unblock()
  return Test.find({ type: 'c' })
})

Meteor.publish('d', function () {
  this.unblock()
  return Test.find({ type: 'd' })
})
