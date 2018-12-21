<template>
	<div class="column">
		<div class="select-title">
			<div class="icon location"></div>
			<h4>Ubicación</h4>
		</div>
		<div v-for="location in locations" :key="location.id">
			<div class="item" v-if="location.active">
				<button class="select-item">
					<div class="info">
						<p>
							{{location.address}}
							<span class="on"></span>
							<span>Clave: {{location.key}}</span>
						</p>
					</div>
				</button>
			</div>
			<div class="item" v-if="!location.active">
				<button class="select-item" disabled>
					<div class="info">
						<span>
							{{location.address}}
							<div class="popover_wrapper">
								<i class="fas fa-lock-alt"></i>
								<div class="push popover_content up">
									<p class="popover_message">
										No tienes
										<strong>permiso</strong> para modificar la información
									</p>
								</div>
							</div>
							<div class="d-block">Clave: {{location.key}}</div>
						</span>
					</div>
					<a class="fas fa-question-circle" @click="showRequest"></a>
				</button>
				<div class="request" :class="{'show': requestState}">
					<a class="fas fa-question-circle" @click="showRequest"></a>
					<p>¿Solicitar permiso para la Tienda {{location.key}}?</p>
					<div>
						<button class="button is-small is-bank">solicitar</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "locations",
		props: {
			locations: {
				type: Object,
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

