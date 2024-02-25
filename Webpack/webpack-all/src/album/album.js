import './album.css'

export default () => {
  const album = document.createElement('div')
  album.className = 'album'

  album.innerHTML = '<h2>Albums</h2>'

  return album
}
