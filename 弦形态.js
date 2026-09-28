function cleanText(text) {
return text.trim();
}

function capitalize(text) {
const cleaned=cleanText(text).toLowerCase();

if (cleaned.length === 0) {
return "";
}

return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function formatDisplayName(FirstName, LastName) {
    const firstName=capitalize(FirstName);
    const lastName=capitalize(LastName);

    return `${firstName} ${lastName}`;
}

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));

