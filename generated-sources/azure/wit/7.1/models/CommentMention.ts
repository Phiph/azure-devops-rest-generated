/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
export type CommentMention = (WorkItemTrackingResource & {
    /**
     * The artifact portion of the parsed text. (i.e. the work item's id)
     */
    artifactId?: string;
    /**
     * The type the parser assigned to the mention. (i.e. person, work item, etc)
     */
    artifactType?: string;
    /**
     * The comment id of the mention.
     */
    commentId?: number;
    /**
     * The resolved target of the mention. An example of this could be a user's tfid
     */
    targetId?: string;
});

