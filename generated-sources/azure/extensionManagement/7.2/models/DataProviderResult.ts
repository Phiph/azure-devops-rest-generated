/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientDataProviderQuery } from './ClientDataProviderQuery';
import type { DataProviderExceptionDetails } from './DataProviderExceptionDetails';
import type { ResolvedDataProvider } from './ResolvedDataProvider';
/**
 * Result structure from calls to GetDataProviderData
 */
export type DataProviderResult = {
    /**
     * This is the set of data providers that were requested, but either they were defined as client providers, or as remote providers that failed and may be retried by the client.
     */
    clientProviders?: Record<string, ClientDataProviderQuery>;
    /**
     * Property bag of data keyed off of the data provider contribution id
     */
    data?: Record<string, any>;
    /**
     * Set of exceptions that occurred resolving the data providers.
     */
    exceptions?: Record<string, DataProviderExceptionDetails>;
    /**
     * List of data providers resolved in the data-provider query
     */
    resolvedProviders?: Array<ResolvedDataProvider>;
    /**
     * Scope name applied to this data provider result.
     */
    scopeName?: string;
    /**
     * Scope value applied to this data provider result.
     */
    scopeValue?: string;
    /**
     * Property bag of shared data that was contributed to by any of the individual data providers
     */
    sharedData?: Record<string, any>;
};

