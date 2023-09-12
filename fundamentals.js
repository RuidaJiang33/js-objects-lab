const aCar = {
    owner : "Joe Bloggs",
    address : "3 Walkers Lane",
    previous_owners: [
      {name : "Pat Smith" , address : "1 Main Street"},
      {name : "Sheila Dwyer" , address : "2 High Street"}
    ],
    type : {make:"Toyota", model:"Corolla", cc:"1.8"},
    registration : '201WD1058'
  };
  
  console.log(aCar.owner + " drives a " + aCar.type.make);

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

  console.log("First owner : " + aCar.previous_owners[0]['name'] + " - " + aCar.previous_owners[0]['address'] )