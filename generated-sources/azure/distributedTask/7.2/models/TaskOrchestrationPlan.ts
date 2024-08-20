/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlanEnvironment } from './PlanEnvironment';
import type { TaskLogReference } from './TaskLogReference';
import type { TaskOrchestrationContainer } from './TaskOrchestrationContainer';
import type { TaskOrchestrationPlanReference } from './TaskOrchestrationPlanReference';
import type { TimelineReference } from './TimelineReference';
export type TaskOrchestrationPlan = (TaskOrchestrationPlanReference & {
    environment?: PlanEnvironment;
    expandedYaml?: TaskLogReference;
    finishTime?: string;
    implementation?: TaskOrchestrationContainer;
    initializationLog?: TaskLogReference;
    requestedById?: string;
    requestedForId?: string;
    result?: 'succeeded' | 'succeededWithIssues' | 'failed' | 'canceled' | 'skipped' | 'abandoned';
    resultCode?: string;
    startTime?: string;
    state?: 'inProgress' | 'queued' | 'completed' | 'throttled';
    timeline?: TimelineReference;
});

