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
};

const mutations = {
	setTodos: (state, todos) => (state.todos = todos),
	newTodo: (state, todo) => state.todos.unshift(todo),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
