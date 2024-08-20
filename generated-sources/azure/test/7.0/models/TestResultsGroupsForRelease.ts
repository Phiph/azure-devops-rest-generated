/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FieldDetailsForTestResults } from './FieldDetailsForTestResults';
export type TestResultsGroupsForRelease = {
    /**
     * The group by results
     */
    fields?: Array<FieldDetailsForTestResults>;
    /**
     * Release Environment Id for which groupby result is fetched.
     */
    releaseEnvId?: number;
    /**
     * ReleaseId for which groupby result is fetched.
     */
    releaseId?: number;
};

