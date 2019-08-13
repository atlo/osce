
const container = document.querySelector('#atlo')
const backButton = document.querySelector('.back-button')
const nextButton = document.querySelector('.next-button')
const tooltip = document.querySelector('.tooltip')
const tooltipTriangle = document.querySelector('.tooltip:before')
const tooltipText = document.querySelector('.tooltip-text')
const textTitle = document.querySelector('.content-text h2')
const textParagraph = document.querySelector('.content-text p')
const video = document.querySelector('video')
const leftNumber = document.querySelector('.left-number')
const rightNumber = document.querySelector('.right-number')
const leftRiver = Array.from(document.querySelectorAll('.left'))
const left2River = Array.from(document.querySelectorAll('.left-2'))
const rightRiver = Array.from(document.querySelectorAll('.right'))
const right2River = Array.from(document.querySelectorAll('.right-2'))
const ukraineRivers = Array.from(document.querySelectorAll('.ukraine'))

const countries = ['ukraine', 'moldova', 'serbia', 'kosovo', 'macedonia', 'albania', 'montenegro', 'bosnia']

countries.forEach(country => {
  Array
    .from(document.querySelectorAll(`.${country}`))
    .forEach(el => {
      el.addEventListener('mouseenter', e => showText(country))
      el.addEventListener('mouseleave', e => hideText(country))
    })
})

function showText(country) {
  console.log(window.scrollY)
  Array
    .from(document.querySelectorAll(`.${country}-text`))
    .forEach(el => {
      el.classList.add('active')
      /* el.setAttribute('y', window.scrollY) */
    })
}

function hideText (country) {
  Array
    .from(document.querySelectorAll(`.${country}-text`))
    .forEach(el => {
      el.classList.remove('active')
      /* setTimeout(function () {
        el.setAttribute('y', 0)
      }, 300) */
    })
}

const animationTime = 800

let currentPage = 0

