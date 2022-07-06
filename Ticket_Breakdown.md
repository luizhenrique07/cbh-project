# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Add to the Agents table the nullable unique column CustomId to save the custom id sent by the employee
time: about 1 hour
acceptance criteria: the column must exist on table Agents

2. Implement method do add CustomId to the Agent.
description: Create a addAgentCustomId(agentId, customId), in this method I would check if the customId not exists and if a agent exists with the givin agentId, if everything check, I would update the agent with its new customId
time: about 1 hour
acceptance: when sending a valid agentId and customId to the method it should update te entity on database

3. Change the generateReport to bring the customId when it is not null
description: check if customId is null, if not bring customId, if it is null just bring the normal generated id.
time: about 1 hour

4. Change the getShiftsByFacility to bring customId on metadata
description: add to the return object of the method the customId
time: about 1 hour