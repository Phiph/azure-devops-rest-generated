/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ISubscriptionFilter } from './ISubscriptionFilter';
import type { NotificationEventType } from './NotificationEventType';
export type NotificationSubscriptionTemplate = {
    description?: string;
    filter?: ISubscriptionFilter;
    id?: string;
    notificationEventInformation?: NotificationEventType;
    type?: 'user' | 'team' | 'both' | 'none';
};

