export interface Task {
    name: string;
    completed: boolean;
    priority: PriorityEnum;
}

export enum PriorityEnum {
    one = 'Low',
    two = 'Medium',
    three = 'High',
    none = ''
}