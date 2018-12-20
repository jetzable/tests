<template>
	<div class="select-branch">
		<div class="columns">
			<CompanyColumn class="is-one-third" :companies="companies" :onClick="handleBranchSelected"/>
			<BranchColumn
				class="is-one-third"
				:branches="branchSelected"
				:class="{'is-hidden': showBranches}"
			/>
		</div>
	</div>
</template>


<script>
	import CompanyColumn from "@/components/CompanyColumn.vue";
	import BranchColumn from "@/components/BranchColumn.vue";

	export default {
		name: "select-branch",
		components: {
			CompanyColumn,
			BranchColumn
		},
		methods: {
			handleBranchSelected(id) {
				this.companies.forEach(company => {
					if (company.id === id) {
						this.branchSelected = company.branch;
					}
				});
				this.showBranches = !this.showBranches;
			}
		},
		data() {
			return {
				requestHidden: false,
				showBranches: true,
				branchSelected: {},
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
								type: "storage"
							},
							{
								id: 12,
								branchName: "Almacén 2",
								branchKey: "0984728",
								active: true,
								type: "storage"
							},
							{
								id: 13,
								branchName: "Oficina 1",
								branchKey: "98730290",
								active: true,
								type: "office"
							},
							{
								id: 14,
								branchName: "Oficina 2",
								branchKey: "73933826",
								active: false,
								type: "office"
							},
							{
								id: 15,
								branchName: "Tienda 1",
								branchKey: "7261839",
								active: true,
								type: "store"
							},
							{
								id: 16,
								branchName: "Tienda 2",
								branchKey: "7261839",
								active: false,
								type: "store"
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
								type: "storage"
							},
							{
								id: 22,
								branchName: "Almacén knxxn",
								branchKey: "1513135",
								active: true,
								type: "storage"
							},
							{
								id: 23,
								branchName: "Oficina sdjnojnel",
								branchKey: "7283089",
								active: true,
								type: "office"
							},
							{
								id: 24,
								branchName: "Oficina jnsuenek",
								branchKey: "73933826",
								active: false,
								type: "office"
							},
							{
								id: 25,
								branchName: "Tienda jjajakai",
								branchKey: "7261839",
								active: false,
								type: "store"
							},
							{
								id: 26,
								branchName: "Tienda 2",
								branchKey: "7261839",
								active: true,
								type: "store"
							}
						]
					},
					{
						id: 3,
						name: "Almacén Sonora Grill",
						rfc: null,
						companyKey: "90078434",
						active: true,
						branch: [
							{
								id: 31,
								branchName: "Almacén del EDOMEX",
								branchKey: "12408416",
								active: false,
								type: "storage"
							},
							{
								id: 32,
								branchName: "Almacén 2",
								branchKey: "0984728",
								active: true,
								type: "storage"
							},
							{
								id: 33,
								branchName: "Oficina iii",
								branchKey: "98730290",
								active: true,
								type: "office"
							},
							{
								id: 34,
								branchName: "Oficina 2",
								branchKey: "73933826",
								active: false,
								type: "office"
							},
							{
								id: 35,
								branchName: "Tienda primero",
								branchKey: "7261839",
								active: false,
								type: "store"
							},
							{
								id: 36,
								branchName: "Tienda 2",
								branchKey: "7261839",
								active: true,
								type: "store"
							}
						]
					}
				]
			};
		}
	};
</script>
