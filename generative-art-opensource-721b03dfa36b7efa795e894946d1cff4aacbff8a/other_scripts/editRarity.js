var fs = require("fs");

const rarity = require("./settings/rarity.json");

//inputs
//Which folder? User clicks on folder which is name
//Which element
var folder = '90-headwear' //variable to search folder
var element = 'Headset' //variable to search folder's element
var newWeight = 100; //variable to edit weight


for(i=0;i<10;i++){
  //locate folder
  if(races1['layers'][i]['name'] == folder) {
    for(j=0;j<races1['layers'][i]['elements'].length;j++){
      //locate element with name
      
        if(races1['layers'][i]['elements'][j]['name'] == element) {

          var id = races1['layers'][i]['elements'][j]['id']
          var name = races1['layers'][i]['elements'][j]['name']
          var location = races1['layers'][i]['elements'][j]['path']

          races1['layers'][i]['elements'][j]={'id':id,'name':name,'path':location,'weight':newWeight}
          console.log(races1['layers'][i]['elements'][j])
        }
     
      
    }
  }
}

var dictstringRarity = JSON.stringify(rarity);
fs.writeFile("./input/races.json", dictstringRaces, function(err, result) {
  if(err) console.log('error', err);
});

module.exports = {
  races
}

console.log("editRarity: Successful")
