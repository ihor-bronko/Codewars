// Hello, Name or World!

const hello = name => `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`
