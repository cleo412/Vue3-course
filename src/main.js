import { createApp } from 'vue'
import App from './App.vue'
import com from './components/UI' //  импортирую папку UI, в которой находится: MyButton, index.js

const app = createApp(App); // создам переменную, в которой находится мой экземпляр приложения Vue

//com - это массив UI-компонентов, я могу пройтись по нему forEach:

com.forEach(component => {
	app.component(component.name, component);   // component- это  функция https://v3.ru.vuejs.org/ru/guide/component-basics.html#%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D0%B8-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80, которая позволяет глобально зарегистрировать новый компонент
})

app.mount('#app');
