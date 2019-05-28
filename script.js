/*!
 * swiped-events.js - v@version@
 * Pure JavaScript swipe events
 * https://github.com/john-doherty/swiped-events
 * @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
(function (window, document) {

  'use strict';

  // patch CustomEvent to allow constructor creation (IE/Chrome)
  if (typeof window.CustomEvent !== 'function') {

      window.CustomEvent = function (event, params) {

          params = params || { bubbles: false, cancelable: false, detail: undefined };

          var evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
      };

      window.CustomEvent.prototype = window.Event.prototype;
  }

  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);
  document.addEventListener('touchend', handleTouchEnd, false);

  var xDown = null;
  var yDown = null;
  var xDiff = null;
  var yDiff = null;
  var timeDown = null;
  var startEl = null;

  function handleTouchEnd(e) {

      // if the user released on a different target, cancel!
      if (startEl !== e.target) return;

      var swipeThreshold = parseInt(startEl.getAttribute('data-swipe-threshold') || '20', 10);    // default 10px
      var swipeTimeout = parseInt(startEl.getAttribute('data-swipe-timeout') || '500', 10);      // default 1000ms
      var timeDiff = Date.now() - timeDown;
      var eventType = '';

      if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant
          if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
              if (xDiff > 0) {
                  eventType = 'swiped-left';
              }
              else {
                  eventType = 'swiped-right';
              }
          }
      }
      else {
          if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {
              if (yDiff > 0) {
                  eventType = 'swiped-up';
              }
              else {
                  eventType = 'swiped-down';
              }
          }
      }

      if (eventType !== '') {

          // fire event on the element that started the swipe
          startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true }));

          // if (console && console.log) console.log(eventType + ' fired on ' + startEl.tagName);
      }

      // reset values
      xDown = null;
      yDown = null;
      timeDown = null;
  }

  function handleTouchStart(e) {

      // if the element has data-swipe-ignore="true" we stop listening for swipe events
      if (e.target.getAttribute('data-swipe-ignore') === 'true') return;

      startEl = e.target;

      timeDown = Date.now();
      xDown = e.touches[0].clientX;
      yDown = e.touches[0].clientY;
      xDiff = 0;
      yDiff = 0;
  }

  function handleTouchMove(e) {

      if (!xDown || !yDown) return;

      var xUp = e.touches[0].clientX;
      var yUp = e.touches[0].clientY;

      xDiff = xDown - xUp;
      yDiff = yDown - yUp;
  }

}(window, document));

const container = document.querySelector('#atlo')
const infoGraphContainer = document.querySelector('.info-graph-container')
const rectangleContainer = document.querySelector('.rectangle.active')
const rectangles = Array.from(document.querySelectorAll('.rectangle li'))
const text = Array.from(document.querySelectorAll('.text li'))
const titleElement = document.querySelector('.hero h1')
const descriptionElement = document.querySelector('.hero p')
const backgroundFront = document.querySelector('.background-image')
const backButton = document.querySelector('.back-button')
const nextButton = document.querySelector('.next-button')
const tooltip = document.querySelector('.tooltip')
const tooltipButton = document.querySelector('.tooltip-button')
const tooltipText = document.querySelector('.tooltip-text')
const video = document.querySelector('.video')
const content = document.querySelector('.content')

const animationTime = 800

let currentPage = 1

const data = [
  {
    id: 1,
    title: 'Well-being and safety of women',
    description: 'OSCE-LED survey on violence against women - major findings',
    background: '1.png'
  }, {
    id: 2,
    title: 'Participating states',
    description: 'A quantitative survey was conducted among a representative sample of women aged 18 to 74 living in Albania, Bosnia and Hercegovina, Kosovo, Montenegro, North Macedonia, Serbia, Moldova and Ukraine. ',
    background: '2.png'
  }, {
    id: 3,
    title: 'Methodology ',
    description: 'A total of 15.179 female participated in the survey. Here, each dot represents one of them.',
    background: '3.png'
  },{
    id: 4,
    title: 'Violent reality',
    description: 'Seventy per cent of women have experienced some form of sexual harassment since the age of 15. With 31 per cent said to have experienced sexual violence in the past 12 months. ',
    cite: {
      top: '10%',
      left: '37.8%',
      text: 'Lorem ipsum dolorem possimus dignissimos assumenda inventore minima obcaecati architecto suscipit asperiores aperiam, repellat quis consectetur reiciendis ex distinctio ipsam qui saepe facere!'
    },
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut quasi sit consequatur ut voluptate iure modi, possimus dignissimos assumenda inventore minima obcaecati architecto suscipit asperiores aperiam, repellat quis consectetur reiciendis ex distinctio ipsam qui saepe facere! Unde neque recusandae consequuntur fuga reiciendis tenetur, quas modi accusamus, nihil corporis ratione quod totam sunt amet atque sed harum, maxime ducimus consectetur alias illo! Non, velit optio numquam asperiores blanditiis consequuntur officiis dolorem nisi excepturi libero quo, doloribus ipsum laborum aperiam magni.',
    video: 'Valentina_Andrasek.mp4',
    columns: [
      {
        description: `
        <p class="description">since the age of 15</p>
        <p class="percentage" style="color: #7c3593">70%</p>`,
        percentage: 70,
        color: '#7c3593'
      }, {
        description: `
        <p class="description">12 months prior the survey</p>
        <p class="percentage" style="color: #b086be">31%</p>`,
        percentage: 31.2,
        textPercentage: 70,
        textTopPosition: 30,
        color: '#b086be'
      }
    ]
  }, {
    id: 5,
    title: 'When it\'s known',
    description: 'Almost quarter of the participating women said to have experienced physical or sexual violence by her partner. ',
    cite: {
      top: '33.3%',
      left: '12.2%',
      text: 'Veniam, inventore! Harum necessitatibus tempore, beatae possimus voluptates dolorem architecto labore ducimus quo explicabo hic.'
    },
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit accusamus quam. Laborum iusto fugiat ullam voluptatibus dicta placeat quae sint sed, officia fuga provident, velit quidem, labore ratione. Tenetur fugiat dolorem error, dolor provident eum eaque praesentium ex placeat aliquid facilis atque, voluptas modi aperiam necessitatibus a unde eius. Aspernatur eveniet odio architecto aliquid! Reprehenderit maxime sequi amet! Reiciendis similique tempore expedita impedit animi rerum, atque minima excepturi modi recusandae fugiat quia incidunt ipsam magnam optio beatae suscipit officia?',
    video: 'Marija_Babovic_pt_1.mp4',
    columns: [
      {
        description: `
        <p class="description">partner</p>
        <p class="percentage" style="color: #70c6ad">70%</p>`,
        percentage: 23,
        color: '#70c6ad'
      }
    ]
  }, {
    id: 6,
    title: 'When it\'s unknown',
    description: 'One in five women have experienced violence by a non-partner perpetrator',
    cite: {
      top: '55.3%',
      left: '14.1%',
      text: 'Tenetur fugiat dolorem error, dolor provident eum eaque praesentium ex placeat aliquid facilis atque, voluptas modi aperiam necessitatibus a unde eius. Aspernatur eveniet odio architecto aliquid!'
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, inventore! Harum necessitatibus tempore, beatae possimus voluptates dolorem architecto labore ducimus quo explicabo hic. Labore asperiores nostrum quam dolores culpa porro, ad corrupti, explicabo fugiat repudiandae ea eius sequi, ab facilis dolorem molestiae delectus atque iusto necessitatibus nulla! Excepturi ut modi rem natus ducimus labore, dolor accusantium aliquid doloribus numquam voluptas harum quasi, placeat sunt ex unde magni porro? Explicabo perferendis fugiat quaerat fugit iste voluptate sed optio. Porro, quidem voluptates.',
    video: 'Marija_Babovic_pt2.mp4',
    columns: [
      {
        description: `
        <p class="description">non-partner</p>
        <p class="percentage" style="color: #70c6ad">19%</p>`,
        percentage: 18.8,
        color: '#70c6ad'
      }
    ]
  }, /* {
    id: 7,
    title: 'Marital duty',
    description: '17% of women agree that it is a wife\'s obligation to have sex with her husband even if she doesn\'t want to',
    columns: [
      {
        description: `
        <p class="percentage" style="color: #70c6ad">17%</p>`,
        percentage: 17,
        color: '#70c6ad'
      }
    ]
  }, {
    id: 8,
    title: 'Provocation',
    description: 'One in four agrees that the violence is often provoked by the victim',
    columns: [
      {
        description: `
        <p class="percentage" style="color: #70c6ad">25%</p>`,
        percentage: 25,
        color: '#70c6ad'
      }
    ]
  }, {
    id: 9,
    title: 'Private matter',
    description: 'Almost third of the women agrees that domestic violence is a private matter, and should be handled within the family.',
    columns: [
      {
        description: `
        <p class="percentage" style="color: #70c6ad">30%</p>`,
        percentage: 30,
        color: '#70c6ad'
      }
    ]
  }, {
    id: 10,
    title: 'Types of violence and abuse - physical',
    description: 'Women who have been subject to physical violence since the age of 15. ',
    columns: [
      {
        description: `
        <p class="percentage" style="color: #00437b">21%</p>`,
        percentage: 21.2,
        color: '#00437b'
      }
    ]
  }, {
    id: 11,
    title: 'Types of violence and abuse - sexual',
    description: 'Women who have been subject to sexual violence since the age of 15. ',
    columns: [
      {
        description: `
        <p class="percentage" style="color: #00437b">6%</p>`,
        percentage: 6.3,
        color: '#00437b'
      }
    ]
  }, {
    id: 12,
    title: 'Types of violence and abuse - psychological',
    description: 'Women who have been subject to psychological violence since the age of 15. ',
    columns: [
      {
        description: `
        <p class="percentage" style="color: #00437b">47%</p>`,
        percentage: 46.9,
        color: '#00437b'
      }
    ]
  }, {
    id: 13,
    title: 'Physical injuries and psychological consequences - physical',
    description: '59% of the victims have physical injuries from the most serious incident',
    columns: [
      {
        description: `
        <p class="percentage" style="color: #7c3593">59%</p>`,
        percentage: 58.7,
        color: '#7c3593'
      }
    ]
  }, {
    id: 14,
    title: 'Physical injuries and psychological consequences - psychological',
    description: '82% of the victims have psychological consequences from the most serious incident',
    columns: [
      {
        description: `
        <p class="percentage" style="color: #7c3593">82%</p>`,
        percentage: 81.8,
        color: '#7c3593'
      }
    ]
  }, {
    id: 15,
    title: 'Lack of information',
    description: 'Almost half of the women don\'t know what to do after they experience violence. ',
    columns: [
      {
        description: `
        <p class="description">well informed</p>
        <p class="percentage">23%</p>`,
        percentage: 98,
        textAlign: 'right',
        textColor: 'white',
        color: '#fbaf17'
      }, {
        description: `
        <p class="description">somewhat informed</p>
        <p class="percentage">33%</p>`,
        percentage: 75,
        textTopPosition: 5,
        textAlign: 'right',
        textColor: 'white',
        color: '#668eb0'
      },
      {
        description: `
        <p class="description">not well informed</p>
        <p class="percentage">42%</p>`,
        percentage: 41.8,
        textAlign: 'right',
        textColor: 'white',
        color: '#00437b'
      }
    ]
  }, {
    id: 16,
    title: 'Only one in five',
    description: 'Only one in five women who experienced violence from a non-partner went to the police to help.',
    columns: [
      {
        description: `
        <p class="percentage" style="color: #fbaf17">19%</p>`,
        percentage: 18.8,
        color: '#fbaf17'
      }
    ]
  }, {
    id: 17,
    title: 'Even less',
    description: 'If the violence is done by a previous partner, even less seek the help of the police',
    columns: [
      {
        description: `
        <p class="percentage" style="color: #fbaf17">15%</p>`,
        percentage: 15,
        color: '#fbaf17'
      }
    ]
  }, {
    id: 18,
    title: 'Almost no one',
    description: 'If the violence happens in current relationship, only about 7 out of 100 women take official steps',
    columns: [
      {
        description: `
        <p class="percentage" style="color: #fbaf17">7%</p>`,
        percentage: 7,
        color: '#fbaf17'
      }
    ]
  } */
]

