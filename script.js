
const container = document.querySelector('#atlo')
const map = document.querySelector('.map')
const backButton = document.querySelector('.back-button')
const nextButton = document.querySelector('.next-button')
const tooltip = document.querySelector('.tooltip')
const tooltipTriangle = document.querySelector('.tooltip:before')
const tooltipText = document.querySelector('.tooltip-text')
const textTitle = document.querySelector('.content-text h2')
const textParagraph = document.querySelector('.content-text p')
const video = document.querySelector('video')
const leftNumber = Array.from(document.querySelectorAll('.left-number'))
const rightNumber = Array.from(document.querySelectorAll('.right-number'))
const leftRiver = Array.from(document.querySelectorAll('.left'))
const left2River = Array.from(document.querySelectorAll('.left-2'))
const rightRiver = Array.from(document.querySelectorAll('.right'))
const right2River = Array.from(document.querySelectorAll('.right-2'))
const ukraineRivers = Array.from(document.querySelectorAll('.ukraine'))
const videoButtons = Array.from(document.querySelectorAll('.video-button'))
const videoModal = document.querySelector('.video-modal')
const videoModalCloseButton = document.querySelector('.video-modal button')
const paginationButtons = Array.from(document.querySelectorAll('.pagination-pages > li > ul > li button'))
const nextPage = document.querySelector('.next-page a')
const page2 = document.querySelector('#page-2')
const rivers = document.querySelector('.rivers')
const mapText = document.querySelector('.map-text')
const menu = document.querySelector('.menu')
const overlayContainers = Array.from(document.querySelectorAll('.overlay-container'))
const leftSubheader = document.querySelector('.slider .left .subheader')
const rightSubheader = document.querySelector('.slider .right .subheader')
const kosovoSup = document.querySelector('.map-text sup')
const kosovoFootnote = document.querySelector('.kosovo-footnote')
const womenIcons = Array.from(document.querySelectorAll('.slider li div'))

const countries = [
  {
    name: 'ukraine',
    fullName: 'Ukraine',
    all: '14.998.738',
    affected: '1.128.738'
  },
  {
    name: 'moldova',
    fullName: 'Moldova',
    all: '1.191.922',
    affected: '89.272'
  },
  {
    name: 'serbia',
    fullName: 'Serbia',
    all: '2.657.994',
    affected: '678.529'
  },
  {
    name: 'kosovo',
    fullName: 'Kosovo',
    all: '584.388',
    affected: '428.129'
  },
  {
    name: 'macedonia',
    fullName: 'North Macedonia',
    all: '771.606',
    affected: '143.641'
  },
  {
    name: 'albania',
    fullName: 'Albania',
    all: '1.038.287',
    affected: '202.130'
  },
  {
    name: 'montenegro',
    fullName: 'Montenegro',
    all: '225.905',
    affected: '23.344'
  },
  {
    name: 'bosnia',
    fullName: 'Bosnia and Herzegovina',
    all: '1.335.698',
    affected: '858.665'
  },
  {
    name: 'all',
    fullName: '',
    all: {
      affected: {
        experienced: '2.247.498',
        notExperienced: '1.304.950'
      },
      notAffected: {
        experienced: '5.439.534',
        notExperienced: '13.812.555'
      }
    }
  }
]

rivers.addEventListener('mouseleave', hideMapTooltip)

countries
  .forEach(country => {
    Array
      .from(document.querySelectorAll(`.${country.name}.hover-tooltip`))
      .forEach(el => {
        el.addEventListener('mouseenter', e => showMapTooltip(country, Array.from(el.classList)))
        //el.addEventListener('mouseleave', e => hideMapTooltip(country))
      })
  })

function showText(country) {
  if (country.name === 'bosnia') {
    document.querySelector('.bosnia-text tspan').setAttribute('y', window.scrollY + 21.6)
  }

  Array
    .from(document.querySelectorAll(`.${country.name}-text`))
    .forEach(el => {
      el.classList.add('active')
      el.setAttribute('y', window.scrollY)
    })
}

function hideText (country) {
  Array
    .from(document.querySelectorAll(`.${country.name}-text`))
    .forEach(el => {
      el.classList.remove('active')
      setTimeout(function () {
        el.setAttribute('y', 0)
      }, 300)
    })
}

const animationTime = 800

let currentPage = 0

