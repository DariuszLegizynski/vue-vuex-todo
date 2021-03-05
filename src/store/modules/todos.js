import axios from "axios";

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
		const response = await axios.post(
			"https://jsonplaceholder.typicode.com/todos",
			{ title, completed: false }
		);

		commit("newTodo", response.data);
	},
	async deleteTodo({ commit }, id) {
		await axios.delete(
			`https://jsonplaceholder.typicode.com/todos/${id}`
		);
		commit("removeTodo", id);
	},
	async filterTodos({ commit }, e) {
		// get selected number
		const limit = parseInt(
			e.target.options[e.target.options.selectedIndex]
				.innerText
		);
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
		).catch((err) => alert(err.message));
		const fetchedData = await response
			.json()
			.catch((err) => alert(err.message));
		commit("setTodos", fetchedData);
	},
	async updateTodo({ commit }, updTodo) {
		const response = await axios
			.put(
				`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
				updTodo
			)
			.catch((err) => alert(err.message));
		commit("updateTodo", response);
	},
};

const mutations = {
	setTodos: (state, todos) => (state.todos = todos),
	newTodo: (state, todo) => state.todos.unshift(todo),
	removeTodo: (state, id) =>
		(state.todos = state.todos.filter(
			(todo) => todo.id !== id
		)),
	updateTodo: (state, updTodo) => {
		const index = state.todos.findIndex(
			(todo) => todo.id === updTodo.id
		);
		if (!index) {
			state.todos.splice(index, 1, updTodo);
		}
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
