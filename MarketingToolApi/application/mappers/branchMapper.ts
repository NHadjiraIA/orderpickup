import { BranchDto } from "../../domain/dtos/BranchDto"
import {BranchEntity} from "../../Infrastructure/db/models/branch"


export const toEntity = (BranchDto: BranchDto): BranchEntity => {
    let branchEntity = new BranchEntity();
    branchEntity.id = BranchDto.Id;
    branchEntity.longitude = BranchDto.longitude;
    branchEntity.latitude = BranchDto.latitude;
    branchEntity.address = BranchDto.address;
    branchEntity.name = BranchDto.name;
    return branchEntity;
}
 