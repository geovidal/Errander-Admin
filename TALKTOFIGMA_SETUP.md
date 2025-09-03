# TalkToFigma MCP Server Setup

This guide explains how to set up the TalkToFigma MCP server for Cursor to connect to your Figma designs.

## Current Status

✅ **WebSocket Server Running**: Port 3055
✅ **Channel Connected**: `lpn94h4i`
✅ **MCP Configuration**: Created in `.cursor/mcp_config.json`

## What's Running

1. **WebSocket Server**: `bunx cursor-talk-to-figma-socket` on port 3055
2. **Channel**: Connected to `lpn94h4i`
3. **MCP Configuration**: Ready for Cursor to connect

## How to Use

### 1. Restart Cursor
After creating the MCP configuration, restart Cursor to load the new MCP server.

### 2. Verify Connection
Once Cursor restarts, it should automatically connect to the TalkToFigma MCP server and join channel `lpn94h4i`.

### 3. Available Commands
The MCP server provides access to:
- Figma document information
- Design elements and components
- Asset exports
- Design system data

## Configuration Details

The MCP server is configured in `.cursor/mcp_config.json`:
```json
{
  "mcpServers": {
    "TalkToFigma": {
      "command": "bunx",
      "args": [
        "cursor-talk-to-figma-mcp@latest"
      ]
    }
  }
}
```

## Troubleshooting

1. **Cursor not connecting**: Restart Cursor after configuration changes
2. **WebSocket connection issues**: Ensure the WebSocket server is running on port 3055
3. **Channel connection**: Verify you're connected to the correct channel `lpn94h4i`

## Next Steps

1. Restart Cursor
2. The TalkToFigma MCP server should automatically connect
3. You can now use Figma-related commands in Cursor
4. Test by asking Cursor to read your Figma designs or get design information

