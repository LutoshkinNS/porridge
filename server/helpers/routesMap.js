export const routes = {
    main: () => '/',
    // todos
    todos: () => '/todos',
    todoNew: () => '/todos',
    todoShow: (id) => `/todos/${id}`,
    todoDelete: (id) => `/todos/${id}`,
}