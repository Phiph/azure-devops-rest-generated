/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationQueryCondition } from './NotificationQueryCondition';
export type BatchNotificationOperation = {
    notificationOperation?: 'none' | 'suspendUnprocessed';
    notificationQueryConditions?: Array<NotificationQueryCondition>;
};

