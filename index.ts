import Elysia from 'elysia'

interface Todo {
    id: number
    title: string
    description: string
    completed: boolean
}

const todos: Todo[] = [
    {
        title: 'Learn Arrow Functions',
        description:
            'Practice rewriting regular functions into arrow functions to improve code readability.',
        completed: false,
    },
    {
        title: 'Build a To-Do App',
        description:
            'Create a simple to-do list app to enhance your understanding of CRUD operations.',
        completed: false,
    },
    {
        title: 'Explore Promises and Async/Await',
        description:
            'Experiment with Promises and async/await to better handle asynchronous JavaScript.',
        completed: false,
    },
    {
        title: 'Debug Code Using DevTools',
        description:
            'Use browser DevTools to debug an application and learn how to set breakpoints effectively.',
        completed: false,
    },
    {
        title: 'Master Array Methods',
        description:
            'Work with methods like map(), filter(), and reduce() to manipulate and analyze arrays.',
        completed: false,
    },
    {
        title: 'Understand Closures',
        description:
            'Deep dive into closures and practice examples to strengthen your functional programming skills.',
        completed: false,
    },
    {
        title: 'Write Unit Tests with Jest',
        description:
            'Set up a basic JavaScript project and write unit tests using the Jest framework.',
        completed: false,
    },
    {
        title: 'Refactor Code for Readability',
        description:
            'Take an existing project and refactor it to make it cleaner and more readable.',
        completed: false,
    },
    {
        title: 'Learn ES6 Modules',
        description:
            'Understand how to import and export modules in JavaScript using ES6 syntax.',
        completed: false,
    },
    {
        title: 'Contribute to Open Source',
        description:
            'Find a beginner-friendly JavaScript project on GitHub and submit a small contribution.',
        completed: false,
    },
].map((todo, id) => ({ id, ...todo }))

new Elysia()
    .get('/todos', async () => {
        const shuffledTodos = todos.sort(() => 0.5 - Math.random())
        return { todos: shuffledTodos.slice(0, 5) }
    })
    .get('/todo/:id', async ({ params: { id } }) => {
        return { todo: todos[Number(id)] }
    })
    .listen({ port: 8000 })
