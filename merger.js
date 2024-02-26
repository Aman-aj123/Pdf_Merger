
import PDFMerger from 'pdf-merger-js';

export const mergePDFS = async (pdf1, pdf2) => {
     const merger = new PDFMerger();

     await merger.add(pdf1);
     await merger.add(pdf2);
     await merger.save('public/merged.pdf');
};
