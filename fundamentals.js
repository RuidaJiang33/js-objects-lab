const aCar = {
    owner : "Joe Bloggs",
    type : {make:'Toyota', model:'Corolla', cc:'1.8'},
    registration : '201WD1058'
  };
  
  console.log(aCar.owner + ' drives a ' + aCar.type.make);

  aCar.mileage = 10000;

  aCar.color = {
    exterior : "red",
    interior : {
        texture : leather,
        shade : cream
    }
  }

  console.log('The mileage is' + aCar.mileage)
  console.log('The exterior color is' + aCar.exterior)
  console.log('The texture is' + aCar.interior.texture + ' And the shade is' + aCar.interior.shade)