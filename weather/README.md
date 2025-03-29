# Weather MCP Server

ref: https://modelcontextprotocol.io/quickstart/server

## Usage

Build weather mcp server

```sh
npm run build
```

Add mcp server setting to MCP Host (ex. VS Code, Claude Desktop, etc)

```json
{
    "mcpServers": {
        "weather": {
            "command": "node",
            "args": [
                "/ABSOLUTE/PATH/TO/PARENT/FOLDER/weather/build/index.js"
            ]
        }
    }
}
```

Prompt LLM

- What’s the weather in Sacramento?
- What are the active weather alerts in Texas?
