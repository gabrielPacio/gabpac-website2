export class ContentModel {
    name: string;
    menuTitle: string;
    tooltip: string;
    description: string;
    structureType: StructureType;
    id: number;
    isAvailable: boolean;

    constructor(values = {}) {
        Object.assign(values, this)
    }
}

export enum StructureType {
    section,
    page,
    hardcoded
}
