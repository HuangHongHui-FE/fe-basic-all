import './posts.css'

export default () => {
  const posts = document.createElement('div')
  posts.className = 'posts'

  posts.innerHTML = '<h2>Posts</h2>'

  return posts
}

console.log('11111')
