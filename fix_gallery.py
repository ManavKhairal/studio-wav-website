import re

with open('index.html', 'r') as f:
    content = f.read()

# Extract the gallery div
gallery_start = content.find('<div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-16">')
gallery_end = content.find('<!-- Custom Audio Player -->', gallery_start)

gallery_block = content[gallery_start:gallery_end]

# Extract all individual items
item_pattern = re.compile(r'<div class="break-inside-avoid rounded-xl overflow-hidden group reveal cursor-pointer gallery-item[^>]*">.*?</div>', re.DOTALL)
items = item_pattern.findall(gallery_block)

# Separate into studio and artist
studio_items = []
artist_items = []

for item in items:
    # clean out any hidden/extra-photo classes for now
    clean_item = item.replace(' hidden extra-photo', '')
    if 'images/studio' in item:
        studio_items.append(clean_item)
    elif 'images/artist' in item:
        artist_items.append(clean_item)

# Recombine, studio first
all_items = studio_items + artist_items

# First 4 are visible, rest are hidden
final_items = []
for i, item in enumerate(all_items):
    if i >= 4:
        final_item = item.replace('gallery-item">', 'gallery-item hidden extra-photo">')
    else:
        final_item = item
    final_items.append('  ' + final_item)

new_gallery_inner = '\n'.join(final_items)
new_gallery_block = '<div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-16">\n' + new_gallery_inner + '\n</div>\n\n      <div class="text-center mt-8 mb-16">\n        <button id="expand-gallery-btn" class="bg-studio-purple hover:bg-studio-purple/80 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(109,40,217,0.5)]">\n          View All Photos\n        </button>\n      </div>\n\n      '

new_content = content[:gallery_start] + new_gallery_block + content[gallery_end:]

with open('index.html', 'w') as f:
    f.write(new_content)
