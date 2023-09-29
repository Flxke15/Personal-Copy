import pdfmakeStyle from '@/plugins/pdfmake-style'

function exportPersonality1(obj) {
  console.log(obj)
  const info = {
        // pid : "1629900553571",
        // name : "ดนัยพงศ์",
        // gender : "ชาย",
        // "birthDay" : "15 สิงหาคม พ.ศ.2543",
        // "homeStatus" : "ผู้อาศัย",
        // "pidNationality": "ไทย",
        // "momName": "เดือนฉาย แสงอรุณ",
        // "momPid": "3620500655030",
        // "momNationality": "ไทย",
        // "dadName": "สุเทพ แสงอรุณ",
        // "dadPid": "1212121212121",
        // "dadNationality": "ไทย",
        // "address": "533/132 ถ.อโศก-ดินแดง แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400",
        // "nameVillage": "KnightBridge Space Rama 9",
        // "typeHome": "คอนโด",
        // "numberHome": "1234567890",
        // "regisHome": "ดินแดง",
        // "regisHomeStatus": "ดี",
        // "dateMoveIn": "23 ธันวาคม พ.ศ.2565",
        // "pidName": "ดนัยพงศ์ แสงอรุณ",
        // "pidAddress": "533/132 ถ.อโศก-ดินแดง แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400",
        // "pidIssueDate": "23 ธันวาคม พ.ศ.2565",
        // "pidExpiryDate": "14 สิงหาคม พ.ศ.2570",
        // "pidMakeNo": "12345"
        name : obj.pidData.name
  }

  const docDefintion = {
    pageMargins: [90, 50, 90, 0],
    content: [
      {
        text: info.name,
        margin: [0, 0, 0, 0]
      },
      {
        text: `แบบ ร.ร. ๑`,
        bold: true,
        alignment: 'right',
      },
            
      {
        table: {
          body: [
            [`เลขรับที่${'.'.repeat(30)}\nลงวันที่${'.'.repeat(32)}\nลงชื่อ${'.'.repeat(28)}ผู้รับ`]
          ]
        },
        margin: [0, 10, 0, 0],
        relativePosition: {x: 290, y: 0}
      },
      {
        text: `คำขอรับใบอนุญาตประกอบธุรกิจโรงแรม`,
        bold: true,
        alignment: 'center',
        fontSize: 24,
        margin: [0, 70, 0, 10]
      },
      {
        text: `เขียนที่${'.'.repeat(50)}`,
        alignment: 'right',
      },
            
      {
        text: `วันที่${'.'.repeat(15)}เดือน${'.'.repeat(25)}พ.ศ${'.'.repeat(15)}`,
        alignment: 'right',
      },
      {
        text: `๑.  ข้าพเจ้า${'.'.repeat(120)}`,
        margin: [50, 0, 0, 0]
      },
      {
        text: `(๑) เป็นบุคคลธรรมดา สัญชาติ${'.'.repeat(12)}อายุ${'.'.repeat(12)}ปี หมายเลขประจำตัวประชาชน`,
        margin: [65, 0, 0, 0]
      },
      {
        text: `เลขที่${' '.repeat(61)}อยู่บ้านเลขที่${'.'.repeat(20)}หมู่ที่${'.'.repeat(20)}`,
      },
      {
        table: {
          body: [
            [
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[0]
                : { text: '1', color: 'white' },
              { text: '-', border: [false, false, false, false] },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[1]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[2]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[3]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[4]
                : { text: '1', color: 'white' },
              { text: '-', border: [false, false, false, false] },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[5]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[6]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[7]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[8]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[9]
                : { text: '1', color: 'white' },
              { text: '-', border: [false, false, false, false] },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[10]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[11]
                : { text: '1', color: 'white' },
              { text: '-', border: [false, false, false, false] },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[12]
                : { text: '1', color: 'white' },
            ],
          ],
        },
        lineHeight: 1.1,
        layout: {
          paddingTop: function () {
            return -3
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 3
          },
          paddingRight: function () {
            return 3
          },
          hLineWidth: function () {
            return 0.6
          },
          vLineWidth: function () {
            return 0.6
          },
        },
        absolutePosition: { x: 118, y: 268 },
      },
      {
        text: `ตรอก/ซอย${'.'.repeat(20)}ถนน${'.'.repeat(24)}ตำบล/แขวง${'.'.repeat(24)}อำเภอ/เขต${'.'.repeat(27)}`,
      },
      {
        text: `จังหวัด${'.'.repeat(30)}รหัสไปรษณีย์${'.'.repeat(24)}โทรศัพท์${'.'.repeat(23)}โทรสาร${'.'.repeat(22)}`,
      },
      {
        text: `(๒) เป็นนิติบุคคลประเภท${'.'.repeat(50)}จดทะเบียนเป็นนิติบุคคล`,
        margin: [65, 0, 0, 0]
      },
            
      {
        text: `เลขที่${'.'.repeat(17)}เมื่อวันที่${'.'.repeat(20)}ณ${'.'.repeat(66)}สำนักงานแห่งใหญ่`,
      },
      {
        text: `ตั้งอยู่ที่${'.'.repeat(17)}เลขที่${'.'.repeat(17)}หมู่ที่${'.'.repeat(17)}ตรอก/ซอย${'.'.repeat(27)}ถนน${'.'.repeat(27)}`
      },
      {
        text: `ตำบล/แขวง${'.'.repeat(23)}อำเภอ/เขต${'.'.repeat(23)}จังหวัด${'.'.repeat(23)}รหัสไปรษณีย์${'.'.repeat(19)}`
      },
      {
        text: `โทรศัพท์${'.'.repeat(32)}โทรสาร${'.'.repeat(32)}ไปรษณีย์อิเล็กทรอนิกส์${'.'.repeat(31)}`
      },
      {
        text: `โดย (๑)${'.'.repeat(146)}`
      },
      {
        text: `เลขประจำตัวประชาชน`
      },
      {
        table: {
          body: [
            [
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[0]
                : { text: '1', color: 'white' },
              { text: '-', border: [false, false, false, false] },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[1]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[2]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[3]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[4]
                : { text: '1', color: 'white' },
              { text: '-', border: [false, false, false, false] },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[5]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[6]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[7]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[8]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[9]
                : { text: '1', color: 'white' },
              { text: '-', border: [false, false, false, false] },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[10]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[11]
                : { text: '1', color: 'white' },
              { text: '-', border: [false, false, false, false] },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[12]
                : { text: '1', color: 'white' },
            ],
          ],
        },
        lineHeight: 1.1,
        layout: {
          paddingTop: function () {
            return -3
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 3
          },
          paddingRight: function () {
            return 3
          },
          hLineWidth: function () {
            return 0.6
          },
          vLineWidth: function () {
            return 0.6
          },
        },
        absolutePosition: { x: 195, y: 441 },
      },
      {
        text: `โดย (๒)${'.'.repeat(146)}`
      },
      {
        text: `เลขประจำตัวประชาชน`
      },
      {
        table: {
          body: [
            [
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[0]
                : { text: '1', color: 'white' },
              { text: '-', border: [false, false, false, false] },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[1]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[2]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[3]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[4]
                : { text: '1', color: 'white' },
              { text: '-', border: [false, false, false, false] },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[5]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[6]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[7]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[8]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[9]
                : { text: '1', color: 'white' },
              { text: '-', border: [false, false, false, false] },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[10]
                : { text: '1', color: 'white' },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[11]
                : { text: '1', color: 'white' },
              { text: '-', border: [false, false, false, false] },
              info.reqType == 2 && info.direc[0].pid != ''
                ? estpid[12]
                : { text: '1', color: 'white' },
            ],
          ],
        },
        lineHeight: 1.1,
        layout: {
          paddingTop: function () {
            return -3
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 3
          },
          paddingRight: function () {
            return 3
          },
          hLineWidth: function () {
            return 0.6
          },
          vLineWidth: function () {
            return 0.6
          },
        },
        absolutePosition: { x: 195, y: 482 },
      },
      {
        text: `เป็นผู้มีอำนาจลงชื่อแทนนิติบุคคลผู้ขอรับใบอนุญาต`,
      },
      {
        text: `๒.  ข้าพเจ้าขอยื่นคำขอต่อนายทะเบียนตามพระราชบัญญัติโรงแรม พ.ศ. ๒๕๔๗ เพื่อขอ`,
        margin: [50, 0, 0, 0]
      },
      {
        text: `อนุญาตประกอบธุรกิจโรงแรม ชื่อว่า${'.'.repeat(101)}`
      },
      {
        text: `ภาษาต่างประเทศ (ถ้ามี)${'.'.repeat(119)}`
      },
      {
        text: `เป็นโรงแรมประเภท${'.'.repeat(16)}จำนวนห้องพัก${'.'.repeat(16)}ห้อง อัตราค่าเช่าห้องพักต่ำสุด${'.'.repeat(16)}บาท`
      },
      {
        text: `สูงสุด${'.'.repeat(19)}บาท สถานที่ตั้ง${'.'.repeat(105)}`
      },
      {
        text: `เลขที่${'.'.repeat(15)}หมู่ที่${'.'.repeat(15)}ตรอก/ซอย${'.'.repeat(15)}ถนน${'.'.repeat(25)}ตำบล/แขวง${'.'.repeat(27)}`
      },
      {
        text: `อำเภอ/เขต${'.'.repeat(40)}จังหวัด${'.'.repeat(40)}รหัสไปรษณีย์${'.'.repeat(27)}`
      },
      {
        text: `โทรศัพท์${'.'.repeat(35)}โทรสาร${'.'.repeat(35)}ไปรษณีย์อิเล็กทรอนิกส์${'.'.repeat(24)}`,
      },
    ],
    defaultStyle: pdfmakeStyle.thirdStyle(),
  }

  docDefintion.content.push(
    {
      text: `๓.  รายละเอียดเกี่ยวกับอาคารและสถานที่ตั้ง`,
      pageBreak: 'before',
      margin: [50, 0, 0, 0]
    },
    {
      text: `(๑) สถานที่ตั้ง${' '.repeat(5)}ในเขตบังคับใช้กฎหมายว่าด้วยการควบคุมอาคาร${' '.repeat(5)}นอกเขต`,
      margin: [65, 0, 0, 0]
    },
    {
      text: `บังคับใช้กฎหมายว่าด้วยการควบคุมอาคาร`
    },
    {
      text: `(๒) ประเภทเอกสารสิทธิ์${' '.repeat(5)}โฉนดที่ดิน${' '.repeat(5)}น.ส. ๓ ก./น.ส. ๓${' '.repeat(5)}ส.ค ๑${' '.repeat(5)}อื่น ๆ`,
      margin: [65, 0, 0, 0]
    },
    {
      text: `(ระบุ)${'.'.repeat(20)}จำนวนเนื้อที่${'.'.repeat(20)}ไร่${'.'.repeat(20)}งาน${'.'.repeat(20)}ตารางวา`
    },
    {
      text: `(๓) ลักษณะอาคารตามกฎหมายควบคุมอาคาร${' '.repeat(5)}อาคารสูง${' '.repeat(5)}อาคารขนาดใหญ่`,
      margin: [65, 0, 0, 0]
    },
    {
      text: `${' '.repeat(5)}อาคารขนาดใหญ่พิเศษ${' '.repeat(5)}อาคารอื่นๆ (ระบุ)${'.'.repeat(20)}มีพื้นที่ใช้สอยรวม${'.'.repeat(20)}ตารางเมตร`
    },
    {
      text: `๔.  พร้อมคำขอนี้ ข้าพเจ้าได้แนบเอกสาร หลักฐานต่าง ๆ มาเพื่อประกอบการพิจารณา `,
      margin: [50, 0, 0, 0]
    },
    {
      text: `ดังนี้`
    },
    {
      text: `(๑) สำเนาบัตรประจำตัวประชาชน และสำเนาทะเบียนบ้าน พร้อมลงลายมือชื่อ`,
      margin: [65, 0, 0, 0]
    },
    {
      text: `รับรองสำเนา จำนวน${'.'.repeat(20)}ชุด`
    },
    {
      text: `(๒) แบบแปลนแผนผังพร้อมรายการประกอบแบบแปลน จำนวน${'.'.repeat(23)}ชุด`,
      margin: [65, 0, 0, 0]
    },
    {
      text: `(๓) แผนที่สังเขปแสดงบริเวณที่ตั้งของโรงแรมและสถานที่ใกล้เคียง จำนวน${'.'.repeat(8)}ชุด`,
      margin: [65, 0, 0, 0]
    },
    {
      text: `(๔) หลักฐานแสดงว่าอาคารที่ใช้ในการประกอบธุรกิจโรงแรมได้รับอนุญาตให้ใช้อาคาร`,
      margin: [65, 0, 0, 0]
    },
    {
      text: `ตามกฎหมายว่าด้วยการควบคุมอาคารหรือใบรับรองการตรวจสอบสภาพอาคารโดยผู้ซึ่งได้รับอนุญาต`
    },
    {
      text: `ประกอบวิชาชีพวิศวกรรมควบคุมตามกฎหมายว่าด้วยวิศวกร จำนวน${'.'.repeat(20)}ชุด`
    },
    {
      text: `(๕) หลักฐานแสดงความเป็นเจ้าของอาคารหรือสถานที่ที่ใช้ประกอบธุรกิจโรงแรม`,
      margin: [65, 0, 0, 0]
    },
    {
      text: `หรือหนังสือแสดงความยินยอมให้ใช้อาคารหรือสถานที่ที่ขออนุญาตประกอบกิจการพาณิชย์`
    },
    {
      text: `ในกรณีที่อาคารหรือสถานที่นั้นเป็นของผู้อื่น`
    },
    {
      text: `(๖) หนังสือรับรองการจัดทำรายงานการวิเคราะห์ผลกระทบสิ่งแวดล้อมของกระทรวง`,
      margin: [65, 0, 0, 0]
    },
    {
      text: `ทรัพยากรธรรมชาติและสิ่งแวดล้อม (กรณีต้องจัดทำรายงานการวิเคราะห์ผลกระทบสิ่งแวดล้อม`
    },
    {
      text: `ตามกฎหมายว่าด้วยการส่งเสริมและรักษาคุณภาพสิ่งแวดล้อมแห่งชาติ)`
    },
    {
      text: `(๗) สำเนาหนังสือสำคัญแสดงกรรมสิทธิ์หรือสิทธิครอบครองในที่ดินจะใช้เป็น`,
      margin: [65, 0, 0, 0]
    },
    {
      text: `ที่ตั้งโรงแรม`
    },
    {
      text: `(๘) สำเนาหนังสือรับรองการจดทะเบียนนิติบุคคล วัตถุประสงค์ และผู้มีอำนาจลงชื่อ`,
      margin: [65, 0, 0, 0]
    },
    {
      text: `แทนนิติบุคคล ผู้ขออนุญาตประกอบธุรกิจโรงแรม ไม่เกินสามเดือน จำนวน${'.'.repeat(30)}ฉบับ`
    },
    {
      text: `(กรณีนิติบุคคลเป็นผู้ขออนุญาตประกอบธุรกิจโรงแรม)`
    },
    {
      text: `(๙) หนังสือแต่งตั้งผู้แทนนิติบุคคลซึ่งต้องเป็นกรรมการหรือบุคคลผู้มีอำนาจลงนาม`,
      margin: [65, 0, 0, 0]
    },
    {
      text: `ผูกพันนิติบุคคล`
    },
    {
      text: `(๑๐) อื่นๆ (ระบุ) จำนวน${'.'.repeat(90)}`,
      margin: [65, 0, 0, 0]
    },
  )

  docDefintion.content.push(
    {
      text: `๕. ข้าพเจ้าขอรับรองว่า เป็นผู้มีคุณสมบัติและไม่มีลักษณะต้องห้ามตามมาตรา ๑๖`,
      pageBreak: 'before',
      margin: [50, 0, 0, 0]
    },
    {
      text: `แห่งพระราชบัญญัติโรงแรม พ.ศ.๒๕๔๗`
    },
    {
      text: `(ลงชื่อ)${'.'.repeat(50)}ผู้ยื่นคำขอ`,
      alignment: 'center',
      margin: [0, 50, 0, 0]
    },
    {
      text: `(${'.'.repeat(50)})`,
      margin: [142, 0, 0, 0]
    },
    {
      text: `ผลการพิจารณาของนายทะเบียน`,
      bold: true,
    },
    {
      text: `${' '.repeat(7)}อนุญาต`,
      margin: [70, 0, 0, 0]
    },
    {
      text: `${' '.repeat(7)}ไม่อนุญาต เหตุผล${'.'.repeat(100)}`,
      margin: [70, 0, 0, 0]
    },
    {
      text: `(ลงชื่อ)${'.'.repeat(50)}นายทะเบียน`,
      alignment: 'center',
      margin: [0, 50, 0, 0]
    },
    {
      text: `(${'.'.repeat(50)})`,
      margin: [142, 0, 0, 0]
    },
    {
      text: `วันที่${'.'.repeat(44)}`,
      margin: [142, 0, 0, 0]
    },
    {
      text: `หมายเหตุ`,
      bold: true
    },
    {
      text: `๑.  ให้ทำเครื่องหมาย${' '.repeat(7)}หน้า${' '.repeat(7)}ที่ต้องการ`,
      relativePosition: {x: 65, y: -20}
    },
        
    {
      text: `๒.  กรณีมอบอำนาจให้ผู้อื่นดำเนินการแทนต้องมีหนังสือมอบอำนาจติดอากรแสตมป์`,
      margin: [65, 0, 0, 0],
    },
    {
      text: `พร้อมสำเนาทะเบียนบ้านและสำเนาบัตรประจำตัวประชาชนผู้มอบอำนาจ`,
      margin: [82, 0, 0, 0],
    },
    {
      text: `และผู้รับมอบอำนาจ`,
      margin: [82, 0, 0, 0],
    },
  )

  window.pdfMake.createPdf(docDefintion).open()
}

export { exportPersonality1 }
