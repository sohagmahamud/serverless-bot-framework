/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICNSE-2.0                                                                     *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

import { SynthUtils } from '@aws-cdk/assert';
import { Stack } from '@aws-cdk/core';
import { BotCustomResource } from '../lib/custom-resource-construct';
import '@aws-cdk/assert/jest';

test('test BotCustomResource construct', () => {
  const stack = new Stack();

  new BotCustomResource(stack, 'BotCustomResource', {
    solutionId: 'SolutionId',
    version: 'version',
    UUID: 'UUID',
    sendAnonymousUsageData: 'Yes',
    botApiUrl: `apiUrl`,
    botApiStageName: `prod`,
    botApiId: `botApiId`,
    botName: 'Joe',
    botGender: 'Male',
    botLanguage: 'English',
    botBrain: 'Custom ML model',
    brainBucketName: 'BrainBucketName',
    conversationLogsTable: 'conversationLogsTable',
    entitiesTable: 'entitiesTable',
    contextTable: 'contextTable',
    cognitoIdentityPool: 'cognitoIdentityPool',
    cognitoUserPoolId: 'cognitoUserPoolId',
    cognitoUserPoolClientId: 'cognitoUserPoolClientId',
    trainModelArn: 'trainModelArn',
    sampleWebClientBucketName: 'sampleWebClientBucketName',
    sampleWebclientPackage: 'webClientPackageUrl',
    sampleLeaveFeedbackBotArn: 'sampleLeaveFeedbackBotArn',
    sampleWeatherForecastBotArn: 'sampleWeatherForecastBotArn',
    sampleOrderPizzaBotArn: 'sampleOrderPizzaBotArn',
  });

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
