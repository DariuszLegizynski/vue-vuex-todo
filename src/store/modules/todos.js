const state = {
	todos: [],
};

const getters = {
	allTodos: (state) => state.todos,
};

const actions = {
	async fetchTodos({ commit }) {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/todos"
		).catch((err) => alert(err.message));
		const fetchedData = await response.json();
		commit("setTodos", fetchedData); //passes fetchedData into todos in mutations => setTodos: {..., todos} below
	},
	async addTodo({ commit }, title) {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/todos",
			{
				method: "POST",
				body: JSON.stringify({
					title,
					completed: false,
				}),
			}
		).catch((err) => alert(err.message));
		const postedData = await response.json();
		commit("newTodo", postedData);
	},
};

const mutations = {
	setTodos: (state, todos) => (state.todos = todos),
	newTodo: (state, todo) => [todo, ...state.todos],
};

export default {
	state,
	getters,
	actions,
	mutations,
};
