/* eslint-disable prettier/prettier */
import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3 } from 'aws-cdk-lib';
import { aws_iam as iam } from 'aws-cdk-lib';
import { aws_cloudfront as cloudfront } from 'aws-cdk-lib';
import { aws_s3_deployment as s3deploy } from 'aws-cdk-lib';
import path from 'path';

export class StaticSite extends cdk.Stack {
    constructor(parent: cdk.Stack, name: string) {
        super(parent, name);



        const cloudfrountOAI = new cloudfront.OriginAccessIdentity(this, 'JSAutoDeployStatic-OAI');

        const siteBucket = new s3.Bucket(this, 'JSAutoDeployStaticBucket', {
            bucketName: 'js-auto-deploy-static-bucket',
            websiteIndexDocument: 'index.html',
            publicReadAccess: false,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
        });

        siteBucket.addToResourcePolicy(new iam.PolicyStatement({
            actions: ['s3:GetObject'],
            resources: [siteBucket.arnForObjects('*')],
            principals: [new iam.CanonicalUserPrincipal(cloudfrountOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId)],
        }));

        const distribution = new cloudfront.CloudFrontWebDistribution(this, 'JSAutoDeployStaticDistribution', {
            originConfigs: [
                {
                    s3OriginSource: {
                        s3BucketSource: siteBucket,
                        originAccessIdentity: cloudfrountOAI,
                    },
                    behaviors: [{ isDefaultBehavior: true }],
                },
            ],
        });
        new s3deploy.BucketDeployment(this, 'JSAutoDeployStaticDeployment', {
            sources: [s3deploy.Source.asset(path.join(__dirname, '..', 'dist'))],
            destinationBucket: siteBucket,
            distribution,
            distributionPaths: ['/*'],
        })

    }
}
