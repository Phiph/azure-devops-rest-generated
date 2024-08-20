/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamProjectReference } from './TeamProjectReference';
export type VersionControlProjectInfo = {
    defaultSourceControlType?: 'tfvc' | 'git';
    project?: TeamProjectReference;
    supportsGit?: boolean;
    supportsTFVC?: boolean;
};

