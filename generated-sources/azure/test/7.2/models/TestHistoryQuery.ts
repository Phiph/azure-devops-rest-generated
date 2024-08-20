/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestResultHistoryForGroup } from './TestResultHistoryForGroup';
/**
 * Filter to get TestCase result history.
 */
export type TestHistoryQuery = {
    /**
     * Automated test name of the TestCase.
     */
    automatedTestName?: string;
    /**
     * Results to be get for a particular branches.
     */
    branch?: string;
    /**
     * Get the results history only for this BuildDefinitionId. This to get used in query GroupBy should be Branch. If this is provided, Branch will have no use.
     */
    buildDefinitionId?: number;
    /**
     * It will be filled by server. If not null means there are some results still to be get, and we need to call this REST API with this ContinuousToken. It is not supposed to be created (or altered, if received from server in last batch) by user.
     */
    continuationToken?: string;
    /**
     * Group the result on the basis of TestResultGroupBy. This can be Branch, Environment or null(if results are fetched by BuildDefinitionId)
     */
    groupBy?: 'branch' | 'environment';
    /**
     * History to get between time interval MaxCompleteDate and  (MaxCompleteDate - TrendDays). Default is current date time.
     */
    maxCompleteDate?: string;
    /**
     * Get the results history only for this ReleaseEnvDefinitionId. This to get used in query GroupBy should be Environment.
     */
    releaseEnvDefinitionId?: number;
    /**
     * List of TestResultHistoryForGroup which are grouped by GroupBy
     */
    resultsForGroup?: Array<TestResultHistoryForGroup>;
    /**
     * Get the results history only for this testCaseId. This to get used in query to filter the result along with automatedtestname
     */
    testCaseId?: number;
    /**
     * Number of days for which history to collect. Maximum supported value is 7 days. Default is 7 days.
     */
    trendDays?: number;
};

