<template>
	<div class="column">
		<!-- STORAGES -->
		<div class="select-title">
			<div class="icon warehouses"></div>
			<h4>Almacenes</h4>
		</div>
		<div v-for="branch in branches" :key="branch.id" v-if="branch.type === 'storage'">
			<!-- Active item -->
			<div class="item" v-if="branch.active">
				<button class="select-item">
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
					<a class="fas fa-question-circle" @click="showRequest = !showRequest"></a>
				</button>
        
				<!-- <div class="request" :class="{'show': showRequest}">
					<a class="fas fa-question-circle" @click="showRequest = !showRequest"></a>
					<p>¿Solicitar permiso para la Tienda #{{branch.branchKey}}?</p>
					<div>
						<button class="button is-small is-bank">solicitar</button>
					</div>
				</div> -->
			</div>
		</div>
		<hr>

		<!-- OFFICES -->
		<div class="select-title">
			<div class="icon offices"></div>
			<h4>Oficinas</h4>
		</div>
		<div v-for="branch in branches" :key="branch.branchKey" v-if="branch.type === 'office'">
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
					<a class="fas fa-question-circle" @click="showRequest = !showRequest"></a>
				</button>
				<div class="request" :class="{'show': showRequest}">
					<a class="fas fa-question-circle" @click="showRequest = !showRequest"></a>
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
		<!-- Active item -->
		<div class="item">
			<button class="select-item">
				<div class="info">
					<p>
						Tienda Mixcoac
						<span class="on"></span>
						<span>Clave: 12408416</span>
					</p>
				</div>
			</button>
		</div>
		<!-- Inactive item -->
		<div class="item">
			<button class="select-item" disabled>
				<div class="info">
					<span>Tienda centralizada Cancún A
						<div class="popover_wrapper">
							<i class="fas fa-lock-alt"></i>
							<div class="push popover_content up">
								<p class="popover_message">
									No tienes
									<strong>permiso</strong> para modificar la información
								</p>
							</div>
						</div>
						<div class="d-block">Clave: 90078434</div>
					</span>
				</div>
				<a class="fas fa-question-circle"></a>
			</button>
			<div class="request">
				<a class="fas fa-question-circle"></a>
				<p>¿Solicitar permiso para la Tienda #8009?</p>
				<div>
					<button class="button is-small is-bank">solicitar</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    name: "branch-column",
    data(){
      return {
        showRequest: false
      }
    },
		props: {
			branches: {
				type: Array,
				required: true
			}
		}
	};
</script>
