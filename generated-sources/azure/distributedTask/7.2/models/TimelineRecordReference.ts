/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A reference to a timeline record.
 */
export type TimelineRecordReference = {
    /**
     * The ID of the record.
     */
    id?: string;
    /**
     * String identifier that is consistent across attempts.
     */
    identifier?: string;
    /**
     * The state of the record.
     */
    state?: 'pending' | 'inProgress' | 'completed';
};

