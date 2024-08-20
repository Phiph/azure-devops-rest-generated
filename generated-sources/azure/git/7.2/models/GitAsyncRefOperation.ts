/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitAsyncRefOperationDetail } from './GitAsyncRefOperationDetail';
import type { GitAsyncRefOperationParameters } from './GitAsyncRefOperationParameters';
import type { ReferenceLinks } from './ReferenceLinks';
export type GitAsyncRefOperation = {
    _links?: ReferenceLinks;
    detailedStatus?: GitAsyncRefOperationDetail;
    parameters?: GitAsyncRefOperationParameters;
    status?: 'queued' | 'inProgress' | 'completed' | 'failed' | 'abandoned';
    /**
     * A URL that can be used to make further requests for status about the operation
     */
    url?: string;
};

