/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
export type TaskGroupRevision = {
    changedBy?: IdentityRef;
    changedDate?: string;
    changeType?: 'add' | 'update' | 'delete' | 'undelete';
    comment?: string;
    fileId?: number;
    majorVersion?: number;
    revision?: number;
    taskGroupId?: string;
};

