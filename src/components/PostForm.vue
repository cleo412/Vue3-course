<template>
	<!-- чтобы отключить действия браузера по умолчанию и не писать лишнего в методе createPost (event.stopPropagation() и event.preventDefault() ), пишу тут о @submit.prevent -->

	<form @submit.prevent>
		<h4>Создание поста</h4>
		<!-- это гиморное написание, v-model все упрощает (ниже) -->
		<!-- развернутое  написание-->
		<!-- <input v-bind:value="post.title" v-on:input="post.title = $event.target.value" class="input" type="text" placeholder="Название"> -->

		<!-- упрощенное написание-->
		<!-- <input :value="post.body" @input="post.body = $event.target.value" class="input" type="text" placeholder="Описание"> -->

		<input v-model="post.title" class="input" type="text" placeholder="Название">
		<input v-model="post.body" class="input" type="text" placeholder="Описание">

		<button @click="createPost" class="btn">Создать</button>
	</form>
</template>
	
	
<script>
export default {
	// event.stopPropagation(); // чтобы это не писать, пишут в templete в теге form - <form @submit.prevent>
	// event.preventDefault();// чтобы это не писать, пишут в templete в теге form - <form @submit.prevent>
	// Основой компонента являются данные, которыми мы будем манипулировать. Эти данные хранятся в специальном объекте data.
	data() {
		return {
			post: {
				title: '',
				body: '',
			}
		}
	},
	methods: {
		// передача из РК в ДК происходит с помощью пропсов, т к для передачи из ДК в РК напрямую возможности нет, поэтому нужно будет сгенерировать некоторое событие create (это событие на уровне click, input … и аргументом будет принимать событие event), параметром это событие будет принимать готовый пост. Одновременно, в РК нужно подписаться на такое событие create
		createPost() {
			this.post.id = Date.now();
			this.$emit('create', this.post, "second param", " 3 param"); // emit - это спец ф-ция, для генерации события, на которое подпишется РК, 1 параметр - название события, 2 параметр - аргументы, которые будут попадать в нашу функцию emit, после того, как на это событие подпишется РК
			this.post = {
				// очищаем инпуты после передачи поста в РК		
				title: '',
				body: ''
			}
		}
	}
}
</script>
		
<style scoped>
form {
	display: flex;
	flex-direction: column;
}

.input {
	width: 100%;
	border: 2px solid teal;
	padding: 10px 15px;
	margin-top: 15px;
}

.btn {
	align-self: flex-end;
	margin-top: 15px;
	padding: 10px 15px;
	background: none;
	border: 1px solid teal;
	color: teal;
}
</style>
	
	