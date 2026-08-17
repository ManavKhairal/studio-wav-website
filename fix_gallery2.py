import re

with open('index.html', 'r') as f:
    content = f.read()

gallery_start = content.find('<div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-16">')
gallery_end = content.find('<!-- Custom Audio Player -->', gallery_start)

# The new images to add
images = [
    "/images/studio/IMG_9461.jpg",
    "/images/studio/IMG_9463.jpg",
    "/images/studio/IMG_9464.jpg",
    "/images/studio/IMG_9469.jpg",
    "/images/studio/IMG_9474.jpg",
    "/images/studio/IMG_9480.jpg",
    "/images/studio/IMG_9487.jpg",
    "/images/studio/IMG_9492.jpg",
    "/images/artist/044A8521-A253-4391-9A82-F423BDA18B98.jpg",
    "/images/artist/IMG_0731.JPG",
    "/images/artist/IMG_0793.JPG",
    "/images/artist/IMG_8916.PNG"
]

gallery_html = '<div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-16">\n'

for i, img in enumerate(images):
    cls = "break-inside-avoid rounded-xl overflow-hidden group reveal cursor-pointer gallery-item"
    if i >= 4:
        cls += " hidden extra-photo"
    
    gallery_html += f'  <div class="{cls}"><img src="{img}" class="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" /></div>\n'

gallery_html += '</div>\n\n      <div class="text-center mt-8 mb-16">\n        <button id="expand-gallery-btn" class="bg-studio-purple hover:bg-studio-purple/80 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(109,40,217,0.5)]">\n          View All Photos\n        </button>\n      </div>\n\n      '

new_content = content[:gallery_start] + gallery_html + content[gallery_end:]

with open('index.html', 'w') as f:
    f.write(new_content)
