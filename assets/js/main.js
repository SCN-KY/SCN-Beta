function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    const overlay = document.getElementById('settingsOverlay');

    panel.classList.toggle('active');
    overlay.classList.toggle('active');

    document.body.style.overflow = panel.classList.contains('active') ? 'hidden' : '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const panel = document.getElementById('settingsPanel');
        if (panel.classList.contains('active')) {
            toggleSettings();
        }
    }
});

