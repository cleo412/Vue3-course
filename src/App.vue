<template>
	<div class="app">
		<!-- при нажатии на кнопку Создать  обновляется стрница и пост в ф-цции createPos теряю для исправления этого вешаю собыние @submit.prevent на форму-->
		<form @submit.prevent>
			<h4>Создание поста</h4>
			<!-- можно удалить в methods ф-ции inputTitle и inputBody и добавить тут вместо @input="inputTitle" иное: @input="title = $event.target.value"  и @input="body = $event.target.value" соответственно,-->
			<input v-bind:value="title" @input="inputTitle" class="input" type="text" placeholder="Название">
			<input v-bind:value="body" @input="inputBody" class="input" type="text" placeholder="Описание">
			<button class="btn" @click="createPost">Создать</button>
		</form>
		<!-- почему надо писать про v-bind:key="post.id" -  Атрибут key помогает Vue определять уникальные элементы в списке и с его помощью можно определить, был ли элемент уже отображен в пользовательском интерфейсе-->
		<div class="post" v-for="post in posts" v-bind:key="post.id">
			<div><strong>Название:</strong> {{ post.title }}</div>
			<div><strong>Описание:</strong> {{ post.body }}</div>
		</div>
	</div>
</template>
 
<script>
export default {
	data() {
		return {
			posts: [
				{ id: 1, title: 'JavaScript-1', body: 'Описание поста-1' },
				{ id: 2, title: 'JavaScript-2', body: 'Описание поста-2' },
				{ id: 2, title: 'JavaScript-3', body: 'Описание поста-3' },
			],
			title: '',
			body: '',
		}
	},
	methods: {
		// event.stopPropagation(); // чтобы это не писать, пишут в templete в теге form - <form @submit.prevent>
		// event.preventDefault();// чтобы это не писать, пишут в templete в теге form - <form @submit.prevent>
		inputTitle(event) {
			this.title = event.target.value;
		},
		inputBody(event) {
			this.body = event.target.value;
		},
		createPost() {
			const newPost = {
				id: Date.now(),
				title: this.title,
				body: this.body,
			}
			this.posts.push(newPost);
			this.title = "";
			this.body = "";
		},
	}
}
</script>
	
<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 20px;
}

.post {
	padding: 15px;
	border: 2px solid teal;
	margin-top: 15px;
}

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
	