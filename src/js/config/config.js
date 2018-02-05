const fakeAPI = {
	"CompleteData" : ()=> fetch("/mock/userProfile.json").then(res => res.json()).then(res => res[0]),
	"AdressListData" : ()=> fetch("/mock/userProfile.json").then(res => res.json()).then(res => res[0]["addresses"]),
	"WishlistData" : ()=> fetch("/mock/userProfile.json").then(res => res.json()).then(res => res[0]["wishlist"]),
	"OrderHistoryData" : ()=> fetch("/mock/userProfile.json").then(res => res.json()).then(res => res[0]["order_history"])
}	
//
module.exports = fakeAPI;