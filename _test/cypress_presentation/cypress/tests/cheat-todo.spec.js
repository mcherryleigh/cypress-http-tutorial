import todoSchema from './schema/Todo';
chai.ajv.addSchema(todoSchema, 'todo');

describe('Todo API', () => {
  it('GET /todos', () => {
    cy.request({
      method: 'GET',
      url: '/todos'
    }).then((resp) => {
      expect(resp.body.data[1]).to.be.validWithSchema('todo')
      expect(resp.status).to.eq(200)
    });
  });

  it('POST /todos', () => {
    cy.request({
      method: 'POST',
      url: '/todos',
      body: {
        title: 'Make a new todo',
        completed: false
      }
    }).then((resp) => {
      expect(resp.body).to.be.validWithSchema('todo')
      expect(resp.body.title).to.eq('Make a new todo');
      expect(resp.body.completed).to.eq(false)
      expect(resp.status).to.eq(201)
    });
  });

  it('GET /todos/{todoId}', () => {
    var todoId = 'FXaJkAY1JL4KJp7u';
    cy.request({
      method: 'GET',
      url: `/todos/${todoId}`
    }).then((resp) => {
      expect(resp.body.title).to.eq('Learn vue');
      expect(resp.body.completed).to.eq(true)
      expect(resp.status).to.eq(200)
    });
  });

  it('PUT /todos/{todoId}', () => {
    var todoId = 'FXaJkAY1JL4KJp7u';
    cy.request({
      method: 'PUT',
      url: `/todos/${todoId}`,
      body: {
        title: 'New Name',
        completed: false
      }
    }).then((resp) => {
      expect(resp.body._id).to.eq(todoId)
      expect(resp.body.title).to.eq('New Name');
      expect(resp.body.completed).to.eq(false)
      expect(resp.status).to.eq(200)
    })
  });

  it('DELETE /todos/{todoId}', () => {
    var todoId = 'FXaJkAY1JL4KJp7u';
    cy.request({
      method: 'DELETE',
      url: `/todos/${todoId}`
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    });
  });
})