const data = [
  {
    id: 1,
    title: 'Perpetrators',
    description: 'For women directly affected by conflict, the perpetrator of these assaults is much more likely to be someone other than an intimate partner compared to women who are not directly conflict-affected (78% versus 46%). (Page 6)',
    left: {
      percentage: 78,
      modifiers: [-36, -31]
    },
    right: {
      percentage: 46,
      modifiers: [17, 17]
    }
  }, {
    id: 2,
    title: 'Perpetrators',
    description: 'Serious incidents of non-partner violence connected to conflict are much more likely to be at the hands of multiple perpetrators, with the majority of incidents (55%) perpetrated by three or more people. This is eleven times more than the average of 5% across all victims of non-partner violence. (page 7)',
    left: {
      percentage: 55,
      modifiers: [-16, -12]
    },
    right: {
      percentage: 5,
      modifiers: [-65, -65]
    }
  }, {
    id: 3,
    title: 'Perpetrators',
    description: 'Perpetrators of the most serious incident of intimate partner or non-partner violence connected with conflict are not more likely to be drunk at the time of this incident, but victims of these incidents are more likely to say that the perpetrator was either under the influence of drugs (8% compared with 1% on average), or under the influence of both drugs and alcohol (15% compared with 2% on average). (page 7)',
    left: {
      percentage: 15,
      modifiers: [18, 22]
    },
    right: {
      percentage: 2,
      modifiers: [-71, -71]
    }
  }, {
    id: 4,
    title: 'Severity of violance in conflict',
    description: 'being pushed or shoved',
    left: {
      percentage: 34,
      modifiers: [1, 6]
    },
    right: {
      percentage: 40,
      modifiers: [5, 5]
    }
  }, {
    id: 5,
    title: 'Severity of violance in conflict',
    description: 'having their head beaten against something',
    left: {
      percentage: 7,
      modifiers: [24, 29]
    },
    right: {
      percentage: 4,
      modifiers: [-67, -67]
    }
  }, {
    id: 6,
    title: 'Severity of violance in conflict',
    description: 'being raped',
    left: {
      percentage: 8,
      modifiers: [23, 28]
    },
    right: {
      percentage: 6,
      modifiers: [-63, -63]
    }
  }, {
    id: 7,
    title: 'Severity of violance in conflict',
    description: 'being forced to partake in some form of sexual activity when they did not want to',
    left: {
      percentage: 6,
      modifiers: [23, 30]
    },
    right: {
      percentage: 4,
      modifiers: [-67, -67]
    }
  }, {
    id: 8,
    title: 'Experiences of refugees, IDPS and returnees (use also quotes)',
    description: 'refugees or displaced / being cut or stabbed, or shot',
    left: {
      percentage: 17,
      modifiers: [16, 20],
      tooltip: {
        position: 13,
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p><p>Female, aged 36-55, urban, Albania</p>'
      }
    },
    right: {
      percentage: 2,
      modifiers: [-71, -71]
    }
  }, {
    id: 9,
    title: 'Experiences of refugees, IDPS and returnees (use also quotes)',
    description: 'returnees / being raped',
    left: {
      percentage: 21,
      modifiers: [12, 17]
    },
    right: {
      percentage: 6,
      modifiers: [-63, -63],
      tooltip: {
        position: 3,
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p><p>Female, aged 36-55, urban, Albania</p>'
      }
    }
  }, {
    id: 10,
    title: 'Health effects of violance against women in clonflict',
    description: 'suffering from a psychological impact',
    left: {
      percentage: 85,
      modifiers: [-42, -37]
    },
    right: {
      percentage: 81,
      modifiers: [87, 87]
    }
  }, {
    id: 11,
    title: 'Health effects of violance against women in clonflict',
    description: 'depression',
    left: {
      percentage: 43,
      modifiers: [-6, -2]
    },
    right: {
      percentage: 28,
      modifiers: [-19, -19]
    }
  }, {
    id: 12,
    title: 'Health effects of violance against women in clonflict',
    description: 'anxiety',
    left: {
      percentage: 50,
      modifiers: [-12, -8]
    },
    right: {
      percentage: 39,
      modifiers: [3, 3]
    }
  }, {
    id: 13,
    title: 'Health effects of violance against women in clonflict',
    description: 'loss of self-confidence',
    left: {
      percentage: 37,
      modifiers: [-1, 3]
    },
    right: {
      percentage: 18,
      modifiers: [-39, -39]
    }
  }, {
    id: 14,
    title: 'Barriers to reporting, experiences of reporting and satisfaction with services',
    description: 'However, where the most serious incident of violence was connected to conflict, victims of all perpetrator types are less likely than women overall to have reported the incident to the police (13% compared to 18% of all serious incidents). Page 8',
    left: {
      percentage: 13,
      modifiers: [19, 24],
      tooltip: {
        position: 9,
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p><p>Female, aged 36-55, urban, Albania</p>'
      }
    },
    right: {
      percentage: 18,
      modifiers: [-39, -39]
    }
  }, {
    id: 15,
    title: 'Barriers to reporting, experiences of reporting and satisfaction with services',
    description: 'the police would not do anything',
    left: {
      percentage: 7,
      modifiers: [24, 29]
    },
    right: {
      percentage: 16,
      modifiers: [-43, -43],
      tooltip: {
        position: 14,
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p><p>Female, aged 36-55, urban, Albania</p>'
      }
    }
  }, {
    id: 16,
    title: 'Barriers to reporting, experiences of reporting and satisfaction with services',
    description: 'not wanting anyone to know about it',
    left: {
      percentage: 11,
      modifiers: [21, 26]
    },
    right: {
      percentage: 18,
      modifiers: [-39, -39]
    }
  }, {
    id: 17,
    title: 'Barriers to reporting, experiences of reporting and satisfaction with services',
    description: 'Women who are directly affected by conflict are somewhat less likely to have spoken to anyone other than the police and other institutions about their most serious incident of violence, with 59% having done so, compared to 65% of non-conflict affected women. ',
    left: {
      percentage: 59,
      modifiers: [-20, -15]
    },
    right: {
      percentage: 65,
      modifiers: [55, 55]
    }
  }, {
    id: 18,
    title: 'Partner was involved in conflict',
    description: 'intimate partner physical and/or sexual violence since the age of 15',
    left: {
      percentage: 30,
      modifiers: [5, 9]
    },
    right: {
      percentage: 22,
      modifiers: [-31, -31]
    }
  }, {
    id: 19,
    title: 'Partner was involved in conflict',
    description: 'Women whose current partner suffered from at least one psychological impact /  physical and/or sexual violence at their hands since the age of 15 ',
    left: {
      percentage: 48,
      modifiers: [-10, -6]
    },
    right: {
      percentage: 15,
      modifiers: [-45, -45]
    }
  }
  /* {
    id: 3,
    title: 'Lorem ipsum #4',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    video: 'Valentina_Andrasek.mp4',
    left: {
      percentage: 41,
      tooltip: {
        position: 36,
        text: '<p>Men are allowed to do everything. They can go out whenever they want, they can just stay in betting shops and drink alcohol and smoke cigarettes.</p><p>Female, aged 36-55, urban, Albania</p>'
      }
    },
    right: {
      percentage: 3
    }
  } */
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
  console.log({group, column, row})
  const activeIcon = document.querySelector(`.${group} li:nth-of-type(${column}) div:nth-of-type(${5 - row})`)
  
  activeIcon.classList.add('action')
  activeIcon.addEventListener('click', toggleTooltip)
  activeIcon.addEventListener('mouseenter', showTooltup)
  activeIcon.addEventListener('mouseleave', hideTooltup)
  tooltip.style.top = `${(5 - row) * 20 + 5}%`

  if (group === 'left') {
    tooltip.classList.remove('right')
    tooltip.style.left = `${41.5 - (20 - column) * 2.5}%`
  } else {
    tooltip.classList.add('right')
    tooltip.style.left = `${0.5 + (column) * 2.5}%`
  }
}

