# API Endpoints and Instructions

Here is a list of available API endpoints and their descriptions. <br />
These endpoints are used for various functionalities in the application. <br />
Please refer to the descriptions for more details on each endpoint. <br />
All endpoints are prefixed with `/api`.

## Auth

The auth endpoints are used for user authentication and management.<br />
These endpoints are handled by the `better-auth` package and are not changeable.<br />
For the full documentation, see: [better-auth documentation](https://better-auth.com/docs).

**Authentication:**

- Most endpoints require a valid session cookie or Bearer token.

**Example:**

```http
POST /api/auth/signin
Content-Type: application/json

{
	"email": "user@example.com",
	"password": "hunter2"
}
```

**Response:**

```json
{
	"user": { "id": "abc123", "email": "user@example.com" },
	"token": "...jwt..."
}
```

**Error Responses:**

- `401 Unauthorized` – Invalid credentials
- `429 Too Many Requests` – Rate limit exceeded

## Server Management

The server endpoints are used for managing servers in the application.<br />
All endpoints require authentication via Bearer token or session cookie.

### Parameters

- `serverId` (string): Unique identifier for a server

### Endpoints

| Endpoint             | Method | Description                                         |
| -------------------- | ------ | --------------------------------------------------- |
| `/servers`           | GET    | List servers owned by current user.                 |
| `/servers`           | POST   | Create a new server entry (generates API key/token) |
| `/servers/:serverId` | GET    | Get server details                                  |
| `/servers/:serverId` | PATCH  | Update settings (e.g. visibility, name)             |
| `/servers/:serverId` | DELETE | Delete server entry                                 |

#### Example: Create Server

```http
POST /api/servers
Authorization: Bearer <token>
Content-Type: application/json

{
	"name": "My Minecraft Server",
	"visibility": "public"
}
```

**Response:**

```json
{
	"id": "srv_123",
	"name": "My Minecraft Server",
	"visibility": "public",
	"apiKey": "..."
}
```

**Error Responses:**

- `400 Bad Request` – Invalid input
- `401 Unauthorized` – Missing or invalid token
- `404 Not Found` – Server not found

## Plugin → API Communication

The plugin communicates with the API to sync player data and log events.

### Parameters

- `serverId` (string): Unique server identifier
- `uuid` (string): Player UUID

| Endpoint                                 | Method | Description                                                         |
| ---------------------------------------- | ------ | ------------------------------------------------------------------- |
| `/servers/:serverId/players/sync`        | POST   | Ensure player exists in DB (uuid, username, maybe first join date). |
| `/servers/:serverId/players/:uuid/stats` | POST   | Push stats for a single player (kills, joins, blocks mined, etc)    |
| `/servers/:serverId/events`              | POST   | Log specific events (death, achievement, rank change).              |

#### Example: Sync Player

```http
POST /api/servers/srv_123/players/sync
Authorization: Bearer <token>
Content-Type: application/json

{
	"uuid": "player-uuid",
	"username": "Steve"
}
```

**Response:**

```json
{
	"message": "Player added successfully!"
}
```

**Error Responses:**

- `400 Bad Request` – Missing fields
- `401 Unauthorized` – Invalid token

## Leaderboards and Statistics

Endpoints for retrieving leaderboards and player/server statistics. (Subject to change in future versions.)

### Parameters

- `serverId` (string): Server identifier
- `metric` (string): Leaderboard metric (e.g. kills, playtime)
- `uuid` (string): Player UUID

| Endpoint                                  | Method | Description                                                                               |
| ----------------------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| `/servers/:serverId/leaderboards`         | GET    | List all available leaderboard types (e.g. kills, joins, playtime) for a specific server. |
| `/servers/:serverId/leaderboards/:metric` | GET    | Fetch top N players for a given metric of a specific server.                              |
| `/servers/:serverId/players/:uuid/stats`  | GET    | Fetch all stats for a specific player in a specific server.                               |
| `/servers/:serverId/stats/aggregate`      | GET    | Server-wide stats (e.g. total playtime, total blocks mined).                              |

#### Example: Get Leaderboard

```http
GET /api/servers/srv_123/leaderboards/kills
Authorization: Bearer <token>
```

**Response:**

```json
{
	"leaderboard": [
		{ "uuid": "player-uuid", "username": "Steve", "kills": 42 },
		{ "uuid": "player2", "username": "Alex", "kills": 35 }
	]
}
```

**Error Responses:**

- `401 Unauthorized` – Invalid token
- `404 Not Found` – Server or metric not found

## Leaderboard Pages

Endpoints for managing and rendering leaderboard pages.

### Parameters

- `serverId` (string): Server identifier
- `pageId` (string): Page identifier

| Endpoint                               | Method | Description                                        |
| -------------------------------------- | ------ | -------------------------------------------------- |
| `/api/servers/:serverId/pages`         | GET    | List all available leaderboard pages for a server. |
| `/api/servers/:serverId/pages/:pageId` | GET    | Get details for a specific leaderboard page.       |
| `/api/servers/:serverId/pages`         | POST   | Create a new leaderboard page for a server.        |
| `/api/servers/:serverId/pages/:pageId` | PATCH  | Update a specific leaderboard page.                |
| `/api/servers/:serverId/pages/:pageId` | DELETE | Delete a specific leaderboard page.                |

#### Example: Create Leaderboard Page

```http
POST /api/servers/srv_123/pages
Authorization: Bearer <token>
Content-Type: application/json

{
	"title": "Top Kills",
	"metric": "kills"
}
```

**Response:**

```json
{
	"id": "page_456",
	"title": "Top Kills",
	"metric": "kills"
}
```

**Error Responses:**

- `400 Bad Request` – Invalid input
- `401 Unauthorized` – Invalid token

## Admin/Utility Endpoints

Endpoints for administrative and utility purposes. Admin endpoints may require elevated privileges.

### Parameters

- `serverId` (string): Server identifier

| Endpoint                            | Method | Description                          |
| ----------------------------------- | ------ | ------------------------------------ |
| `/servers/:serverId/regenerate-key` | POST   | Regenerate the API key for a server. |
| `/health`                           | GET    | List all servers (admin only).       |

#### Example: Regenerate API Key

```http
POST /api/servers/srv_123/regenerate-key
Authorization: Bearer <admin-token>
```

**Response:**

```json
{
	"apiKey": "new-api-key-xyz"
}
```

**Error Responses:**

- `401 Unauthorized` – Invalid or missing admin token
- `404 Not Found` – Server not found

---

## General Notes

- All endpoints are prefixed with `/api`.
- Most endpoints require authentication (Bearer token or session cookie).
- Rate limiting may apply to some endpoints (HTTP 429).
- Pagination is used for list endpoints (see `?page=` and `?limit=` query params).
- For more details, see the code or contact the API maintainer.
