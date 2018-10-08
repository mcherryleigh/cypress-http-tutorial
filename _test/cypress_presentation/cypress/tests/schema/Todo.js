module.exports = {
  title: 'Todo v1',
  type: 'object',
  properties: {
    _id: { type: 'string' },
    title: { type: 'string' },
    completed: { type: 'boolean' }
  },
  required: ['title', 'completed']
};