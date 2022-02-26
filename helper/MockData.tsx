import faker from "@faker-js/faker"

//genarate random data set
faker.seed(10);

var locationImageArray = [
    {
    file : require('../assets/locations/0.jpeg')
    }
    ,
    {
    file : require('../assets/locations/1.jpeg')
    }
    ,
    {
    file : require('../assets/locations/2.jpeg')
    }
    ,
    {
    
    file : require('../assets/locations/3.jpeg')
    }
    ,
    {
    file : require('../assets/locations/4.jpeg')
    }
        ,
    {
    file : require('../assets/locations/5.jpeg')
    }
    ,
    {
    file : require('../assets/locations/6.jpeg')
    }
    ,
    {
    file : require('../assets/locations/7.jpeg')
    }
    ,
    {
    file : require('../assets/locations/8.jpeg')
    }
    ,    
    {
    file : require('../assets/locations/9.jpeg')
    }    
]

export const listingData = [...Array(10).keys()].map((_, i) => {
    return {
        key : faker.datatype.uuid(),
        image : locationImageArray[faker.datatype.number(9)],
        title : faker.helpers.randomize(['Driveaway Cleaning', 'Snow removal in back-yard', 'Shovelers Needed !!']),
        location : faker.address.city(),
        date : faker.date.recent().getMinutes(),
        posterName : faker.name.firstName(),
        posterContact : faker.phone.phoneNumber("+1-###-###-####"),
        budget : faker.finance.amount(50.200)
    }

})
