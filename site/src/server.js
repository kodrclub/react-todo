import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,

    models: {
      task: Model,
    },

    seeds(server) {
      server.create('task', {
        id: 1,
        text: 'Use styled components',
        isDone: false,
        isDeleted: null,
      });
      server.create('task', {
        id: 2,
        text: 'Write some tests',
        isDone: true,
        isDeleted: null,
      });
      server.create('task', {
        id: 3,
        text: 'Research MobX',
        isDone: false,
        isDeleted: null,
      });
    },

    routes() {
      this.namespace = 'api';

      this.get('/tasks', (schema) => {
        return schema.tasks.all();
      });

      let newId = 4;
      this.post('/tasks', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = newId++;

        return { task: attrs };
      });
    },
  });

  return server;
}
