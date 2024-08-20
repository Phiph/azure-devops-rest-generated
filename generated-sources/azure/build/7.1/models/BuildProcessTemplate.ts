/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BuildProcessTemplate = {
    description?: string;
    fileExists?: boolean;
    id?: number;
    parameters?: string;
    serverPath?: string;
    supportedReasons?: 'none' | 'manual' | 'individualCI' | 'batchedCI' | 'schedule' | 'scheduleForced' | 'userCreated' | 'validateShelveset' | 'checkInShelveset' | 'pullRequest' | 'buildCompletion' | 'resourceTrigger' | 'triggered' | 'all';
    teamProject?: string;
    templateType?: 'custom' | 'default' | 'upgrade';
    url?: string;
    version?: string;
};

