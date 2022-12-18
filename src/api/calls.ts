import axios from "axios";
import {Team, Cyclist, NewTeam, NewCyclist } from 'api/models'

const api = axios.create({
    baseURL: "http://localhost:8080"
})

export class Calls<T, NT> {

    // definite assertion might be a problem
    resource!: string;

    constructor(resource: string) {
        this.resource = resource
    }

    get = async (): Promise<T[]> => {
        return api.get("/" + this.resource).then(res => res.data).catch(err => { throw err })
    }

    getById = async (id: number): Promise<T> => {
        return api.get("/" + this.resource + "/" + id).then(res => res.data).catch(err => { throw err })
    }
    
    update = async (id: number, newObject: NT): Promise<T> => {
        return api.put("/" + this.resource + "/" + id, newObject).then(res => res.data).catch(err => { throw err })
    }

    del = async (id: number): Promise<T> => {
        return api.delete("/" + this.resource + "/" + id).then(res => res.data).catch(err => { throw err })
    }

    create = async (newObject: NT): Promise<T> => {
        return api.post("/" + this.resource, newObject).then(res => res.data).catch(err => { throw err })
    }

    getByParams = async (...param: { name: string, value: string }[]): Promise<T[]> => {
        const params = param.map(item => item.name + '=' + item.value + '&')
        return api.get("/" + this.resource + "?" + params).then(res => res.data).catch(err => { throw err })
    }

    getOneByParams = async (...param: { name: string, value: string }[]): Promise<T> => {
        const params = param.map(item => item.name + '=' + item.value + '&')
        return api.get("/" + this.resource + "?" + params).then(res => res.data).catch(err => { throw err })
    }

}

export const CyclistCalls = new Calls<Cyclist, NewCyclist>("cyclists")
export const TeamCalls = new Calls<Team, NewTeam>("teams")