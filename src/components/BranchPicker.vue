<template>
	<div class="select-branch" style="border: 2px solid purple;">
		<div class="outer-20-b">
			<a href="#">&lt; Regresar</a>
		</div>
		<div class="columns">
			<CompanyList :companies="companies" :handle-company-select="handleCompanySelect"/>
			<StoreList :storeList="storeList" :handle-company-select="handleCompanySelect"/>
			<LocationList/>
		</div>
	</div>
</template>
<script>
	import CompanyList from "./CompanyList.vue";
	import StoreList from "./StoreList.vue";
	import LocationList from "./LocationList.vue";

	export default {
		name: "SomeComponent",
		data() {
			return {
				storeList: [],
				companiesFromServer: [
					{
						name: "Alpha",
						key: "1234567890",
						status: true,
						stores: [
							{
								name: "Store1",
								key: "kjefui3",
								status: true,
								type: "warehouse",
								locations: [
									{
										name: "Location11",
										key: "123428ccnjn90",
										status: true
									},
									{
										name: "Location12",
										key: "kdvi2938",
										status: true
									}
								]
							},
							{
								name: "Store2",
								key: "83283uhb",
								status: true,
								type: "warehouse",
								locations: [
									{
										name: "Location21",
										key: "oii2hb3jjkb",
										status: true
									},
									{
										name: "Location22",
										key: "l3knrjnlnf",
										status: true
									}
								]
							},
							{
								name: "Store3",
								key: "289379837",
								status: false,
								type: "office",
								locations: [
									{
										name: "Location31",
										key: "endfljn3345",
										status: true
									},
									{
										name: "Location32",
										key: "3rn3njrljjneldf",
										status: true
									}
								]
							},
							{
								name: "Store4",
								key: "nfn3in",
								status: false,
								type: "store",
								locations: [
									{
										name: "Location41",
										key: "l4kmmk4l",
										status: true
									},
									{
										name: "Location42",
										key: "l3knlk",
										status: true
									}
								]
							}
						]
					},
					{
						name: "Beta",
						key: "83r83470",
						status: false,
						stores: [
							{
								name: "Store21",
								key: "lksdcn832",
								status: true,
								type: "warehouse",
								locations: [
									{
										name: "Location211",
										key: "nffjb3823",
										status: true
									},
									{
										name: "Location212",
										key: "38urv",
										status: true
									}
								]
							},
							{
								name: "Store22",
								key: "dkncljn3344",
								status: true,
								type: "office",
								locations: [
									{
										name: "Location221",
										key: "3nrk3m3mn",
										status: true
									},
									{
										name: "Location222",
										key: "934rnrn3",
										status: true
									}
								]
							},
							{
								name: "Store23",
								key: "3nr3mnkn3",
								status: false,
								type: "store",
								locations: [
									{
										name: "Location231",
										key: "l2k3m3k",
										status: true
									},
									{
										name: "Location232",
										key: "23kl2k3n",
										status: true
									}
								]
							}
						]
					},
					{
						name: "Gamma",
						key: "8927339sdkln",
						status: true,
						stores: [
							{
								name: "Store31",
								key: "3lknrl3n",
								status: true,
								type: "warehouse",
								locations: [
									{
										name: "Location311",
										key: "oiinlknr",
										status: true
									},
									{
										name: "Location312",
										key: "lk6nkn",
										status: true
									}
								]
							},
							{
								name: "Store32",
								key: "5k6mlk5m6",
								status: true,
								type: "office",
								locations: [
									{
										name: "Location321",
										key: "l5k4mmkl5m",
										status: true
									},
									{
										name: "Location322",
										key: "5km4klm",
										status: true
									}
								]
							},
							{
								name: "Store33",
								key: "rkkmkl5",
								status: false,
								type: "store",
								locations: [
									{
										name: "Location331",
										key: "65lkm5lk6m",
										status: true
									},
									{
										name: "Location332",
										key: "56lkm4lk",
										status: true
									}
								]
							},
							{
								name: "Store34",
								key: "lk4knln5",
								status: false,
								type: "store",
								locations: [
									{
										name: "Location341",
										key: "6565k65",
										status: true
									},
									{
										name: "Location342",
										key: "32m4km",
										status: true
									}
								]
							}
						]
					}
				],
				activeCompanyTaxId: "1234567890"
			};
		},
		computed: {
			activeCompany() {
				return this.companiesFromServer[0];
			},
			companies() {
				return this.companiesFromServer.map(company => {
					return {
						...company,
						...{ active: company.taxId === this.activeCompanyTaxId }
					};
				});
			}
		},
		methods: {
			handleCompanySelect(taxId) {
				this.activeCompanyTaxId = taxId;
				this.companiesFromServer.forEach(company => {
					if (company.key === taxId) {
						this.storeList = company.stores;
					}
				});
			}
		},
		components: {
			CompanyList,
			StoreList,
			LocationList
		}
	};
</script>
