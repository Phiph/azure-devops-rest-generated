/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestPlansLibraryWorkItemFilter } from './TestPlansLibraryWorkItemFilter';
/**
 * This is the request data contract for LibraryTestCaseDataProvider.
 */
export type LibraryWorkItemsDataProviderRequest = {
    /**
     * Specifies the list of column options to show in test cases table.
     */
    columnOptions?: Array<string>;
    /**
     * The continuation token required for paging of work items. This is required when getting subsequent sets of work items when OrderByField is Id.
     */
    continuationToken?: string;
    /**
     * List of filter values to be supplied. Currently supported filters are Title, State, AssignedTo, Priority, AreaPath.
     */
    filterValues?: Array<TestPlansLibraryWorkItemFilter>;
    /**
     * Whether the data is to be sorted in ascending or descending order. When not supplied, defaults to descending.
     */
    isAscending?: boolean;
    /**
     * The type of query to run.
     */
    libraryQueryType?: 'none' | 'allTestCases' | 'testCasesWithActiveBugs' | 'testCasesNotLinkedToRequirements' | 'testCasesLinkedToRequirements' | 'allSharedSteps' | 'sharedStepsNotLinkedToRequirement';
    /**
     * Work item field on which to order the results. When not supplied, defaults to work item IDs.
     */
    orderByField?: string;
    /**
     * List of work items to query for field details. This is required when getting subsequent sets of work item fields when OrderByField is other than Id.
     */
    workItemIds?: Array<number>;
};

