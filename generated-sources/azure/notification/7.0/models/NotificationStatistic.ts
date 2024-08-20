/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
export type NotificationStatistic = {
    date?: string;
    hitCount?: number;
    path?: string;
    type?: 'notificationBySubscription' | 'eventsByEventType' | 'notificationByEventType' | 'eventsByEventTypePerUser' | 'notificationByEventTypePerUser' | 'events' | 'notifications' | 'notificationFailureBySubscription' | 'unprocessedRangeStart' | 'unprocessedEventsByPublisher' | 'unprocessedEventDelayByPublisher' | 'unprocessedNotificationsByChannelByPublisher' | 'unprocessedNotificationDelayByChannelByPublisher' | 'delayRangeStart' | 'totalPipelineTime' | 'notificationPipelineTime' | 'eventPipelineTime' | 'hourlyRangeStart' | 'hourlyNotificationBySubscription' | 'hourlyEventsByEventTypePerUser' | 'hourlyEvents' | 'hourlyNotifications' | 'hourlyUnprocessedEventsByPublisher' | 'hourlyUnprocessedEventDelayByPublisher' | 'hourlyUnprocessedNotificationsByChannelByPublisher' | 'hourlyUnprocessedNotificationDelayByChannelByPublisher' | 'hourlyTotalPipelineTime' | 'hourlyNotificationPipelineTime' | 'hourlyEventPipelineTime';
    user?: IdentityRef;
};

