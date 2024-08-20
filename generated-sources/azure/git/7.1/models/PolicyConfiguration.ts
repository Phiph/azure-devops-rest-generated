/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
import type { VersionedPolicyConfigurationRef } from './VersionedPolicyConfigurationRef';
/**
 * The full policy configuration with settings.
 */
export type PolicyConfiguration = (VersionedPolicyConfigurationRef & {
    /**
     * The links to other objects related to this object.
     */
    _links?: ReferenceLinks;
    /**
     * A reference to the identity that created the policy.
     */
    createdBy?: IdentityRef;
    /**
     * The date and time when the policy was created.
     */
    createdDate?: string;
    /**
     * Indicates whether the policy is blocking.
     */
    isBlocking?: boolean;
    /**
     * Indicates whether the policy has been (soft) deleted.
     */
    isDeleted?: boolean;
    /**
     * Indicates whether the policy is enabled.
     */
    isEnabled?: boolean;
    /**
     * If set, this policy requires "Manage Enterprise Policies" permission to create, edit, or delete.
     */
    isEnterpriseManaged?: boolean;
    /**
     * The policy configuration settings.
     */
    settings?: string;
});

