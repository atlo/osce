const infoGraphContainer = document.querySelector('.info-graph-container')
const rectangleContainer = document.querySelector('.rectangle.active')
const rectangles = Array.from(document.querySelectorAll('.rectangle li'))
const text = Array.from(document.querySelectorAll('.text li'))
const paginationButtons = Array.from(document.querySelectorAll('.pagination button'))
const titleElement = document.querySelector('.hero h1')
const descriptionElement = document.querySelector('.hero p')

const width = infoGraphContainer.offsetWidth
const colors = ['red', 'blue', 'yellow', 'green']

const data = [
  {
    id: 1,
    title: 'Violent reality',
    description: 'Seventy per cent of women have experienced some form of sexual harassment since the age of 15. With 31 per cent said to have experienced sexual violence in the past 12 months. ',
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
    id: 2,
    title: 'When it\'s known',
    description: 'Almost quarter of the participating women said to have experienced physical or sexual violence by her partner. ',
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
    id: 3,
    title: 'When it\'s unknown',
    description: 'One in five women have experienced violence by a non-partner perpetrator',
    columns: [
      {
        description: `
        <p class="description">non-partner</p>
        <p class="percentage" style="color: #70c6ad">19%</p>`,
        percentage: 18.8,
        color: '#70c6ad'
      }
    ]
  }, {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
    title: 'Lack of information',
    description: 'Almost half of the women don\'t know what to do after they experience violence. ',
    columns: [
      {
        description: `
        <p class="description">well informed</p>
        <p class="percentage">23%</p>`,
        percentage: 98,
        textPercentage: 82,
        textAlign: 'right',
        textColor: 'white',
        color: '#fbaf17'
      }, {
        description: `
        <p class="description">somewhat informed</p>
        <p class="percentage">33%</p>`,
        percentage: 75,
        textPercentage: 53.5,
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
        textPercentage: 22,
        textAlign: 'right',
        textColor: 'white',
        color: '#00437b'
      }
    ]
  }, {
    id: 13,
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
    id: 14,
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
    id: 15,
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
  }
]

let columnSize = 6
let widthColumnRatio = columnSize / width * 100

function calculateColumns (percentage) {
  return Math.floor((percentage * 10) / columnSize)
}

function paginate (event) {
  const button = event.target.closest('button')

  paginationButtons.forEach(el => el.classList.remove('active'))
  
  button.classList.add('active')

  const selected = data.find(row => row.id === parseInt(button.value))
  
  if (selected) {
    console.log({selected})
    titleElement.innerHTML = selected.title
    descriptionElement.innerHTML = selected.description

    rectangles.forEach(rectangle => rectangle.style.width = 0)
    text.forEach(t => {
      t.removeAttribute('style')
      t.style.opacity = 0
    })
    
    setTimeout(function () {
      selected.columns.forEach((column, index) => {
        console.log({column})
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
          text[index].style.background = column.color
        }
      })
    }, 1000)
  }
}

function setRectangle (ratio, color) {
  const ratioText = `${ratio}%`
  rectangle.style.background = color
  rectangle.style.width = `${calculateColumns(ratio)}%`
  text.style.left = ratioText
  text.style.color = color
  text.innerHTML = ratioText
  console.log({calculated: calculateColumns(ratio)})
}

paginationButtons.forEach(button => button.addEventListener('click', paginate))
