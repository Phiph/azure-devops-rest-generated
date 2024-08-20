/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JObject } from './JObject';
/**
 * Contract for handling the extension acquisition process
 */
export type ExtensionAcquisitionRequest = {
    /**
     * How the item is being assigned
     */
    assignmentType?: 'none' | 'me' | 'all';
    /**
     * The id of the subscription used for purchase
     */
    billingId?: string;
    /**
     * The marketplace id (publisherName.extensionName) for the item
     */
    itemId?: string;
    /**
     * The type of operation, such as install, request, purchase
     */
    operationType?: 'get' | 'install' | 'buy' | 'try' | 'request' | 'none' | 'purchaseRequest';
    /**
     * Additional properties which can be added to the request.
     */
    properties?: JObject;
    /**
     * How many licenses should be purchased
     */
    quantity?: number;
};

