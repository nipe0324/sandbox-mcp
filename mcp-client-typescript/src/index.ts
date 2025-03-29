import dotenv from "dotenv";
import { MCPClient } from "./mcp-client.js";

dotenv.config();

const apiKey = process.env.ANTHROPIC_API_KEY || "";
if (apiKey === "") {
  throw new Error("ANTHROPIC_API_KEY is not set");
}

async function main() {
  if (process.argv.length < 3) {
    console.log("Usage: node index.ts <path_to_server_script>");
    return;
  }
  const mcpClient = new MCPClient(apiKey);
  try {
    await mcpClient.connectToServer(process.argv[2]);
    await mcpClient.chatLoop();
  } finally {
    await mcpClient.cleanup();
    process.exit(0);
  }
}

main();