function paginate (isNext) {
  tooltip.classList.remove('active')

  Array
    .from(document.querySelectorAll('.slider div.action'))
    .forEach(el => el.classList.remove('action'))

  if (isNext) {
    currentPage = currentPage === data.length - 1 ? currentPage : currentPage += 1
  } else {
    currentPage = currentPage === 0 ? currentPage : currentPage - 1
  }

  const selected = data[currentPage]
  const {left, right} = selected

  leftRiver.forEach(el => {
    el.style.strokeWidth = left.percentage / 100 * 170
    if (left.modifiers) {
      el.setAttribute('transform', `translate(${left.modifiers[0]}, 0)`)
    }
  })
  rightRiver.forEach(el => {
    el.style.strokeWidth = right.percentage / 100 * 400
    if (right.modifiers) {
      el.setAttribute('transform', `translate(${right.modifiers[0]}, 0)`)
    }
  })
  left2River.forEach(el => {
    el.style.strokeWidth = (100 - left.percentage) / 100 * 170
    if (left.modifiers) {
      el.setAttribute('transform', `translate(${left.modifiers[1]}, 0)`)
    }
  })
  right2River.forEach(el => {
    el.style.strokeWidth = (100 - right.percentage) / 100 * 400
    if (right.modifiers) {
      el.setAttribute('transform', `translate(${right.modifiers[1]}, 0)`)
    }
  })

  textTitle.innerHTML = selected.title
  textParagraph.innerHTML = selected.description
  
  const leftPositions = calculateRowsAndColumns(left.percentage)
  const rightPositions = calculateRowsAndColumns(right.percentage)

  setHighlightedElements('left', leftPositions)
  setHighlightedElements('right', rightPositions)
  console.log(leftPositions.columns, rightNumber.offsetWidth)
  leftNumber.innerHTML = `${selected.left.percentage}%`
  /* leftNumber.style.left = `calc(${(20leftPositions.columns) * 2.5}% + ${leftNumber.offsetWidth}px)` */
  rightNumber.innerHTML = `${selected.right.percentage}%`
  rightNumber.style.left = `calc(100% - ${rightNumber.offsetWidth}px)`

  video.innerHTML = `
  <video controls>
    <source src="videos/${selected.video}"></source>
  </video>`

  if (left.tooltip) {
    console.log(left.tooltip)
    const {columns, rows} = calculateRowsAndColumns(left.tooltip.position)
    setToolTip('left', 20 - columns, rows - 1)

    tooltipText.innerHTML = left.tooltip.text
  }

  if (right.tooltip) {
    console.log(right.tooltip)
    const {columns, rows} = calculateRowsAndColumns(right.tooltip.position)
    setToolTip('right', columns + 1, rows - 1)

    tooltipText.innerHTML = right.tooltip.text
  }
}

function toggleTooltip (event) {
  event.stopPropagation()

  tooltip.classList.toggle('active')
}

function showTooltup (event) {
  event.stopPropagation()

  tooltip.classList.add('active')
}

function hideTooltup (event) {
  event.stopPropagation()

  tooltip.classList.remove('active')
}

paginate(false)
backButton.addEventListener('click', e => paginate(false))
nextButton.addEventListener('click', e => paginate(true))


// 160

// 400