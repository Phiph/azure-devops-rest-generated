/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Change } from './Change';
import type { CheckinNote } from './CheckinNote';
export type ChangeList = {
    allChangesIncluded?: boolean;
    changeCounts?: Record<string, number>;
    changes?: Array<Change>;
    comment?: string;
    commentTruncated?: boolean;
    creationDate?: string;
    notes?: Array<CheckinNote>;
    owner?: string;
    ownerDisplayName?: string;
    ownerId?: string;
    sortDate?: string;
    version?: string;
};

