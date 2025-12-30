const api=axios.create({
	baseURL: 'http://localhost:8080', 
	timeout: 5000
})
// api.get('/recipe/list') => 사용 방법
// =>localhost:8080이 중복되기에 하나로 설정

	