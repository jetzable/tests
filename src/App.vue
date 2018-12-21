<template>
	<div id="app">
		<div>
			<Input msg="Welcome to Your Vue.js App"/>
			<Buttons/>
		</div>
	</div>
</template>

<script>
	import Buttons from "./components/Buttons.vue";
	import Input from "./components/Input.vue";

	export default {
		name: "app",
		components: {
			Buttons,
			Input
		}
	};
</script>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		padding: 2em;
	}
</style>
