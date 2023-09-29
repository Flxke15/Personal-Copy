class General {
  constructor() {
    this.pid = ''
    this.firstName = ''
  }
}

class HomeDetails {
  constructor() {
    this.name = ''
    this.gender = ''
    this.birthDay = ''
    this.homeStatus = ''
    this.pidNationality = ''
    this.momName = ''
    this.momPid = ''
    this.momNationality = ''
    this.dadName = ''
    this.dadPid = ''
    this.dadNationality = ''
    this.address = ''
    this.nameVillage = ''
    this.typeHome = ''
    this.numberHome = ''
    this.regisHome = ''
    this.regisHomeStatus = ''
    this.dateMoveIn = ''
  }
}

class PidDetails {
  constructor() {
    this.pidName = ''
    this.pidAddress = ''
    this.pidIssueDate = ''
    this.pidExpiryDate = ''
    this.pidMakeNo = ''
  }
}

class SearchBar {
  constructor() {
    this.pid = ''
  }
}


export default {
  General,
  HomeDetails,
  PidDetails,
  SearchBar,
  
}
