Test.remove({})

_.times(1000, n => {
  Test.insert({
    title: 'page a ' + (n + 1 ),
    type: 'a',
    text: faker.lorem.sentences(),
  })
})

_.times(1000, n => {
  Test.insert({
    title: 'page b ' + (n + 1 ),
    type: 'b',
    text: faker.lorem.sentences(),
  })
})

_.times(1000, n => {
  Test.insert({
    title: 'page c ' + (n + 1 ),
    type: 'c',
    text: faker.lorem.sentences(),
  })
})

_.times(1000, n => {
  Test.insert({
    title: 'page d ' + (n + 1 ),
    type: 'd',
    text: faker.lorem.sentences(),
  })
})
