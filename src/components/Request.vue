<template>
	<div>
		<a class="fas fa-question-circle" @click.prevent="showHiddenRequest"></a>
		<p>¿Solicitar permiso para la Tienda {{companyInfo.name}}?</p>
		<div>
			<button class="button is-small is-bank">solicitar</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "request",
		props: {
			showHiddenRequest: {
				type: Function,
				required: true
			},
			companyInfo: {
				type: Object,
				required: true
			}
		}
	};
</script>

