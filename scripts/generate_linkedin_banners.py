import os
from PIL import Image, ImageDraw, ImageFont

WIDTH = 1584
HEIGHT = 396
BG_IMAGE_PATH = "/home/claude/.gemini/antigravity-cli/brain/9a037aab-67f8-40b3-94a1-5b7db2354c08/linkedin_banner_bg_1789541670139.jpg"

sans_bold = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
sans_reg = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
mono_bold = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"

def get_base_bg():
    if os.path.exists(BG_IMAGE_PATH):
        bg = Image.open(BG_IMAGE_PATH).convert("RGBA")
        target_ratio = WIDTH / HEIGHT
        src_ratio = bg.width / bg.height
        if src_ratio > target_ratio:
            new_width = int(bg.height * target_ratio)
            left = (bg.width - new_width) // 2
            bg = bg.crop((left, 0, left + new_width, bg.height))
        else:
            new_height = int(bg.width / target_ratio)
            top = (bg.height - new_height) // 2
            bg = bg.crop((0, top, bg.width, top + new_height))
        bg = bg.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    else:
        bg = Image.new("RGBA", (WIDTH, HEIGHT), (15, 23, 42, 255))

    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw_ov = ImageDraw.Draw(overlay)
    
    for x in range(WIDTH):
        if x < 420:
            alpha = int(230 - (x / 420.0) * 80)
        else:
            alpha = int(140 + (x - 420) / (WIDTH - 420) * 45)
        draw_ov.line([(x, 0), (x, HEIGHT)], fill=(10, 15, 29, alpha))
        
    return Image.alpha_composite(bg, overlay)

# VERSION 1: Identidad Personal + Especialidad
def create_v1():
    img = get_base_bg()
    draw = ImageDraw.Draw(img)
    START_X = 410

    f_tag = ImageFont.truetype(mono_bold, 12)
    f_title = ImageFont.truetype(sans_bold, 44)
    f_subtitle = ImageFont.truetype(sans_bold, 20)
    f_badge = ImageFont.truetype(sans_bold, 12)
    f_footer = ImageFont.truetype(sans_reg, 13)
    f_url = ImageFont.truetype(sans_bold, 14)

    draw.text((START_X, 55), "BACKEND & CLOUD ARCHITECTURE // SYSTEMS", font=f_tag, fill=(56, 189, 248, 255))
    draw.text((START_X, 85), "JHOJAN JIMENEZ", font=f_title, fill=(248, 250, 252, 255))
    draw.text((START_X, 150), "Software Engineer  •  Distributed Systems & Data Platforms", font=f_subtitle, fill=(148, 163, 184, 255))

    badges = ["Python", "Node.js / TS", "Java", "PostgreSQL", "Docker", "AWS / GCP", "pgvector"]
    bx = START_X
    by = 205
    for b in badges:
        bbox = f_badge.getbbox(b)
        bw = bbox[2] - bbox[0]
        bh = bbox[3] - bbox[1]
        bx2 = bx + bw + 18
        by2 = by + bh + 12
        draw.rounded_rectangle([bx, by, bx2, by2], radius=5, fill=(17, 24, 39, 230), outline=(51, 65, 85, 220), width=1)
        draw.text((bx + 9, by + 5), b, font=f_badge, fill=(226, 232, 240, 255))
        bx = bx2 + 8

    draw.line([(START_X, 265), (WIDTH - 70, 265)], fill=(30, 41, 59, 230), width=1)
    draw.text((START_X, 290), "✦ 1er Puesto Sabana Hack 2025   ✦ Beca Excelencia Académica 80% (Promedio 4.4)", font=f_footer, fill=(203, 213, 225, 255))

    url_text = "dev.jhojan.cloud ↗"
    ubox = f_url.getbbox(url_text)
    uw = ubox[2] - ubox[0]
    draw.text((WIDTH - 70 - uw, 289), url_text, font=f_url, fill=(56, 189, 248, 255))

    img.convert("RGB").save("public/linkedin_banner_v1.png", quality=98)

# VERSION 2: Rol Primero (Silicon Valley / High Authority)
def create_v2():
    img = get_base_bg()
    draw = ImageDraw.Draw(img)
    START_X = 410

    f_tag = ImageFont.truetype(mono_bold, 13)
    f_title = ImageFont.truetype(sans_bold, 48)
    f_sub = ImageFont.truetype(sans_bold, 21)
    f_badge = ImageFont.truetype(sans_bold, 12)
    f_footer = ImageFont.truetype(sans_reg, 13)
    f_url = ImageFont.truetype(sans_bold, 14)

    draw.ellipse([(START_X, 58), (START_X + 10, 68)], fill=(34, 197, 94, 255))
    draw.text((START_X + 20, 53), "AVAILABLE FOR TECH INTERNSHIPS & ROLES 2027-1", font=f_tag, fill=(56, 189, 248, 255))

    draw.text((START_X, 86), "SOFTWARE ENGINEER", font=f_title, fill=(248, 250, 252, 255))
    draw.text((START_X, 155), "Backend & Cloud Architecture  |  AI & Distributed Systems", font=f_sub, fill=(56, 189, 248, 255))

    badges = ["Python (FastAPI)", "TypeScript / Node.js", "Java", "PostgreSQL", "Docker", "AWS / GCP"]
    bx = START_X
    by = 210
    for b in badges:
        bbox = f_badge.getbbox(b)
        bw = bbox[2] - bbox[0]
        bh = bbox[3] - bbox[1]
        bx2 = bx + bw + 18
        by2 = by + bh + 12
        draw.rounded_rectangle([bx, by, bx2, by2], radius=5, fill=(15, 23, 42, 240), outline=(56, 189, 248, 160), width=1)
        draw.text((bx + 9, by + 5), b, font=f_badge, fill=(241, 245, 249, 255))
        bx = bx2 + 8

    draw.line([(START_X, 270), (WIDTH - 70, 270)], fill=(30, 41, 59, 255), width=1)
    draw.text((START_X, 292), "✦ 1st Place Sabana Hack 2025   ✦ 80% Academic Excellence Scholarship (4.4 GPA)", font=f_footer, fill=(203, 213, 225, 255))

    url_text = "dev.jhojan.cloud ↗"
    ubox = f_url.getbbox(url_text)
    uw = ubox[2] - ubox[0]
    draw.text((WIDTH - 70 - uw, 291), url_text, font=f_url, fill=(56, 189, 248, 255))

    img.convert("RGB").save("public/linkedin_banner_v2.png", quality=98)

create_v1()
create_v2()

# Copy to Windows Downloads
os.system("cp public/linkedin_banner_v1.png /mnt/c/Users/User/Downloads/linkedin_banner_v1.png 2>/dev/null")
os.system("cp public/linkedin_banner_v2.png /mnt/c/Users/User/Downloads/linkedin_banner_v2.png 2>/dev/null")
print("Banners refreshed and copied to Windows Downloads!")
