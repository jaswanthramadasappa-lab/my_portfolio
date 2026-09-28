import os
from fpdf import FPDF

class ResumePDF(FPDF):
    def header(self):
        pass

    def footer(self):
        pass

def create_resume():
    pdf = ResumePDF(orientation="P", unit="mm", format="A4")
    pdf.set_auto_page_break(auto=False)
    pdf.add_page()
    pdf.set_margins(left=18, top=14, right=18)

    # Colors
    TEXT_BLACK = (0, 0, 0)
    LINK_COLOR = (30, 64, 175)
    LINE_GRAY = (120, 120, 120)

    # 1. NAME HEADER
    pdf.set_text_color(*TEXT_BLACK)
    pdf.set_font("Helvetica", "B", 18)
    pdf.cell(0, 8, "Jaswanth Ramadasappa Gari", align="C", new_x="LMARGIN", new_y="NEXT")

    # 2. CONTACT ROW WITH EXACT LINKS
    pdf.set_font("Helvetica", "", 10)
    linkedin_url = "https://www.linkedin.com/in/jaswanth-ramadasappagari/"
    github_url = "https://github.com/jaswanthramadasappa-lab"
    leetcode_url = "https://leetcode.com/u/y428pyL8mA/"

    pdf.set_y(pdf.get_y() + 1)
    
    # Calculate text widths for exact centered single-line header
    t_phone = "+91 6303842582"
    t_email = "jaswanthramadasappa@gmail.com"
    t_in = "Linkedin"
    t_gh = "Github"
    t_lc = "Leetcode"
    
    pdf.set_x(18)
    full_line = f"{t_phone}  {t_email}  {t_in}  {t_gh}  {t_lc}"
    total_w = pdf.get_string_width(full_line)
    start_x = (210 - total_w) / 2

    pdf.set_x(start_x)
    pdf.cell(pdf.get_string_width(t_phone) + 3, 5, t_phone)
    pdf.cell(pdf.get_string_width(t_email) + 3, 5, t_email)
    
    pdf.set_text_color(*LINK_COLOR)
    pdf.cell(pdf.get_string_width(t_in) + 3, 5, t_in, link=linkedin_url)
    pdf.cell(pdf.get_string_width(t_gh) + 3, 5, t_gh, link=github_url)
    pdf.cell(pdf.get_string_width(t_lc), 5, t_lc, link=leetcode_url)
    
    pdf.set_text_color(*TEXT_BLACK)
    pdf.set_y(pdf.get_y() + 7)

    def section_heading(name):
        pdf.set_y(pdf.get_y() + 2)
        pdf.set_font("Helvetica", "B", 10.5)
        pdf.cell(0, 4.5, name, new_x="LMARGIN", new_y="NEXT")
        pdf.set_draw_color(*LINE_GRAY)
        pdf.set_line_width(0.4)
        pdf.line(18, pdf.get_y(), 192, pdf.get_y())
        pdf.set_y(pdf.get_y() + 2.5)

    # --- EDUCATION ---
    section_heading("EDUCATION")

    # MITS
    pdf.set_font("Helvetica", "B", 9.5)
    pdf.cell(130, 4.5, "Madanapalle Institute of Technology & Science (MITS), Madanapalle")
    pdf.set_font("Helvetica", "B", 9.5)
    pdf.cell(44, 4.5, "2024 - 2028", align="R", new_x="LMARGIN", new_y="NEXT")
    
    pdf.set_font("Helvetica", "", 9)
    pdf.cell(130, 4, "B Tech (Bachelor of Technology) , Computer Science Engineering (CSE)")
    pdf.cell(44, 4, "", align="R", new_x="LMARGIN", new_y="NEXT")

    # Narayana
    pdf.set_y(pdf.get_y() + 1.2)
    pdf.set_font("Helvetica", "B", 9.5)
    pdf.cell(130, 4.5, "Narayana Junior college")
    pdf.set_font("Helvetica", "B", 9.5)
    pdf.cell(44, 4.5, "2024", align="R", new_x="LMARGIN", new_y="NEXT")
    
    pdf.set_font("Helvetica", "", 9)
    pdf.cell(130, 4, "Intermediate/12th")
    pdf.set_font("Helvetica", "B", 9)
    pdf.cell(44, 4, "96%", align="R", new_x="LMARGIN", new_y="NEXT")

    # ZP High School
    pdf.set_y(pdf.get_y() + 1.2)
    pdf.set_font("Helvetica", "B", 9.5)
    pdf.cell(130, 4.5, "ZP High school")
    pdf.set_font("Helvetica", "B", 9.5)
    pdf.cell(44, 4.5, "2022", align="R", new_x="LMARGIN", new_y="NEXT")
    
    pdf.set_font("Helvetica", "", 9)
    pdf.cell(130, 4, "10th Grade/SSC")
    pdf.set_font("Helvetica", "B", 9)
    pdf.cell(44, 4, "89%", align="R", new_x="LMARGIN", new_y="NEXT")

    # --- SKILLS ---
    section_heading("SKILLS")
    skills_lines = [
        ("Frontend: ", "HTML, CSS, JavaScript, ReactJS"),
        ("Backend: ", "Node.js, Express.js"),
        ("Database: ", "SQL"),
        ("Programming Languages: ", "Python, C++"),
        ("Core Concepts: ", "Data Structures & Algorithms"),
        ("AI: ", "Generative AI"),
    ]
    for bold_prefix, text_val in skills_lines:
        pdf.set_font("Helvetica", "B", 9)
        pdf.cell(pdf.get_string_width(bold_prefix) + 1, 4.2, bold_prefix)
        pdf.set_font("Helvetica", "", 9)
        pdf.cell(0, 4.2, text_val, new_x="LMARGIN", new_y="NEXT")

    # --- PROJECTS ---
    section_heading("PROJECTS")

    # Project 1: Voice2action Ai
    pdf.set_font("Helvetica", "B", 9.5)
    p1_title = "Voice2action Ai - Voice Notes To Action Items   "
    pdf.cell(pdf.get_string_width(p1_title), 4.5, p1_title)
    pdf.set_font("Helvetica", "U", 9)
    pdf.set_text_color(*LINK_COLOR)
    pdf.cell(20, 4.5, "Link", link="https://github.com/jaswanthramadasappa-lab/AgenticAI", new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(*TEXT_BLACK)

    pdf.set_font("Helvetica", "", 8.5)
    p1_desc = (
        "\x95 Developed an AI-powered voice productivity application that converts recorded/uploaded audio into text "
        "and transforms transcripts into summaries, key points, decisions, and prioritized action items. "
        "Implemented REST APIs using Node.js and Express.js, integrated OpenAI for speech-to-text and AI analysis, "
        "and stored user notes in MongoDB for persistent access."
    )
    pdf.multi_cell(0, 3.8, p1_desc, new_x="LMARGIN", new_y="NEXT")

    # Project 2: Nxt Trendz
    pdf.set_y(pdf.get_y() + 1.8)
    pdf.set_font("Helvetica", "B", 9.5)
    p2_title = "Nxt Trendz (ecommerce Clone-amazon, Flipkart)   "
    pdf.cell(pdf.get_string_width(p2_title), 4.5, p2_title)
    pdf.set_font("Helvetica", "U", 9)
    pdf.set_text_color(*LINK_COLOR)
    pdf.cell(20, 4.5, "Link", link="https://github.com/jaswanthramadasappa-lab/nxttrendzapp", new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(*TEXT_BLACK)

    pdf.set_font("Helvetica", "", 8.5)
    p2_desc = (
        "\x95 Built a responsive e-commerce web app with secure authentication, product listing, search, and filtering features. "
        "Implemented protected routes and dynamic data rendering using REST APIs. Designed a clean UI with shopping cart "
        "functionality to enhance user experience."
    )
    pdf.multi_cell(0, 3.8, p2_desc, new_x="LMARGIN", new_y="NEXT")

    # Project 3: Nxt Watch
    pdf.set_y(pdf.get_y() + 1.8)
    pdf.set_font("Helvetica", "B", 9.5)
    p3_title = "Nxt Watch   "
    pdf.cell(pdf.get_string_width(p3_title), 4.5, p3_title)
    pdf.set_font("Helvetica", "U", 9)
    pdf.set_text_color(*LINK_COLOR)
    pdf.cell(20, 4.5, "Link", link="https://github.com/jaswanthramadasappa-lab/Nxtwatch", new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(*TEXT_BLACK)

    pdf.set_font("Helvetica", "", 8.5)
    p3_desc = (
        "\x95 Developed a YouTube-inspired video streaming web application using React.js, implementing component-based "
        "architecture and dynamic routing. Integrated REST APIs to fetch and display video content including trending, gaming, "
        "and search-based results with efficient state management. Implemented JWT-based authentication with protected "
        "routes to ensure secure user access and personalized features like saved videos. Designed a fully responsive UI with "
        "dark/light theme support, focusing on performance optimization and seamless user experience."
    )
    pdf.multi_cell(0, 3.8, p3_desc, new_x="LMARGIN", new_y="NEXT")

    # --- ACHIEVEMENTS ---
    section_heading("ACHIEVEMENTS")
    achievements_list = [
        "\x95 2nd Prize - Coding Competition",
        "\x95 Cleared Nxtmock Ai Interview - Nxtwave",
        "\x95 1st Prize - Department-level Project Expo",
    ]
    for ach in achievements_list:
        pdf.set_font("Helvetica", "", 9)
        pdf.cell(0, 4.5, ach, new_x="LMARGIN", new_y="NEXT")

    output_path = os.path.abspath("public/resume.pdf")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    pdf.output(output_path)
    print(f"Generated verbatim resume at: {output_path} (Size: {os.path.getsize(output_path)} bytes)")

if __name__ == "__main__":
    create_resume()

