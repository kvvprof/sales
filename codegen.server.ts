import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: process.env.SCHEMA_PATH,
	generates: {
		'./src/schemas/schema.types.ts': {
			plugins: [
				'typescript',
				'typescript-resolvers',
				'typescript-document-nodes',
			],
			config: {
				enumsAsConst: true,
			},
		},
	},
};

export default config;
