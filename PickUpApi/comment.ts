import express from "express";
import {toEntity} from './application/mappers/commentMapper'
import { CommentDto } from "./domain/dtos/CommentDto";
import  {CommentsRepository} from './Infrastructure/repositories/CommentsRepository'

export class CommentsApi{
    private _commentsRepository:any;
    constructor(){
        this._commentsRepository = new CommentsRepository();
    }
    
    async getAll(req: express.Request, res: express.Response){
        let comments = await this._commentsRepository.Get();
        return  res.status(200).json(comments);
    };
    async create(req: express.Request, res: express.Response){
        const commentDto = this.getDtoFromRequest(req);
        let createComment = await this._commentsRepository.Create(toEntity(commentDto))
        if(createComment){
            return res.status(201).json(createComment);
        }else{
            return res.status(400).send("The comment could not be created. Please check the provided data.")
        }
    }
    getDtoFromRequest(req: express.Request){
        return new CommentDto(req.body.id, new Date(), req.body.userId, req.body.Comment,
        req.body.restaurantId);
    }
}