function paginate (isNextPage = true) {
  tooltip.classList.remove('active')
  tooltipButton.classList.remove('active')
  tooltipText.classList.remove('active')
  video.innerHTML = ''
  content.innerHTML = ''

  if (isNextPage && currentPage < data.length) {
    currentPage++
  } else if (!isNextPage && currentPage > 1) {
    currentPage--
  }

  console.log({currentPage})

  currentPage === 1 ? backButton.setAttribute('disabled', true) : backButton.removeAttribute('disabled')
  currentPage === data.length ? nextButton.setAttribute('disabled', true) : nextButton.removeAttribute('disabled')

  
  const selected = data.find(row => row.id === currentPage)
  
  if (selected) {
    backgroundFront.style.opacity = 0
    titleElement.innerHTML = selected.title
    descriptionElement.innerHTML = selected.description

    rectangles.forEach(rectangle => rectangle.style.width = 0)
    text.forEach(t => {
      t.removeAttribute('style')
      t.style.opacity = 0
    })
    
    if (currentPage > 3) {
      renderViz(selected)
    } else {
      renderPage(selected)
    }
  }
}

function renderPage (selected) {
  setTimeout(function () {
    backgroundFront.style.opacity = 1
    backgroundFront.src = `images/${selected.background}`
  }, animationTime)
}

