const categoryItems = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(categoryItem => { 
    const categoryTitle = categoryItem.querySelector('h2');
    const categoryElements = categoryItem.querySelectorAll('li');
    console.log(`Categories: ${categoryTitle.textContent}`);
    console.log(`Elements: ${categoryElements.length}`);
});