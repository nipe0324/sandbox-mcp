# MCP Client TypeScript

ref: https://modelcontextprotocol.io/quickstart/client

## Usage

Create a `.env` file. NOTE: keep this file secret.

```sh
echo "ANTHROPIC_API_KEY=<your key here>" > .env
```

Build mcp client

```sh
npm run build
```

Run the mcp client

```sh
node build/index.js path/to/build/index.js
```

And then, run the MCP client and server in the terminal and type Query:

```sh
Weather MCP Server running on stdio
Connected to server with tools: [ 'get-alerts', 'get-forecast' ]

MCP Client Started!
Type your queries or 'quit' to exit.

Query: What’s the weather in Sacramento?

I can help get the weather forecast for Sacramento, CA. Sacramento is located at approximately latitude 38.5816° N and longitude 121.4944° W. I'll use these coordinates to get the forecast.
[Calling tool get-forecast with args {"latitude":38.5816,"longitude":-121.4944}]
Currently in Sacramento, it's partly cloudy with a temperature of 42°F and light SSE winds at 2 mph. 

Tomorrow (Saturday) will be mostly sunny with a high of 64°F. However, rain showers are likely to move in Saturday night, with temperatures dropping to 49°F.

The next few days will be wet:
- Sunday: Rain showers likely, high of 61°F
- Monday: Rain showers, high of 62°F
- Tuesday: Chance of rain showers, high of 61°F

Temperatures will generally stay in the low 60s during the day and 40s at night throughout the week, with various chances of rain showers continuing through Friday.

Query: 
```
