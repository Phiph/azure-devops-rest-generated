/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneStatistics } from './CloneStatistics';
import type { ShallowReference } from './ShallowReference';
/**
 * Detail About Clone Operation.
 */
export type CloneOperationInformation = {
    /**
     * Clone Statistics
     */
    cloneStatistics?: CloneStatistics;
    /**
     * If the operation is complete, the DateTime of completion. If operation is not complete, this is DateTime.MaxValue
     */
    completionDate?: string;
    /**
     * DateTime when the operation was started
     */
    creationDate?: string;
    /**
     * Shallow reference of the destination
     */
    destinationObject?: ShallowReference;
    /**
     * Shallow reference of the destination
     */
    destinationPlan?: ShallowReference;
    /**
     * Shallow reference of the destination
     */
    destinationProject?: ShallowReference;
    /**
     * If the operation has Failed, Message contains the reason for failure. Null otherwise.
     */
    message?: string;
    /**
     * The ID of the operation
     */
    opId?: number;
    /**
     * The type of the object generated as a result of the Clone operation
     */
    resultObjectType?: 'testSuite' | 'testPlan';
    /**
     * Shallow reference of the source
     */
    sourceObject?: ShallowReference;
    /**
     * Shallow reference of the source
     */
    sourcePlan?: ShallowReference;
    /**
     * Shallow reference of the source
     */
    sourceProject?: ShallowReference;
    /**
     * Current state of the operation. When State reaches Succeeded or Failed, the operation is complete
     */
    state?: 'failed' | 'inProgress' | 'queued' | 'succeeded';
    /**
     * Url for getting the clone information
     */
    url?: string;
};

