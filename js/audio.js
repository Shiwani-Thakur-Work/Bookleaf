/**
 * Audio Synthesizer for Tactile Page Turns
 * Uses the Web Audio API to produce a crisp, organic paper rustle sound
 * without any external audio files, CDNs, or network latency.
 */
class PageSoundFX {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = localStorage.getItem('reading_journal_sound') === 'true';
  }

  init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('reading_journal_sound', this.soundEnabled.toString());
    if (this.soundEnabled) {
      this.init();
      this.playTurnSound();
    }
    return this.soundEnabled;
  }

  isSoundOn() {
    return this.soundEnabled;
  }

  /**
   * Generates a soft, layered paper rustle
   */
  playTurnSound() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const ctx = this.audioCtx;
      const now = ctx.currentTime;
      const duration = 0.22;

      // 1. Generate short pink/white noise buffer
      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        // Softened pink noise formula
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.03 * white) / 1.03;
        lastOut = data[i];
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;

      // 2. Bandpass filter for papery rustle resonance
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.frequency.exponentialRampToValueAtTime(700, now + duration);
      filter.Q.value = 1.2;

      // 3. Highpass filter to eliminate low thumps
      const highpass = ctx.createBiquadFilter();
      highpass.type = 'highpass';
      highpass.frequency.value = 450;

      // 4. Volume Envelope (Gentle swell, natural decay)
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.linearRampToValueAtTime(0.09, now + 0.04);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

      // Connect graph
      noiseSource.connect(filter);
      filter.connect(highpass);
      highpass.connect(gainNode);
      gainNode.connect(ctx.destination);

      noiseSource.start(now);
      noiseSource.stop(now + duration);
    } catch (e) {
      // Audio error safely ignored
    }
  }
}

// Export singleton
window.pageSoundFX = new PageSoundFX();
