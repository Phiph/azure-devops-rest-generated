/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AcquisitionOperation } from './AcquisitionOperation';
import type { JObject } from './JObject';
/**
 * Market item acquisition options (install, buy, etc) for an installation target.
 */
export type AcquisitionOptions = {
    /**
     * Default Operation for the ItemId in this target
     */
    defaultOperation?: AcquisitionOperation;
    /**
     * The item id that this options refer to
     */
    itemId?: string;
    /**
     * Operations allowed for the ItemId in this target
     */
    operations?: Array<AcquisitionOperation>;
    /**
     * Additional properties which can be added to the request.
     */
    properties?: JObject;
    /**
     * The target that this options refer to
     */
    target?: string;
};

