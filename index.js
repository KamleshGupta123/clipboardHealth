const {deterministicPartitionKey} = require("./dpk");
const Agent= require("./ticketBreakdown/logic/agents");
const Shift = require("./ticketBreakdown/logic/shift")
const Facility = require("./ticketBreakdown/logic/facility")

console.log(deterministicPartitionKey());
const fc = new Facility(1, 'F1')
fc.createFacility()
console.log(fc.getFacilate(1))
const agent = new Agent(1, 'kamal', 'c1')
agent.createAgent(agent)
console.log(agent.getAgentViaId(1))
const shift1 = new Shift(9, 11, 1, 10, 20, agent)
const shift2 = new Shift(91, 11, 1, 10, 20, agent)
shift1.createShift()
shift2.createShift()
console.log(shift1.getShiftsByFacility(11))
console.log(shift1.getShiftsByCustomId('c1'))
console.log(shift2.generateReportWithShiftId(91))