/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Issue } from './Issue';
import type { ProjectReference } from './ProjectReference';
import type { ReleaseDefinitionShallowReference } from './ReleaseDefinitionShallowReference';
export type AutoTriggerIssue = {
    issue?: Issue;
    issueSource?: 'none' | 'user' | 'system';
    project?: ProjectReference;
    releaseDefinitionReference?: ReleaseDefinitionShallowReference;
    releaseTriggerType?: 'undefined' | 'artifactSource' | 'schedule' | 'sourceRepo' | 'containerImage' | 'package' | 'pullRequest';
};

