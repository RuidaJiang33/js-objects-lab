const aCar = {
    owner : "Joe Bloggs",
    address : "3 Walkers Lane",
    previous_owners: [
      {name : "Pat Smith" , address : "1 Main Street"},
      {name : "Sheila Dwyer" , address : "2 High Street"}
    ],
    type : {make:"Toyota", model:"Corolla", cc:"1.8"},
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
    registration : '201WD1058'
  };
  
  //Nested Objects
  console.log(aCar.owner + " drives a " + aCar.type.make);

  //Dynamic properties
  aCar.mileage = 10000;

  aCar.color = {
    exterior : "red",
    interior : {
        texture : "leather",
        shade : "cream"
    }
  }

  console.log("The mileage is " + aCar.mileage)
  console.log("The exterior color is " + aCar.color['exterior'])
  console.log("The texture is " + aCar.color['interior']['texture'] + ", and the shade is " + aCar.color['interior']['shade'])

  //Arrays
  console.log("First owner : " + aCar.previous_owners[0].name + " - " + aCar.previous_owners[0].address )

  //Looping/Iteration constructs
  for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
}

  for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
    console.log(aCar.previous_owners[i].name)
  } 

  for (let p in aCar.type)  {
    console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
}