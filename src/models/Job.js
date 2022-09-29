
export class Job {
  constructor(data) {
    this.id = data.id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.description = data.description
    this.hours = data.hours
    this.rate = data.rate
  }
}
