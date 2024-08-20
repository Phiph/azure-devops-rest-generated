/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionDefinition } from './ActionDefinition';
/**
 * Class for describing the details of a TeamFoundationSecurityNamespace.
 */
export type SecurityNamespaceDescription = {
    /**
     * The list of actions that this Security Namespace is responsible for securing.
     */
    actions?: Array<ActionDefinition>;
    /**
     * This is the dataspace category that describes where the security information for this SecurityNamespace should be stored.
     */
    dataspaceCategory?: string;
    /**
     * This localized name for this namespace.
     */
    displayName?: string;
    /**
     * If the security tokens this namespace will be operating on need to be split on certain character lengths to determine its elements, that length should be specified here. If not, this value will be -1.
     */
    elementLength?: number;
    /**
     * This is the type of the extension that should be loaded from the plugins directory for extending this security namespace.
     */
    extensionType?: string;
    /**
     * If true, the security namespace is remotable, allowing another service to proxy the namespace.
     */
    isRemotable?: boolean;
    /**
     * This non-localized for this namespace.
     */
    name?: string;
    /**
     * The unique identifier for this namespace.
     */
    namespaceId?: string;
    /**
     * The permission bits needed by a user in order to read security data on the Security Namespace.
     */
    readPermission?: number;
    /**
     * If the security tokens this namespace will be operating on need to be split on certain characters to determine its elements that character should be specified here. If not, this value will be the null character.
     */
    separatorValue?: string;
    /**
     * Used to send information about the structure of the security namespace over the web service.
     */
    structureValue?: number;
    /**
     * The bits reserved by system store
     */
    systemBitMask?: number;
    /**
     * If true, the security service will expect an ISecurityDataspaceTokenTranslator plugin to exist for this namespace
     */
    useTokenTranslator?: boolean;
    /**
     * The permission bits needed by a user in order to modify security data on the Security Namespace.
     */
    writePermission?: number;
};

