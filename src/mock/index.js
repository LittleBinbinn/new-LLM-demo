import Mock from 'mockjs'


const mock = [

  {
    url: '/mock/api/user',
    method: 'get',
    response: config => {
        const id = config.url.split('/').pop();
      let info
      // 根据动态参数返回不同的模拟数据
      if (id == '1') {
        info = {name: 'Alice' };
      } else if (id == '2') {
        info = {name: 'Bob' };
      } else {
        info = {name: 'Unknown' };
      }
      return {
        code: 200,
        data: info
      }
    }
  }
]


export default mock