/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Represents a comment which is one of potentially many in a comment thread.
 */
export type Comment = {
    /**
     * Links to other related objects.
     */
    _links?: ReferenceLinks;
    /**
     * The author of the comment.
     */
    author?: IdentityRef;
    /**
     * The comment type at the time of creation.
     */
    commentType?: 'unknown' | 'text' | 'codeChange' | 'system';
    /**
     * The comment content.
     */
    content?: string;
    /**
     * The comment ID. IDs start at 1 and are unique to a pull request.
     */
    id?: number;
    /**
     * Whether or not this comment was soft-deleted.
     */
    isDeleted?: boolean;
    /**
     * The date the comment's content was last updated.
     */
    lastContentUpdatedDate?: string;
    /**
     * The date the comment was last updated.
     */
    lastUpdatedDate?: string;
    /**
     * The ID of the parent comment. This is used for replies.
     */
    parentCommentId?: number;
    /**
     * The date the comment was first published.
     */
    publishedDate?: string;
    /**
     * A list of the users who have liked this comment.
     */
    usersLiked?: Array<IdentityRef>;
};

