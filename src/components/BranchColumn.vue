<template>
	<div class="column">
		<!-- WHAREHOUSE -->
		<div class="select-title">
			<div class="icon warehouses"></div>
			<h4>Almacenes</h4>
		</div>
		<div v-for="branch in branches" :key="branch.id" v-if="branch.type === 'wharehouse'">
			<!-- Active item -->
			<div class="item" v-if="branch.active">
				<button class="select-item" @click="selectLocation(branch.locations)">
					<div class="info">
						<p>
							{{branch.branchName}}
							<span>Clave: {{branch.branchKey}}</span>
						</p>
					</div>
				</button>
			</div>
			<!-- Inactive item -->
			<div class="item" v-if="!branch.active">
				<button class="select-item" disabled>
					<div class="info">
						<span>
							{{branch.branchName}}
							<div class="popover_wrapper">
								<i class="fas fa-lock-alt"></i>
								<div class="push popover_content up">
									<p class="popover_message">
										No tienes
										<strong>permiso</strong> para modificar la información
									</p>
								</div>
							</div>
							<div class="d-block">Clave: {{branch.branchKey}}</div>
						</span>
					</div>
					<a class="fas fa-question-circle" @click="showRequest"></a>
				</button>
				<div class="request" :class="{'show': requestState}">
					<a class="fas fa-question-circle" @click="showRequest"></a>
					<p>¿Solicitar permiso para la Tienda {{branch.branchKey}}?</p>
					<div>
						<button class="button is-small is-bank">solicitar</button>
					</div>
				</div>
			</div>
		</div>
		<hr>

		<!-- OFFICES -->
		<div class="select-title">
			<div class="icon offices"></div>
			<h4>Oficinas</h4>
		</div>
		<div v-for="branch in branches" :key="branch.id" v-if="branch.type === 'office'">
			<!-- Active Item -->
			<div class="item" v-if="branch.active">
				<button class="select-item">
					<div class="info">
						<p>
							{{branch.branchName}}
							<span class="on"></span>
							<span>Clave: {{branch.branchKey}}</span>
						</p>
					</div>
				</button>
			</div>
			<!-- Inactive Item -->
			<div class="item" v-if="!branch.active">
				<button class="select-item" disabled>
					<div class="info">
						<span>
							{{branch.branchName}}
							<div class="popover_wrapper">
								<i class="fas fa-lock-alt"></i>
								<div class="push popover_content up">
									<p class="popover_message">
										No tienes
										<strong>permiso</strong> para modificar la información
									</p>
								</div>
							</div>
							<div class="d-block">Clave: {{branch.branchKey}}</div>
						</span>
					</div>
					<a class="fas fa-question-circle" @click="showRequest"></a>
				</button>
				<div class="request" :class="{'show': requestState}">
					<a class="fas fa-question-circle" @click="showRequest"></a>
					<p>¿Solicitar permiso para la Tienda #{{branch.branchKey}}?</p>
					<div>
						<button class="button is-small is-bank">solicitar</button>
					</div>
				</div>
			</div>
		</div>
		<hr>

		<!-- STORES -->
		<div class="select-title">
			<div class="icon stores"></div>
			<h4>Tiendas</h4>
		</div>
		<div v-for="branch in branches" :key="branch.id" v-if="branch.type === 'store'">
			<!-- Active item -->
			<div class="item" v-if="branch.active">
				<button class="select-item">
					<div class="info">
						<p>
							{{branch.branchName}}
							<span class="on"></span>
							<span>Clave: {{branch.branchKey}}</span>
						</p>
					</div>
				</button>
			</div>
			<!-- Inactive item -->
			<div class="item" v-if="!branch.active">
				<button class="select-item" disabled>
					<div class="info">
						<span>
							{{branch.branchName}}
							<div class="popover_wrapper">
								<i class="fas fa-lock-alt"></i>
								<div class="push popover_content up">
									<p class="popover_message">
										No tienes
										<strong>permiso</strong> para modificar la información
									</p>
								</div>
							</div>
							<div class="d-block">Clave: {{branch.branchKey}}</div>
						</span>
					</div>
					<a class="fas fa-question-circle" @click="showRequest"></a>
				</button>
				<div class="request" :class="{'show': requestState}">
					<a class="fas fa-question-circle" @click="showRequest"></a>
					<p>¿Solicitar permiso para la Tienda {{branch.branchKey}}?</p>
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
		name: "branch-column",
		props: {
			branches: {
				type: Array,
				required: true
			},
			showRequest: {
				type: Function,
				required: true
			},
			requestState: {
				type: Boolean,
				required: true
			},
			selectLocation: {
				type: Function,
				required: true
			}
		}
	};
</script>
