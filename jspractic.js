//Problem solving 1:-
// seerToMon
function seerToMon(seer) {
    if (seer == 0 || seer < 0) {
        return "Plese input higher number"
    } else {
        return seer / 40;
    }
}
var ask = seerToMon(60);
// console.log(ask)
/*---------------------------------------------------------------------------
-------------------------------------------------------------------------*/
//Problem solving 2:-
// totalSales
function totalSales(qntShirt, qntPant, qntShoes) {
    if (qntShirt < 0 || qntPant < 0 || qntShoes < 0) {
        return "plser Enter all quantity input number , if quantity is 0 then use 0 , not use minus input"
    } else {
        var shirt = 100 * qntShirt;
        var pant = 200 * qntPant;
        var shoes = 500 * qntShoes;
        var total = shirt + pant + shoes;
        return total;
    }
}
var asked = totalSales(1, -1, 1);
console.log(asked)
/*---------------------------------------------------------------------------
-------------------------------------------------------------------------*/
//Problem solving 3:-
// deliveryCost
function deliveryCost(quantity) {
    let First100QntyPrice = 10000; //first 100 quantity price is 100. (100*100).
    let second100QntyPrice = 8000; // second 101-200 quantity price is 80 . (100*80).
    if (quantity < 0) {
        return "Enter correct Quantity"
    } else if (quantity <= 100) {
        var cost = quantity * 100;
        return cost;
    } else if (quantity > 100 && quantity < 200) {
        var extra = quantity - 100;
        var extraPrice = extra * 80;
        cost = 10000 + extraPrice;
        return cost;
    } else if (quantity > 200) {
        extra = quantity - 200;
        extraPrice = extra * 50;
        cost = First100QntyPrice + second100QntyPrice + extraPrice;
        return cost;
    }
}
var asked2 = deliveryCost(210);
//console.log(asked2)
/*---------------------------------------------------------------------------
-------------------------------------------------------------------------*/
//Problem solving 4:-
// perfectFriend
var friendsName = ['Hossen', 'asad', 'kanjul', 'mahmudul', 'akash'];
function perfectFriend(friendsName) {
    var lgth = 5;
    var friend;
    for (var i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length == lgth) {
            var lgth = friendsName[i].length;
            friend = friendsName[i];
            return friend;
        }
    }
}
var showfriendName = perfectFriend(friendsName);
// console.log(showfriendName);