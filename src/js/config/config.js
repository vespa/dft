const fakeAPI = {
	"CompleteData" : ()=> fetch("mock/userProfile.json").then(res => res.json()).then(res => res[0]),
	"AdressListData" : ()=> fetch("mock/userProfile.json").then(res => res.json()).then(res => res[0]["addresses"]),
}
module.exports = fakeAPI;