import  {BranchEntity} from "../db/models/branch"
import { DbContext } from "../db/seeders/dbcontext";

export class BranchesRepository{
    constructor(){
        
    }

    public  Get(): BranchEntity[]{
        let branches  = DbContext.db().branches;
        return branches;
    }

    public  GetBranchById(branchId: number): BranchEntity[]{
        let branch  =  DbContext.db().branches.filter(branch => branch.id == branchId);
        return branch;
    }

     
    
    public  Delete(branchId: number): Boolean{
        //let branchdeleted =  DbContext.db().branches.pop(branch);
        return true;
    }

    public Create(model: BranchEntity){
        return DbContext.db().branches.push(model);
    }
 
}
