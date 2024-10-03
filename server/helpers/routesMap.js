export const routes = {
    main: () => '/',
    // todos
    todos: () => '/todos',
    todoNew: () => '/todos/new',
    todoShow: (id) => `/todos/${id}`,
    todoDelete: (id) => `/todos/${id}`,
}