/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
/**
 * Represents a specific version of a comment on a work item.
 */
export type CommentVersion = (WorkItemTrackingResource & {
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
     * Indicates if the comment has been deleted at this version.
     */
    isDeleted?: boolean;
    /**
     * IdentityRef of the user who modified the comment at this version.
     */
    modifiedBy?: IdentityRef;
    /**
     * The modification date of the comment for this version.
     */
    modifiedDate?: string;
    /**
     * The rendered content of the comment at this version.
     */
    renderedText?: string;
    /**
     * The text of the comment at this version.
     */
    text?: string;
    /**
     * The version number.
     */
    version?: number;
});