function renderViz (selected) {
  setTimeout(function () {
    selected.columns.forEach((column, index) => {
      rectangles[index].style.background = column.color
      rectangles[index].style.width = `${column.percentage}%`
      text[index].innerHTML = column.description
      text[index].style.opacity = 1
      text[index].style.left = `${column.textPercentage || column.percentage}%`

      if (column.textTopPosition) {
        text[index].style.top = `${column.textTopPosition}%`
      }

      if (column.textAlign) {
        text[index].style.textAlign = column.textAlign
      }

      if (column.textColor) {
        text[index].style.color = column.textColor
        text[index].querySelector('.description').style.color = column.textColor
        text[index].style.background = column.color
      }

      if (selected.id === 15) {
        if (container.offsetWidth < 480) {
          const next = selected.columns[index + 1]
          console.log({current: column.percentage})
          console.log({next: next ? next.percentage : undefined})

          text[index].style.height = '70px'
          text[index].style.width = `${next ?
            column.percentage - next.percentage  : column.percentage}%`
          text[index].style.left = `${next ? next.percentage  : 0}%`
        } else {
          text[index].style.left = `calc(${column.percentage - 1}% - ${text[index].offsetWidth + 10}px)`
        }
      }
      
      if (container.offsetWidth < 576 && selected.id === 4) {
        if (column.textTopPosition) {
          text[index].style.top = `${column.textTopPosition + 15}%`
        }
      }
    })

    console.log({selected})
    if (selected.cite) {
      const {top, left, text} = selected.cite

      tooltip.classList.add('active')

      tooltip.style.top = top
      tooltip.style.left = left
      tooltipText.innerHTML = text
    } else {
      tooltip.classList.remove('active')
    }

    if (selected.video) {
      video.innerHTML = `
      <video controls>
        <source src="videos/${selected.video}"></source>
      </video>`
    }

    if (selected.content) {
      content.innerHTML = selected.content
    }
  }, animationTime)
}

function init () {
  const width = container.offsetWidth
  const baseWidth = 1000
  const baseHeight = 560
  const baseRatio = (baseHeight / baseWidth)

  infoGraphContainer.style.height = `${width * baseRatio}px`

  if (width < 600) {
    container.classList.add('mobile')
  } else if (width < 1000) {
    container.classList.add('tablet')
  }
}

function handleKeyDown (event) {
  switch (event.keyCode) {
    case 37:
      paginate(false)
      break
    case 39:
      paginate(true)
      break
  }
}

function toggleTooltip (event) {
  event.stopPropagation()

  tooltipButton.classList.toggle('active')
  tooltipText.classList.toggle('active')
}

init()

document.addEventListener('swiped-right', e => paginate(false))
nextButton.addEventListener('click', e => {
  paginate(true)
})
document.addEventListener('swiped-left', e => {
  paginate(true)
})
backButton.addEventListener('click', e => paginate(false))
infoGraphContainer.addEventListener('click', e => paginate(true))
window.addEventListener('keydown', handleKeyDown)

tooltipButton.addEventListener('click', toggleTooltip)