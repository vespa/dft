const fakeAPI = {
	"CompleteData" : ()=> fetch("mock/userProfile.json").then(res => res.json()).then(res => res[0])
}
module.exports = fakeAPI;