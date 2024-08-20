/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ResourceBase = {
    /**
     * The ID of user who created this item. Optional.
     */
    createdBy?: string;
    /**
     * The date time when this item is created. Optional.
     */
    createdDate?: string;
    /**
     * An identifier for this item. Optional.
     */
    id?: string;
    /**
     * An opaque ETag used to synchronize with the version stored at server end. Optional.
     */
    storageETag?: string;
    /**
     * A URI which can be used to retrieve this item in its raw format. Optional. Note this is distinguished from other URIs that are present in a derived resource.
     */
    url?: string;
};