const data = [ 
  {
    id: 1,
    title: 'Perpetrators',
    subheaders: {
      left: 'Conflict related incidents',
      right: 'Not conflict related incidents'
    },
    description: 'Incidents of conflict related non-partner violence are much more likely to be at the hands of multiple perpetrators, with a majority of incidents (55%) perpetrated by three or more people. This is eleven times more than the average of 5% across all victims of non-partner violence.',
    left: {
      percentage: 55,
      modifiers: [-16, -12],
      tooltip: {
        position: 13,
        text: '<p>I wanted to mention rape in camps during the war. I think in the war the violence was sexual, not by spouses but by the aggressor’s army over women in camps. And it happened often. Those who raped during the war, we know most of them are not judged, are rapists even today. For sure.</p><p>Female, aged 18-37, rural, Bosnia and Herzegovina</p>'
      }
    },
    right: {
      percentage: 5,
      modifiers: [-65, -65]
    }
  }, {
    id: 2,
    title: 'Perpetrators',
    subheaders: {
      left: 'Conflict related incidents',
      right: 'Not conflict related incidents'
    },
    description: 'Women who are directly conflict-affected and who associate their most serious incident of violence with conflict are more likely to say that the perpetrator was either under the influence of drugs (8% compared with 1% on average), or under the influence of both drugs and alcohol (15% compared with 2% on average).',
    left: {
      percentage: 15,
      modifiers: [18, 22]
    },
    right: {
      percentage: 2,
      modifiers: [-71, -71]
    }
  }, {
    id: 3,
    title: 'Severity of the most serious incidents of violence against women',
    subheaders: {
      left: 'Directly conflict affected women',
      right: 'Not conflict affected women'
    },
    description: 'Being pushed or shoved.',
    left: {
      percentage: 34,
      modifiers: [1, 6]
    },
    right: {
      percentage: 40,
      modifiers: [5, 5]
    }
  }, {
    id: 4,
    title: 'Severity of the most serious incidents of violence against women',
    subheaders: {
      left: 'Directly conflict affected women',
      right: 'Not conflict affected women'
    },
    description: 'Having their head beaten against something.',
    left: {
      percentage: 7,
      modifiers: [24, 29]
    },
    right: {
      percentage: 4,
      modifiers: [-67, -67]
    }
  }, {
    id: 5,
    title: 'Severity of the most serious incidents of violence against women',
    subheaders: {
      left: 'Directly conflict affected women',
      right: 'Not conflict affected women'
    },
    description: 'Being raped.',
    left: {
      percentage: 8,
      modifiers: [23, 28]
    },
    right: {
      percentage: 6,
      modifiers: [-63, -63]
    }
  }, {
    id: 6,
    title: 'Severity of the most serious incidents of violence against women',
    subheaders: {
      left: 'Directly conflict affected women',
      right: 'Not conflict affected women'
    },
    description: 'Made to take part in any form of sexual activity when they did not want to or were unable to refuse.',
    left: {
      percentage: 5,
      modifiers: [23, 30],
      tooltip: {
        position: 3,
        text: '<p>I think there was absolutely a different form of violence in war circumstances. There was no violence in the family, but outside of the home yes – rape in camps, physical violence by armed individuals, breaking in to houses, beatings, intimidation…</p><p>Female, 38-55, conflict-affected, Bosnia and Herzegovina</p>'
      }
    },
    right: {
      percentage: 4,
      modifiers: [-67, -67]
    }
  }, {
    id: 7,
    title: 'Experiences of refugees, IDPS and returnees (most serious incidents)',
    subheaders: {
      left: 'Directly conflict affected women',
      right: 'Not conflict affected women'
    },
    description: 'Refugees or displaced persons: Being cut, stabbed, or shot at.',
    left: {
      percentage: 17,
      modifiers: [16, 20]
    },
    right: {
      percentage: 1,
      modifiers: [-71, -71]
    }
  }, {
    id: 8,
    title: 'Experiences of refugees, IDPS and returnees (most serious incidents)',
    subheaders: {
      left: 'Directly conflict affected women',
      right: 'Not conflict affected women'
    },
    description: 'Returnees: Being raped.',
    left: {
      percentage: 21,
      modifiers: [12, 17]
    },
    right: {
      percentage: 6,
      modifiers: [-63, -63]
    }
  }, {
    id: 9,
    title: 'Health consequences of violence against women',
    subheaders: {
      left: 'Conflict related incidents',
      right: 'Not conflict related incidents'
    },
    description: 'Suffering from long-term psychological impact.',
    left: {
      percentage: 85,
      modifiers: [-42, -37],
      tooltip: {
        position: 46,
        text: '<p>I think the violence was sexual during the war. Not by spouses but by the aggressor’s army against women in camps, and it took place often.</p><p>Female, aged 18–37, rural, FBiH</p>'
      }
    },
    right: {
      percentage: 81,
      modifiers: [87, 87]
    }
  }, {
    id: 10,
    title: 'Health consequences of violence against women',
    subheaders: {
      left: 'Conflict related incidents',
      right: 'Not conflict related incidents'
    },
    description: 'Depression.',
    left: {
      percentage: 43,
      modifiers: [-6, -2]
    },
    right: {
      percentage: 27,
      modifiers: [-19, -19]
    }
  }, {
    id: 11,
    title: 'Health consequences of violence against women',
    subheaders: {
      left: 'Conflict related incidents',
      right: 'Not conflict related incidents'
    },
    description: 'Anxiety.',
    left: {
      percentage: 50,
      modifiers: [-12, -8]
    },
    right: {
      percentage: 39,
      modifiers: [3, 3]
    }
  }, {
    id: 12,
    title: 'Health consequences of violence against women',
    subheaders: {
      left: 'Conflict related incidents',
      right: 'Not conflict related incidents'
    },
    description: 'Loss of self-confidence.',
    left: {
      percentage: 37,
      modifiers: [-1, 3]
    },
    right: {
      percentage: 18,
      modifiers: [-39, -39]
    }
  }, {
    id: 13,
    title: 'Barriers to reporting, experiences of reporting and satisfaction with services',
    subheaders: {
      left: 'Conflict related incidents',
      right: 'Not conflict related incidents'
    },
    description: 'Where the most serious incident of violence was connected to conflict, victims of all perpetrator types are less likely than women overall to have reported the incident to the police.',
    left: {
      percentage: 13,
      modifiers: [19, 24]
    },
    right: {
      percentage: 18,
      modifiers: [-39, -39]
    }
  }, {
    id: 14,
    title: 'Barriers to reporting, experiences of reporting and satisfaction with services',
    subheaders: {
      left: 'Conflict related incidents',
      right: 'Not conflict related incidents'
    },
    description: 'Reason for not reporting the most serious incident to police: belief that the police would not do anything.',
    left: {
      percentage: 5,
      modifiers: [24, 29]
    },
    right: {
      percentage: 15,
      modifiers: [-43, -43],
      tooltip: {
        position: 14,
        text: '<p>I didn’t want my parents to feel ashamed. Besides, who would have believed me? At that time, there were no tests. And they always blamed the girl… There were two girls in the village, two older sisters who were very frequently raped by many [men]. And they were beaten and raped, and [everyone in the village would say that it was their fault]. And that’s it! It wasn’t the boys who were guilty.</p><p>Survivor of conflict-related and non-conflict-related violence, Moldovan</p>'
      }
    }
  }, {
    id: 15,
    title: 'Barriers to reporting, experiences of reporting and satisfaction with services',
    subheaders: {
      left: 'Conflict related incidents',
      right: 'Not conflict related incidents'
    },
    description: 'Reason for not reporting the most serious incident to other services: not wanting anyone to know about it.',
    left: {
      percentage: 21,
      modifiers: [21, 26]
    },
    right: {
      percentage: 17,
      modifiers: [-39, -39]
    }
  }, {
    id: 16,
    title: 'Partner fought in a conflict',
    subheaders: {
      left: 'Directly conflict affected women',
      right: 'Not conflict affected women'
    },
    description: 'Intimate partner physical and/or sexual violence since the age of 15.',
    left: {
      percentage: 30,
      modifiers: [5, 9]
    },
    right: {
      percentage: 22,
      modifiers: [-31, -31]
    }
  }, {
    id: 17,
    title: 'Partner fought in a conflict',
    subheaders: {
      left: 'Directly conflict affected women',
      right: 'Not conflict affected women'
    },
    description: 'Women whose current partner suffered from at least one psychological impact due to fighting in a conflict: physical and/or sexual violence at their hands since the age of 15.',
    left: {
      percentage: 48,
      modifiers: [-10, -6]
    },
    right: {
      percentage: 15,
      modifiers: [-45, -45],
      tooltip: {
        position: 9,
        text: `<p>Here, people would say: "Come on, how could she report her husband to the
        police? It's her husband. He is a man after all. Wasn't she ashamed? She has
        three children."</p><p>Female, aged 38-55, conflict-affected, urban, Bosnia and Herzegovina</p>`
      }
    }
  }
]

