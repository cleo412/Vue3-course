<template>
	<!--<div v-if="posts.length > 0"> условие для пустого списка, если условие не выполняется, то удаляется эл-т полностью из дом-дерева, чтобы этого не произошло директива show есть-->
	<div v-show="posts.length > 0">
		<h3>Список пользователей</h3>
		<post-item v-for="post in posts" :post="post" v-bind:key="post.id" @remove="$emit('remove', post)" />
	</div>

	<!--<h2 v-else style="color: teal">
	Список постов пуст</h2>-->
	<h2 v-show="posts.length === 0" style="color: teal">
		Список постов пуст</h2>
</template>

<script>

import PostItem from "./PostItem.vue";

export default {
	components: {
		PostItem,
	},

	// передача пропсов (как аргументы в ф-ции) в компонет
	props: {
		posts: {
			type: Array, // что ожидаю на входе (массив постов)
			required: true // делать их обязательными
		}
	}
}
</script>

<style scoped>

</style>
	