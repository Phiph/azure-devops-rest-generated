/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitStatus } from './GitStatus';
import type { PropertiesCollection } from './PropertiesCollection';
/**
 * This class contains the metadata of a service/extension posting pull request status. Status can be associated with a pull request or an iteration.
 */
export type GitPullRequestStatus = (GitStatus & {
    /**
     * ID of the iteration to associate status with. Minimum value is 1.
     */
    iterationId?: number;
    /**
     * Custom properties of the status.
     */
    properties?: PropertiesCollection;
});

