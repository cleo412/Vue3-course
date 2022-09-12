<template>
	<form @submit.prevent>
		<h4>Создание поста</h4>
		<my-input v-model="post.title" type="text" placeholder="Название" />

		<my-input v-model="post.body" type="text" placeholder="Описание"></my-input>
		<my-button @click="createPost" style="align-self: flex-end; margin-top: 15px;">
			Создать
		</my-button>

	</form>
</template>
	
<script>
// import MyButton from "./UI/MyButton.vue"; // не надо, стали глобальными com в функции component в файле index.js

export default {
	// components: { MyButton }, // не надо, стали глобальными com в функции component в файле index.js
	data() {
		return {
			post: {
				title: '',
				body: '',
			}
		}
	},

	methods: {
		createPost() {
			this.post.id = Date.now();
			this.$emit('create', this.post); this.post = {
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
	border: 2px solid teal;
	padding: 10px 15px;
	margin-top: 15px;
}
</style>

<!-- Тут связывание с атрибутом value (аналогично с  title, name … )
<template>
<form @submit.prevent>
<h4>Создание поста</h4>
<my-input v-model:value="post.title" type="text" placeholder="Название"/>
<my-input v-model:value="post.body" type="text" placeholder="Описание"></my-input>
<my-button @click="createPost" style="align-self: flex-end; margin-top: 15px;">Создать</my-button>
</form>
</template>
-->
	
	