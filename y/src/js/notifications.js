export function playNotification() {
    const audio = new Audio('./assets/sound.wav');
    audio.play().catch((error) => console.log('Audio error:', error));
  }