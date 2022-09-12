<template>
	<div class="app">
		<!-- если ДК в названии имеет PostForm, то тут он прописывается post-form (через дефис и с маленькой буквы), полное написание: <post-form></post-form>  -->
		<!-- передаем те компоненты, которые я хочу использовать в шаблоне; @create  - подписываюсь на событие от ДК -->
		<post-form @create="createPost" />

		<!--v-bind:posts="posts" - это привязываю посты к компоненту, посты будут лететь в компонент как пропс -->
		<post-list v-bind:posts="posts" />

	</div>

</template>

<script>
// компоненты нужно импортировать
import PostForm from "./components/PostForm.vue"
import PostList from "./components/PostList.vue"

export default {
	// компоненты нужно зарегистрировать
	components: {
		PostList, PostForm
	},

	data() {
		return {
			posts: [],
		}
	},

	methods: {
		// получили post от PostForm и в массив постов добавили в PostList
		createPost(post) {
			this.posts.push(post);
		}
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
</style>
	