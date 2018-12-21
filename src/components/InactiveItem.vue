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
					<div class="d-block" v-if="company.rfc !== null">RFC: {{company.rfc}}</div>
					<div class="d-block" v-if="company.clave !== null">RFC: {{company.companyKey}}</div>
				</span>
			</div>
			<a class="fas fa-question-circle" @click.prevent="showHiddenRequest"></a>
			<Request :class="{'show': showRequest}"/>
		</button>
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
			return {
				showRequest: false
			};
		},
		methods: {
			showHiddenRequest() {
				this.showRequest = !this.showRequest;
			}
		},
		props: {
			company: {
				type: Object,
				required: true
			}
		}
	};
</script>
