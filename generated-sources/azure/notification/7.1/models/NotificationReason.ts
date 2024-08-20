/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
export type NotificationReason = {
    notificationReasonType?: 'unknown' | 'follows' | 'personal' | 'personalAlias' | 'directMember' | 'indirectMember' | 'groupAlias' | 'subscriptionAlias' | 'singleRole' | 'directMemberGroupRole' | 'inDirectMemberGroupRole' | 'aliasMemberGroupRole';
    targetIdentities?: Array<IdentityRef>;
};

