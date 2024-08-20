/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { distributedTaskApi } from './distributedTaskApi';

export { ApiError } from './core/ApiError';
export { BaseHttpRequest } from './core/BaseHttpRequest';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { AadOauthTokenRequest } from './models/AadOauthTokenRequest';
export type { AadOauthTokenResult } from './models/AadOauthTokenResult';
export type { AgentChangeEvent } from './models/AgentChangeEvent';
export type { AgentJobRequestMessage } from './models/AgentJobRequestMessage';
export type { AgentPoolEvent } from './models/AgentPoolEvent';
export type { AgentQueueEvent } from './models/AgentQueueEvent';
export type { AgentQueuesEvent } from './models/AgentQueuesEvent';
export type { AgentRefreshMessage } from './models/AgentRefreshMessage';
export type { AuthenticationSchemeReference } from './models/AuthenticationSchemeReference';
export type { AuthorizationHeader } from './models/AuthorizationHeader';
export type { AzureKeyVaultPermission } from './models/AzureKeyVaultPermission';
export type { AzureKeyVaultVariableGroupProviderData } from './models/AzureKeyVaultVariableGroupProviderData';
export type { AzureKeyVaultVariableValue } from './models/AzureKeyVaultVariableValue';
export type { AzureManagementGroup } from './models/AzureManagementGroup';
export type { AzureManagementGroupQueryResult } from './models/AzureManagementGroupQueryResult';
export type { AzurePermission } from './models/AzurePermission';
export type { AzureResourcePermission } from './models/AzureResourcePermission';
export type { AzureRoleAssignmentPermission } from './models/AzureRoleAssignmentPermission';
export type { AzureSpnOperationStatus } from './models/AzureSpnOperationStatus';
export type { AzureSubscription } from './models/AzureSubscription';
export type { AzureSubscriptionQueryResult } from './models/AzureSubscriptionQueryResult';
export type { ClientCertificate } from './models/ClientCertificate';
export type { CounterVariable } from './models/CounterVariable';
export type { DataSource } from './models/DataSource';
export type { DataSourceBinding } from './models/DataSourceBinding';
export type { DataSourceBindingBase } from './models/DataSourceBindingBase';
export type { DataSourceDetails } from './models/DataSourceDetails';
export type { Demand } from './models/Demand';
export type { DemandEquals } from './models/DemandEquals';
export type { DemandExists } from './models/DemandExists';
export type { DemandMinimumVersion } from './models/DemandMinimumVersion';
export type { DemandSource } from './models/DemandSource';
export type { DependencyBinding } from './models/DependencyBinding';
export type { DependencyData } from './models/DependencyData';
export type { DependsOn } from './models/DependsOn';
export type { DeploymentGatesChangeEvent } from './models/DeploymentGatesChangeEvent';
export type { DeploymentGroup } from './models/DeploymentGroup';
export type { DeploymentGroupCreateParameter } from './models/DeploymentGroupCreateParameter';
export type { DeploymentGroupCreateParameterPoolProperty } from './models/DeploymentGroupCreateParameterPoolProperty';
export type { DeploymentGroupMetrics } from './models/DeploymentGroupMetrics';
export type { DeploymentGroupReference } from './models/DeploymentGroupReference';
export type { DeploymentGroupUpdateParameter } from './models/DeploymentGroupUpdateParameter';
export type { DeploymentMachine } from './models/DeploymentMachine';
export type { DeploymentMachineChangedData } from './models/DeploymentMachineChangedData';
export type { DeploymentMachineGroup } from './models/DeploymentMachineGroup';
export type { DeploymentMachineGroupReference } from './models/DeploymentMachineGroupReference';
export type { DeploymentMachinesChangeEvent } from './models/DeploymentMachinesChangeEvent';
export type { DeploymentPoolSummary } from './models/DeploymentPoolSummary';
export type { DeploymentTargetUpdateParameter } from './models/DeploymentTargetUpdateParameter';
export type { DiagnosticLogMetadata } from './models/DiagnosticLogMetadata';
export type { ElasticAgentPoolResizedEvent } from './models/ElasticAgentPoolResizedEvent';
export type { ElasticNode } from './models/ElasticNode';
export type { ElasticNodeSettings } from './models/ElasticNodeSettings';
export type { ElasticPool } from './models/ElasticPool';
export type { ElasticPoolCreationResult } from './models/ElasticPoolCreationResult';
export type { ElasticPoolLog } from './models/ElasticPoolLog';
export type { ElasticPoolSettings } from './models/ElasticPoolSettings';
export type { EndpointAuthorization } from './models/EndpointAuthorization';
export type { EndpointUrl } from './models/EndpointUrl';
export type { EnvironmentCreateParameter } from './models/EnvironmentCreateParameter';
export type { EnvironmentDeploymentExecutionRecord } from './models/EnvironmentDeploymentExecutionRecord';
export type { EnvironmentInstance } from './models/EnvironmentInstance';
export type { EnvironmentLinkedResourceReference } from './models/EnvironmentLinkedResourceReference';
export type { EnvironmentReference } from './models/EnvironmentReference';
export type { EnvironmentResource } from './models/EnvironmentResource';
export type { EnvironmentResourceDeploymentExecutionRecord } from './models/EnvironmentResourceDeploymentExecutionRecord';
export type { EnvironmentResourceReference } from './models/EnvironmentResourceReference';
export type { EnvironmentUpdateParameter } from './models/EnvironmentUpdateParameter';
export type { EventsConfig } from './models/EventsConfig';
export type { ExpressionValidationItem } from './models/ExpressionValidationItem';
export type { GraphSubjectBase } from './models/GraphSubjectBase';
export type { HelpLink } from './models/HelpLink';
export type { IdentityRef } from './models/IdentityRef';
export type { InputBindingContext } from './models/InputBindingContext';
export type { InputDescriptor } from './models/InputDescriptor';
export type { InputValidation } from './models/InputValidation';
export type { InputValidationItem } from './models/InputValidationItem';
export type { InputValidationRequest } from './models/InputValidationRequest';
export type { InputValue } from './models/InputValue';
export type { InputValues } from './models/InputValues';
export type { InputValuesError } from './models/InputValuesError';
export type { Issue } from './models/Issue';
export type { JobAssignedEvent } from './models/JobAssignedEvent';
export type { JobCanceledEvent } from './models/JobCanceledEvent';
export type { JobCancelMessage } from './models/JobCancelMessage';
export type { JobCompletedEvent } from './models/JobCompletedEvent';
export type { JobEnvironment } from './models/JobEnvironment';
export type { JobEvent } from './models/JobEvent';
export type { JobEventConfig } from './models/JobEventConfig';
export type { JobEventsConfig } from './models/JobEventsConfig';
export type { JObject } from './models/JObject';
export type { JobMetadataEvent } from './models/JobMetadataEvent';
export type { JobMetadataMessage } from './models/JobMetadataMessage';
export type { JobOption } from './models/JobOption';
export type { JobRequestMessage } from './models/JobRequestMessage';
export type { JobStartedEvent } from './models/JobStartedEvent';
export type { JToken } from './models/JToken';
export type { KubernetesResource } from './models/KubernetesResource';
export type { KubernetesResourceCreateParameters } from './models/KubernetesResourceCreateParameters';
export type { KubernetesResourceCreateParametersExistingEndpoint } from './models/KubernetesResourceCreateParametersExistingEndpoint';
export type { KubernetesResourceCreateParametersNewEndpoint } from './models/KubernetesResourceCreateParametersNewEndpoint';
export type { KubernetesResourcePatchParameters } from './models/KubernetesResourcePatchParameters';
export type { MarketplacePurchasedLicense } from './models/MarketplacePurchasedLicense';
export type { MaskHint } from './models/MaskHint';
export type { MetricsColumnMetaData } from './models/MetricsColumnMetaData';
export type { MetricsColumnsHeader } from './models/MetricsColumnsHeader';
export type { MetricsRow } from './models/MetricsRow';
export type { PackageMetadata } from './models/PackageMetadata';
export type { PackageVersion } from './models/PackageVersion';
export type { PlanEnvironment } from './models/PlanEnvironment';
export type { ProjectReference } from './models/ProjectReference';
export type { PropertiesCollection } from './models/PropertiesCollection';
export type { PublishTaskGroupMetadata } from './models/PublishTaskGroupMetadata';
export type { ReferenceLinks } from './models/ReferenceLinks';
export type { ResourceFilterOptions } from './models/ResourceFilterOptions';
export type { ResourceFilters } from './models/ResourceFilters';
export type { ResourceItem } from './models/ResourceItem';
export type { ResourceLimit } from './models/ResourceLimit';
export type { ResourceLockRequest } from './models/ResourceLockRequest';
export type { ResourcesHubData } from './models/ResourcesHubData';
export type { ResourceUsage } from './models/ResourceUsage';
export type { ResultTransformationDetails } from './models/ResultTransformationDetails';
export type { SecureFile } from './models/SecureFile';
export type { SecureFileEvent } from './models/SecureFileEvent';
export type { SendJobResponse } from './models/SendJobResponse';
export type { ServerExecutionDefinition } from './models/ServerExecutionDefinition';
export type { ServerTaskRequestMessage } from './models/ServerTaskRequestMessage';
export type { ServiceEndpoint } from './models/ServiceEndpoint';
export type { ServiceEndpointAuthenticationScheme } from './models/ServiceEndpointAuthenticationScheme';
export type { ServiceEndpointDetails } from './models/ServiceEndpointDetails';
export type { ServiceEndpointExecutionData } from './models/ServiceEndpointExecutionData';
export type { ServiceEndpointExecutionRecord } from './models/ServiceEndpointExecutionRecord';
export type { ServiceEndpointExecutionRecordsInput } from './models/ServiceEndpointExecutionRecordsInput';
export type { ServiceEndpointRequest } from './models/ServiceEndpointRequest';
export type { ServiceEndpointRequestResult } from './models/ServiceEndpointRequestResult';
export type { ServiceEndpointType } from './models/ServiceEndpointType';
export type { TaskAgent } from './models/TaskAgent';
export type { TaskAgentAuthorization } from './models/TaskAgentAuthorization';
export type { TaskAgentCloud } from './models/TaskAgentCloud';
export type { TaskAgentCloudRequest } from './models/TaskAgentCloudRequest';
export type { TaskAgentCloudType } from './models/TaskAgentCloudType';
export type { TaskAgentDowngrade } from './models/TaskAgentDowngrade';
export type { TaskAgentJob } from './models/TaskAgentJob';
export type { TaskAgentJobRequest } from './models/TaskAgentJobRequest';
export type { TaskAgentJobStep } from './models/TaskAgentJobStep';
export type { TaskAgentJobTask } from './models/TaskAgentJobTask';
export type { TaskAgentJobVariable } from './models/TaskAgentJobVariable';
export type { TaskAgentManualUpdate } from './models/TaskAgentManualUpdate';
export type { TaskAgentMessage } from './models/TaskAgentMessage';
export type { TaskAgentMinAgentVersionRequiredUpdate } from './models/TaskAgentMinAgentVersionRequiredUpdate';
export type { TaskAgentPool } from './models/TaskAgentPool';
export type { TaskAgentPoolMaintenanceDefinition } from './models/TaskAgentPoolMaintenanceDefinition';
export type { TaskAgentPoolMaintenanceJob } from './models/TaskAgentPoolMaintenanceJob';
export type { TaskAgentPoolMaintenanceJobTargetAgent } from './models/TaskAgentPoolMaintenanceJobTargetAgent';
export type { TaskAgentPoolMaintenanceOptions } from './models/TaskAgentPoolMaintenanceOptions';
export type { TaskAgentPoolMaintenanceRetentionPolicy } from './models/TaskAgentPoolMaintenanceRetentionPolicy';
export type { TaskAgentPoolMaintenanceSchedule } from './models/TaskAgentPoolMaintenanceSchedule';
export type { TaskAgentPoolReference } from './models/TaskAgentPoolReference';
export type { TaskAgentPoolStatus } from './models/TaskAgentPoolStatus';
export type { TaskAgentPoolSummary } from './models/TaskAgentPoolSummary';
export type { TaskAgentPublicKey } from './models/TaskAgentPublicKey';
export type { TaskAgentQueue } from './models/TaskAgentQueue';
export type { TaskAgentReference } from './models/TaskAgentReference';
export type { TaskAgentSession } from './models/TaskAgentSession';
export type { TaskAgentSessionKey } from './models/TaskAgentSessionKey';
export type { TaskAgentUpdate } from './models/TaskAgentUpdate';
export type { TaskAgentUpdateReason } from './models/TaskAgentUpdateReason';
export type { TaskAssignedEvent } from './models/TaskAssignedEvent';
export type { TaskAttachment } from './models/TaskAttachment';
export type { TaskCommandRestrictions } from './models/TaskCommandRestrictions';
export type { TaskCompletedEvent } from './models/TaskCompletedEvent';
export type { TaskDefinition } from './models/TaskDefinition';
export type { TaskDefinitionEndpoint } from './models/TaskDefinitionEndpoint';
export type { TaskDefinitionReference } from './models/TaskDefinitionReference';
export type { TaskEvent } from './models/TaskEvent';
export type { TaskExecution } from './models/TaskExecution';
export type { TaskGroup } from './models/TaskGroup';
export type { TaskGroupCreateParameter } from './models/TaskGroupCreateParameter';
export type { TaskGroupDefinition } from './models/TaskGroupDefinition';
export type { TaskGroupPublishPreviewParameter } from './models/TaskGroupPublishPreviewParameter';
export type { TaskGroupRestoreParameter } from './models/TaskGroupRestoreParameter';
export type { TaskGroupRevision } from './models/TaskGroupRevision';
export type { TaskGroupStep } from './models/TaskGroupStep';
export type { TaskGroupUpdateParameter } from './models/TaskGroupUpdateParameter';
export type { TaskGroupUpdatePropertiesBase } from './models/TaskGroupUpdatePropertiesBase';
export type { TaskHubLicenseDetails } from './models/TaskHubLicenseDetails';
export type { TaskHubOidcToken } from './models/TaskHubOidcToken';
export type { TaskInputDefinition } from './models/TaskInputDefinition';
export type { TaskInputDefinitionBase } from './models/TaskInputDefinitionBase';
export type { TaskInputValidation } from './models/TaskInputValidation';
export type { TaskInstance } from './models/TaskInstance';
export type { TaskLog } from './models/TaskLog';
export type { TaskLogReference } from './models/TaskLogReference';
export type { TaskOrchestrationContainer } from './models/TaskOrchestrationContainer';
export type { TaskOrchestrationItem } from './models/TaskOrchestrationItem';
export type { TaskOrchestrationJob } from './models/TaskOrchestrationJob';
export type { TaskOrchestrationOwner } from './models/TaskOrchestrationOwner';
export type { TaskOrchestrationPlan } from './models/TaskOrchestrationPlan';
export type { TaskOrchestrationPlanGroup } from './models/TaskOrchestrationPlanGroup';
export type { TaskOrchestrationPlanGroupsQueueMetrics } from './models/TaskOrchestrationPlanGroupsQueueMetrics';
export type { TaskOrchestrationPlanReference } from './models/TaskOrchestrationPlanReference';
export type { TaskOrchestrationQueuedPlan } from './models/TaskOrchestrationQueuedPlan';
export type { TaskOrchestrationQueuedPlanGroup } from './models/TaskOrchestrationQueuedPlanGroup';
export type { TaskOutputVariable } from './models/TaskOutputVariable';
export type { TaskPackageMetadata } from './models/TaskPackageMetadata';
export type { TaskReference } from './models/TaskReference';
export type { TaskRestrictions } from './models/TaskRestrictions';
export type { TaskSourceDefinition } from './models/TaskSourceDefinition';
export type { TaskSourceDefinitionBase } from './models/TaskSourceDefinitionBase';
export type { TaskStartedEvent } from './models/TaskStartedEvent';
export type { TaskVariableRestrictions } from './models/TaskVariableRestrictions';
export type { TaskVersion } from './models/TaskVersion';
export type { Timeline } from './models/Timeline';
export type { TimelineAttempt } from './models/TimelineAttempt';
export type { TimelineRecord } from './models/TimelineRecord';
export type { TimelineRecordFeedLinesWrapper } from './models/TimelineRecordFeedLinesWrapper';
export type { TimelineReference } from './models/TimelineReference';
export type { ValidationItem } from './models/ValidationItem';
export type { VariableGroup } from './models/VariableGroup';
export type { VariableGroupParameters } from './models/VariableGroupParameters';
export type { VariableGroupProjectReference } from './models/VariableGroupProjectReference';
export type { VariableGroupProviderData } from './models/VariableGroupProviderData';
export type { VariableValue } from './models/VariableValue';
export type { VirtualMachine } from './models/VirtualMachine';
export type { VirtualMachineGroup } from './models/VirtualMachineGroup';
export type { VirtualMachineGroupCreateParameters } from './models/VirtualMachineGroupCreateParameters';
export type { VirtualMachineResource } from './models/VirtualMachineResource';
export type { VirtualMachineResourceCreateParameters } from './models/VirtualMachineResourceCreateParameters';
export type { VssJsonCollectionWrapper } from './models/VssJsonCollectionWrapper';
export type { VssJsonCollectionWrapperBase } from './models/VssJsonCollectionWrapperBase';

export { AgentcloudsService } from './services/AgentcloudsService';
export { AgentcloudtypesService } from './services/AgentcloudtypesService';
export { AgentsService } from './services/AgentsService';
export { DeploymentgroupsService } from './services/DeploymentgroupsService';
export { EnvironmentdeploymentRecordsService } from './services/EnvironmentdeploymentRecordsService';
export { EnvironmentsService } from './services/EnvironmentsService';
export { KubernetesService } from './services/KubernetesService';
export { PoolsService } from './services/PoolsService';
export { QueuesService } from './services/QueuesService';
export { RequestsService } from './services/RequestsService';
export { TargetsService } from './services/TargetsService';
export { TaskgroupsService } from './services/TaskgroupsService';
export { VariablegroupsService } from './services/VariablegroupsService';
export { YamlschemaService } from './services/YamlschemaService';
