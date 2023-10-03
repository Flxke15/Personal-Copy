// import pdfmakeStyle from '@/plugins/pdfmake-style'

// function exportPersonality1(obj) {
//   console.log(obj)
//   const info = {
//     pid: obj.pidData.pid,
//     name: obj.pidData.name,
//     gender: obj.pidData.gender,
//     birthDay: obj.pidData.birthDay,
//     homeStatus: obj.pidData.homeStatus,
//     pidNationality: obj.pidData.pidNationality,
//     momName: obj.pidData.momName,
//     momPid: obj.pidData.momPid,
//     momNationality: obj.pidData.momNationality,
//     dadName: obj.pidData.dadName,
//     dadPid: obj.pidData.dadPid,
//     dadNationality: obj.pidData.dadNationality,
//     address: obj.pidData.address,
//     nameVillage: obj.pidData.nameVillage,
//     typeHome: obj.pidData.typeHome,
//     numberHome: obj.pidData.numberHome,
//     regisHome: obj.pidData.regisHome,
//     regisHomeStatus: obj.pidData.regisHomeStatus,
//     dateMoveIn: obj.pidData.dateMoveIn,
//     pidName: obj.pidData.pidName,
//     pidAddress: obj.pidData.pidAddress,
//     pidIssueDate: obj.pidData.pidIssueDate,
//     pidExpiryDate: obj.pidData.pidExpiryDate,
//     pidMakeNo: obj.pidData.pidMakeNo,
//     registerCenter: `ศูนยบริการประชาชน กรมการปกครอง กรุงเทพมหานคร`,
//     date: `27 กันยายน พ.ศ. 2566`,
//     employee: `นายทดสอบ ผู้ปฏิบัติงาน`,

//   }

//   const docDefintion = {
//     pageMargins: [30, 50, 40, 40],
//     background: function (currentPage, pageSize) {
//       return [
//         {
//           canvas: [
//             { type: 'line', x1: 20, y1: 25, x2: 550, y2: 25, lineWidth: 1 }, //Up line
//             { type: 'line', x1: 20, y1: 25, x2: 20, y2: 650, lineWidth: 1 }, //Left line
//             { type: 'line', x1: 20, y1: 650, x2: 550, y2: 650, lineWidth: 1 }, //Bottom line
//             { type: 'line', x1: 550, y1: 25, x2: 550, y2: 650, lineWidth: 1 }, //Rigth line

//             { type: 'line', x1: 20, y1: 650, x2: 20, y2: 800, lineWidth: 1 }, //Left Bottom line
//             { type: 'line', x1: 20, y1: 800, x2: 550, y2: 800, lineWidth: 1 }, //Bottom2 line
//             { type: 'line', x1: 550, y1: 650, x2: 550, y2: 800, lineWidth: 1 } //Right Bottom
//           ]

