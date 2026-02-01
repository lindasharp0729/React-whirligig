

import { mount } from 'enzyme'
import Track from '../src/whirligig'

test('gutter prop', () => {
  const gutterTrack = (gutterVal, visibleSlides) =>
    mount(
      <Track gutter={gutterVal} visibleSlides={visibleSlides}>
        {() => [1, 2]}
      </Track>
    )

  gutterTrack('1em')
    .find('Slide')
    .forEach((Slide, i) => {
      if (i === 0) {
        expect(Slide.prop('gutter')).toBe('')
      } else {
        expect(Slide.prop('gutter')).toBe('1em')
      }
      expect(Slide.prop('basis')).toBe('auto')
    })

  gutterTrack('1em', 2)
    .find('Slide')
    .forEach((Slide) => {
      expect(Slide.prop('basis').startsWith('calc')).toBeTruthy()
      expect(Slide.prop('basis').match('1em')).toBeTruthy()
    })

  let errorLog = []
  
  console.error = (...msgs) => {
    errorLog = [...errorLog, ...msgs]
  }

  gutterTrack(1)
  
})
