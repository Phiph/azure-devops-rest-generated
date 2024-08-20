/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JToken } from './JToken';
/**
 * Represents result of the service endpoint request.
 */
export type ServiceEndpointRequestResult = {
    /**
     * Gets or sets the activity id of the service endpoint request result.
     */
    activityId?: string;
    /**
     * Gets or sets the parameters used to make subsequent calls to the data source
     */
    callbackContextParameters?: Record<string, string>;
    /**
     * Gets or sets the flat that decides if another call to the data source is to be made
     */
    callbackRequired?: boolean;
    /**
     * Gets or sets the error message of the service endpoint request result.
     */
    errorMessage?: string;
    /**
     * Gets or sets the result of service endpoint request.
     */
    result?: JToken;
    /**
     * Gets or sets the status code of the service endpoint request result.
     */
    statusCode?: 'continue' | 'switchingProtocols' | 'ok' | 'created' | 'accepted' | 'nonAuthoritativeInformation' | 'noContent' | 'resetContent' | 'partialContent' | 'multipleChoices' | 'ambiguous' | 'movedPermanently' | 'moved' | 'found' | 'redirect' | 'seeOther' | 'redirectMethod' | 'notModified' | 'useProxy' | 'unused' | 'temporaryRedirect' | 'redirectKeepVerb' | 'badRequest' | 'unauthorized' | 'paymentRequired' | 'forbidden' | 'notFound' | 'methodNotAllowed' | 'notAcceptable' | 'proxyAuthenticationRequired' | 'requestTimeout' | 'conflict' | 'gone' | 'lengthRequired' | 'preconditionFailed' | 'requestEntityTooLarge' | 'requestUriTooLong' | 'unsupportedMediaType' | 'requestedRangeNotSatisfiable' | 'expectationFailed' | 'upgradeRequired' | 'internalServerError' | 'notImplemented' | 'badGateway' | 'serviceUnavailable' | 'gatewayTimeout' | 'httpVersionNotSupported';
};

