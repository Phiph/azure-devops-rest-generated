/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentList } from './CommentList';
import type { CommentMention } from './CommentMention';
import type { CommentReaction } from './CommentReaction';
import type { CommentResourceReference } from './CommentResourceReference';
import type { IdentityRef } from './IdentityRef';
/**
 * Comment on an artifact like Work Item or Wiki, etc.
 */
export type Comment = (CommentResourceReference & {
    /**
     * The id of the artifact this comment belongs to
     */
    artifactId?: string;
    /**
     * IdentityRef of the creator of the comment.
     */
    createdBy?: IdentityRef;
    /**
     * The creation date of the comment.
     */
    createdDate?: string;
    /**
     * The id assigned to the comment.
     */
    id?: number;
    /**
     * Indicates if the comment has been deleted.
     */
    isDeleted?: boolean;
    /**
     * The mentions of the comment.
     */
    mentions?: Array<CommentMention>;
    /**
     * IdentityRef of the user who last modified the comment.
     */
    modifiedBy?: IdentityRef;
    /**
     * The last modification date of the comment.
     */
    modifiedDate?: string;
    /**
     * The comment id of the parent comment, if any
     */
    parentId?: number;
    /**
     * The reactions on the comment.
     */
    reactions?: Array<CommentReaction>;
    /**
     * The rendered text of the comment
     */
    renderedText?: string;
    /**
     * Replies for this comment
     */
    replies?: CommentList;
    /**
     * Indicates the current state of the comment
     */
    state?: 'active' | 'resolved' | 'closed';
    /**
     * The plaintext/markdown version of the comment
     */
    text?: string;
    /**
     * The current version of the comment
     */
    version?: number;
});

