// Polish alphabet


const correctPolishLetters = string => string.replace(/[ąćęłńóśźż]/g, replacer => 'acelnoszz'["ąćęłńóśźż".indexOf(replacer)])



