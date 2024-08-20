/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckTemplateExistenceResult } from './CheckTemplateExistenceResult';
import type { ValidationIssue } from './ValidationIssue';
/**
 * Describes the result of a Process Import request.
 */
export type ProcessImportResult = {
    /**
     * Check template existence result.
     */
    checkExistenceResult?: CheckTemplateExistenceResult;
    /**
     * Help URL.
     */
    helpUrl?: string;
    /**
     * ID of the import operation.
     */
    id?: string;
    /**
     * Whether this imported process is new.
     */
    isNew?: boolean;
    /**
     * The promote job identifier.
     */
    promoteJobId?: string;
    /**
     * The list of validation results.
     */
    validationResults?: Array<ValidationIssue>;
};

