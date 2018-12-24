<template>
	<button class="select-item">
		<div class="info">
			<p>
				{{company.name}}
				<span class="on"></span>
				<span v-if="company.rfc">RFC: {{company.rfc}}</span>
				<span v-if="company.key">Clave: {{company.key}}</span>
			</p>
		</div>
	</button>
</template>

<script>
	export default {
		name: "active-item",
		props: {
			company: {
				type: Object,
				required: true
			}
		}
	};
</script>

