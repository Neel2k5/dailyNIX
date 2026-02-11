export interface CommandUsageExample{
    command:string,
    usage:string
}
export interface CommandElement{
    id:number,
    base_name: string,
    documentation: string,
    description: string,
    usageExamples:CommandUsageExample[]
}