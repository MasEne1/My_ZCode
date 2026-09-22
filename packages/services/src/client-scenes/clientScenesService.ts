import type { ClientScenesResponse, IClientScenesService } from "./clientScenes.js";

/**
 * 隐私定制:不再向 /api/v1/client/scenes 发起请求。
 * 服务端下发的推荐 prompt / 自动化模板文本从此无法到达客户端;
 * UI 消费方按"空列表"回退到本地硬编码语料与手动创建入口。
 */
export function createClientScenesService(): IClientScenesService {
  return {
    list: async (): Promise<ClientScenesResponse> => ({ code: 0, msg: "", data: [] }),
  };
}
