/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityDescriptor } from './IdentityDescriptor';
export type IdentityBatchInfo = {
    descriptors?: Array<IdentityDescriptor>;
    identityIds?: Array<string>;
    includeRestrictedVisibility?: boolean;
    propertyNames?: Array<string>;
    queryMembership?: 'none' | 'direct' | 'expanded' | 'expandedUp' | 'expandedDown';
    socialDescriptors?: Array<string>;
    subjectDescriptors?: Array<string>;
};

