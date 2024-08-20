/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectInfo } from './ProjectInfo';
export type ProjectMessage = {
    project?: ProjectInfo;
    projectChangeType?: 'modified' | 'deleted' | 'added';
    shouldInvalidateSystemStore?: boolean;
};

