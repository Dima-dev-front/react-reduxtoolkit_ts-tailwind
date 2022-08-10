import {sum} from './sum'

describe('plus',function (){
  test('positive',()=>{
    expect(sum(5,5)).toBe(10)
  })

  test('negative',()=>{
    expect(sum(15,5)).toBe(20)
  })
})

