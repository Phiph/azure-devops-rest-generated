/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AceExtendedInformation } from './AceExtendedInformation';
import type { IdentityDescriptor } from './IdentityDescriptor';
/**
 * Class for encapsulating the allowed and denied permissions for a given IdentityDescriptor.
 */
export type AccessControlEntry = {
    /**
     * The set of permission bits that represent the actions that the associated descriptor is allowed to perform.
     */
    allow?: number;
    /**
     * The set of permission bits that represent the actions that the associated descriptor is not allowed to perform.
     */
    deny?: number;
    /**
     * The descriptor for the user this AccessControlEntry applies to.
     */
    descriptor?: IdentityDescriptor;
    /**
     * This value, when set, reports the inherited and effective information for the associated descriptor. This value is only set on AccessControlEntries returned by the QueryAccessControlList(s) call when its includeExtendedInfo parameter is set to true.
     */
    extendedInfo?: AceExtendedInformation;
};

