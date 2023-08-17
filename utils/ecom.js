import request from './request.js'

export default {
	getAllMtSwiper(params) {
		return request.post("/api/getAllMtSwiper", params);
	},
	getAllInfoProducttype: (params) => request.post("/api/getAllInfoProducttype", params),
	searchEcomProduct: (params) => request.post("/api/searchEcomProduct", params),
}