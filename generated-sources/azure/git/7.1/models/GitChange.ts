/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Change } from './Change';
import type { GitTemplate } from './GitTemplate';
export type GitChange = (Change & {
    /**
     * ID of the change within the group of changes.
     */
    changeId?: number;
    /**
     * New Content template to be used when pushing new changes.
     */
    newContentTemplate?: GitTemplate;
    /**
     * Original path of item if different from current path.
     */
    originalPath?: string;
});

