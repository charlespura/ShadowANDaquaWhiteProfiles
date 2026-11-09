export const asset = (file: string) => `${import.meta.env.BASE_URL}picture/${file}`;
export const dogs = [
  { name: 'Shadow', breed: 'Shih Tzu', age: '5 years old', color: 'Brown', image: 'shadow.png', role: 'The gentle guardian', description: 'A calm little soul with a quiet confidence. Shadow keeps an eye on the household, always close to the people he loves.', traits: ['Gentle', 'Loyal', 'A little dignified'] },
  { name: 'Aqua', breed: 'Aspin', age: '3 years old', color: 'Pure white', image: 'aqua.png', role: 'The playful sidekick', description: 'An afternoon of running around? Always. Aqua brings a little extra energy to every day, and brings Shadow along for the ride.', traits: ['Playful', 'Curious', 'Always ready'] },
];
export const photos = [
 { file: 'shadow1.jpg', dog: 'Shadow', caption: 'The perfect pillow spot', alt: 'Shadow curled up napping' },
 { file: 'aqua1.png', dog: 'Aqua', caption: 'Ready for the next adventure', alt: 'Aqua wearing his harness' },
 { file: 'shadow2.jpg', dog: 'Shadow', caption: 'Something caught his attention', alt: 'Shadow looking alert' },
 { file: 'aqua2.png', dog: 'Aqua', caption: 'Those familiar eyes', alt: 'Close-up of Aqua’s face' },
 { file: 'shadow3.jpg', dog: 'Shadow', caption: 'Taking the afternoon off', alt: 'Shadow napping on the couch' },
 { file: 'aqua3.jpg', dog: 'Aqua', caption: 'A quiet moment, for once', alt: 'Aqua lying down' },
 { file: 'shadow4.jpg', dog: 'Shadow', caption: 'A little closer', alt: 'Close-up of Shadow' },
];
