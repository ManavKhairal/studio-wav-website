import re

with open('index.html', 'r') as f:
    content = f.read()

# 1. Replace Gallery
with open('gallery.html', 'r') as f:
    gallery_html = f.read()

gallery_pattern = re.compile(r'<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">.*?</div>\n\n      <!-- Custom Audio Player -->', re.DOTALL)
content = gallery_pattern.sub(gallery_html + '\n      <!-- Custom Audio Player -->', content)

# 2. Add Tracklist to Audio Player
audio_tag_pattern = re.compile(r'(<audio id="audio-track" src="/audio/Yaad\.mp3" preload="metadata"></audio>\n      </div>)')
tracklist_html = """
        <div class="mt-6 space-y-2" id="track-list">
          <button class="w-full text-left p-3 rounded-lg bg-white/10 transition flex items-center gap-4 border border-studio-purple text-studio-purple track-btn" data-src="/audio/Yaad.mp3">
            <i class="ph-fill ph-music-notes"></i>
            <span class="font-semibold">Yaad</span>
          </button>
          <button class="w-full text-left p-3 rounded-lg bg-transparent hover:bg-white/10 transition flex items-center gap-4 border border-transparent text-white/70 track-btn" data-src="/audio/Saawan Barsa De.mp3">
            <i class="ph-fill ph-music-notes"></i>
            <span class="font-semibold">Saawan Barsa De</span>
          </button>
        </div>
"""
content = audio_tag_pattern.sub(tracklist_html + r'\1', content)

with open('index.html', 'w') as f:
    f.write(content)

