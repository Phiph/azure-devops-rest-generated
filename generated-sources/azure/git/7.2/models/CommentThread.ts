/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from './Comment';
import type { CommentThreadContext } from './CommentThreadContext';
import type { IdentityRef } from './IdentityRef';
import type { PropertiesCollection } from './PropertiesCollection';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Represents a comment thread of a pull request. A thread contains meta data about the file it was left on along with one or more comments (an initial comment and the subsequent replies).
 */
export type CommentThread = {
    /**
     * Links to other related objects.
     */
    _links?: ReferenceLinks;
    /**
     * A list of the comments.
     */
    comments?: Array<Comment>;
    /**
     * The comment thread id.
     */
    id?: number;
    /**
     * Set of identities related to this thread
     */
    identities?: Record<string, IdentityRef>;
    /**
     * Specify if the thread is deleted which happens when all comments are deleted.
     */
    isDeleted?: boolean;
    /**
     * The time this thread was last updated.
     */
    lastUpdatedDate?: string;
    /**
     * Optional properties associated with the thread as a collection of key-value pairs.
     */
    properties?: PropertiesCollection;
    /**
     * The time this thread was published.
     */
    publishedDate?: string;
    /**
     * The status of the comment thread.
     */
    status?: 'unknown' | 'active' | 'fixed' | 'wontFix' | 'closed' | 'byDesign' | 'pending';
    /**
     * Specify thread context such as position in left/right file.
     */
    threadContext?: CommentThreadContext;
};