function range (length) {
  return Array.from({length}, (v, i) => i + 1)
}

function calculateRowsAndColumns (percentage) {
  const columns = Math.floor(percentage / 5)
  const rows = percentage % 5

  return {
    columns,
    rows
  }
}

function setHighlightedElements (group, {columns, rows}) {
  Array
    .from(document.querySelectorAll(`.${group} div`))
    .forEach(el => el.classList.remove('highlighted'))

  if (columns > 0) {
    if (group === 'left') {
      range(columns).forEach((item, index) => {
        Array
          .from(document.querySelectorAll(`.${group} li:nth-of-type(${20 - index}) div`))
          .forEach(el => el.classList.add('highlighted'))
      })
    } else {
      range(columns).forEach(item => {
        Array
          .from(document.querySelectorAll(`.${group} li:nth-of-type(${item}) div`))
          .forEach(el => el.classList.add('highlighted'))
      })
    }
  }

  if (rows > 0) {
    if (group === 'left') {
      range(rows).forEach((_item, index) => {
        Array
          .from(document.querySelectorAll(`.${group} li:nth-of-type(${20 - columns}) div:nth-of-type(${5 - index})`))
          .forEach(el => el.classList.add('highlighted'))
      })
    } else {
      range(rows).forEach((_item, index) => {
        Array
          .from(document.querySelectorAll(`.${group} li:nth-of-type(${columns + 1}) div:nth-of-type(${5 - index})`))
          .forEach(el => el.classList.add('highlighted'))
      })
    }
  }
}

