/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthorizationHeader } from './AuthorizationHeader';
/**
 * Represents details of the service endpoint data source.
 */
export type DataSourceDetails = {
    /**
     * Gets or sets the data source name.
     */
    dataSourceName?: string;
    /**
     * Gets or sets the data source url.
     */
    dataSourceUrl?: string;
    /**
     * Gets or sets the request headers.
     */
    headers?: Array<AuthorizationHeader>;
    /**
     * Gets or sets the initialization context used for the initial call to the data source
     */
    initialContextTemplate?: string;
    /**
     * Gets the parameters of data source.
     */
    parameters?: Record<string, string>;
    /**
     * Gets or sets the data source request content.
     */
    requestContent?: string;
    /**
     * Gets or sets the data source request verb. Get/Post are the only implemented types
     */
    requestVerb?: string;
    /**
     * Gets or sets the resource url of data source.
     */
    resourceUrl?: string;
    /**
     * Gets or sets the result selector.
     */
    resultSelector?: string;
};

