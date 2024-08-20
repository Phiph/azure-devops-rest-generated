/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OperationReference } from './OperationReference';
import type { OperationResultReference } from './OperationResultReference';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Contains information about the progress or result of an async operation.
 */
export type Operation = (OperationReference & {
    /**
     * Links to other related objects.
     */
    _links?: ReferenceLinks;
    /**
     * Detailed messaged about the status of an operation.
     */
    detailedMessage?: string;
    /**
     * Result message for an operation.
     */
    resultMessage?: string;
    /**
     * URL to the operation result.
     */
    resultUrl?: OperationResultReference;
});

