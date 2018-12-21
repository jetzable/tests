<template>
	<div class="select-branch">
		<div class="columns">
			<CompanyColumn
				class="is-one-third"
				:companies="companies"
				:onClick="handleBranchSelected"
				:showRequest="handleShowRequest"
				:requestState="requestHidden"
			/>
			<BranchColumn
				class="is-one-third"
				:branches="branchSelected"
				:class="{'is-hidden': showBranches}"
				:showRequest="handleShowRequest"
				:requestState="requestHidden"
				:selectLocation="handleLocationSelected"
			/>
			<Locations
				class="is-one-third"
				:class="{'is-hidden': showLocations}"
				:locations="locationsSelected"
				:showRequest="handleShowRequest"
				:requestState="requestHidden"
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
						this.branchSelected = company.branch;
					}
				});
				this.showBranches = !this.showBranches;
			},
			handleLocationSelected(locations) {
				this.locationsSelected = locations;
				this.showLocations = !this.showLocations;
			},
			handleShowRequest() {
				this.requestHidden = !this.requestHidden;
			}
		},
		data() {
			return {
				requestHidden: false,
				showBranches: true,
				showLocations: true,
				branchSelected: [],
				locationsSelected: [],
				companies: [
					{
						id: 1,
						name: "no patito S.A de C.V",
						rfc: "POASHF12434",
						clave: null,
						active: true,
						branch: [
							{
								id: 11,
								branchName: "kakakaka EDOMEX",
								branchKey: "12408416",
								active: false,
								type: "wharehouse",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 12,
								branchName: "Almacén 2",
								branchKey: "0984728",
								active: true,
								type: "wharehouse",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 13,
								branchName: "Oficina 1",
								branchKey: "98730290",
								active: true,
								type: "office",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 14,
								branchName: "Oficina 2",
								branchKey: "73933826",
								active: false,
								type: "office",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 15,
								branchName: "Tienda 1",
								branchKey: "7261839",
								active: true,
								type: "store",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 16,
								branchName: "Tienda 2",
								branchKey: "7261839",
								active: false,
								type: "store",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
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
						clave: null,
						active: false,
						branch: [
							{
								id: 21,
								branchName: "Almacén EDOMEX",
								branchKey: "8272030",
								active: false,
								type: "wharehouse",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 22,
								branchName: "Almacén knxxn",
								branchKey: "1513135",
								active: true,
								type: "wharehouse",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 23,
								branchName: "Oficina sdjnojnel",
								branchKey: "7283089",
								active: true,
								type: "office",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 24,
								branchName: "Oficina jnsuenek",
								branchKey: "73933826",
								active: false,
								type: "office",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 25,
								branchName: "Tienda jjajakai",
								branchKey: "7261839",
								active: false,
								type: "store",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 26,
								branchName: "Tienda 2",
								branchKey: "7261839",
								active: true,
								type: "store",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
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
								branchName: "Almacén del EDOMEX",
								branchKey: "12408416",
								active: false,
								type: "wharehouse",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 32,
								branchName: "Almacén 2",
								branchKey: "0984728",
								active: true,
								type: "wharehouse",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 33,
								branchName: "Oficina iii",
								branchKey: "98730290",
								active: true,
								type: "office",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 34,
								branchName: "Oficina 2",
								branchKey: "73933826",
								active: false,
								type: "office",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 35,
								branchName: "Tienda primero",
								branchKey: "7261839",
								active: false,
								type: "store",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
										key: "12408416",
										active: false
									}
								]
							},
							{
								id: 36,
								branchName: "Tienda 2",
								branchKey: "7261839",
								active: true,
								type: "store",
								locations: [
									{
										address: "Montevideo",
										key: "93870983",
										active: true
									},
									{
										address: "Calzada de Guadalupe CDMX",
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
