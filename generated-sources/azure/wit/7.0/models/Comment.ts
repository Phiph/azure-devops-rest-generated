/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentMention } from './CommentMention';
import type { CommentReaction } from './CommentReaction';
import type { IdentityRef } from './IdentityRef';
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
/**
 * Comment on a Work Item.
 */
export type Comment = (WorkItemTrackingResource & {
    /**
     * IdentityRef of the creator of the comment.
     */
    createdBy?: IdentityRef;
    /**
     * The creation date of the comment.
     */
    createdDate?: string;
    /**
     * Effective Date/time value for adding the comment. Can be optionally different from CreatedDate.
     */
    createdOnBehalfDate?: string;
    /**
     * Identity on whose behalf this comment has been added. Can be optionally different from CreatedBy.
     */
    createdOnBehalfOf?: IdentityRef;
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
     * The reactions of the comment.
     */
    reactions?: Array<CommentReaction>;
    /**
     * The text of the comment.
     */
    text?: string;
    /**
     * The current version of the comment.
     */
    version?: number;
    /**
     * The id of the work item this comment belongs to.
     */
    workItemId?: number;
});

