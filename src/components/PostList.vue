<template>
	<div>
		<h3>Список пользователей</h3>
		<post-item v-for="post in posts" :post="post" v-bind:key="post.id" />
	</div>
</template>

<script>
import PostItem from "./PostItem.vue"

export default {
	components: {
		PostItem
	},
	props: {
		posts: {
			type: Array, // что ожидаю на входе (массив постов)
			required: true //  делать обязательными
		}
	}
}
</script>

<style scoped>
.post {
	padding: 15px;
	border: 2px solid teal;
	margin-top: 15px;
}
</style>
	