/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { releaseApi } from './releaseApi';

export { ApiError } from './core/ApiError';
export { BaseHttpRequest } from './core/BaseHttpRequest';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { AgentArtifactDefinition } from './models/AgentArtifactDefinition';
export type { AgentBasedDeployPhase } from './models/AgentBasedDeployPhase';
export type { AgentDeploymentInput } from './models/AgentDeploymentInput';
export type { AgentPoolQueueReference } from './models/AgentPoolQueueReference';
export type { AgentSpecification } from './models/AgentSpecification';
export type { ApprovalOptions } from './models/ApprovalOptions';
export type { Artifact } from './models/Artifact';
export type { ArtifactContributionDefinition } from './models/ArtifactContributionDefinition';
export type { ArtifactDownloadInputBase } from './models/ArtifactDownloadInputBase';
export type { ArtifactFilter } from './models/ArtifactFilter';
export type { ArtifactInstanceData } from './models/ArtifactInstanceData';
export type { ArtifactMetadata } from './models/ArtifactMetadata';
export type { ArtifactProvider } from './models/ArtifactProvider';
export type { ArtifactsDownloadInput } from './models/ArtifactsDownloadInput';
export type { ArtifactSourceId } from './models/ArtifactSourceId';
export type { ArtifactSourceIdsQueryResult } from './models/ArtifactSourceIdsQueryResult';
export type { ArtifactSourceReference } from './models/ArtifactSourceReference';
export type { ArtifactSourceTrigger } from './models/ArtifactSourceTrigger';
export type { ArtifactTriggerConfiguration } from './models/ArtifactTriggerConfiguration';
export type { ArtifactTypeDefinition } from './models/ArtifactTypeDefinition';
export type { ArtifactVersion } from './models/ArtifactVersion';
export type { ArtifactVersionQueryResult } from './models/ArtifactVersionQueryResult';
export type { AuthorizationHeader } from './models/AuthorizationHeader';
export type { AutoTriggerIssue } from './models/AutoTriggerIssue';
export type { AzureKeyVaultVariableGroupProviderData } from './models/AzureKeyVaultVariableGroupProviderData';
export type { AzureKeyVaultVariableValue } from './models/AzureKeyVaultVariableValue';
export type { BaseDeploymentInput } from './models/BaseDeploymentInput';
export type { BuildArtifactDownloadInput } from './models/BuildArtifactDownloadInput';
export type { BuildVersion } from './models/BuildVersion';
export type { Change } from './models/Change';
export type { CodeRepositoryReference } from './models/CodeRepositoryReference';
export type { ComplianceSettings } from './models/ComplianceSettings';
export type { Condition } from './models/Condition';
export type { ConfigurationVariableValue } from './models/ConfigurationVariableValue';
export type { Consumer } from './models/Consumer';
export type { ContainerImageTrigger } from './models/ContainerImageTrigger';
export type { ContinuousDeploymentTriggerIssue } from './models/ContinuousDeploymentTriggerIssue';
export type { ControlOptions } from './models/ControlOptions';
export type { CustomArtifactDownloadInput } from './models/CustomArtifactDownloadInput';
export type { DataSourceBinding } from './models/DataSourceBinding';
export type { DataSourceBindingBase } from './models/DataSourceBindingBase';
export type { DefinitionEnvironmentReference } from './models/DefinitionEnvironmentReference';
export type { Demand } from './models/Demand';
export type { Deployment } from './models/Deployment';
export type { DeploymentApprovalCompletedEvent } from './models/DeploymentApprovalCompletedEvent';
export type { DeploymentApprovalPendingEvent } from './models/DeploymentApprovalPendingEvent';
export type { DeploymentAttempt } from './models/DeploymentAttempt';
export type { DeploymentAuthorizationInfo } from './models/DeploymentAuthorizationInfo';
export type { DeploymentCompletedEvent } from './models/DeploymentCompletedEvent';
export type { DeploymentEvent } from './models/DeploymentEvent';
export type { DeploymentInput } from './models/DeploymentInput';
export type { DeploymentJob } from './models/DeploymentJob';
export type { DeploymentManualInterventionPendingEvent } from './models/DeploymentManualInterventionPendingEvent';
export type { DeploymentQueryParameters } from './models/DeploymentQueryParameters';
export type { DeploymentStartedEvent } from './models/DeploymentStartedEvent';
export type { DeployPhase } from './models/DeployPhase';
export type { EmailRecipients } from './models/EmailRecipients';
export type { EnvironmentExecutionPolicy } from './models/EnvironmentExecutionPolicy';
export type { EnvironmentOptions } from './models/EnvironmentOptions';
export type { EnvironmentRetentionPolicy } from './models/EnvironmentRetentionPolicy';
export type { EnvironmentTrigger } from './models/EnvironmentTrigger';
export type { EnvironmentTriggerContent } from './models/EnvironmentTriggerContent';
export type { ExecutionInput } from './models/ExecutionInput';
export type { FavoriteItem } from './models/FavoriteItem';
export type { Folder } from './models/Folder';
export type { GatesDeploymentInput } from './models/GatesDeploymentInput';
export type { GatesDeployPhase } from './models/GatesDeployPhase';
export type { GateUpdateMetadata } from './models/GateUpdateMetadata';
export type { GitArtifactDownloadInput } from './models/GitArtifactDownloadInput';
export type { GitHubArtifactDownloadInput } from './models/GitHubArtifactDownloadInput';
export type { GraphSubjectBase } from './models/GraphSubjectBase';
export type { IdentityRef } from './models/IdentityRef';
export type { IgnoredGate } from './models/IgnoredGate';
export type { InputDescriptor } from './models/InputDescriptor';
export type { InputValidation } from './models/InputValidation';
export type { InputValue } from './models/InputValue';
export type { InputValues } from './models/InputValues';
export type { InputValuesError } from './models/InputValuesError';
export type { InputValuesQuery } from './models/InputValuesQuery';
export type { Issue } from './models/Issue';
export type { JenkinsArtifactDownloadInput } from './models/JenkinsArtifactDownloadInput';
export type { MachineGroupBasedDeployPhase } from './models/MachineGroupBasedDeployPhase';
export type { MachineGroupDeploymentInput } from './models/MachineGroupDeploymentInput';
export type { MailMessage } from './models/MailMessage';
export type { ManualIntervention } from './models/ManualIntervention';
export type { ManualInterventionUpdateMetadata } from './models/ManualInterventionUpdateMetadata';
export type { MappingDetails } from './models/MappingDetails';
export type { Metric } from './models/Metric';
export type { MultiConfigInput } from './models/MultiConfigInput';
export type { MultiMachineInput } from './models/MultiMachineInput';
export type { OrgPipelineReleaseSettings } from './models/OrgPipelineReleaseSettings';
export type { OrgPipelineReleaseSettingsUpdateParameters } from './models/OrgPipelineReleaseSettingsUpdateParameters';
export type { PackageTrigger } from './models/PackageTrigger';
export type { ParallelExecutionInputBase } from './models/ParallelExecutionInputBase';
export type { PipelineProcess } from './models/PipelineProcess';
export type { ProcessParameters } from './models/ProcessParameters';
export type { ProjectPipelineReleaseSettings } from './models/ProjectPipelineReleaseSettings';
export type { ProjectPipelineReleaseSettingsUpdateParameters } from './models/ProjectPipelineReleaseSettingsUpdateParameters';
export type { ProjectReference } from './models/ProjectReference';
export type { PropertiesCollection } from './models/PropertiesCollection';
export type { PropertySelector } from './models/PropertySelector';
export type { PullRequestConfiguration } from './models/PullRequestConfiguration';
export type { PullRequestFilter } from './models/PullRequestFilter';
export type { PullRequestTrigger } from './models/PullRequestTrigger';
export type { QueuedReleaseData } from './models/QueuedReleaseData';
export type { RealtimeReleaseDefinitionEvent } from './models/RealtimeReleaseDefinitionEvent';
export type { RealtimeReleaseEvent } from './models/RealtimeReleaseEvent';
export type { ReferenceLinks } from './models/ReferenceLinks';
export type { Release } from './models/Release';
export type { ReleaseAbandonedEvent } from './models/ReleaseAbandonedEvent';
export type { ReleaseApproval } from './models/ReleaseApproval';
export type { ReleaseApprovalHistory } from './models/ReleaseApprovalHistory';
export type { ReleaseApprovalPendingEvent } from './models/ReleaseApprovalPendingEvent';
export type { ReleaseArtifact } from './models/ReleaseArtifact';
export type { ReleaseCondition } from './models/ReleaseCondition';
export type { ReleaseCreatedEvent } from './models/ReleaseCreatedEvent';
export type { ReleaseDefinition } from './models/ReleaseDefinition';
export type { ReleaseDefinitionApprovals } from './models/ReleaseDefinitionApprovals';
export type { ReleaseDefinitionApprovalStep } from './models/ReleaseDefinitionApprovalStep';
export type { ReleaseDefinitionDeployStep } from './models/ReleaseDefinitionDeployStep';
export type { ReleaseDefinitionEnvironment } from './models/ReleaseDefinitionEnvironment';
export type { ReleaseDefinitionEnvironmentStep } from './models/ReleaseDefinitionEnvironmentStep';
export type { ReleaseDefinitionEnvironmentSummary } from './models/ReleaseDefinitionEnvironmentSummary';
export type { ReleaseDefinitionEnvironmentTemplate } from './models/ReleaseDefinitionEnvironmentTemplate';
export type { ReleaseDefinitionGate } from './models/ReleaseDefinitionGate';
export type { ReleaseDefinitionGatesOptions } from './models/ReleaseDefinitionGatesOptions';
export type { ReleaseDefinitionGatesStep } from './models/ReleaseDefinitionGatesStep';
export type { ReleaseDefinitionRevision } from './models/ReleaseDefinitionRevision';
export type { ReleaseDefinitionShallowReference } from './models/ReleaseDefinitionShallowReference';
export type { ReleaseDefinitionSummary } from './models/ReleaseDefinitionSummary';
export type { ReleaseDefinitionUndeleteParameter } from './models/ReleaseDefinitionUndeleteParameter';
export type { ReleaseDeployPhase } from './models/ReleaseDeployPhase';
export type { ReleaseEnvironment } from './models/ReleaseEnvironment';
export type { ReleaseEnvironmentCompletedEvent } from './models/ReleaseEnvironmentCompletedEvent';
export type { ReleaseEnvironmentShallowReference } from './models/ReleaseEnvironmentShallowReference';
export type { ReleaseEnvironmentStatusUpdatedEvent } from './models/ReleaseEnvironmentStatusUpdatedEvent';
export type { ReleaseEnvironmentUpdateMetadata } from './models/ReleaseEnvironmentUpdateMetadata';
export type { ReleaseEvent } from './models/ReleaseEvent';
export type { ReleaseGates } from './models/ReleaseGates';
export type { ReleaseGatesPhase } from './models/ReleaseGatesPhase';
export type { ReleaseManagementInputValue } from './models/ReleaseManagementInputValue';
export type { ReleaseNotCreatedEvent } from './models/ReleaseNotCreatedEvent';
export type { ReleaseReference } from './models/ReleaseReference';
export type { ReleaseRevision } from './models/ReleaseRevision';
export type { ReleaseSchedule } from './models/ReleaseSchedule';
export type { ReleaseSettings } from './models/ReleaseSettings';
export type { ReleaseShallowReference } from './models/ReleaseShallowReference';
export type { ReleaseStartEnvironmentMetadata } from './models/ReleaseStartEnvironmentMetadata';
export type { ReleaseStartMetadata } from './models/ReleaseStartMetadata';
export type { ReleaseTask } from './models/ReleaseTask';
export type { ReleaseTaskAttachment } from './models/ReleaseTaskAttachment';
export type { ReleaseTaskLogUpdatedEvent } from './models/ReleaseTaskLogUpdatedEvent';
export type { ReleaseTasksUpdatedEvent } from './models/ReleaseTasksUpdatedEvent';
export type { ReleaseTriggerBase } from './models/ReleaseTriggerBase';
export type { ReleaseUpdatedEvent } from './models/ReleaseUpdatedEvent';
export type { ReleaseUpdateMetadata } from './models/ReleaseUpdateMetadata';
export type { ReleaseWorkItemRef } from './models/ReleaseWorkItemRef';
export type { ResourceReference } from './models/ResourceReference';
export type { RetentionPolicy } from './models/RetentionPolicy';
export type { RetentionSettings } from './models/RetentionSettings';
export type { RunOnServerDeployPhase } from './models/RunOnServerDeployPhase';
export type { ScheduledReleaseTrigger } from './models/ScheduledReleaseTrigger';
export type { ServerDeploymentInput } from './models/ServerDeploymentInput';
export type { ServiceEndpointReference } from './models/ServiceEndpointReference';
export type { SourceIdInput } from './models/SourceIdInput';
export type { SourcePullRequestVersion } from './models/SourcePullRequestVersion';
export type { SourceRepoTrigger } from './models/SourceRepoTrigger';
export type { SummaryMailSection } from './models/SummaryMailSection';
export type { TagFilter } from './models/TagFilter';
export type { TaskInputDefinitionBase } from './models/TaskInputDefinitionBase';
export type { TaskInputValidation } from './models/TaskInputValidation';
export type { TaskOrchestrationPlanGroupReference } from './models/TaskOrchestrationPlanGroupReference';
export type { TaskOrchestrationPlanGroupsStartedEvent } from './models/TaskOrchestrationPlanGroupsStartedEvent';
export type { TaskSourceDefinitionBase } from './models/TaskSourceDefinitionBase';
export type { TfvcArtifactDownloadInput } from './models/TfvcArtifactDownloadInput';
export type { TimeZone } from './models/TimeZone';
export type { TimeZoneList } from './models/TimeZoneList';
export type { VariableGroup } from './models/VariableGroup';
export type { VariableGroupProjectReference } from './models/VariableGroupProjectReference';
export type { VariableGroupProviderData } from './models/VariableGroupProviderData';
export type { VariableValue } from './models/VariableValue';
export type { VssJsonCollectionWrapper } from './models/VssJsonCollectionWrapper';
export type { VssJsonCollectionWrapperBase } from './models/VssJsonCollectionWrapperBase';
export type { WorkflowTask } from './models/WorkflowTask';
export type { WorkflowTaskReference } from './models/WorkflowTaskReference';
export type { YamlFileSource } from './models/YamlFileSource';
export type { YamlPipelineProcess } from './models/YamlPipelineProcess';
export type { YamlPipelineProcessResources } from './models/YamlPipelineProcessResources';
export type { YamlSourceReference } from './models/YamlSourceReference';

export { ApprovalsService } from './services/ApprovalsService';
export { AttachmentsService } from './services/AttachmentsService';
export { DefinitionsService } from './services/DefinitionsService';
export { DeploymentsService } from './services/DeploymentsService';
export { FoldersService } from './services/FoldersService';
export { GatesService } from './services/GatesService';
export { ManualInterventionsService } from './services/ManualInterventionsService';
export { ReleasesService } from './services/ReleasesService';
