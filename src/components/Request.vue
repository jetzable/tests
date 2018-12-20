<template>
	<div :class="{'show': showRequest}">
		<div class="request">
			<a class="fas fa-question-circle"></a>
			<p>¿Solicitar permiso para la Tienda {{company.companyKey}}?</p>
			<div>
				<button class="button is-small is-bank">solicitar</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "request",
		data() {
			return {
				showRequest: false
			};
		}
	};
</script>

