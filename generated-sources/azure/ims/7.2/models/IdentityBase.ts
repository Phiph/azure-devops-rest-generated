/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityDescriptor } from './IdentityDescriptor';
import type { PropertiesCollection } from './PropertiesCollection';
/**
 * Base Identity class to allow "trimmed" identity class in the GetConnectionData API Makes sure that on-the-wire representations of the derived classes are compatible with each other (e.g. Server responds with PublicIdentity object while client deserializes it as Identity object) Derived classes should not have additional [DataMember] properties
 */
export type IdentityBase = {
    /**
     * The custom display name for the identity (if any). Setting this property to an empty string will clear the existing custom display name. Setting this property to null will not affect the existing persisted value (since null values do not get sent over the wire or to the database)
     */
    customDisplayName?: string;
    descriptor?: IdentityDescriptor;
    /**
     * Identity Identifier. Also called Storage Key, or VSID
     */
    id?: string;
    /**
     * True if the identity has a membership in any Azure Devops group in the organization.
     */
    isActive?: boolean;
    /**
     * True if the identity is a group.
     */
    isContainer?: boolean;
    masterId?: string;
    /**
     * Id of the members of the identity (groups only).
     */
    memberIds?: Array<string>;
    memberOf?: Array<IdentityDescriptor>;
    members?: Array<IdentityDescriptor>;
    metaTypeId?: number;
    properties?: PropertiesCollection;
    /**
     * The display name for the identity as specified by the source identity provider.
     */
    providerDisplayName?: string;
    resourceVersion?: number;
    socialDescriptor?: string;
    /**
     * Subject descriptor of a Graph entity.
     */
    subjectDescriptor?: string;
    uniqueUserId?: number;
};

