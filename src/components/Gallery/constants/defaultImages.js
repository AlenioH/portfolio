import thumb01 from '../../../assets/images/thumbs/demo1.png'
import thumb02 from '../../../assets/images/thumbs/demo2.png'
import thumb03 from '../../../assets/images/thumbs/demo3.png'
import thumb04 from '../../../assets/images/thumbs/demo4.png'
import thumb05 from '../../../assets/images/thumbs/demo5.png'
import thumb06 from '../../../assets/images/thumbs/demo6.png'

export const DEFAULT_IMAGES = [
  {
    id: '1',
    source: 'https://github.com/AlenioH/random-color-generator',
    thumbnail: thumb01,
    caption: 'Node.js random color generator',
    description:
      'This is a CLI application which generates either a random color, or the color typed in',
  },
  {
    id: '2',
    source: 'https://github.com/AlenioH/meme-scraper',
    thumbnail: thumb02,
    caption: 'Meme scraper',
    description:
      'When run in command line, the application creates a new directory named "memes" and downloads the first 10 images under names from 0 to 9.',
  },
  {
    id: '3',
    source: 'https://github.com/AlenioH/react-meme-generator',
    thumbnail: thumb03,
    caption: 'React meme generator app',
    description:
      'This app allows for users to generate and download memes using the memegen.link website API.',
  },
  {
    id: '4',
    source: 'https://github.com/AlenioH/Sentiment-analysis',
    thumbnail: thumb04,
    caption: 'Sentiment analysis CLI',
    description:
      'A Node.js sentiment analysis program that uses the demo API on apidemo.theysay.io to analyze text that you pass in on the command line as an additional argument and print out the "mood" of the text.',
  },
  {
    id: '5',
    source: 'https://github.com/AlenioH/next.js-ecommerce-store',
    thumbnail: thumb05,
    caption: 'Next.js ecommerce store',
    description:
      'This one is an (almost) fully functional online shop, including a PostgresQL database.',
  },
  {
    id: '6',
    source: 'https://github.com/AlenioH/react-todo-list',
    thumbnail: thumb06,
    caption: 'React Todo App',
    description:
      'This React app allows to enter todos, toggle, delete them, and filter to show only active or only completed ones.',
  },
]
