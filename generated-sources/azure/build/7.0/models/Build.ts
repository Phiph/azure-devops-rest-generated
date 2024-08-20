/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentPoolQueue } from './AgentPoolQueue';
import type { AgentSpecification } from './AgentSpecification';
import type { BuildController } from './BuildController';
import type { BuildLogReference } from './BuildLogReference';
import type { BuildRepository } from './BuildRepository';
import type { BuildRequestValidationResult } from './BuildRequestValidationResult';
import type { DefinitionReference } from './DefinitionReference';
import type { Demand } from './Demand';
import type { IdentityRef } from './IdentityRef';
import type { PropertiesCollection } from './PropertiesCollection';
import type { ReferenceLinks } from './ReferenceLinks';
import type { TaskOrchestrationPlanReference } from './TaskOrchestrationPlanReference';
import type { TeamProjectReference } from './TeamProjectReference';
/**
 * Data representation of a build.
 */
export type Build = {
    _links?: ReferenceLinks;
    /**
     * The agent specification for the build.
     */
    agentSpecification?: AgentSpecification;
    /**
     * The build number/name of the build.
     */
    buildNumber?: string;
    /**
     * The build number revision.
     */
    buildNumberRevision?: number;
    /**
     * The build controller. This is only set if the definition type is Xaml.
     */
    controller?: BuildController;
    /**
     * The definition associated with the build.
     */
    definition?: DefinitionReference;
    /**
     * Indicates whether the build has been deleted.
     */
    deleted?: boolean;
    /**
     * The identity of the process or person that deleted the build.
     */
    deletedBy?: IdentityRef;
    /**
     * The date the build was deleted.
     */
    deletedDate?: string;
    /**
     * The description of how the build was deleted.
     */
    deletedReason?: string;
    /**
     * A list of demands that represents the agent capabilities required by this build.
     */
    demands?: Array<Demand>;
    /**
     * The time that the build was completed.
     */
    finishTime?: string;
    /**
     * The ID of the build.
     */
    id?: number;
    /**
     * The identity representing the process or person that last changed the build.
     */
    lastChangedBy?: IdentityRef;
    /**
     * The date the build was last changed.
     */
    lastChangedDate?: string;
    /**
     * Information about the build logs.
     */
    logs?: BuildLogReference;
    /**
     * The orchestration plan for the build.
     */
    orchestrationPlan?: TaskOrchestrationPlanReference;
    /**
     * The parameters for the build.
     */
    parameters?: string;
    /**
     * Orchestration plans associated with the build (build, cleanup)
     */
    plans?: Array<TaskOrchestrationPlanReference>;
    /**
     * The build's priority.
     */
    priority?: 'low' | 'belowNormal' | 'normal' | 'aboveNormal' | 'high';
    /**
     * The team project.
     */
    project?: TeamProjectReference;
    properties?: PropertiesCollection;
    /**
     * The quality of the xaml build (good, bad, etc.)
     */
    quality?: string;
    /**
     * The queue. This is only set if the definition type is Build. WARNING: this field is deprecated and does not corresponds to the jobs queues.
     */
    queue?: AgentPoolQueue;
    /**
     * Additional options for queueing the build.
     */
    queueOptions?: 'none' | 'doNotRun';
    /**
     * The current position of the build in the queue.
     */
    queuePosition?: number;
    /**
     * The time that the build was queued.
     */
    queueTime?: string;
    /**
     * The reason that the build was created.
     */
    reason?: 'none' | 'manual' | 'individualCI' | 'batchedCI' | 'schedule' | 'scheduleForced' | 'userCreated' | 'validateShelveset' | 'checkInShelveset' | 'pullRequest' | 'buildCompletion' | 'resourceTrigger' | 'triggered' | 'all';
    /**
     * The repository.
     */
    repository?: BuildRepository;
    /**
     * The identity that queued the build.
     */
    requestedBy?: IdentityRef;
    /**
     * The identity on whose behalf the build was queued.
     */
    requestedFor?: IdentityRef;
    /**
     * The build result.
     */
    result?: 'none' | 'succeeded' | 'partiallySucceeded' | 'failed' | 'canceled';
    /**
     * Indicates whether the build is retained by a release.
     */
    retainedByRelease?: boolean;
    /**
     * The source branch.
     */
    sourceBranch?: string;
    /**
     * The source version.
     */
    sourceVersion?: string;
    /**
     * The time that the build was started.
     */
    startTime?: string;
    /**
     * The status of the build.
     */
    status?: 'none' | 'inProgress' | 'completed' | 'cancelling' | 'postponed' | 'notStarted' | 'all';
    tags?: Array<string>;
    /**
     * Parameters to template expression evaluation
     */
    templateParameters?: Record<string, string>;
    /**
     * The build that triggered this build via a Build completion trigger.
     */
    triggeredByBuild?: Build;
    /**
     * Sourceprovider-specific information about what triggered the build
     */
    triggerInfo?: Record<string, string>;
    /**
     * The URI of the build.
     */
    uri?: string;
    /**
     * The REST URL of the build.
     */
    url?: string;
    validationResults?: Array<BuildRequestValidationResult>;
};

