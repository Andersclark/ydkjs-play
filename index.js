import expect from 'expect';

try {
    const x = 12;
    const y = () => 12
    expect(x).toBe(y)





} catch (error){
    console.log(error)
}