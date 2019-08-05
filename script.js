
const container = document.querySelector('#atlo')
const backButton = document.querySelector('.back-button')
const nextButton = document.querySelector('.next-button')
const tooltip = document.querySelector('.tooltip')
const tooltipText = document.querySelector('.tooltip-text')
const textTitle = document.querySelector('.content-text h2')
const textParagraph = document.querySelector('.content-text p')
const video = document.querySelector('video')
const leftNumber = document.querySelector('.left-number')
const rightNumber = document.querySelector('.right-number')

const animationTime = 800

let currentPage = 0

const data = [
  {
    id: 1,
    title: 'Lorem ipsum #1',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    video: 'Valentina_Andrasek.mp4',
    left: {
      percentage: 24,
      tooltip: {
        position: 17,
        text: '<p>Men are allowed to do everything. They can go out whenever they want, they can just stay in betting shops and drink alcohol and smoke cigarettes.</p><p>Female, aged 36-55, urban, Albania</p>'
      }
    },
    right: {
      percentage: 13
    }
  }, {
    id: 2,
    title: 'Lorem ipsum #2',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    video: 'Marija_Babovic_pt_1.mp4',
    left: {
      percentage: 33
    },
    right: {
      percentage: 43,
      tooltip: {
        position: 21,
        text: '<p>Men are allowed to do everything. They can go out whenever they want, they can just stay in betting shops and drink alcohol and smoke cigarettes.</p><p>Female, aged 36-55, urban, Albania</p>'
      }
    }
  }, {
    id: 3,
    title: 'Lorem ipsum #3',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    video: 'Marija_Babovic_pt2.mp4',
    left: {
      percentage: 17
    },
    right: {
      percentage: 23
    }
  }, {
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
  document
    .querySelector(`.${group} li:nth-of-type(${column}) div:nth-of-type(${5 - row})`)
    .classList.add('action')
}

function paginate (isNext) {
  tooltip.classList.remove('active')
  tooltipText.classList.remove('active')

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

  textTitle.innerHTML = selected.title
  textParagraph.innerHTML = selected.description
  
  setHighlightedElements('left', calculateRowsAndColumns(left.percentage))
  setHighlightedElements('right', calculateRowsAndColumns(right.percentage))

  leftNumber.innerHTML = `${selected.left.percentage}%`
  leftNumber.style.left = `${33 - selected.left.percentage / 2}%`
  rightNumber.innerHTML = `${selected.right.percentage}%`
  rightNumber.style.left = `${54 + selected.right.percentage / 2}%`

  video.innerHTML = `
  <video controls>
    <source src="videos/${selected.video}"></source>
  </video>`

  if (left.tooltip) {
    const {columns, rows} = calculateRowsAndColumns(left.tooltip.position)
    setToolTip('left', 20 - columns, rows - 1)

    tooltip.classList.add('active')
    tooltipText.innerHTML = tooltip.text
  }

  if (right.tooltip) {
    const {columns, rows} = calculateRowsAndColumns(right.tooltip.position)
    setToolTip('right', columns + 1, rows - 1)

    tooltip.classList.add('active')
    tooltipText.innerHTML = tooltip.text
  }
}

function toggleTooltip (event) {
  event.stopPropagation()

  tooltipButton.classList.toggle('active')
  tooltipText.classList.toggle('active')
}

function showTooltup (event) {
  event.stopPropagation()

  tooltipButton.classList.add('active')
  tooltipText.classList.add('active')
}

function hideTooltup (event) {
  event.stopPropagation()

  tooltipButton.classList.remove('active')
  tooltipText.classList.remove('active')
}

paginate(false)
backButton.addEventListener('click', e => paginate(false))
nextButton.addEventListener('click', e => paginate(true))

/* tooltipButton.addEventListener('click', toggleTooltip)
tooltipButton.addEventListener('mouseenter', showTooltup)
tooltipButton.addEventListener('mouseleave', hideTooltup) */