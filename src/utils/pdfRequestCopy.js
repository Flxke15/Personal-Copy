import pdfmakeStyle from '@/plugins/pdfmake-style'

function exportRequestCopy(obj) {
	console.log(obj)
	const info = {
		pid: obj.pidData.pid,
		name: obj.pidData.name,
		gender: obj.pidData.gender,
		birthDay: obj.pidData.birthDay,
		homeStatus: obj.pidData.homeStatus,
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
		registerCenter: `ศูนยบริการประชาชน กรมการปกครอง กรุงเทพมหานคร`,
		date: `27 กันยายน พ.ศ. 2566`,
		employee: `นายทดสอบ ผู้ปฏิบัติงาน`,
		pidImage: obj.pidData.pidImage
	}

	//edit to table widths

	const docDefintion = {
		pageMargins: [15, 20, 30, 30],

		content: [
			{
				table: {
					padding: [5, 0, 0, 0],
					widths: ['*'],
					body: [
						[
							{
								text: `แบบรับรองรายการบุคคลจากฐานข้อมูลการทะเบียนของสํานักทะเบียนกลาง`,
								bold: true,
								alignment: 'center',
								fontSize: 18,
								margin: [0, 15, 0, 0],
								border: [true, true, true, false],
							},
						],
						[
							{
								text: `ก. รายการทะเบียนบ้าน`,
								bold: true,
								fontSize: 18,
								margin: [5, 0, 0, 0],
								border: [true, false, true, false],
							},
						],
						[
							{
								columns: [
									{
										width: 220,
										text: [
											`เลขบัตรประจำตัวประชาชน${' '.repeat(2)}`,
											{
												text: info.pid,
												bold: true
											}
										],
									},
								],
								margin: [5, 0, 0, 0],
								border: [true, false, true, false],
							},
						],
						[
							{
								columns: [
									{
										width: '*',
										text: [
											`ชื่อ${' '.repeat(2)}`,
											{
												text: info.name,
												bold: true
											}
										],
									},
									{
										width: '*',
										text: [
											`เพศ${' '.repeat(2)}`,
											{
												text: info.gender,
												bold: true,
												margin: [0, 0, 0, 0]
											}
										],
									},
								],
								margin: [5, 0, 0, 0],
								border: [true, false, true, false],
							}
						],
						[
							{
								columns: [
									{
										width: 150,
										text: [
											`เกิดเมื่อ${' '.repeat(4)}`,
											{
												text: info.birthDay,
												bold: true
											}
										],
									},
									{
										width: 230,
										text: [
											`สภานภาพในบ้าน${' '.repeat(14)}`,
											{
												text: info.homeStatus,
												bold: true
											}
										],
									},
									{
										width: '*',
										text: [
											`สัญชาติ${' '.repeat(2)}`,
											{
												text: info.pidNationality,
												bold: true
											}
										],
									}
								],
								margin: [5, 0, 0, 0],
								border: [true, false, true, false],
							},
						],
						[
							{
								columns: [
									{
										width: 150,
										text: [
											`มารดาชื่อ${' '.repeat(2)}`,
											{
												text: info.momName,
												bold: true
											}
										],
									},
									{
										width: 230,
										text: [
											`เลขบัตรประจำตัวประชาชน${' '.repeat(2)}`,
											{
												text: info.momPid,
												bold: true
											}
										],
									},
									{
										width: '*',
										text: [
											`สัญชาติ${' '.repeat(2)}`,
											{
												text: info.momNationality,
												bold: true
											}
										],
									}
								],
								margin: [5, 0, 0, 0],
								border: [true, false, true, false],
							},
						],
						[
							{
								columns: [
									{
										width: 150,
										text: [
											`บิดาชื่อ${' '.repeat(5)}`,
											{
												text: info.dadName,
												bold: true
											}
										],
									},
									{
										width: 230,
										text: [
											`เลขบัตรประจำตัวประชาชน${' '.repeat(2)}`,
											{
												text: info.dadPid,
												bold: true
											}
										],
									},
									{
										width: '*',
										text: [
											`สัญชาติ${' '.repeat(2)}`,
											{
												text: info.dadNationality,
												bold: true
											}
										],
									}
								],
								margin: [5, 0, 0, 0],
								border: [true, false, true, false],
							},
						],
						[
							{
								text: [
									`ที่อยู่${' '.repeat(2)}`,
									{
										text: info.address,
										bold: true,
									}
								],
								margin: [5, 0, 0, 0],
								border: [true, false, true, false],
							},
						],
						[
							{
								columns: [
									{
										width: '*',
										text: [
											`ชื่อหมู่บ้าน${' '.repeat(2)}`,
											{
												text: info.nameVillage,
												bold: true
											}
										],
									},
									{
										width: '*',
										text: [
											`ประเภทบ้าน${' '.repeat(4)}`,
											{
												text: info.typeHome,
												bold: true
											}
										],
									},
								],
								border: [true, false, true, false],
								margin: [5, 0, 0, 0]
							},
						],
						[
							{
								columns: [
									{
										width: '*',
										text: [
											`เลขรหัสประจำบ้าน${' '.repeat(2)}`,
											{
												text: info.numberHome,
												bold: true
											}
										],
									},
									{
										width: '*',
										text: [
											`สำนักทะเบียน${' '.repeat(2)}`,
											{
												text: info.regisHome,
												bold: true
											}
										],
									},
								],
								margin: [5, 0, 0, 0],
								border: [true, false, true, false],
							},
						],
						[
							{
								columns: [
									{
										width: '*',
										text: [
											`สถานภาพทางทะเบียน${' '.repeat(2)}`,
											{
												text: info.regisHomeStatus,
												bold: true
											}
										],
									},
									{
										width: '*',
										text: [
											`วันที่ย้ายเข้า${' '.repeat(5)}`,
											{
												text: info.dateMoveIn,
												bold: true
											}
										],
									},
								],
								margin: [5, 0, 0, 0],
								border: [true, false, true, false],
							},
						],
						[
							{
								text: `ข. รายการบัตรประจำตัวประชาชน`,
								bold: true,
								fontSize: 18,
								margin: [5, 10, 0, 0],
								border: [true, false, true, false],
							},
						],
						[
							{
								columns: [
									[
										{
											columns: [
												{
													width: 75,
													text: `ชื่อในบัตร${' '.repeat(5)}`
												},
												{
													width: '*',
													text: info.pidName,
													bold: true
												}
											],
											margin: [5, 0, 0, 0]
										},
										{
											columns: [
												{
													width: 75,
													text: `ที่อยู่ในบัตร${' '.repeat(5)}`
												},
												{
													width: 225,
													text: info.pidAddress,
													bold: true
												}
											],
											margin: [5, 0, 0, 0]
										},
										{
											columns: [
												{
													width: 75,
													text: `วันออกบัตร${' '.repeat(5)}`
												},
												{
													width: '*',
													text: info.pidIssueDate,
													bold: true
												}
											],
											margin: [5, 0, 0, 0]
										},
										{
											columns: [
												{
													width: 75,
													text: `วันบัตรหมดอายุ${' '.repeat(5)}`
												},
												{
													width: '*',
													text: info.pidExpiryDate,
													bold: true
												}
											],
											margin: [5, 0, 0, 0]
										},
										{
											columns: [
												{
													width: 75,
													text: `เลขรหัสการทำบัตร${' '.repeat(5)}`,
												},
												{
													width: '*',
													text: info.pidMakeNo,
													bold: true
												},
											],
											margin: [5, 0, 0, 0]
										},
									],
									{
										width: 'auto',
										image: info.pidImage,
										fit: [200, 170],
										margin: [0, 0, 50, 5]
									}
								],
								lineHeight: 1.5,
								border: [true, false, true, false],
							}
						],
						[
							{
								text: [
									`หน่วยงานคัดกรองรายการ${' '.repeat(2)}`,
									{
										text: info.registerCenter,
										bold: true
									}
								],
								lineHeight: 1.1,
								border: [true, true, true, false],
								margin: [5, 10, 0, 0],
							},
						],
						[
							{
								columns: [
									{
										width: 'auto',
										text: [
											`คัดจากฐานข้อมูล เมื่อวันที่${' '.repeat(2)}`,
											{
												text: info.date,
												bold: true,
											}
										],
										lineHeight: 1.1,
									},
									{
										width: 'auto',
										text: `ตรวจสอบความถูกต้อง`,
										lineHeight: 1.1,
										margin: [150, 0, 0, 0],
									},
								],
								margin: [5, 0, 0, 0],
								border: [true, false, true, false]
							},
						],
						[
							{
								text: `เพื่อการออกใบอนุญาตในภารกิจด้านความสงบเรียบร้อยของกรมการปกครอง`,
								lineHeight: 1.1,
								margin: [5, 0, 0, 0],
								border: [true, false, true, false]
							},
						],
						[
							{
								columns: [
									{
										width: 'auto',
										text: [
											`ผู้พิมพ์รายการ${' '.repeat(2)}`,
											{
												text: info.employee,
												bold: true,
											}
										],
										lineHeight: 1.1,
									},
									{
										width: 'auto',
										text: `ลงชื่อ${'.'.repeat(50)}`,
										lineHeight: 1.1,
										margin: [165, 0, 0, 0]
									}
								],
								margin: [5, 0, 0, 0],
								border: [true, false, true, false]
							},
						],
						[
							{
								text: `()`,
								alignment: 'center',
								lineHeight: 1.1,
								margin: [350, 0, 0, 0],
								border: [true, false, true, true],
							}
						],
					]
				}
			}
		],
		defaultStyle: pdfmakeStyle.primaryStyle(),

	}
	window.pdfMake.createPdf(docDefintion).open()
}

export { exportRequestCopy }
