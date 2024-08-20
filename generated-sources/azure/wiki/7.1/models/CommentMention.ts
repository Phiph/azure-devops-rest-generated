/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentResourceReference } from './CommentResourceReference';
/**
 * Contains information about various artifacts mentioned in the comment
 */
export type CommentMention = (CommentResourceReference & {
    /**
     * Id of the artifact this mention belongs to
     */
    artifactId?: string;
    /**
     * Id of the comment associated with this mention. Nullable to support legacy mentions which can potentially have null commentId
     */
    commentId?: number;
    /**
     * Value of the mentioned artifact. Expected Value varies by CommentMentionType: Person:         VSID associated with the identity Work Item:      ID of the work item Pull Request:   ID of the Pull Request
     */
    mentionedArtifact?: string;
    /**
     * The context which represent where this mentioned was parsed from
     */
    type?: 'person' | 'workItem' | 'pullRequest';
});

