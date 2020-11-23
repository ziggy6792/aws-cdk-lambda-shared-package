#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DemoSharingAppStack } from '../lib/demo-sharing-app-stack';

const app = new cdk.App();
new DemoSharingAppStack(app, 'DemoSharingAppStack');
