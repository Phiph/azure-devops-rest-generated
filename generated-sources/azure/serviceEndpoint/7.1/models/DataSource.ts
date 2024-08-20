/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticationSchemeReference } from './AuthenticationSchemeReference';
import type { AuthorizationHeader } from './AuthorizationHeader';
/**
 * Specifies the data sources for this endpoint.
 */
export type DataSource = {
    /**
     * Gets or sets the authentication scheme for the endpoint request.
     */
    authenticationScheme?: AuthenticationSchemeReference;
    /**
     * Gets or sets the pagination format supported by this data source(ContinuationToken/SkipTop).
     */
    callbackContextTemplate?: string;
    /**
     * Gets or sets the template to check if subsequent call is needed.
     */
    callbackRequiredTemplate?: string;
    /**
     * Gets or sets the endpoint url of the data source.
     */
    endpointUrl?: string;
    /**
     * Gets or sets the authorization headers of the request.
     */
    headers?: Array<AuthorizationHeader>;
    /**
     * Gets or sets the initial value of the query params.
     */
    initialContextTemplate?: string;
    /**
     * Gets or sets the name of the data source.
     */
    name?: string;
    /**
     * Gets or sets the request content of the endpoint request.
     */
    requestContent?: string;
    /**
     * Gets or sets the request method of the endpoint request.
     */
    requestVerb?: string;
    /**
     * Gets or sets the resource url of the endpoint request.
     */
    resourceUrl?: string;
    /**
     * Gets or sets the result selector to filter the response of the endpoint request.
     */
    resultSelector?: string;
};

