<template>
	<div class="item" @click="handleCompanySelect(company.key)">
		<button class="select-item" :class="{ active: company.active }" v-if="company.status">
			<div class="info">
				<p>
					{{ company.name }}
					<span class="on"></span>
					<span>RFC: {{ company.key }}</span>
				</p>
			</div>
		</button>
		<button class="select-item" disabled v-if="!company.status">
			<div class="info">
				<span>
					{{company.name}}
					<div class="popover_wrapper">
						<i class="fas fa-lock-alt"></i>
						<div class="push popover_content up">
							<p class="popover_message">
								No tienes
								<strong>permiso</strong> para modificar la información
							</p>
						</div>
					</div>
					<div class="d-block">RFC: {{company.key}}</div>
				</span>
			</div>
			<a class="fas fa-question-circle"></a>
		</button>
		<!-- <div class="request show">
			<a class="fas fa-question-circle"></a>
			<p>¿Solicitar permiso para la Tienda #8009?</p>
			<div>
				<button class="button is-small is-bank">solicitar</button>
			</div>
		</div>-->
	</div>
</template>
<script>
	export default {
		props: {
			company: {
				type: Object,
				required: true
			},
			handleCompanySelect: {
				type: Function,
				required: true
			}
		},
		name: "ListItem"
	};
</script>
