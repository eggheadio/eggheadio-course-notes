require('dotenv').config()
const axios = require('axios')
const Input = require('prompt-input')
const lodash = require('lodash')
const fs = require('fs-extra')
const {get, reduce, forEach} = lodash
const addZero = require('add-zero')


axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.EGGHEAD_AUTH_TOKEN}`;
const http = axios.create()

async function createDirectory (dir) {
  try {
    await fs.ensureDir(`output/${dir}`)
    await fs.ensureDir(`output/${dir}/images`)
    await fs.ensureDir(`output/${dir}/lessons`)
    console.log('Created directory')
  } catch (err) {
    console.error(err)
  }
}

async function createReadme (slug, title, image, description, instructor, path) {
  const readme = `# ${title}\n\n![Course Image](${image})\n\nAsciicasts for [${instructor.full_name}](${instructor.http_url})'s course, ${title} on [egghead.io](https://egghead.io${path})\n\n## Description\n${description}\n\n## Library Version\n`

  const file = `output/${slug}/README.md`

  try {
    await fs.outputFile(file, readme)
  } catch (err) {
    console.error('Error creating Readme!')
  }
}

async function createSummary(slug, items) {
  const bullets = reduce(
    items,
    (prev, item, index) =>
      `${prev}* [${item.title}](./lessons/${addZero(index + 1)}_${item.slug}.md)\n`,
    ''
  );

  const summary = `# Summary\n\n${bullets}`

  const file = `output/${slug}/SUMMARY.md`
  try {
    await fs.outputFile(file, summary)
  } catch (err) {
    console.error('Error creating Summary!', err)
  }
}

async function writeFileToDir (file, content) {
  try {
    await fs.outputFile(file, content)
  } catch (err) {
    console.error('Error writing Lesson file!', err)
  }
}

async function createLessonDocs (slug, items) {
  const dir = `output/${slug}/lessons`

  forEach(items, (item, i) => {
    const file = `${dir}/${addZero(i + 1)}_${item.slug}.md`;
    const summary = `# ${item.title}\n\n[Video link](https://www.egghead.io${item.path})\n\n${item.transcript}\n`;

    writeFileToDir(file, summary)
  })
}

const makeRequest = (slug) => {
  const reqUrl = `https://app.egghead.io/api/v1/playlists/${slug}?load_lessons=true`

  http.get(reqUrl)
    .then(({data}) => {
      const {slug, title, author, description, square_cover_url, instructor, path, items} = data
      console.log(`Course Found! ${get(data, 'title')}`)

      createDirectory(slug)
      // createReadme(slug, title, square_cover_url, description, instructor, path)
      createSummary(slug, items)
      createLessonDocs(slug, items)

    })
    .catch(error => {
      console.log('Error!', error)
    })
}

const input = new Input({
  name: 'slug',
  message: 'Enter course slug:'
})

input.ask(slug => {
  makeRequest(slug)
})