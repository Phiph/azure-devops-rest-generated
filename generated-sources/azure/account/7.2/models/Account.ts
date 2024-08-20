/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertiesCollection } from './PropertiesCollection';
export type Account = {
    /**
     * Identifier for an Account
     */
    accountId?: string;
    /**
     * Name for an account
     */
    accountName?: string;
    /**
     * Owner of account
     */
    accountOwner?: string;
    /**
     * Current account status
     */
    accountStatus?: 'none' | 'enabled' | 'disabled' | 'deleted' | 'moved';
    /**
     * Type of account: Personal, Organization
     */
    accountType?: 'personal' | 'organization';
    /**
     * Uri for an account
     */
    accountUri?: string;
    /**
     * Who created the account
     */
    createdBy?: string;
    /**
     * Date account was created
     */
    createdDate?: string;
    hasMoved?: boolean;
    /**
     * Identity of last person to update the account
     */
    lastUpdatedBy?: string;
    /**
     * Date account was last updated
     */
    lastUpdatedDate?: string;
    /**
     * Namespace for an account
     */
    namespaceId?: string;
    newCollectionId?: string;
    /**
     * Organization that created the account
     */
    organizationName?: string;
    /**
     * Extended properties
     */
    properties?: PropertiesCollection;
    /**
     * Reason for current status
     */
    statusReason?: string;
};

