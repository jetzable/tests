<template>
	<div class="column">
		<div class="select-title">
			<div class="icon companies"></div>
			<h4>Empresas</h4>
		</div>
		<div class="item" v-for="company in companies" :key="company.id">
			<div v-if="company.active">
				<button class="select-item" @click.prevent="onClick(company.id)">
					<div class="info">
						<p>
							{{company.name}}
							<span class="on"></span>
							<span v-if="company.rfc !== null">RFC: {{company.rfc}}</span>
							<span v-if="company.clave !== null">Clave: {{company.companyKey}}</span>
						</p>
					</div>
				</button>
			</div>
			<div v-if="!company.active">
				<button class="select-item" disabled>
					<div class="info">
						<span>
							{{company.name}}
							<div class="popover_wrapper">
								<i class="fas fa-lock"></i>
								<div class="push popover_content up">
									<p class="popover_message">
										No tienes
										<strong>permiso</strong> para modificar la información
									</p>
								</div>
							</div>
							<div class="d-block" v-if="company.rfc !== null">RFC: {{company.rfc}}</div>
							<div class="d-block" v-if="company.clave !== null">RFC: {{company.companyKey}}</div>
						</span>
					</div>
					<a class="fas fa-question-circle" @click="showRequest"></a>
				</button>
				<div class="request" :class="{'show': requestState}">
					<a class="fas fa-question-circle" @click="showRequest"></a>
					<p>¿Solicitar permiso para la Tienda {{company.companyKey}}?</p>
					<div>
						<button class="button is-small is-bank">solicitar</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Request from "@/components/Request.vue";

	export default {
		name: "company-column",
		components: {
			Request
		},
		props: {
			companies: {
				type: Array,
				required: true
			},
			onClick: {
				type: Function,
				required: true
			},
			showRequest: {
				type: Function,
				required: true
			},
			requestState: {
				type: Boolean,
				required: true
			}
		}
	};
</script>

<style>
	.popover_content.up {
		right: -140px !important;
	}
</style>
