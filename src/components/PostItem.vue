<template>
	<div class="post">
		<div><strong>Название:</strong> {{ post.title }}</div>
		<div><strong>Описание:</strong> {{ post.body }}</div>
	</div>
</template>

<script>
export default {
	props: {
		post: {
			type: Object, // что ожидаю на входе (объект)
			required: true // это обязательный  пропс, т к без поста невозможно отрисовать пост на странице
		}
	}
}
</script>
	