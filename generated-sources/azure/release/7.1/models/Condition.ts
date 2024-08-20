/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Condition = {
    /**
     * Gets or sets the condition type.
     */
    conditionType?: 'undefined' | 'event' | 'environmentState' | 'artifact';
    /**
     * Gets or sets the name of the condition. e.g. 'ReleaseStarted'.
     */
    name?: string;
    /**
     * Gets or set value of the condition.
     */
    value?: string;
};