function setToolTip (group, column, row) {
  const activeIcon = document.querySelector(`.${group} li:nth-of-type(${column}) div:nth-of-type(${5 - row})`)
  activeIcon.classList.add('action')
  activeIcon.addEventListener('click', toggleTooltip)
  activeIcon.addEventListener('mouseenter', showTooltip)
  activeIcon.addEventListener('mouseleave', hideTooltip)
}

function paginate (isNext, page) {
  tooltip.classList.remove('active')

  Array
    .from(document.querySelectorAll('.slider div.action'))
    .forEach(el => el.classList.remove('action'))

  if (isNext) {
    currentPage = currentPage === data.length - 1 ? currentPage : currentPage += 1
  } else {
    if (page) {
      currentPage = Number(page)
    } else {
      currentPage = currentPage === 0 ? currentPage : currentPage - 1
    }
  }
  
  paginationButtons.forEach(button => button.classList.remove('active'))
  paginationButtons[currentPage].classList.add('active')
  
  const selected = data[currentPage]
  const {left, right, subheaders} = selected

  textTitle.innerHTML = selected.title
  textParagraph.innerHTML = selected.description
  leftSubheader.innerHTML = subheaders.left
  rightSubheader.innerHTML = subheaders.right

  const leftPositions = calculateRowsAndColumns(left.percentage)
  const rightPositions = calculateRowsAndColumns(right.percentage)


  womenIcons.forEach(function (icon) {
    icon.classList.remove('action')
    icon.removeEventListener('click', toggleTooltip)
    icon.removeEventListener('mouseenter', showTooltip)
    icon.removeEventListener('mouseleave', hideTooltip)
  })

  setHighlightedElements('left', leftPositions)
  setHighlightedElements('right', rightPositions)

  leftNumber.forEach(element => element.innerHTML = `${selected.left.percentage}%`)
  rightNumber.forEach(element => element.innerHTML = `${selected.right.percentage}%`)
  rightNumber.forEach(element => element.style.right = 0)

  if (left.tooltip) {
    const {columns, rows} = calculateRowsAndColumns(left.tooltip.position)
    setToolTip('left', 20 - columns, rows - 1)

    tooltipText.innerHTML = left.tooltip.text
  }

  if (right.tooltip) {
    const {columns, rows} = calculateRowsAndColumns(right.tooltip.position)
    setToolTip('right', columns + 1, rows - 1)

    tooltipText.innerHTML = right.tooltip.text
  }
}

function toggleTooltip (event) {
  event.stopPropagation()

  const {x, y} = getMousePosition()
  
  tooltip.style.top = y + 45 + 'px'

  if (tooltip.classList.contains('active')) {
    tooltip.classList.remove('active')

    tooltip.style.left = -9999 + 'px'
    tooltip.style.opacity = 0
  } else {
    tooltip.classList.add('active')

    tooltip.style.opacity = 1

    if (window.innerWidth < 1000) {
      tooltip.style.left = 0 + 'px'
    } else {
      tooltip.style.left = x - 110 + 'px'
    }
  }
}

function showTooltip (event) {
  event.stopPropagation()

  const {x, y} = getMousePosition()
  
  tooltip.style.top = y + 45 + 'px'
  
  if (window.innerWidth < 1000) {
    tooltip.style.left = 0 + 'px'
  } else {
    tooltip.style.left = x - 110 + 'px'
  }

  tooltip.style.opacity = 1
}

