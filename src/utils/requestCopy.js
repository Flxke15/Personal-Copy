import pdfmakeStyle from '@/plugins/pdfmake-style'

function exportPersonality(obj) {
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
            registerCenter : `ศูนยบริการประชาชน กรมการปกครอง กรุงเทพมหานคร`,
            date: `27 กันยายน พ.ศ. 2566`,
            employee: `นายทดสอบ ผู้ปฏิบัติงาน`,
            pidImage : obj.pidData.pidImage
    }
  
    const docDefintion = {
      pageMargins: [15, 20, 30, 30],
      
      content: [
        {
            table: {
                padding:[5,0,0,0],
                body:[
                    [
                        {
                            text: `แบบรับรองรายการบุคคลจากฐานข้อมูลการทะเบียนของสํานักทะเบียนกลาง`,
                            bold: true,
                            alignment: "center",
                            fontSize:18,
                            margin: [0,15,0,0],
                            border: [true, true, true, false],
                          },
                    ],
                    [
                        {
                            text: `ก. รายการทะเบียนบ้าน`,
                            bold: true,
                            fontSize:18,
                            margin: [5,15,0,0],
                            border: [true, false, true, false],
                          },
                    ],
                    [
                        {
                            columns: [
                              {
                                width:180,
                                text: [
                                  `ชื่อ${" ".repeat(5)}`,
                                  {
                                    text: info.name,
                                    bold:true
                                  }
                                ],   
                              },
                              {
                                width:230,
                                text: [
                                  `เลขบัตรประจำตัวประชาชน${" ".repeat(5)}`,
                                  {
                                    text: info.pid,
                                    bold:true
                                  }
                                ],                               
                              },
                              {
                                width:75,
                                text: [
                                  `เพศ${" ".repeat(5)}`,
                                  {
                                    text: info.gender,
                                    bold:true,
                                    margin:[0,0,50,0]
                                  }
                                ],
                              },
                            ],
                            margin: [5,0,0,0],
                            border: [true, false, true, false],
                          },                          
                    ],
                    [
                        {
                            columns:[
                              {
                                width:150,
                                text: [
                                  `เกิดเมื่อ${" ".repeat(5)}`,
                                  {
                                    text: info.birthDay,
                                    bold:true
                                  }
                                ],
                              },
                              {
                                width:230,
                                text: [
                                  `สภานภาพในบ้าน${" ".repeat(5)}`,
                                  {
                                    text: info.homeStatus,
                                    bold:true
                                  }
                                ],
                              },
                              {
                                text: [
                                  `สัญชาติ${" ".repeat(5)}`,
                                  {
                                    text: info.pidNationality,
                                    bold:true
                                  }
                                ],
                              }
                            ],
                            margin: [5,0,0,0],
                            border: [true, false, true, false],
                          },
                    ],
                    [
                        {
                            columns:[
                              {
                                width:150,
                                text: [
                                  `มารดาชื่อ${" ".repeat(5)}`,
                                  {
                                    text: info.momName,
                                    bold:true
                                  }
                                ],
                              },
                              {
                                width:230,
                                text: [
                                  `เลขบัตรประจำตัวประชาชน${" ".repeat(5)}`,
                                  {
                                    text: info.momPid,
                                    bold:true
                                  }
                                ],
                              },
                              {
                                width:'*',
                                text: [
                                  `สัญชาติ${" ".repeat(5)}`,
                                  {
                                    text: info.momNationality,
                                    bold:true
                                  }
                                ],
                              }
                            ],
                            margin: [5,0,0,0],
                            border: [true, false, true, false],
                          },
                    ],
                    [
                        {
                            columns:[
                              {
                                width:150,
                                text: [
                                  `บิดาชื่อ${" ".repeat(5)}`,
                                  {
                                    text: info.dadName,
                                    bold:true
                                  }
                                ],
                              },
                              {
                                width:230,
                                text: [
                                  `เลขบัตรประจำตัวประชาชน${" ".repeat(5)}`,
                                  {
                                    text: info.dadPid,
                                    bold:true
                                  }
                                ],
                              },
                              {
                                width:'*',
                                text: [
                                  `สัญชาติ${" ".repeat(5)}`,
                                  {
                                    text: info.dadNationality,
                                    bold:true
                                  }
                                ],
                              }
                            ],
                            margin: [5,0,0,0],
                            border: [true, false, true, false],
                          },
                    ],
                    [
                        {
                            text: [
                              `ที่อยู่${" ".repeat(5)}`,
                              {
                                text: info.address,
                                bold: true
                              }
                            ],
                            margin: [5,0,0,0],
                            border: [true, false, true, false],
                          },
                    ],
                    [
                        {
                            columns: [
                              {
                                text: [
                                  `ชื่อหมู่บ้าน${" ".repeat(5)}`,
                                  {
                                    text: info.nameVillage,
                                    bold:true
                                  }
                                ],
                              },
                              {
                                text: [
                                  `ประเภทบ้าน${" ".repeat(5)}`,
                                  {
                                    text: info.typeHome,
                                    bold:true
                                  }
                                ],
                              },
                            ],
                            border: [true, false, true, false],
                            margin:[5,20,0,0]
                          },
                    ],
                    [
                        {
                            columns: [
                              {
                                text: [
                                  `เลขรหัสประจำบ้าน${" ".repeat(5)}`,
                                  {
                                    text: info.numberHome,
                                    bold:true
                                  }
                                ],
                              },
                              {
                                text: [
                                  `สำนักทะเบียน${" ".repeat(5)}`,
                                  {
                                    text: info.regisHome,
                                    bold:true
                                  }
                                ],
                              },
                            ],
                            margin: [5,0,0,0],
                            border: [true, false, true, false],
                          },
                    ],
                    [
                        {
                            columns: [
                              {
                                text: [
                                  `สถานภาพทางทะเบียน${" ".repeat(5)}`,
                                  {
                                    text: info.regisHomeStatus,
                                    bold:true
                                  }
                                ],
                              },
                              {
                                text: [
                                  `วันที่ย้ายเข้า${" ".repeat(5)}`,
                                  {
                                    text: info.dateMoveIn,
                                    bold:true
                                  }
                                ],
                              },
                            ],
                            margin: [5,0,0,0],
                            border: [true, false, true, false],
                          },
                    ],
                    [
                        {
                            text: `ข. รายการบัตรประจำตัวประชาชน`,
                            bold: true,
                            fontSize:18,
                            margin: [5,0,0,0],
                            border: [true, false, true, false],
                        },
                    ],
                    //////////////////////////
                    [
                        {
                            columns: [
                                [
                                    {
                                        text: [
                                            `ชื่อในบัตร${" ".repeat(5)}`,
                                            {
                                              text: info.pidName,
                                              bold: true
                                            }
                                        ],
                                        margin: [5,0,0,0],
                                        border: [true, false, true, false],
                                      },
                                      {
                                        text: [
                                            `ที่อยู่ในบัตร${" ".repeat(5)}`,
                                            {
                                              text: info.pidAddress,
                                              bold: true,
                                            }
                                        ],
                                        margin: [5,0,0,0],
                                        border: [true, false, true, false],
                                      },
                                      {
                                        text: [
                                            `วันออกบัตร${" ".repeat(5)}`,
                                            {
                                              text: info.pidIssueDate,
                                              bold: true
                                            }
                                        ],
                                        border: [true, false, true, false],
                                        margin:[5,10,0,0]
                                      },
                                      {
                                        text: [
                                            `วันบัตรหมดอายุ${" ".repeat(5)}`,
                                            {
                                              text: info.pidExpiryDate,
                                              bold: true
                                            }
                                        ],
                                        margin: [5,0,0,0],
                                        border: [true, false, true, false],
                                      },
                                      {
                                        text: [
                                            `เลขรหัสการทำบัตร${" ".repeat(5)}`,
                                            {
                                              text: info.pidMakeNo,
                                              bold: true
                                            }
                                        ],
                                        margin: [5,0,0,0],
                                        border: [true, false, true, false],
                                      },
                                ],
                                [
                                    {
                                        image: info.pidImage,
			                            width: 180,
                                        height: 200,
                                        alignment: "center",
                                        margin: [0,0,0,5]
                                    }
                                ],                          
                            ],
                            border: [true, false, true, false],
                        }
                    ],
                    //////////////////////////
                    [
                        {
                            text: [
                              `หน่วยงานคัดกรองรายการ${" ".repeat(5)}`,
                              {
                                text: info.registerCenter,
                                bold:true
                              }
                            ],
                            lineHeight:1.1,
                            border: [true, true, true, false],
                            margin:[5,10,0,0],
                          },
                    ],
                    [
                        {
                            columns: [
                              {
                                text: [
                                  `คัดจากฐานข้อมูล เมื่อวันที่${" ".repeat(5)}`,
                                  {
                                    text: info.date,
                                    bold: true,
                                  }
                                ],
                                lineHeight:1.1,
                              },
                              {
                                text: `ตรวจสอบความถูกต้อง`,
                                alignment: 'right',
                                lineHeight:1.1,
                                margin:[0,0,40,0],
                              },
                            ],
                            margin: [5,0,0,0],
                            border: [true, false, true, false]
                          },
                    ],
                    [
                        {
                            text: `เพื่อการออกใบอนุญาตในภารกิจด้านความสงบเรียบร้อยของกรมการปกครอง`,
                            lineHeight:1.1,
                            margin: [5,0,0,0],
                            border: [true, false, true, false]
                        },
                    ],
                    [
                        {
                            columns: [
                              {
                                text: [
                                  `ผู้พิมพ์รายการ${" ".repeat(5)}`,
                                  {
                                    text: info.employee,
                                    bold: true,
                                  }
                                ],
                                lineHeight:1.1,
                              },
                              {
                                text: `ลงชื่อ${'.'.repeat(50)}`,
                                alignment: 'right',
                                lineHeight:1.1,
                                margin:[0,0,20,0]
                              }
                            ],
                            margin: [5,0,0,0],
                            border: [true, false, true, false]
                          },
                    ],
                    [
                        {
                            text: `()`,
                            alignment: 'right',
                            lineHeight:1.1,
                            border: [true, false, true, true],
                            margin:[5,0,80,0]
                        },
                    ],
                ],
                
            }
        }
      ],
      defaultStyle: pdfmakeStyle.thirdStyle(),
      
    }

    window.pdfMake.createPdf(docDefintion).open()
  }
  
  export { exportPersonality }