/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataProviderQuery } from './DataProviderQuery';
/**
 * A client data provider are the details needed to make the data provider request from the client.
 */
export type ClientDataProviderQuery = (DataProviderQuery & {
    /**
     * The Id of the service instance type that should be communicated with in order to resolve the data providers from the client given the query values.
     */
    queryServiceInstanceType?: string;
});