function hideTooltip (event) {
  event.stopPropagation()

  tooltip.classList.remove('active')
  tooltip.style.opacity = 0

  setTimeout(function () {
    tooltip.style.left = '-9999px'
  }, 300)
}

function showVideoModal (event) {
  const button = event.target.parentElement
  const id = button.dataset.id || '1'
  const extension = id === '3' ? '.mp4' : '.mov'

  video.src = `videos/${id}${extension}`

  videoModal.style.left = '0'
  videoModal.style.opacity = 1
}

function hideVideoModal (event) {
  videoModal.style.opacity = 0

  video.pause()

  setTimeout(function () {
    videoModal.style.left = '-9999px'
  }, 300)
}

paginate(false)
backButton.addEventListener('click', e => paginate(false))
nextButton.addEventListener('click', e => paginate(true))

videoButtons.forEach(button => button.addEventListener('click', showVideoModal))
videoModalCloseButton.addEventListener('click', hideVideoModal)

paginationButtons.forEach(button => addEventListener('click', function (event) {
  const {value} = event.target

  if (value) {
    paginationButtons.forEach(button => button.classList.remove('active'))
    event.target.classList.add('active')

    paginate(false, value)
  }
}))

function showNextPage () {

}

function showRivers () {
  animateLines(Array.from(document.querySelectorAll('.first')))

  setTimeout(function () {
    animateLines(Array.from(document.querySelectorAll('.second')), 4)
  }, 1000)

  setTimeout(function () {
    overlayContainers.forEach(element => element.classList.add('active'))
  }, 2000)

  setTimeout(function () {
    animateLines(Array.from(document.querySelectorAll('.third')), 1.5)
  }, 5000)

  document.removeEventListener('wheel', showRivers)
}

nextPage.addEventListener('click', function (event) {
  event.preventDefault()

  page2.classList.add('active')

  setTimeout(function () {
    page2.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    setTimeout(function () {
      map.classList.add('active')
      mapText.classList.add('active')
      menu.classList.add('active')

      if (window.innerWidth < 1000) {
        document.addEventListener('scroll', showRivers)
      } else {
        document.addEventListener('wheel', showRivers)
      }

    }, 500)
  }, 100)
})

function animateLines (elements, seconds = 1) {
  elements.forEach(function (element) {
    element.classList.add('active')
    const length = element.getTotalLength()

    element.style.strokeDasharray = length  
    element.style.strokeDashoffset = length 
    element.style.animation = `dash ${seconds}s linear forwards`
  })
}

function getMousePosition () {
  return {
    x: window.event.pageX + 60,
    y: window.event.pageY
  }
}

function showMapTooltip (country, selectors) {
  const tooltip = document.querySelector('.map-tooltip')
  
  if (selectors.includes('all')) {
    let text = ''

    if (selectors.includes('all-affected-experienced')) {
      text= `All conflict affected women experienced violence: <strong>${country.all.affected.experienced}</strong>`
    } else if (selectors.includes('all-affected-not-experienced')) {
      text= `All conflict affected women not experienced violence:  <strong>${country.all.affected.experienced}</strong>`
    } else if (selectors.includes('all-not-affected-experienced')) {
      text= `All not conflict affected women experienced violence:  <strong>${country.all.notAffected.experienced}</strong>`
    } else {
      text= `All not conflict affected women not experienced violence:  <strong>${country.all.notAffected.notExperienced}</strong>`
    }

    tooltip.innerHTML = text
  } else {
    tooltip.innerHTML = `
    <p>${country.fullName} female population: <strong>${country.all}</strong>;</p>
    <p>directly conflict affected women: <strong>${country.affected}</strong></p>
    `
  }

  const {x, y} = getMousePosition()

  tooltip.style.top = y + 'px'
  tooltip.style.left = x + 'px'
  tooltip.style.opacity = 1
}

function hideMapTooltip () {
  const tooltip = document.querySelector('.map-tooltip')

  tooltip.style.opacity = 0
  setTimeout(function () {
    tooltip.style.left = '-9999px'
  }, 300)

}

const iconButtons = Array.from(document.querySelectorAll('.icon-button'))

iconButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    const parent =  event.target.closest(".icon-button")
    const {value} = parent
    
    if (value) {
      const paginationButton = paginationButtons.find(button => button.value === value)

      if (paginationButton) {
        paginationButton.click()
      }
    }
  })
})

kosovoSup.addEventListener('mouseenter', function () {
  kosovoFootnote.classList.add('active')
})

kosovoSup.addEventListener('mouseleave', function () {
  kosovoFootnote.classList.remove('active')
})
