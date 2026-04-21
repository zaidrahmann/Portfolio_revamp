import { spawn, spawnSync } from "node:child_process";
import { existsSync, readFileSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const lockPath = resolve(root, ".next", "dev", "lock");

function isPidRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function stopExistingNextDevServer() {
  if (!existsSync(lockPath)) {
    return;
  }

  try {
    const lock = JSON.parse(readFileSync(lockPath, "utf8"));
    const pid = Number(lock?.pid);

    if (!Number.isFinite(pid) || pid <= 0 || !isPidRunning(pid)) {
      rmSync(lockPath, { force: true });
      return;
    }

    console.log(`Stopping existing Next.js dev server (PID ${pid})...`);

    if (process.platform === "win32") {
      const result = spawnSync("taskkill", ["/PID", String(pid), "/F"], {
        stdio: "inherit",
      });

      if (result.status !== 0) {
        console.warn("Could not stop existing process via taskkill.");
      }
    } else {
      process.kill(pid, "SIGTERM");
    }
  } catch (error) {
    console.warn("Unable to read/handle Next.js lock file:", error);
  } finally {
    rmSync(lockPath, { force: true });
  }
}

function startDevServer() {
  const nextBin = resolve(root, "node_modules", "next", "dist", "bin", "next");

  const child = spawn(process.execPath, [nextBin, "dev", "--webpack", "--port", "3000"], {
    stdio: "inherit",
  });

  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }
    process.exit(code ?? 0);
  });
}

stopExistingNextDevServer();
startDevServer();
