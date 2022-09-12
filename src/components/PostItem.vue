<template>
	<div class="post">
		<div>
			<div><strong>Название:</strong> {{ post.title }}</div>
			<div><strong>Описание:</strong> {{ post.body }}</div>
		</div>

		<div class="post__btns">
			<my-button @click="$emit('remove', post)">Удалить</my-button>
		</div>
	</div>
</template>
	
<script>
// import MyButton from "./UI/MyButton.vue"; // не надо, стали глобальными component в функции component в файле index.js

export default {
	// components: { MyButton }, // не надо, стали глобальными component в функции component в файле index.js

	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>
.post {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 2px solid teal;
	padding: 15px;
	margin-top: 15px;
}
</style>
	