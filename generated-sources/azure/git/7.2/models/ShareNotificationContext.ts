/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Context used while sharing a pull request.
 */
export type ShareNotificationContext = {
    /**
     * Optional user note or message.
     */
    message?: string;
    /**
     * Identities of users who will receive a share notification.
     */
    receivers?: Array<IdentityRef>;
};

