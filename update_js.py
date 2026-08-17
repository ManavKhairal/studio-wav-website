import re

with open('src/main.js', 'r') as f:
    content = f.read()

track_logic = """
  // --- Tracklist Logic ---
  const trackBtns = document.querySelectorAll('.track-btn');
  trackBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update styling
      trackBtns.forEach(b => {
        b.classList.remove('bg-white/10', 'border-studio-purple', 'text-studio-purple');
        b.classList.add('bg-transparent', 'border-transparent', 'text-white/70');
      });
      btn.classList.remove('bg-transparent', 'border-transparent', 'text-white/70');
      btn.classList.add('bg-white/10', 'border-studio-purple', 'text-studio-purple');
      
      // Update audio source and play
      audioTrack.src = btn.getAttribute('data-src');
      audioTrack.play();
      isPlaying = true;
      playIcon.classList.remove('ph-play');
      playIcon.classList.add('ph-pause');
    });
  });
"""

# Insert track logic right after audioTrack variable declarations and logic
target = "  audioTrack.addEventListener('timeupdate', () => {"
content = content.replace(target, track_logic + "\n" + target)

with open('src/main.js', 'w') as f:
    f.write(content)

