import { logger } from "./logger.js";
import { initializeCrashCapture, type CrashCapturePaths } from "./desktopCrashCapture.js";

// 先由 desktopEarlyDataBaseDirBootstrap 注入 dataBaseDir，再配置 crashDumps。
// remoteCrashReporterEnabled=false：无远端崩溃上报，仅启动本地 crashReporter 留档。
export const crashCapturePaths: CrashCapturePaths = initializeCrashCapture(logger, false);
