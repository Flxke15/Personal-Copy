import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { font as thSarabun } from '@/assets/fonts/th_sarabun.js'
import { font as thSarabunBold } from '@/assets/fonts/th_sarabun_bold'
import { font as thSarabunIt9 } from '@/assets/fonts/th_sarabun_it9.js'
import { font as thSarabunIt9Bold } from '@/assets/fonts/th_sarabun_it9_bold'

pdfMake.vfs = pdfFonts.pdfMake.vfs
pdfMake.vfs['THSarabun.woff'] = thSarabun
pdfMake.vfs['THSarabunBold.woff'] = thSarabunBold
pdfMake.vfs['THSarabunIT9.woff'] = thSarabunIt9
pdfMake.vfs['THSarabunIT9Bold.woff'] = thSarabunIt9Bold

pdfMake.fonts = {
  THSarabun: {
    normal: 'THSarabun.woff',
    bold: 'THSarabunBold.woff',
  },
  THSarabunIT9: {
    normal: 'THSarabunIT9.woff',
    bold: 'THSarabunIT9Bold.woff',
  },
}

const primaryStyle = () => {
  return {
    font: 'THSarabun',
    fontSize: 16,
    lineHeight: 1.5,
    columnGap: 20,
  }
}

const secondaryStyle = () => {
  return {
    font: 'THSarabun',
    fontSize: 16,
    lineHeight: 1.4,
    columnGap: 20,
  }
}

const thirdStyle = () => {
  return {
    font: 'THSarabun',
    fontSize: 16,
    lineHeight: 1.8,
    columnGap: 20,
  }
}


const pdfPrintPreview = (content) => {
  const pdfDocGenerator = window.pdfMake.createPdf(content)
  pdfDocGenerator.getBlob(function (blob) {
    const pdfPreview = document.getElementById('pdfPreview')
    if (pdfPreview) {
      pdfPreview.remove()
    }
    const iframe = document.createElement('iframe')
    iframe.id = 'pdfPreview'
    iframe.style.display = 'none'
    iframe.src = URL.createObjectURL(blob)
    document.body.appendChild(iframe)
    iframe.contentWindow.focus()
    iframe.contentWindow.print()
  })
}

export default {
  primaryStyle,
  secondaryStyle,
  pdfPrintPreview,
  thirdStyle,
}
