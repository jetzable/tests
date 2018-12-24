<template>
	<div>
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
					<div class="d-block" v-if="company.rfc">RFC: {{company.rfc}}</div>
					<div class="d-block" v-if="company.clave">RFC: {{company.key}}</div>
				</span>
			</div>
			<a class="fas fa-question-circle" @click.prevent="showHiddenRequest(company.id)"></a>
		</button>
		<Request
			v-if="company.id === idRequest"
			class="request"
			:class="{'show': showRequest}"
			:showHiddenRequest="showHiddenRequest"
			:companyInfo="company"
		/>
	</div>
</template>

<script>
	import Request from "@/components/Request.vue";

	export default {
		name: "inactive-item",
		components: {
			Request
		},
		data() {
			return {};
		},
		props: {
			company: {
				type: Object,
				required: true
			},
			showRequest: {
				type: Boolean,
				required: true
			},
			showHiddenRequest: {
				type: Function,
				required: true
			},
			idRequest: {
				type: Number,
				required: true
			}
		}
	};
</script>
