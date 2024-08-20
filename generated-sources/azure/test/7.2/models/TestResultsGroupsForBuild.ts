/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FieldDetailsForTestResults } from './FieldDetailsForTestResults';
export type TestResultsGroupsForBuild = {
    /**
     * BuildId for which groupby result is fetched.
     */
    buildId?: number;
    /**
     * The group by results
     */
    fields?: Array<FieldDetailsForTestResults>;
};

