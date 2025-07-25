/**
 * Generated by orval 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */
import { faker } from "@faker-js/faker"

import { HttpResponse, delay, http } from "msw"

import { PipelineStatus, PipelineTrigger } from ".././model"
import type {
  PipelineResponse,
  PipelineSummary,
  PublishSummary,
  TriggerPipelineApiPipelinesPost201,
} from ".././model"

export const getTriggerPipelineApiPipelinesPostResponseMock =
  (): TriggerPipelineApiPipelinesPost201 => ({})

export const getListPipelinesApiPipelinesGetResponseMock =
  (): PipelineSummary[] =>
    Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.string.alpha(20),
      app_id: faker.string.alpha(20),
      status: faker.helpers.arrayElement(Object.values(PipelineStatus)),
      repo: faker.helpers.arrayElement([
        faker.helpers.arrayElement([faker.string.alpha(20), null]),
        undefined,
      ]),
      triggered_by: faker.helpers.arrayElement(Object.values(PipelineTrigger)),
      build_id: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          faker.number.int({ min: undefined, max: undefined }),
          null,
        ]),
        undefined,
      ]),
      commit_job_id: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          faker.number.int({ min: undefined, max: undefined }),
          null,
        ]),
        undefined,
      ]),
      publish_job_id: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          faker.number.int({ min: undefined, max: undefined }),
          null,
        ]),
        undefined,
      ]),
      update_repo_job_id: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          faker.number.int({ min: undefined, max: undefined }),
          null,
        ]),
        undefined,
      ]),
      created_at: `${faker.date.past().toISOString().split(".")[0]}Z`,
      started_at: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          `${faker.date.past().toISOString().split(".")[0]}Z`,
          null,
        ]),
        undefined,
      ]),
      finished_at: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          `${faker.date.past().toISOString().split(".")[0]}Z`,
          null,
        ]),
        undefined,
      ]),
      published_at: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          `${faker.date.past().toISOString().split(".")[0]}Z`,
          null,
        ]),
        undefined,
      ]),
    }))

export const getGetPipelineApiPipelinesPipelineIdGetResponseMock = (
  overrideResponse: Partial<PipelineResponse> = {},
): PipelineResponse => ({
  id: faker.string.alpha(20),
  app_id: faker.string.alpha(20),
  status: faker.helpers.arrayElement(Object.values(PipelineStatus)),
  repo: faker.helpers.arrayElement([
    faker.helpers.arrayElement([faker.string.alpha(20), null]),
    undefined,
  ]),
  params: {},
  triggered_by: faker.helpers.arrayElement(Object.values(PipelineTrigger)),
  log_url: faker.helpers.arrayElement([
    faker.helpers.arrayElement([faker.string.alpha(20), null]),
    undefined,
  ]),
  build_id: faker.helpers.arrayElement([
    faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      null,
    ]),
    undefined,
  ]),
  commit_job_id: faker.helpers.arrayElement([
    faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      null,
    ]),
    undefined,
  ]),
  publish_job_id: faker.helpers.arrayElement([
    faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      null,
    ]),
    undefined,
  ]),
  update_repo_job_id: faker.helpers.arrayElement([
    faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      null,
    ]),
    undefined,
  ]),
  created_at: `${faker.date.past().toISOString().split(".")[0]}Z`,
  started_at: faker.helpers.arrayElement([
    faker.helpers.arrayElement([
      `${faker.date.past().toISOString().split(".")[0]}Z`,
      null,
    ]),
    undefined,
  ]),
  finished_at: faker.helpers.arrayElement([
    faker.helpers.arrayElement([
      `${faker.date.past().toISOString().split(".")[0]}Z`,
      null,
    ]),
    undefined,
  ]),
  published_at: faker.helpers.arrayElement([
    faker.helpers.arrayElement([
      `${faker.date.past().toISOString().split(".")[0]}Z`,
      null,
    ]),
    undefined,
  ]),
  ...overrideResponse,
})

export const getPublishPipelinesApiPipelinesPublishPostResponseMock = (
  overrideResponse: Partial<PublishSummary> = {},
): PublishSummary => ({
  published: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => faker.string.alpha(20)),
  superseded: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => faker.string.alpha(20)),
  errors: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    [faker.string.alphanumeric(5)]: faker.string.alpha(20),
  })),
  ...overrideResponse,
})

export const getTriggerPipelineApiPipelinesPostMockHandler = (
  overrideResponse?:
    | TriggerPipelineApiPipelinesPost201
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) =>
        | Promise<TriggerPipelineApiPipelinesPost201>
        | TriggerPipelineApiPipelinesPost201),
) => {
  return http.post("*/api/pipelines", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getTriggerPipelineApiPipelinesPostResponseMock(),
      ),
      { status: 201, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getListPipelinesApiPipelinesGetMockHandler = (
  overrideResponse?:
    | PipelineSummary[]
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<PipelineSummary[]> | PipelineSummary[]),
) => {
  return http.get("*/api/pipelines", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getListPipelinesApiPipelinesGetResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getGetPipelineApiPipelinesPipelineIdGetMockHandler = (
  overrideResponse?:
    | PipelineResponse
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<PipelineResponse> | PipelineResponse),
) => {
  return http.get("*/api/pipelines/:pipelineId", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getGetPipelineApiPipelinesPipelineIdGetResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getPipelineCallbackApiPipelinesPipelineIdCallbackPostMockHandler =
  (
    overrideResponse?:
      | unknown
      | ((
          info: Parameters<Parameters<typeof http.post>[1]>[0],
        ) => Promise<unknown> | unknown),
  ) => {
    return http.post("*/api/pipelines/:pipelineId/callback", async (info) => {
      await delay(1000)
      if (typeof overrideResponse === "function") {
        await overrideResponse(info)
      }
      return new HttpResponse(null, { status: 200 })
    })
  }

export const getRedirectToLogUrlApiPipelinesPipelineIdLogUrlGetMockHandler = (
  overrideResponse?:
    | unknown
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<unknown> | unknown),
) => {
  return http.get("*/api/pipelines/:pipelineId/log_url", async (info) => {
    await delay(1000)
    if (typeof overrideResponse === "function") {
      await overrideResponse(info)
    }
    return new HttpResponse(null, { status: 200 })
  })
}

export const getPublishPipelinesApiPipelinesPublishPostMockHandler = (
  overrideResponse?:
    | PublishSummary
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<PublishSummary> | PublishSummary),
) => {
  return http.post("*/api/pipelines/publish", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getPublishPipelinesApiPipelinesPublishPostResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getCheckPipelineJobsApiPipelinesCheckJobsPostMockHandler = (
  overrideResponse?:
    | unknown
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<unknown> | unknown),
) => {
  return http.post("*/api/pipelines/check-jobs", async (info) => {
    await delay(1000)
    if (typeof overrideResponse === "function") {
      await overrideResponse(info)
    }
    return new HttpResponse(null, { status: 200 })
  })
}
export const getPipelinesMock = () => [
  getTriggerPipelineApiPipelinesPostMockHandler(),
  getListPipelinesApiPipelinesGetMockHandler(),
  getGetPipelineApiPipelinesPipelineIdGetMockHandler(),
  getPipelineCallbackApiPipelinesPipelineIdCallbackPostMockHandler(),
  getRedirectToLogUrlApiPipelinesPipelineIdLogUrlGetMockHandler(),
  getPublishPipelinesApiPipelinesPublishPostMockHandler(),
  getCheckPipelineJobsApiPipelinesCheckJobsPostMockHandler(),
]
