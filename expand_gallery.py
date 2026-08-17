import re

with open('index.html', 'r') as f:
    content = f.read()

# Split content to find the gallery items
# Let's find all '<div class="break-inside-avoid rounded-xl overflow-hidden group reveal cursor-pointer gallery-item">'
# and add 'hidden extra-photo' to all but the first 4.

parts = content.split('<div class="break-inside-avoid rounded-xl overflow-hidden group reveal cursor-pointer gallery-item">')

new_content = parts[0]
for i in range(1, len(parts)):
    if i > 4:
        # Add hidden and extra-photo classes
        new_content += '<div class="break-inside-avoid rounded-xl overflow-hidden group reveal cursor-pointer gallery-item hidden extra-photo">' + parts[i]
    else:
        new_content += '<div class="break-inside-avoid rounded-xl overflow-hidden group reveal cursor-pointer gallery-item">' + parts[i]


# Now add the View More button after the grid
button_html = """
      <div class="text-center mt-8 mb-16">
        <button id="expand-gallery-btn" class="bg-studio-purple hover:bg-studio-purple/80 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(109,40,217,0.5)]">
          View All Photos
        </button>
      </div>
"""

new_content = new_content.replace('</div>\n\n      <!-- Custom Audio Player -->', '</div>\n' + button_html + '\n      <!-- Custom Audio Player -->')

with open('index.html', 'w') as f:
    f.write(new_content)

