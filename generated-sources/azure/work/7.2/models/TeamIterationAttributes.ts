/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TeamIterationAttributes = {
    /**
     * Finish date of the iteration. Date-only, correct unadjusted at midnight in UTC.
     */
    finishDate?: string;
    /**
     * Start date of the iteration. Date-only, correct unadjusted at midnight in UTC.
     */
    startDate?: string;
    /**
     * Time frame of the iteration, such as past, current or future.
     */
    timeFrame?: 'past' | 'current' | 'future';
};

