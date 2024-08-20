/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The class describes reporting work item revision batch.
 */
export type StreamedBatch = {
    /**
     * ContinuationToken acts as a waterMark. Used while querying large results.
     */
    continuationToken?: string;
    /**
     * Returns 'true' if it's last batch, 'false' otherwise.
     */
    isLastBatch?: boolean;
    /**
     * The next link for the work item.
     */
    nextLink?: string;
    /**
     * Values such as rel, sourceId, TargetId, ChangedDate, isActive.
     */
    values?: Array<string>;
};

