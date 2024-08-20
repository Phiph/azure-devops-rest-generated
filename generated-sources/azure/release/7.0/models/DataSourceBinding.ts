/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DataSourceBinding = {
    /**
     * Pagination format supported by this data source(ContinuationToken/SkipTop).
     */
    callbackContextTemplate?: string;
    /**
     * Subsequent calls needed?
     */
    callBackRequiredTemplate?: string;
    /**
     * Name of the datasource.
     */
    dataSourceName?: string;
    /**
     * Endpoint ID of the datasource.
     */
    endpointId?: string;
    /**
     * Endpoint URL of the datasource.
     */
    endpointUrl?: string;
    /**
     * Defines the initial value of the query params
     */
    initialContextTemplate?: string;
    /**
     * Parameters of the datasource.
     */
    parameters?: Record<string, string>;
    /**
     * Gets or sets http request body
     */
    requestContent?: string;
    /**
     * Gets or sets http request verb
     */
    requestVerb?: string;
    /**
     * Result selector applied on output of datasource result, for example jsonpath:$.value[?(@.properties.isEnabled == true)].
     */
    resultSelector?: string;
    /**
     * Format of the return results, for example. { "Value" : "{{{id}}}", "DisplayValue" : "{{{name}}}" }.
     */
    resultTemplate?: string;
    /**
     * Target of the datasource.
     */
    target?: string;
};

