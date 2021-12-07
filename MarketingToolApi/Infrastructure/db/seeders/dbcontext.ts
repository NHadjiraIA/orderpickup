import { Database } from "../database";
import { BranchEntity } from "../models/branch";
import { OfferEntity } from "../models/offer";

export abstract class DbContext{
   private static _db:Database;
   public static db(){
       if(DbContext._db){
           return DbContext._db;
       }
       else{
           DbContext.Initialize();
           return DbContext._db;
       }
   }
    public static Initialize(){
        //Fill out the data in the database 
        DbContext._db = new Database();
        DbContext._db.branches = create_mock_branches();
        DbContext._db.offers = create_mock_offers();
    }
}

function create_mock_branches(): BranchEntity[] {
    let branches = Array<BranchEntity>();
    let branch1= new BranchEntity();
    branch1.id = 1;
    branch1.longitude = 2345;
    branch1.latitude = 5455;
    branch1.name = "RBC";
    branch1.address = 'Ottawa';
    branch1.offers = [
        {id : 4,
        image :"https://www.zdnet.com/a/img/resize/b2677166f21490f76917908d251bdc3365525d65/2021/04/19/16cfc8be-eaf5-4e37-b1f9-ec3e13d1081c/image-2.jpg?width=1200&height=900&fit=crop&auto=webp",
        caption :"Get the latest iPad at no cost",
       // endDate :  
        description : "Up to $39 rebate on the annual fee of an eligible credit cardlegal bug 5",
        //startedDate :  
        }
    ];
    //Complete the deifnition of the brank branch here
    branches.push(branch1);
    let branch2 = new BranchEntity();
    branch2.id = 2;
    branch2.longitude = 243345;
    branch2.latitude = 45455;
    branch2.name = "RBC";
    branch2.address = 'Toronto';
    //Complete the deifnition of the brank branch here
    branches.push(branch2);
    //add more branches if needed
    return branches;
}
function create_mock_offers(): OfferEntity[] {
    let offers = new Array<OfferEntity>();
    let offer1 = new OfferEntity();
    offer1.id = 4;
    offer1.image = "https://www.zdnet.com/a/img/resize/b2677166f21490f76917908d251bdc3365525d65/2021/04/19/16cfc8be-eaf5-4e37-b1f9-ec3e13d1081c/image-2.jpg?width=1200&height=900&fit=crop&auto=webp";
    offer1.caption = "Get the latest iPad at no cost";
   // offer1.endDate = null;
    offer1.description = "Up to $39 rebate on the annual fee of an eligible credit cardlegal bug 5";
   // offer.startedDate = "2021-12-16";
    //Complete the definition of the offers after the model is fully defined. 
    offers.push(offer1);
    
    //add more offers if needed.
    return offers
}

