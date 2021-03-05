<template>
	<div>
		<h3>Todos</h3>
		<div class="legend">
			<span>
				Double click to mark as complete
			</span>
			<span>
				<span class="incomplete-box">
					= Incomplete
				</span>
			</span>
			<span>
				<span class="complete-box">
					= Complete
				</span>
			</span>
		</div>
		<div class="todos">
			<div
				@dblclick="onDblClick(todo)"
				v-for="todo in allTodos"
				:key="todo.id"
				class="todo"
				v-bind:class="{ 'is-complete': todo.completed }"
			>
				{{ todo.title }}
				<p @click="deleteTodo(todo.id)">del</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "Todos",
	methods: {
		...mapActions([
			"fetchTodos",
			"deleteTodo",
			"updateTodo",
		]),
		onDblClick(todo) {
			const updTodo = {
				id: todo.id,
				title: todo.title,
				completed: !todo.completed,
			};
			this.updateTodo(updTodo);
		},
	},
	computed: { ...mapGetters(["allTodos"]) },
	created() {
		this.fetchTodos();
	},
};
</script>

<style src="./Todos.css"></style>
