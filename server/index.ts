import once from "lodash/once";
import flatMap from "lodash/flatMap";
import * as os from "os";
import { bootstrapServer } from "./server";
import { getEnv } from "./env";
import type { Socket } from "net";

const env = getEnv(process.env);

const getPublicInterfaces = () => {
  const ifaces = os.networkInterfaces();
  const publicInterfaces: Array<string> = [];
  for (const iface of flatMap(Object.values(ifaces))) {
    if (iface == null || iface.family !== "IPv4") {
      continue;
    }
    publicInterfaces.push(`http://${iface.address}:${env.PORT}`);
  }
  return publicInterfaces;
};

const getListeningAddresses = () => {
  if (env.HOST === "0.0.0.0") {
    return getPublicInterfaces();
  }
  return [`http://${env.HOST}:${env.PORT}`];
};

bootstrapServer(env).then(({ httpServer }) => { 
  httpServer.on('error', (err) => {
  console.error('Server startup error:', err);
  process.exitCode = 1;
  process.exit(1);
    console.error('Server startup error:', err); 
    process.exit(1); 
  }); 
  httpServer.on('listening', () => { 
    console.log('Server is listening.'); 
  });
  const server = httpServer.listen(env.PORT, env.HOST, () => {
  });

new line(s) to replace
