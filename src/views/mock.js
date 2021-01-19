import Mock from 'mockjs'
Mock.mock('/login',(options)=>{
  console.log(options.body);
  return options.body
})
Mock.mock('register',(options)=>{
  console.log(options.body);
  return options.body
})
