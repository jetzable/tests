<template>
	<div class="select-branch">
		<!-- <div class="outer-20-b">
			<a @click.prevent="handleCloseColumn">
				<i class="fas fa-chevron-left"></i> Regresar
			</a>
		</div>-->
		<div class="columns">
			<CompanyColumn
				class="is-one-third"
				:activeItem="activeCompanies"
				:inactiveItem="inactiveCompanies"
				:showHiddenRequest="showHiddenRequest"
				:handleBranchSelected="handleBranchSelected"
				:showRequest="showRequest"
				:idRequest="idRequest"
			/>
			<BranchColumn
				class="is-one-third"
				:class="{'is-hidden': showBranches}"
				:activeItem="activeBranches"
				:inactiveItem="inactiveBranches"
				:showRequest="showRequest"
				:idRequest="idRequest"
				:selectLocation="selectLocation"
				:showHiddenRequest="showHiddenRequest"
			/>
			<Locations
				class="is-one-third"
				:class="{'is-hidden': showLocations}"
				:activeItem="activeLocations"
				:inactiveItem="inactiveLocations"
				:showRequest="showRequest"
				:idRequest="idRequest"
				:showHiddenRequest="showHiddenRequest"
			/>
		</div>
	</div>
</template>


<script>
	import CompanyColumn from "@/components/CompanyColumn.vue";
	import BranchColumn from "@/components/BranchColumn.vue";
	import Locations from "@/components/Locations.vue";

	export default {
		name: "select-branch",
		components: {
			CompanyColumn,
			BranchColumn,
			Locations
		},
		methods: {
			handleBranchSelected(id) {
				this.companies.forEach(company => {
					if (company.id === id) {
						company.branch.forEach(branch => {
							if (branch.active) {
								this.activeBranches.push(branch);
							} else {
								this.inactiveBranches.push(branch);
							}
						});
					}
				});
				this.showBranches = !this.showBranches;
			},
			selectLocation(locations) {
				locations.forEach(location => {
					if (location.active) {
						this.activeLocations.push(location);
					} else {
						this.inactiveLocations.push(location);
					}
				});
				this.showLocations = !this.showLocations;
			},
			handleActiveCompanies() {
				this.companies.forEach(company => {
					if (company.active) {
						this.activeCompanies.push(company);
					} else {
						this.inactiveCompanies.push(company);
					}
				});
			},
			showHiddenRequest(id) {
				this.idRequest = id;
				this.showRequest = !this.showRequest;
			},
			handleCloseColumn() {
				if (!this.showLocations) {
					this.showLocations = true;
				} else if (!this.showBranches) {
					this.showBranches = true;
				}
			}
		},
		created() {
			this.handleActiveCompanies();
		},
		data() {
			return {
				idRequest: 0,
				showRequest: false,
				showBranches: true,
				showLocations: true,
				activeBranches: [],
				inactiveBranches: [],
				activeLocations: [],
				inactiveLocations: [],
				activeCompanies: [],
				inactiveCompanies: [],
				companies: [
					{
						id: 1,
						name: "no patito S.A de C.V",
						rfc: "POASHF12434",
						key: null,
						active: true,
						branch: [
							{
								id: 11,
								name: "kakakaka EDOMEX",
								key: "12408416",
								active: false,
								type: "wharehouse",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 12,
								name: "Almacén 2",
								key: "0984728",
								active: true,
								type: "wharehouse",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 13,
								name: "Oficina 1",
								key: "98730290",
								active: true,
								type: "office",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 14,
								name: "Oficina 2",
								key: "73933826",
								active: false,
								type: "office",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 15,
								name: "Tienda 1",
								key: "7261839",
								active: true,
								type: "store",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 16,
								name: "Tienda 2",
								key: "7261839",
								active: false,
								type: "store",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							}
						]
					},
					{
						id: 4,
						name: "tito S.A de C.V",
						rfc: "POASHF12434",
						key: null,
						active: true,
						branch: [
							{
								id: 41,
								name: "kakakaka EDOMEX",
								key: "12408416",
								active: false,
								type: "wharehouse",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 42,
								name: "Almacén 2",
								key: "0984728",
								active: true,
								type: "wharehouse",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 43,
								name: "Oficina 1",
								key: "98730290",
								active: true,
								type: "office",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 44,
								name: "Oficina 2",
								key: "73933826",
								active: false,
								type: "office",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 45,
								name: "Tienda 1",
								key: "7261839",
								active: true,
								type: "store",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 46,
								name: "Tienda 2",
								key: "7261839",
								active: false,
								type: "store",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							}
						]
					},
					{
						id: 2,
						name: "Empresa no patito S.A de C.V",
						rfc: "POASHF12434",
						key: null,
						active: false,
						branch: [
							{
								id: 21,
								name: "Almacén EDOMEX",
								key: "8272030",
								active: false,
								type: "wharehouse",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 22,
								name: "Almacén knxxn",
								key: "1513135",
								active: true,
								type: "wharehouse",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 23,
								name: "Oficina sdjnojnel",
								key: "7283089",
								active: true,
								type: "office",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 24,
								name: "Oficina jnsuenek",
								key: "73933826",
								active: false,
								type: "office",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 25,
								name: "Tienda jjajakai",
								key: "7261839",
								active: false,
								type: "store",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 26,
								name: "Tienda 2",
								key: "7261839",
								active: true,
								type: "store",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							}
						]
					},
					{
						id: 3,
						name: "Almacén Sonora Grill",
						rfc: null,
						companyKey: "90078434",
						active: false,
						branch: [
							{
								id: 31,
								name: "Almacén del EDOMEX",
								key: "12408416",
								active: false,
								type: "wharehouse",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 32,
								name: "Almacén 2",
								key: "0984728",
								active: true,
								type: "wharehouse",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 33,
								name: "Oficina iii",
								key: "98730290",
								active: true,
								type: "office",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 34,
								name: "Oficina 2",
								key: "73933826",
								active: false,
								type: "office",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 35,
								name: "Tienda primero",
								key: "7261839",
								active: false,
								type: "store",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 36,
								name: "Tienda 2",
								key: "7261839",
								active: true,
								type: "store",
								locations: [
									{
										name: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										name: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							}
						]
					}
				]
			};
		}
	};
</script>
