const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');
const showLanguage = document.querySelector('.show-language');
const programmes = document.getElementById('programmes');
const showFrameworks = document.querySelector('.show-frameworks');
const frameworks = document.querySelector('.frams');
const showSkills = document.querySelector('.show-skills');
const skillsCards = document.getElementById('skills-cards');

hamburger.addEventListener('click', () => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const links = document.querySelector('.internal-link');
  const home = document.querySelector('.home-page');
  const divWrap = document.createElement('div');
  const linksChilds = Array.from(links.children);
  body.style.overflow = 'hidden';
  const property = {
    color: '#fff',
    fontSize: '32px',
    fontFamily: 'Poppins sans-serif',
    fontWeight: '600px',
    lineHeight: '44px',
    textDecoration: 'none',
  };

  divWrap.style.backgroundColor = 'rgba(96, 112, 255,0.9)';
  img.src = './statics/images/Toolbar.png';
  img.style.float = 'right';
  img.style.marginRight = '1rem';
  img.addEventListener('mouseover', () => {
    img.style.cursor = 'pointer';
  });
  links.style.display = 'block';
  links.style.clear = 'both';
  divWrap.style.zIndex = '999';
  divWrap.style.position = 'absolute';
  divWrap.style.top = '0';
  divWrap.style.height = '130vh';
  divWrap.style.width = '100%';
  div.style.marginTop = '40px';
  links.style.listStyle = 'none';
  img.addEventListener('click', () => {
    divWrap.style.display = 'none';
    body.style.overflow = 'auto';
  });

  div.appendChild(img);
  div.appendChild(links);
  divWrap.append(div);
  home.appendChild(divWrap);

  for (let i = 0; i < linksChilds.length; i += 1) {
    const eltChildren = linksChilds[i].children;
    eltChildren[0].addEventListener('click', () => {
      divWrap.style.display = 'none';
      body.style.overflow = 'auto';
    });
    linksChilds[i].style.marginBottom = '20px';
    // for (const prop of Object.keys(property)) {
    for (let j = 0; j < Object.keys(property).length; j += 1) {
      eltChildren[0].style[Object.keys(property)[j]] = property[Object.keys(property)[j]];
    }
  }
});

showLanguage.addEventListener('click', () => {
  const hide = showLanguage.querySelector('.hide');
  const show = showLanguage.querySelector('.show');
  const hideFrame = showFrameworks.querySelector('.hide');
  const showFrame = showFrameworks.querySelector('.show');
  const hideSk = showSkills.querySelector('.hide');
  const showSk = showSkills.querySelector('.show');
  if (hide.style.display !== 'none') {
    hide.style.display = 'none';
    show.style.display = 'block';
    programmes.style.display = 'none';
  } else {
    hide.style.display = 'block';
    show.style.display = 'none';
    programmes.style.display = 'flex';
    frameworks.style.display = 'none';
    showFrame.style.display = 'block';
    hideFrame.style.display = 'none';
    skillsCards.style.display = 'none';
    hideSk.style.display = 'none';
    showSk.style.display = 'block';
  }
});

showFrameworks.addEventListener('click', () => {
  const hide = showFrameworks.querySelector('.hide');
  const show = showFrameworks.querySelector('.show');
  const hideProgram = showLanguage.querySelector('.hide');
  const showProgram = showLanguage.querySelector('.show');
  const hideSk = showSkills.querySelector('.hide');
  const showSk = showSkills.querySelector('.show');
  if (hide.style.display !== 'none') {
    hide.style.display = 'none';
    show.style.display = 'block';
    frameworks.style.display = 'none';
  } else {
    hide.style.display = 'block';
    show.style.display = 'none';
    frameworks.style.display = 'flex';
    programmes.style.display = 'none';
    showProgram.style.display = 'block';
    hideProgram.style.display = 'none';
    skillsCards.style.display = 'none';
    showSk.style.display = 'block';
    hideSk.style.display = 'none';
  }
});

showSkills.addEventListener('click', () => {
  const hide = showSkills.querySelector('.hide');
  const show = showSkills.querySelector('.show');
  const hideProgram = showLanguage.querySelector('.hide');
  const showProgram = showLanguage.querySelector('.show');
  const hideFrame = showFrameworks.querySelector('.hide');
  const showFrame = showFrameworks.querySelector('.show');
  if (hide.style.display !== 'none') {
    hide.style.display = 'none';
    show.style.display = 'block';
    skillsCards.style.display = 'none';
  } else {
    hide.style.display = 'block';
    show.style.display = 'none';
    skillsCards.style.display = 'flex';
    frameworks.style.display = 'none';
    programmes.style.display = 'none';
    showProgram.style.display = 'block';
    hideProgram.style.display = 'none';
    showFrame.style.display = 'block';
    hideFrame.style.display = 'none';
  }
});
document.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    event.target.focus();
  }
});