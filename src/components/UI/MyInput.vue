<template>
	<input :value="modelValue" @input="updateInput" class="input" type="text">
</template>
	
<script>
export default {
	name: 'my-input',
	props: {
		modelValue: [String, Number]
	},
	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value) // иммичу ($emit) по особому шаблону event.target.value (значение самого инпута)- передаю значение, которое должно обновиться 
		}
	}
}
</script>
<style scoped>
.input {
	border: 2px solid teal;
	padding: 10px 15px;
	margin-top: 15px;
}
</style>
	
	
<!-- Тут связывание с атрибутом value (аналогично с  title, name … )
<template>
к самому инпуту биндю modelValue и начинаю прослушивать событие input - v-on:input="updateInput"
<input v-bind:value="modelValue" v-on:input="updateInput" class="input" type="text"> // полное написание
<input :value="value" @input="updateInput" class="input" type="text"> // сокращенное написание 
</template>
<script>
export default {
name: 'my-input',
props: {  value: [String, Number]	},
methods: {
updateInput(event) {			
	this.$emit('update:value, event.target.value) // иммичу ($emit) по особому шаблону. event.target.value - передаю значение, которое должно обновиться (значение самого инпута)
}   
}  
}
</script>
-->
