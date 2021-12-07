import express from "express";
import { BranchDto } from "./domain/dtos/BranchDto";
import { toEntity } from "./application/mappers/branchMapper";
import  {BranchesRepository} from './Infrastructure/repositories/BranchesRepository'

export class BranchesApi{
    private _branchesRepository:any;
    constructor(){
        this._branchesRepository = new BranchesRepository();
    }
    
    async getAll(req: express.Request, res: express.Response){
        let branches = await this._branchesRepository.Get();
        return  res.status(200).json(branches);
    };

    async getByBranchId(req: express.Request, res: express.Response){
        let branchId = Number(req.query.id);
        let branch = await this._branchesRepository.GetBranchById(branchId);
        return  res.status(200).json(branch);
    };

    async delete(req: express.Request, res: express.Response){
        let branchdId = Number(req.query.Id);
        let isDeleted = await this._branchesRepository.Delete(branchdId);
        if (isDeleted) {
            return  res.status(200).json(isDeleted);
        } else {
            return  res.status(400).json(isDeleted);
        }
        
    };

    async create(req: express.Request, res: express.Response){
        const branchDto = this.getDtoFromRequest(req);
        
        let createBranch = await this._branchesRepository.Create(toEntity(branchDto))
        if(createBranch){
            console.log('branch created', createBranch);
            return res.status(201).json(createBranch);
        }else{
            return res.status(400).send("The branch could not be created. Please check the provided data.")
        }
    }

    getDtoFromRequest(req: express.Request){
        return new BranchDto(req.body.id, req.body.name, 
        req.body.address,req.body.longitude, req.body.latitude, new Date());
    }
}

