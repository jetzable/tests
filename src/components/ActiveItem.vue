<template>
	<button class="select-item">
		<div class="info">
			<p>
				{{company.name}}
				<span class="on"></span>
				<span v-if="company.rfc !== null">RFC: {{company.rfc}}</span>
				<span v-if="company.clave !== null">Clave: {{company.companyKey}}</span>
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