//         }
//       ]
//     },
//     content: [
//       {
//         text: `แบบรับรองรายการบุคคลจากฐานข้อมูลการทะเบียนของสํานักทะเบียนกลาง`,
//         bold: true,
//         alignment: 'center',
//         fontSize: 18,
//       },
//       {
//         text: `ก. รายการทะเบียนบ้าน`,
//         bold: true,
//         fontSize: 18,
//         margin: [0, 30, 0, 0]
//       },
//       {
//         columns: [
//           {
//             width: 180,
//             text: [
//               `ชื่อ${' '.repeat(5)}`,
//               {
//                 text: info.name,
//                 bold: true
//               }
//             ]
//           },
//           {
//             width: 230,
//             text: [
//               `เลขบัตรประจำตัวประชาชน${' '.repeat(5)}`,
//               {
//                 text: info.pid,
//                 bold: true
//               }
//             ]
//           },
//           {
//             width: '*',
//             text: [
//               `เพศ${' '.repeat(5)}`,
//               {
//                 text: info.gender,
//                 bold: true,
//                 margin: [0, 0, 50, 0]
//               }
//             ]
//           },
//         ]
//       },
//       {
//         columns: [
//           {
//             width: 150,
//             text: [
//               `เกิดเมื่อ${' '.repeat(5)}`,
//               {
//                 text: info.birthDay,
//                 bold: true
//               }
//             ]
//           },
//           {
//             text: [
//               `สภานภาพในบ้าน${' '.repeat(5)}`,
//               {
//                 text: info.homeStatus,
//                 bold: true
//               }
//             ]
//           },
//           {
//             text: [
//               `สัญชาติ${' '.repeat(5)}`,
//               {
//                 text: info.pidNationality,
//                 bold: true
//               }
//             ]
//           }
//         ]
//       },
//       {
//         columns: [
//           {
//             width: 150,
//             text: [
//               `มารดาชื่อ${' '.repeat(5)}`,
//               {
//                 text: info.momName,
//                 bold: true
//               }
//             ]
//           },
//           {
//             width: 230,
//             text: [
//               `เลขบัตรประจำตัวประชาชน${' '.repeat(5)}`,
//               {
//                 text: info.momPid,
//                 bold: true
//               }
//             ]
//           },
//           {
//             width: '*',
//             text: [
//               `สัญชาติ${' '.repeat(5)}`,
//               {
//                 text: info.momNationality,
//                 bold: true
//               }
//             ]
//           }
//         ]
//       },
//       {
//         columns: [
//           {
//             width: 150,
//             text: [
//               `บิดาชื่อ${' '.repeat(5)}`,
//               {
//                 text: info.dadName,
//                 bold: true
//               }
//             ]
//           },
//           {
//             width: 230,
//             text: [
//               `เลขบัตรประจำตัวประชาชน${' '.repeat(5)}`,
//               {
//                 text: info.dadPid,
//                 bold: true
//               }
//             ]
//           },
//           {
//             width: '*',
//             text: [
//               `สัญชาติ${' '.repeat(5)}`,
//               {
//                 text: info.dadNationality,
//                 bold: true
//               }
//             ]
//           }
//         ]
//       },
//       {
//         text: [
//           `ที่อยู่${' '.repeat(5)}`,
//           {
//             text: info.address,
//             bold: true
//           }
//         ]
//       },
//       {
//         columns: [
//           {
//             text: [
//               `ชื่อหมู่บ้าน${' '.repeat(5)}`,
//               {
//                 text: info.nameVillage,
//                 bold: true
//               }
//             ],
//           },
//           {
//             text: [
//               `ประเภทบ้าน${' '.repeat(5)}`,
//               {
//                 text: info.typeHome,
//                 bold: true
//               }
//             ],
//           },
//         ],
//         margin: [0, 20, 0, 0]
//       },
//       {
//         columns: [
//           {
//             text: [
//               `เลขรหัสประจำบ้าน${' '.repeat(5)}`,
//               {
//                 text: info.numberHome,
//                 bold: true
//               }
//             ],
//           },
//           {
//             text: [
//               `สำนักทะเบียน${' '.repeat(5)}`,
//               {
//                 text: info.regisHome,
//                 bold: true
//               }
//             ],
//           },
//         ]
//       },
//       {
//         columns: [
//           {
//             text: [
//               `สถานภาพทางทะเบียน${' '.repeat(5)}`,
//               {
//                 text: info.regisHomeStatus,
//                 bold: true
//               }
//             ],
//           },
//           {
//             text: [
//               `วันที่ย้ายเข้า${' '.repeat(5)}`,
//               {
//                 text: info.dateMoveIn,
//                 bold: true
//               }
//             ],
//           },
//         ]
//       },
//       {
//         text: `ข. รายการบัตรประจำตัวประชาชน`,
//         bold: true,
//         fontSize: 18,
//       },
//       {
//         text: [
//           `ชื่อในบัตร${' '.repeat(5)}`,
//           {
//             text: info.pidName,
//             bold: true
//           }
//         ]
//       },
//       {
//         text: [
//           `ที่อยู่ในบัตร${' '.repeat(5)}`,
//           {
//             text: info.pidAddress,
//             bold: true
//           }
//         ]
//       },
//       {
//         text: [
//           `วันออกบัตร${' '.repeat(5)}`,
//           {
//             text: info.pidIssueDate,
//             bold: true
//           }
//         ],
//         margin: [0, 20, 0, 0]
//       },
//       {
//         text: [
//           `วันบัตรหมดอายุ${' '.repeat(5)}`,
//           {
//             text: info.pidExpiryDate,
//             bold: true
//           }
//         ]
//       },
//       {
//         text: [
//           `เลขรหัสการทำบัตร${' '.repeat(5)}`,
//           {
//             text: info.pidMakeNo,
//             bold: true
//           }
//         ]
//       },
//       {
//         text: [
//           `หน่วยงานคัดกรองรายการ${' '.repeat(5)}`,
//           {
//             text: info.registerCenter,
//             bold: true
//           }
//         ],
//         lineHeight: 1.4,
//         margin: [0, 30, 0, 0],
//       },
//       {
//         columns: [
//           {
//             text: [
//               `คัดจากฐานข้อมูล เมื่อวันที่${' '.repeat(5)}`,
//               {
//                 text: info.date,
//                 bold: true,
//               }
//             ],
//             lineHeight: 1.4,
//           },
//           {
//             text: `ตรวจสอบความถูกต้อง`,
//             alignment: 'right',
//             lineHeight: 1.4,
//             margin: [0, 0, 40, 0],
//           },
//         ],
        
//       },
//       {
//         text: `เพื่อการออกใบอนุญาตในภารกิจด้านความสงบเรียบร้อยของกรมการปกครอง`,
//         lineHeight: 1.4,
//       },
//       {
//         columns: [
//           {
//             text: [
//               `ผู้พิมพ์รายการ${' '.repeat(5)}`,
//               {
//                 text: info.employee,
//                 bold: true,
//               }
//             ],
//             lineHeight: 1.4,
//           },
//           {
//             text: `ลงชื่อ${'.'.repeat(50)}`,
//             alignment: 'right',
//             lineHeight: 1.4,
//             margin: [0, 0, 20, 0]
//           }
//         ]
//       },
//       {
//         text: `()`,
//         alignment: 'right',
//         lineHeight: 1.4,
//         margin: [0, 0, 80, 0]
//       },
//       // {
//       //   image: 'image1'
//       // },
//       // {
//       //   image: '@/assets/images/user-img.jpg'
//       // },
      
//     ],
//     defaultStyle: pdfmakeStyle.thirdStyle(),

//     images: {
//       snow: 'https://picsum.photos/seed/picsum/200/300',
//     }
//   }

  
    
  


//   window.pdfMake.createPdf(docDefintion).open()
// }

// export { exportPersonality1 }
