Meteor.publish('a', function () {
  this.unblock()
  return Test.find({ type: 'a' })
})

Meteor.publish('b', function () {
  this.unblock()
  return Test.find({ type: 'b' })
})
