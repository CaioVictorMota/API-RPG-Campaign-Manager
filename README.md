<h1> ttrpg-campaign-manager </h1>

This is a simple work-in-progress CRUD API for Tabletop RPG's Campaigns and Sessions. It is possible to record a Campaign basic information and record dates of sessions for easy tracking.

<h2>Endpoints</h2>

<strong>/campaigns/:campaignId</strong>

This Endpoint is used to manipulate Campaigns data. Supported HTTP Methods:
<ul>
    <li><strong>POST (without id)</strong>: Data must be sent in raw JSON in the body of the request</li>
    <li><strong>GET (without id)</strong>: Get all Campaigns</li>
    <li><strong>GET (with id)</strong>: Get a Specific Campaign</li>
    <li><strong>PUT (with id)</strong>: Replace a Specific Campaign</li>
    <li><strong>PATCH (with id)</strong>: Update a Specific Campaign</li>
    <li><strong>DELETE (with id)</strong>: Delete a Specific Campaign</li>
</ul>

For POST and PUT methods, some properties are required:
<ul>
    <li><strong>name</strong>: The Name of the campaign</li>
    <li><strong>system</strong>: The System of Rules used (DnD 5e, Chronicles of Darkness, etc)</li>
    <li><strong>dm</strong>: Narrator/DM of the campaign</li>
    <li><strong>description</strong>: A brief description</li>
</ul>


<strong>/campaigns/:campaignId/sessions/:sessionId</strong>

This Endpoint is used to manipulate Sessions data. Sessions are actually an array inside Campaign. Supported HTTP Methods:

<ul>
    <li><strong>POST (without id)</strong>: Data must be sent in raw JSON in the body of the request</li>
    <li><strong>GET (without id)</strong>: Get all Sessions</li>
    <li><strong>GET (with id)</strong>: Get a Specific Session</li>
    <li><strong>DELETE (with id)</strong>: Delete a Specific Session</li>
</ul>

For POST method, some properties are required:
<ul>
    <li><strong>startingDateTime</strong>: The Name of the campaign</li>
    <li><strong>endingDateTime</strong>: The System of Rules used (DnD 5e, Chronicles of Darkness, etc)</li>
</ul>


<h2>Credits</h2>

This Project was built by [Caio "Tyghorn" Victor](https://github.com/CaioVictorMota).

We are all one.
