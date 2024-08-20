/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JToken } from './JToken';
export type ServiceEndpointRequestResult = {
    errorMessage?: string;
    result?: JToken;
    statusCode?: 'continue' | 'switchingProtocols' | 'ok' | 'created' | 'accepted' | 'nonAuthoritativeInformation' | 'noContent' | 'resetContent' | 'partialContent' | 'multipleChoices' | 'ambiguous' | 'movedPermanently' | 'moved' | 'found' | 'redirect' | 'seeOther' | 'redirectMethod' | 'notModified' | 'useProxy' | 'unused' | 'temporaryRedirect' | 'redirectKeepVerb' | 'badRequest' | 'unauthorized' | 'paymentRequired' | 'forbidden' | 'notFound' | 'methodNotAllowed' | 'notAcceptable' | 'proxyAuthenticationRequired' | 'requestTimeout' | 'conflict' | 'gone' | 'lengthRequired' | 'preconditionFailed' | 'requestEntityTooLarge' | 'requestUriTooLong' | 'unsupportedMediaType' | 'requestedRangeNotSatisfiable' | 'expectationFailed' | 'upgradeRequired' | 'internalServerError' | 'notImplemented' | 'badGateway' | 'serviceUnavailable' | 'gatewayTimeout' | 'httpVersionNotSupported';
};

