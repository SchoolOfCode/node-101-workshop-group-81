let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];
  //console.log(myCollection)
  function describeItem(name, whatILike) {
      console.log(`I have a ${name}, here's what I like about it: ${whatILike}`)

  }
  describeItem("hat", "An often overlooked fashion accessory") 
 