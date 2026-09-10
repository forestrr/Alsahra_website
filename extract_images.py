import fitz
import os

pdf_path = r"C:\Users\DELL\Al Sahra Websites\Company Profile-Al Sahra Tents 01.pdf"
out_dir = r"C:\Users\DELL\Al Sahra Websites\al-sahra-tents-landing\src\assets\images"
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
count = 0
for i in range(len(doc)):
    for img in doc.get_page_images(i):
        xref = img[0]
        pix = fitz.Pixmap(doc, xref)
        if pix.n - pix.alpha > 3:
            pix = fitz.Pixmap(fitz.csRGB, pix)
        pix.save(f"{out_dir}/img_page{i}_{xref}.png")
        pix = None
        count += 1

print(f"Extracted {count} images")
