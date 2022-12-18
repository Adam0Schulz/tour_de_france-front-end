export interface DBObject {
    id: number
}

export interface NewObject {
    id?: number
}

export interface Team extends DBObject {
    
    name: string,
}

export interface NewTeam extends NewObject {
    name: string,
}

export interface Cyclist extends DBObject {
    firstName: string,
    lastName: string,
    age: number,
    mountainPoints: number,
    sprintPoints: number,
    totalTime: number,
    team: Team
}

export interface NewCyclist extends NewObject {
    firstName: string,
    lastName: string,
    age: number,
    mountainPoints: number,
    sprintPoints: number,
    totalTime: number,
    team: Team
}