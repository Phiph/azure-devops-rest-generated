/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
/**
 * Contains information about work item comment reaction for a particular reaction type.
 */
export type CommentReaction = (WorkItemTrackingResource & {
    /**
     * The id of the comment this reaction belongs to.
     */
    commentId?: number;
    /**
     * Total number of reactions for the CommentReactionType.
     */
    count?: number;
    /**
     * Flag to indicate if the current user has engaged on this particular EngagementType (e.g. if they liked the associated comment).
     */
    isCurrentUserEngaged?: boolean;
    /**
     * Type of the reaction.
     */
    type?: 'like' | 'dislike' | 'heart' | 'hooray' | 'smile' | 'confused';
});

