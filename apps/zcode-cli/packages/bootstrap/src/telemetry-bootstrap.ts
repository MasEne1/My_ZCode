/**
 * 隐私定制：OTLP 模型遥测已整体移除。
 * 保留同名入口为 no-op，调用方（协议入口、CLI 运行时清理）无需感知差异。
 */
export async function prepareZCodeTelemetryEnv(
  env: NodeJS.ProcessEnv = process.env,
  // 兼容旧调用方透传的遥测准备选项；遥测移除后仅忽略。
  _options?: unknown,
): Promise<NodeJS.ProcessEnv> {
  return env;
}

export async function shutdownZCodeTelemetry(): Promise<void> {}
