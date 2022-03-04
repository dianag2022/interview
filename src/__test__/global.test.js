const sum = require('../index');
test('Tasks 1 : 1 scenario', ()=>{
    console.log = jest.fn();
    sum(result => { console.log('-> ', result) });
    expect(console.log.mock.calls[0][0] + console.log.mock.calls[0][1]).toBe('-> 0');
})

test('Tasks 1 : 2 scenario', ()=>{
    console.log = jest.fn();
    sum(1)(result => { console.log('-> ', result) });
    expect(console.log.mock.calls[0][0] + console.log.mock.calls[0][1]).toBe('-> 1');
})

test('Tasks 1 : 3 scenario', ()=>{
    console.log = jest.fn();
    sum(1)(2)(result => { console.log('-> ', result) });
    expect(console.log.mock.calls[0][0] + console.log.mock.calls[0][1]).toBe('-> 3');
})

test('Tasks 1 : 4 scenario', ()=>{
    console.log = jest.fn();
    sum(1)(2)(4)(result => { console.log('-> ', result) });
    expect(console.log.mock.calls[0][0] + console.log.mock.calls[0][1]).toBe('-> 7');
})

test('Tasks 2 : 1 scenario', ()=>{
    console.log = jest.fn();
    sum(1)(2)(3)(4)(5)(6)(result => { console.log('-> ', result) });
    expect(console.log.mock.calls[0][0] + console.log.mock.calls[0][1]).toBe('-> 21');
})