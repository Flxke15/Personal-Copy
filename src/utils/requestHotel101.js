import pdfmakeStyle from '@/plugins/pdfmake-style'

function exportPersonality1(obj) {
  console.log(obj)
  const info = {
        pid : obj.pidData.pid,
        name : obj.pidData.name,
        gender : obj.pidData.gender,
        birthDay : obj.pidData.birthDay,
        homeStatus : obj.pidData.homeStatus,
        pidNationality: obj.pidData.pidNationality,
        momName: obj.pidData.momName,
        momPid: obj.pidData.momPid,
        momNationality: obj.pidData.momNationality,
        dadName: obj.pidData.dadName,
        dadPid: obj.pidData.dadPid,
        dadNationality: obj.pidData.dadNationality,
        address: obj.pidData.address,
        nameVillage: obj.pidData.nameVillage,
        typeHome: obj.pidData.typeHome,
        numberHome: obj.pidData.numberHome,
        regisHome: obj.pidData.regisHome,
        regisHomeStatus: obj.pidData.regisHomeStatus,
        dateMoveIn: obj.pidData.dateMoveIn,
        pidName: obj.pidData.pidName,
        pidAddress: obj.pidData.pidAddress,
        pidIssueDate: obj.pidData.pidIssueDate,
        pidExpiryDate: obj.pidData.pidExpiryDate,
        pidMakeNo: obj.pidData.pidMakeNo,
  }

  const docDefintion = {
    pageMargins: [30, 50, 40, 40],
    content: [
      
      {
        text: `แบบรับรองรายการบุคคลจากฐานข้อมูลการทะเบียนของสํานักทะเบียนกลาง`,
        bold: true,
        alignment: "center",
        fontSize:18,
      },
      {
        text: `ก. รายการทะเบียนบ้าน`,
        bold: true,
        fontSize:18,
        margin: [0,30,0,0]
      },
      {
        columns: [
          {
            width:120,
            text: [
              `ชื่อ${" ".replace(5)}`,
              {
                text: info.name,
                bold:true
              }
            ]
          },
          {
            text: [
              `เลขบัตรประจำตัวประชาชน${" ".replace(5)}`,
              {
                text: info.pid,
                bold:true
              }
            ]
          },
          {
            width:40,
            text: [
              `เพศ${" ".replace(5)}`,
              {
                text: info.gender,
                bold:true
              }
            ]
          },
        ]
      },
      {
        columns:[
          {
            text: [
              `เกิดเมื่อ${" ".replace(5)}`,
              {
                text: info.birthDay,
                bold:true
              }
            ]
          },
          {
            text: [
              `สภานภาพในบ้าน${" ".replace(5)}`,
              {
                text: info.homeStatus,
                bold:true
              }
            ]
          },
          {
            text: [
              `สัญชาติ${" ".replace(5)}`,
              {
                text: info.pidNationality,
                bold:true
              }
            ]
          }
        ]
      },
      {
        columns:[
          {
            width:'*',
            text: [
              `มารดาชื่อ${" ".replace(5)}`,
              {
                text: info.momName,
                bold:true
              }
            ]
          },
          {
            width:250,
            text: [
              `เลขบัตรประจำตัวประชาชน${" ".replace(5)}`,
              {
                text: info.momPid,
                bold:true
              }
            ]
          },
          {
            width:'*',
            text: [
              `สัญชาติ${" ".replace(5)}`,
              {
                text: info.momNationality,
                bold:true
              }
            ]
          }
        ]
      },
      {
        columns:[
          {
            text: [
              `บิดาชื่อ${" ".replace(5)}`,
              {
                text: info.dadName,
                bold:true
              }
            ]
          },
          {
            text: [
              `เลขบัตรประจำตัวประชาชน${" ".replace(5)}`,
              {
                text: info.dadPid,
                bold:true
              }
            ]
          },
          {
            text: [
              `สัญชาติ${" ".replace(5)}`,
              {
                text: info.dadNationality,
                bold:true
              }
            ]
          }
        ]
      },
      {
        text: info.address,
      },
      {
        text: info.nameVillage,
      },
      {
        text: info.typeHome,
      },
      {
        text: info.numberHome,
      },
      {
        text: info.regisHome,
      },
      {
        text: info.regisHomeStatus,
      },
      {
        text: info.dateMoveIn,
      },
      {
        text: info.pidName,
      },
      {
        text: info.pidAddress,
      },
      {
        text: info.pidIssueDate,
      },
      {
        text: info.pidExpiryDate,
      },
      {
        text: info.pidMakeNo,
      },
    ],
    defaultStyle: pdfmakeStyle.thirdStyle(),
  }


  window.pdfMake.createPdf(docDefintion).open()
}

export { exportPersonality1 }
