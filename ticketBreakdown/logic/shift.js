class Shifts {
    constructor(id, facilityId, agentId, startTime, endTime, agent) {
        this.id = id;
        this.facilityId = facilityId;
        this.agentId = agentId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.shiftList = []
        this.shiftJson = {
            id: this.id,
            facilityId: this.facilityId,
            startTime: this.startTime,
            endTime: this.endTime,
            agentId: this.agentId
        }
        this.agent = agent
    }

    createShift(){
        this.shiftList.push(this.shiftJson)
    }

    getShiftsByFacility(id) {
        let sl = this.shiftList;
        let allShifts = [];
        for (let i = 0; i < sl.length; i++) {
            if (sl[i].facilityId === id) {
                allShifts.push(sl[i])
            }
        }
        return allShifts;
    }

    getShiftByAgentId(id){
        let sl = this.shiftList;
        let allShifts = [];
        for (let i = 0; i < sl.length; i++) {
            if (sl[i].agentId === id) {
                allShifts.push(sl[i])
            }
        }
        return allShifts;
    }

    getShiftsByCustomId(cId){
        const agentId = this.agent.getAgentViaCustomId(cId)
        return this.getShiftByAgentId(agentId)
    }

    generateReportWithShiftId(id){
        let sl = this.shiftList;
        let allShifts = [];
        for (let i = 0; i < sl.length; i++) {
            if (sl[i].id === id) {
                allShifts.push(sl[i])
            }
        }
        return allShifts;
    }

}
module.exports = Shifts;