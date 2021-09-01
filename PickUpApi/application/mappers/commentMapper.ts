import { CommentDto } from "../../domain/dtos/CommentDto"
import {CommentEntity} from "../../Infrastructure/db/models/comment"


export const toEntity = (CommentDto: CommentDto): CommentEntity => {
    let commentEntity = new CommentEntity();
    commentEntity.id = CommentDto.Id;
    commentEntity.restaurantId = CommentDto.restaurantId;
    commentEntity.Comment = CommentDto.Comment;
    commentEntity.createdAt = CommentDto.CreatedAt;
    commentEntity.updatedAt = CommentDto.UpdatedAt;
    return commentEntity;
}
 