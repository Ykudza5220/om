/*1задание*/
const ul = document.querySelector('ul');
const listItem = ul.getElementsByTagName('li');
ul.removeChild(listItem[2]);
ul.removeChild(listItem[3]);
/*2 задание*/




/*3задание*/
const newLi = document.createElement('li');
newLi.textContent = 'Bugatti';
ul.prepend(newLi);

/*4 задание*/
const newul = document.querySelector('ul');
const newFord = document. createElement('li');
 newFord.innerText ='Ford'
 newul.appendChild(newFord)


/*5задание*/






/*6 задание*/
const images = document.createElement('img');
images.src ="https://cdn.riastatic.com/photosnewr/ria/news_common/novyj-bugatti-chiron-za-2-6-mln-razgonyaetsya-do-420-km-ch__225882-1680x0.jpg";
images.width = '750';
images.height = '550'
images.alt = 'Фото с Гугл поиска';
const div1 =  document.createElement('div');
div1.append(images);
document.body.append(div1);

/*7задание*/
const bold = document.querySelector('.bold');
bold.classList.remove('red', 'italic');

/*8 задание*/
const div = document.createElement('div');
document.body.prepend(div);
div.innerHTML = '<h1>This is h1 tag!</h1>'

/*9 задание*/
const h1 = h1Wrapper.querySelector('h1');
h1.style.color = 'blue';
h1.style.fontSize = '40px';