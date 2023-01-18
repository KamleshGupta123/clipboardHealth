class Agent{
    constructor(id, name, cId) {
        this.id = id
        this.name = name
        this.cId = cId
        this.agentMap = {}
        this.customIdMap = {}
    }

    getJson(){
        return {
            id: this.id,
            name: this.name,
            cId: this.cId
        }
    }

    createAgent(agent){
        this.agentMap[agent.id] = agent.getJson()
        this.customIdMap[agent.cId] = agent.getJson()
    }

    getAgentViaId(id){
        return this.agentMap[id];
    }

    getAgentViaCustomId(id){
        return this.customIdMap[id].id
    }

}




module.exports = Agent;