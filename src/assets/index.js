// Load all images recursively from ./images/**/*
const imageImports = import.meta.glob('./images/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
})

// Load all SVGs from ./svgs/
const svgImports = import.meta.glob('./svgs/*.svg', {
  eager: true,
  import: 'default',
})

// Format image imports into nested structure: { folderName: { background: ..., icon: ... } }
const formatImages = (imports) => {
  const result = {}

  for (const path in imports) {
    // Example: './images/folder1/background.png'
    const parts = path.split('/')
    const folderName = parts[2]         // e.g., 'folder1'
    const fileName = parts[3].split('.')[0]  // e.g., 'background' or 'icon'

    if (!result[folderName]) result[folderName] = {}
    result[folderName][fileName] = imports[path]
  }

  return result
}

// Flat svg loader
const formatSVGs = (imports) => {
  const result = {}
  for (const path in imports) {
    const fileName = path.split('/').pop().split('.')[0]
    result[fileName] = imports[path]
  }
  return result
}

const images = formatImages(imageImports)
const svgs = formatSVGs(svgImports)

export { images, svgs }
