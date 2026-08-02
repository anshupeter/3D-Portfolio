let audioCtx: AudioContext | null = null;

export const playKeySound = () => {
  // Initialize AudioContext on first user interaction
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  // Create oscillator and gain node
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  // A triangle or sine wave works best for a deep thock
  osc.type = 'triangle';
  
  // The frequency drops extremely quickly to simulate a click/thock
  osc.frequency.setValueAtTime(200, audioCtx.currentTime); 
  osc.frequency.exponentialRampToValueAtTime(30, audioCtx.currentTime + 0.03); 
  
  // The volume decays extremely quickly
  gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime); // volume (adjust up to 1.0)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.03); 
  
  // Connect and play
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  osc.start();
  osc.stop(audioCtx.currentTime + 0.04);
};
