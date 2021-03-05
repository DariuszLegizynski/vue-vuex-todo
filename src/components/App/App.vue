<template>
	<div id="app">
		<div class="container">
			<AppTodo />
			<FilterTodos />
			<Todos />
		</div>
	</div>
</template>

<script>
import Todos from "../Todos/Todos.vue";
import AppTodo from "../AddTodo/AddTodo";
import FilterTodos from "../filterTodos/FilterTodos";

export default {
	name: "App",
	components: {
		Todos,
		AppTodo,
		FilterTodos,
	},
};
</script>

<style src="./App.css"></style>
