//Import scripts
import './js/main';
import './js/menuXS'

import Glide from '@glidejs/glide'
if(document.querySelector('.mainPageSite')) {
  const configPhotoWorks = {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    autoplay: 3500,
    hoverpause: true,
    gap: '0px',
    peek: { 
      before: '0px',
      after: '120px' },
    breakpoints: {
      1800: {
        perView: 4
      },
      1460: {
        perView: 3
      },
      1100: {
        perView: 2
      },
      768: {
        perView: 6,
        peek: { 
          before: '0',
          after: '0' },
          autoplay: false,
      },
    }
  }
  new Glide('.glidePhotoGalery', configPhotoWorks).mount()
}
if(document.querySelector('.numberPageSite')) {
  const configFamilyNumberPage = {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    autoplay: 3500,
    hoverpause: true,
    gap: '0px',
    breakpoints: {
      1785: {
        perView: 3
      },
      1400: {
        perView: 4
      },
      1220: {
        perView: 3,
      },
      910: {
        perView: 2,
      },
      768: {
        perView: 3,
        focusAt: 'center',
      }
    }
  }
  new Glide('.glideFamilyNumber', configFamilyNumberPage).mount()
  /*Функції кастомної carusel */
  
  let glideSlideActive = document.querySelector('.glide__slide--active');
  
  // Конфигурация observer (за какими изменениями наблюдать)
  const config = {
    attributes: true,
    childList: true,
    subtree: true
  }; 
  // Функция обратного вызова при срабатывании мутации
  const callback = function(mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'attributes') {
        let mobileShowImageBlock = document.getElementById('mobileShowImageBlock');
        glideSlideActive = document.querySelector('.glide__slide--active');
        let glideSlidStyle = getComputedStyle(glideSlideActive);
        mobileShowImageBlock.style.background = glideSlidStyle.background;
      } 
    }
  };
  // Создаем экземпляр наблюдателя с указанной функцией обратного вызова
  const observer = new MutationObserver(callback);
  // передаем элемент и настройки в наблюдатель
  observer.observe(glideSlideActive, config);
}
if(document.querySelector('.weddingPageSite')) {
  const configWeddingPage = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '5px',
    breakpoints: {
      1320: {
        gap: '3px',
      },
      768: {
        gap: '3px',
        peek: { 
          before: 0, 
          after: -75 
        }
      }
    }
  }
  new Glide('.glideWedding', configWeddingPage).mount()

  const configIndividualMenu = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '3px',
    breakpoints: {
      768: {
        perView: 3,
        focusAt: 'center',
      }
    }
  }
  new Glide('.glideIndividualMenu', configIndividualMenu).mount()

  const configCandyBar = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '3px',
    breakpoints: {
      768: {
        perView: 3,
        focusAt: 'center',
      }
    }
  }
  new Glide('.glideCandyBar', configCandyBar).mount()

  const configOurDetails = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '3px',
    breakpoints: {
      768: {
        perView: 3,
        focusAt: 'center',
      }
    }
  }
  new Glide('.glideOurDetails', configOurDetails).mount()

  const configPersonalNumber = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '3px',
    breakpoints: {
      768: {
        perView: 3,
        focusAt: 'center',
      }
    }
  }
  new Glide('.glidePersonalNumber', configPersonalNumber).mount()
}
if(document.querySelector('.companyInformationPageSite')) {
  const configAboutUs = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '3px',
    breakpoints: {
      768: {
        gap: '3px',
        peek: { 
          before: 0, 
          after: -75 
        }
      }
    }
  }
  new Glide('.glideAboutUs', configAboutUs).mount()

  const configAddInfo = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '3px',
    breakpoints: {
      768: {
        perView: 3,
        focusAt: 'center',
      }
    }
  }
  new Glide('.glideAddInfo', configAddInfo).mount()

  const configReasonsСome = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '3px',
    breakpoints: {
      768: {
        perView: 3,
        focusAt: 'center',
      }
    }
  }
  new Glide('.glideReasonsСome', configReasonsСome).mount()
}
if(document.querySelector('.saunaPageSite')) {
  const configSauna = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '5px',
    breakpoints: {
      1320: {
        gap: '3px',
      },
      768: {
        gap: '3px',
        peek: { 
          before: 0, 
          after: -75 
        }
      }
    }
  }
  new Glide('.glideSauna', configSauna).mount()

  const configIdealRest = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '3px',
    breakpoints: {
      768: {
        perView: 3,
        focusAt: 'center',
      }
    }
  }
  new Glide('.glideIdealRest', configIdealRest).mount()

  const configReasonsVisiting = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '3px',
    breakpoints: {
      768: {
        perView: 3,
        focusAt: 'center',
      }
    }
  }
  new Glide('.glideReasonsVisiting', configReasonsVisiting).mount()
}
if(document.querySelector('.conferencesPageSite')) {
  const configConferences = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '5px',
    breakpoints: {
      1320: {
        gap: '3px',
      },
      768: {
        gap: '3px',
        peek: { 
          before: 0, 
          after: -75 
        }
      }
    }
  }
  new Glide('.glideConferences', configConferences).mount()

  const configComplexMenu = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '3px',
    breakpoints: {
      768: {
        perView: 3,
        focusAt: 'center',
      }
    }
  }
  new Glide('.glideComplexMenu', configComplexMenu).mount()

  const configLargeGroups = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '3px',
    breakpoints: {
      768: {
        perView: 3,
        focusAt: 'center',
      }
    }
  }
  new Glide('.glideLargeGroups', configLargeGroups).mount()
}
if(document.querySelector('.shelterLakesPageSite')) {
  const configShelterLakes = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '5px',
    breakpoints: {
      1320: {
        gap: '3px',
      },
      768: {
        gap: '3px',
        peek: { 
          before: 0, 
          after: -75 
        }
      }
    }
  }
  new Glide('.glideShelterLakes', configShelterLakes).mount()

  const configAsHome = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '3px',
    breakpoints: {
      768: {
        perView: 3,
        focusAt: 'center',
      }
    }
  }
  new Glide('.glideAsHome', configAsHome).mount()

  const configApartment = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3500,
    hoverpause: true,
    gap: '3px',
    breakpoints: {
      768: {
        perView: 3,
        focusAt: 'center',
      }
    }
  }
  new Glide('.glideApartment', configApartment).mount()
}
//Import styles
import './scss/main.scss';