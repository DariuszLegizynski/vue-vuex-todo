<template>
	<div id="app">
		<div class="container">
			<AppTodo />
			<Todos />
		</div>
	</div>
</template>

<script>
import Todos from "../Todos/Todos.vue";
import AppTodo from "../AddTodo/AddTodo";

export default {
	name: "App",
	components: {
		Todos,
		AppTodo,
	},
};
</script>

<style src="./App.css"></style>
