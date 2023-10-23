export type EntryStatus = 'Pending' | 'In progress' | 'Finished'

export interface Entry {
    _id: string;
    description: string;
    createdAt: number;
    status: EntryStatus;
}